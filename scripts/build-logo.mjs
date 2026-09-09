/**
 * Rebuild the transparent logo assets from the chamber's original artwork.
 *
 *   node scripts/build-logo.mjs
 *
 * The original is a 200x86 JPEG of flat blue ink on solid white, with no alpha
 * channel. Two things follow: it shows a white box on any dark surface, and it
 * is soft on a modern display. This script upscales it and turns the white
 * background into transparency, then writes a brand-blue and a white version.
 *
 * How the keying works: the artwork is a single flat colour on white, so the
 * greyscale value at each pixel is a clean measure of ink coverage. Inverting
 * it gives the alpha channel and preserves the anti-aliased edges. The inverted
 * value is normalised against the darkest pixel in the image, because the ink
 * is blue rather than black. Without that step full-strength ink lands near
 * 70 percent opacity and the logo renders visibly washed out.
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";

const SRC = "public/wp-content/uploads/2016/04/logo_NCIT_small.jpg";
const OUT_DIR = "public/logo";
const SCALE = 4;

const VARIANTS = [
  { name: "ncit-logo.png", rgb: [0x33, 0x5b, 0xc8] },        // brand blue, light surfaces
  { name: "ncit-logo-white.png", rgb: [0xff, 0xff, 0xff] },  // white, dark surfaces
];

if (!fs.existsSync(SRC)) {
  console.error(`Source artwork not found: ${SRC}`);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const { data, info } = await sharp(SRC)
  .resize({ width: 200 * SCALE, kernel: "lanczos3" })
  .greyscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

let darkest = 255;
for (const value of data) if (value < darkest) darkest = value;
const range = 255 - darkest;

const alpha = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i++) {
  const a = Math.round(((255 - data[i]) / range) * 255);
  alpha[i] = a > 255 ? 255 : a < 0 ? 0 : a;
}

const { width, height } = info;
for (const variant of VARIANTS) {
  const rgb = Buffer.alloc(width * height * 3);
  for (let i = 0; i < width * height; i++) {
    rgb[i * 3] = variant.rgb[0];
    rgb[i * 3 + 1] = variant.rgb[1];
    rgb[i * 3 + 2] = variant.rgb[2];
  }
  const out = path.join(OUT_DIR, variant.name);
  await sharp(rgb, { raw: { width, height, channels: 3 } })
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`  ${out}  ${width}x${height}`);
}

console.log(`Done. Ink luminance ${darkest}, alpha normalised over ${range}.`);
