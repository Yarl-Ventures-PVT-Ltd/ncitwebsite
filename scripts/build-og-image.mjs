import sharp from "sharp";
import fs from "fs";

/**
 * Builds the default social share card.
 *
 * Every one of the 22 static pages was rendering with no og:image, so sharing
 * the home page or the contact page in WhatsApp produced a blank grey card.
 * WhatsApp is how most of this audience passes a link around, so that is the
 * first impression the chamber makes.
 *
 * Articles keep their own photograph; this is the fallback for everything else.
 * 1200x630 is the size Facebook, LinkedIn and WhatsApp all crop from.
 */
const W = 1200;
const H = 630;

const INK = "#001A66";
const BLUE = "#0033CC";
const PURPLE = "#7C3AED";

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#040D17"/>
      <stop offset="55%" stop-color="${INK}"/>
      <stop offset="100%" stop-color="${BLUE}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.55">
      <stop offset="0%" stop-color="${PURPLE}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${PURPLE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="${BLUE}"/>
</svg>`);

const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <style>
    .t { font-family: Helvetica, Arial, sans-serif; font-weight: 700; fill: #ffffff; }
    .s { font-family: Helvetica, Arial, sans-serif; font-weight: 400; fill: #ffffff; opacity: 0.72; }
  </style>
  <text x="80" y="410" class="t" font-size="46">Northern Chamber of</text>
  <text x="80" y="466" class="t" font-size="46">Information Technology</text>
  <text x="80" y="524" class="s" font-size="27">Jaffna, Northern Province, Sri Lanka</text>
</svg>`);

const logo = await sharp("public/logo/ncit-logo-white.png").resize({ width: 380 }).toBuffer();

await sharp(background)
  .composite([
    { input: logo, top: 96, left: 80 },
    { input: text, top: 0, left: 0 },
  ])
  .png({ quality: 90 })
  .toFile("src/app/opengraph-image.png");

// Twitter reads the same card. Next serves this file for both once it is named
// by the convention, so one file covers every route that does not set its own.
fs.copyFileSync("src/app/opengraph-image.png", "src/app/twitter-image.png");

const { size } = fs.statSync("src/app/opengraph-image.png");
const meta = await sharp("src/app/opengraph-image.png").metadata();
console.log(`built ${meta.width}x${meta.height}, ${Math.round(size / 1024)}KB`);
