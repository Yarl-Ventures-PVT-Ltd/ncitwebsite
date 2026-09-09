/**
 * Resize and re-encode the migrated photographs in public/wp-content/uploads.
 *
 *   node scripts/optimise-images.mjs
 *
 * Why this is needed even though the site uses next/image: article bodies are
 * migrated HTML injected with dangerouslySetInnerHTML, so their <img> tags are
 * raw and bypass the image optimiser entirely. Before this ran, a single
 * article (/insights/infotel-2017) shipped 6.2MB across three photographs, and
 * the article set totalled about 21MB of unoptimised payload. On a Sri Lankan
 * mobile connection that is the difference between a page that loads and one
 * that does not.
 *
 * Originals are preserved in ncit-lk-crawl/images, so this edits in place.
 * Nothing here is destructive to the archive.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = "public/wp-content/uploads";
const MAX_WIDTH = 1600;   // wider than any container the site renders
const JPEG_QUALITY = 82;  // visually indistinguishable at these sizes

const files = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jpe?g|png)$/i.test(e.name)) files.push(p);
  }
};
walk(ROOT);

let before = 0, after = 0, resized = 0, recoded = 0;

for (const file of files) {
  const startSize = fs.statSync(file).size;
  before += startSize;

  const meta = await sharp(file).metadata().catch(() => null);
  if (!meta) { after += startSize; continue; }

  const needsResize = (meta.width || 0) > MAX_WIDTH;
  // Leave small files alone: re-encoding them wastes quality for no gain.
  if (!needsResize && startSize < 150 * 1024) { after += startSize; continue; }

  const isPng = /\.png$/i.test(file);
  let pipeline = sharp(file);
  if (needsResize) { pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true }); resized++; }
  pipeline = isPng
    ? pipeline.png({ compressionLevel: 9, palette: true })
    : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const buf = await pipeline.toBuffer();
  // Only keep the new version if it is actually smaller.
  if (buf.length < startSize) { fs.writeFileSync(file, buf); recoded++; after += buf.length; }
  else after += startSize;
}

const mb = (b) => (b / 1024 / 1024).toFixed(1) + "MB";
console.log(`files:    ${files.length}`);
console.log(`resized:  ${resized} (wider than ${MAX_WIDTH}px)`);
console.log(`rewritten:${recoded}`);
console.log(`size:     ${mb(before)} -> ${mb(after)}  (saved ${mb(before - after)}, ${Math.round((1 - after / before) * 100)}%)`);
