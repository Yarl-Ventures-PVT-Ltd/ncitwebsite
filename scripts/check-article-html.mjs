/**
 * Validates the HTML inside every article body.
 *
 * The article bodies were migrated from WordPress by crawling the old site, so
 * they are the least trustworthy markup in the project and nothing type checks
 * them. Two real defects came out of this content:
 *
 *   flood2018 carried twelve unmatched </div> tags, left behind when the dead
 *   Google My Maps interface was stripped out of it, and the tail of a whole
 *   HTML document, </article></main></body></html>. Those four closed the
 *   page's own main element early, so the article footer rendered outside
 *   <main>, the document was structurally invalid for every visitor, and React
 *   threw a hydration error and rebuilt the article on every page load.
 *
 * Neither was visible by reading the page, which is exactly why this runs.
 *
 * Usage: node scripts/check-article-html.mjs
 * Exits non-zero on any finding, so it can gate a build.
 */
import fs from "node:fs";
import path from "node:path";

const SOURCE = path.join(process.cwd(), "src/lib/mock-data/insights.ts");

// Tags that must never appear in an article body at all. They belong to the
// page, not to the content, and a stray closer reaches outside the article.
const FORBIDDEN = ["html", "body", "main", "article", "nav", "head", "script", "style"];

// Tags whose open and close counts must match. Void elements are excluded, and
// so are tags whose closing tag is optional in HTML, such as li, td, tr and p,
// since valid markup may legitimately leave those open.
const MUST_BALANCE = ["div", "span", "table", "tbody", "thead", "ul", "ol", "a", "strong", "em", "blockquote", "figure", "h1", "h2", "h3", "h4", "h5", "h6"];

const source = fs.readFileSync(SOURCE, "utf8");
const blocks = source.split(/\n {2}\{\n/).slice(1);

let findings = 0;
let checked = 0;

for (const block of blocks) {
    const slug = block.match(/slug: "([^"]+)"/)?.[1];
    const rawContent = block.match(/content: "((?:[^"\\]|\\.)*)"/)?.[1];
    if (!slug || !rawContent) continue;

    checked += 1;
    const html = rawContent.replace(/\\n/g, "\n").replace(/\\"/g, '"');
    const problems = [];

    for (const tag of FORBIDDEN) {
        const opens = (html.match(new RegExp(`<${tag}\\b`, "gi")) || []).length;
        const closes = (html.match(new RegExp(`</${tag}>`, "gi")) || []).length;
        if (opens || closes) {
            problems.push(`contains <${tag}>, which belongs to the page, not the article (${opens} open, ${closes} close)`);
        }
    }

    for (const tag of MUST_BALANCE) {
        const opens = (html.match(new RegExp(`<${tag}\\b`, "gi")) || []).length;
        const closes = (html.match(new RegExp(`</${tag}>`, "gi")) || []).length;
        if (opens !== closes) {
            problems.push(`<${tag}> is unbalanced: ${opens} open, ${closes} close`);
        }
    }

    // A closing tag appearing before anything opened it reaches outside the
    // article even when the totals happen to match.
    for (const tag of MUST_BALANCE) {
        let depth = 0;
        let escaped = false;
        for (const m of html.matchAll(new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi"))) {
            if (m[1]) {
                depth -= 1;
                if (depth < 0) { escaped = true; break; }
            } else {
                depth += 1;
            }
        }
        if (escaped) problems.push(`<${tag}> closes before it opens, so it reaches outside the article`);
    }

    if (problems.length) {
        findings += problems.length;
        console.error(`\n${slug}`);
        for (const problem of problems) console.error(`  - ${problem}`);
    }
}

if (findings === 0) {
    console.log(`Article HTML is well formed: ${checked} articles checked, no findings.`);
    process.exit(0);
}

console.error(`\n${findings} finding(s) across ${checked} articles.`);
process.exit(1);
