// Builds every logo asset the site ships, from the chamber's supplied artwork.
//
// Source: two SVGs from NCIT, one in brand blue for light surfaces and one in
// light grey for dark ones. Both are a bitmap wrapped in an SVG rather than
// true vector art, roughly 690KB and 490KB, so shipping them as-is would send
// half a megabyte to render a header logo. They are rasterised once here at a
// size the site actually uses.
//
// Run: node scripts/build-logo.mjs
import sharp from "sharp";
import fs from "fs";
import path from "path";

const SOURCE_DIR = process.env.NCIT_LOGO_SOURCE || "/Users/tisankan/Downloads/Untitled design(1)";
const BLUE_SVG = path.join(SOURCE_DIR, "1.svg");
const LIGHT_SVG = path.join(SOURCE_DIR, "2.svg");
const OUT_TMP = fs.mkdtempSync("/tmp/ncit-logo-");

// One master per colourway, trimmed of its transparent margin so the artwork
// sits flush and every derived size lines up.
const buildMaster = async (source) => {
    return sharp(source, { density: 300 }).trim().png().toBuffer();
};

// The wordmark is two and a half times wider than it is tall, so squashing it
// into a square icon would be unreadable. The dot grid on the left is the
// chamber's mark and is square, so the icons crop to that.
//
// Finding it: the tagline runs the full width underneath, so a horizontal cut
// alone still catches the left end of it. The mark is the block above the first
// empty row and left of the gap before the N. Candidate cuts are scored by how
// close to square they come out, which is self checking: if a re-export moves
// the artwork, a bad cut shows up as a ratio far from 1 rather than silently
// producing a squashed icon.
const findMark = async (master) => {
    const { data, info } = await sharp(master).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

    const columnHasInk = new Array(info.width).fill(false);
    const rowHasInk = new Array(info.height).fill(false);
    for (let y = 0; y < info.height; y++) {
        for (let x = 0; x < info.width; x++) {
            if (data[(y * info.width + x) * info.channels + 3] > 40) {
                columnHasInk[x] = true;
                rowHasInk[y] = true;
            }
        }
    }

    // Only gaps that fall between ink count. The master is trimmed, but its
    // outermost row and column are anti-aliased and sit under the alpha
    // threshold, so without this the very first "gap" is the edge itself and
    // every measurement comes out zero.
    const runsOfEmpty = (flags) => {
        const runs = [];
        let seenInk = false;
        let i = 0;
        while (i < flags.length) {
            if (flags[i]) {
                seenInk = true;
                i++;
                continue;
            }
            const start = i;
            while (i < flags.length && !flags[i]) i++;
            if (seenInk && i < flags.length) {
                runs.push(start);
            }
        }
        return runs;
    };

    // The first empty row band separates the NCIT block from the tagline.
    const rowGaps = runsOfEmpty(rowHasInk);
    const markHeight = rowGaps.length > 0 ? rowGaps[0] : info.height;

    // Try each vertical gap and keep the one that yields the squarest block.
    let best = null;
    for (const cut of runsOfEmpty(columnHasInk)) {
        if (cut < info.width * 0.02) continue;
        const ratio = cut / markHeight;
        const offBy = Math.abs(ratio - 1);
        if (best === null || offBy < best.offBy) {
            best = { width: cut, height: markHeight, ratio, offBy };
        }
    }

    if (best === null || best.offBy > 0.25) {
        throw new Error(
            `Could not find a square mark in the artwork. Closest was ${best ? best.ratio.toFixed(3) : "none"}. Check the source files.`
        );
    }
    return best;
};

// The supplied artwork is a bitmap wrapped in an SVG, and it carries the
// artefacts of one: 13 percent of its ink sat at almost zero alpha, a haze
// around every shape, and the blue was smeared across nearly two thousand
// near-identical values instead of one flat colour. Rendered small that reads
// washed out, which is exactly what it looked like in the header.
//
// Both colourways are therefore rebuilt from the artwork's own alpha channel:
// the shape is kept exactly as drawn, the ink becomes one flat colour, and the
// alpha is put through a contrast ramp that clears the invisible fringe and
// solidifies anything already nearly opaque. The middle of the ramp is left
// alone so edges stay anti-aliased rather than turning jagged.
const FRINGE_FLOOR = 40; // below this the pixel was never visible, drop it
const SOLID_CEILING = 215; // above this it was meant to be solid ink

// Applied at the FINAL size, never to the master. Downscaling is itself what
// creates partial alpha: ramping the 7650px master and then resizing to 800
// simply regenerates the fringe on the way down, which is what happened on the
// first attempt and left the count unchanged.
const flattenAtSize = async (master, ink, width) => {
    const resized = await sharp(master).resize({ width }).ensureAlpha().png().toBuffer();
    const { width: w, height: h } = await sharp(resized).metadata();

    // Walked by hand rather than with sharp's linear(), which operates on the
    // colour channels and leaves alpha untouched.
    const alpha = await sharp(resized).extractChannel("alpha").raw().toBuffer();
    const span = SOLID_CEILING - FRINGE_FLOOR;
    for (let i = 0; i < alpha.length; i++) {
        const value = alpha[i];
        if (value <= FRINGE_FLOOR) {
            alpha[i] = 0;
        } else if (value >= SOLID_CEILING) {
            alpha[i] = 255;
        } else {
            alpha[i] = Math.round(((value - FRINGE_FLOOR) * 255) / span);
        }
    }

    return sharp({ create: { width: w, height: h, channels: 3, background: ink } })
        .joinChannel(alpha, { raw: { width: w, height: h, channels: 1 } })
        .png({ compressionLevel: 9 })
        .toBuffer();
};

// The blue the artwork itself uses, taken from its most common opaque pixel.
const BRAND_INK = { r: 36, g: 72, b: 204 };
const WHITE_INK = { r: 255, g: 255, b: 255 };

const blueMaster = await buildMaster(BLUE_SVG);
const lightMaster = await buildMaster(LIGHT_SVG);

const blueMeta = await sharp(blueMaster).metadata();
const ratio = blueMeta.width / blueMeta.height;
console.log(`master ${blueMeta.width}x${blueMeta.height}, ratio ${ratio.toFixed(3)}`);

// Wordmark, 800 wide. The header renders it around 200px, so this covers a
// four times device pixel ratio and still weighs little.
const WORDMARK_WIDTH = 800;
const wordmarkHeight = Math.round(WORDMARK_WIDTH / ratio);

fs.mkdirSync("public/logo", { recursive: true });
fs.writeFileSync("public/logo/ncit-logo.png", await flattenAtSize(blueMaster, BRAND_INK, WORDMARK_WIDTH));
fs.writeFileSync("public/logo/ncit-logo-white.png", await flattenAtSize(lightMaster, WHITE_INK, WORDMARK_WIDTH));
console.log(`wordmark ${WORDMARK_WIDTH}x${wordmarkHeight} written to public/logo`);

// Square icons, cropped to the dot grid and padded so the mark does not touch
// the edge of a browser tab.
const mark = await findMark(blueMaster);
console.log(`dot-grid mark: ${mark.width}x${mark.height}, ratio ${mark.ratio.toFixed(3)}`);

// The icon is the blue mark on a solid white square. A transparent ground
// would leave hollow blue rings that turn to mush at the 16px a browser tab
// actually renders, and vanish on a dark tab strip. White keeps the mark's
// own colour and stays legible on any tab background.
const markOnly = await sharp(blueMaster)
    .extract({ left: 0, top: 0, width: mark.width, height: mark.height })
    .trim()
    .toBuffer();

const ICON_BACKGROUND = { r: 255, g: 255, b: 255, alpha: 1 };

const buildIcon = async (size, file) => {
    const inner = Math.round(size * 0.62);
    const radius = Math.round(size * 0.22);
    const fitted = await sharp(markOnly)
        .resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
    const glyph = await flattenAtSize(fitted, BRAND_INK, inner);
    const roundedMask = Buffer.from(
        `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
    );
    await sharp({ create: { width: size, height: size, channels: 4, background: ICON_BACKGROUND } })
        .composite([
            { input: glyph, gravity: "center" },
            { input: roundedMask, blend: "dest-in" },
        ])
        .png({ compressionLevel: 9 })
        .toFile(file);
};

await buildIcon(512, "src/app/icon.png");
await buildIcon(180, "src/app/apple-icon.png");

// favicon.ico carries the three sizes Windows and older browsers ask for.
//
// Written by hand rather than pulling in an encoder package. An ICO is a six
// byte header, a sixteen byte directory entry per image, then the images, and
// every browser in use reads PNG data inside that container.
const buildIco = (pngs) => {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // 1 means icon
    header.writeUInt16LE(pngs.length, 4);

    const entries = [];
    let offset = 6 + pngs.length * 16;
    for (const png of pngs) {
        const entry = Buffer.alloc(16);
        entry.writeUInt8(png.size >= 256 ? 0 : png.size, 0); // 0 means 256
        entry.writeUInt8(png.size >= 256 ? 0 : png.size, 1);
        entry.writeUInt8(0, 2); // palette count, 0 for truecolour
        entry.writeUInt8(0, 3); // reserved
        entry.writeUInt16LE(1, 4); // colour planes
        entry.writeUInt16LE(32, 6); // bits per pixel
        entry.writeUInt32LE(png.data.length, 8);
        entry.writeUInt32LE(offset, 12);
        offset = offset + png.data.length;
        entries.push(entry);
    }

    return Buffer.concat([header, ...entries, ...pngs.map((png) => png.data)]);
};

const icoImages = [];
for (const size of [16, 32, 48]) {
    const file = `${OUT_TMP}/ico-${size}.png`;
    await buildIcon(size, file);
    icoImages.push({ size, data: fs.readFileSync(file) });
}
fs.writeFileSync("src/app/favicon.ico", buildIco(icoImages));
fs.rmSync(OUT_TMP, { recursive: true, force: true });
console.log("icons written: icon.png (512), apple-icon.png (180), favicon.ico (16/32/48)");

// The members portal and the transactional emails use the same artwork, so
// they are written from here too rather than downscaled from the web asset.
// Downscaling a flattened file regenerates the very fringe the flatten removed,
// so every output is produced at its own final size.
const PORTAL = process.env.NCIT_PORTAL_DIR || "../Members Portal/NCITFrontend";
const BACKEND = process.env.NCIT_BACKEND_DIR || "../Members Portal/NCITBackend";

if (fs.existsSync(PORTAL)) {
    fs.mkdirSync(`${PORTAL}/public/logo`, { recursive: true });
    fs.copyFileSync("public/logo/ncit-logo.png", `${PORTAL}/public/logo/ncit-logo.png`);
    fs.copyFileSync("public/logo/ncit-logo-white.png", `${PORTAL}/public/logo/ncit-logo-white.png`);
    fs.copyFileSync("src/app/icon.png", `${PORTAL}/public/icon.png`);
    fs.copyFileSync("src/app/apple-icon.png", `${PORTAL}/public/apple-icon.png`);
    fs.copyFileSync("src/app/favicon.ico", `${PORTAL}/public/favicon.ico`);
    console.log("portal assets written");
}

if (fs.existsSync(BACKEND)) {
    // 440 wide, the width the email layout renders it at on a two times display.
    const EMAIL_WIDTH = 440;
    fs.writeFileSync(
        `${BACKEND}/src/assets/ncit-logo.png`,
        await flattenAtSize(lightMaster, WHITE_INK, EMAIL_WIDTH)
    );
    console.log(`email logo written at ${EMAIL_WIDTH} wide`);
}

for (const file of ["public/logo/ncit-logo.png", "public/logo/ncit-logo-white.png", "src/app/icon.png"]) {
    const { size } = fs.statSync(file);
    const meta = await sharp(file).metadata();
    console.log(`  ${file}  ${meta.width}x${meta.height}  ${Math.round(size / 1024)}KB`);
}
