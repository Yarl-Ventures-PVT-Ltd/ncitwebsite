/**
 * Turns bare telephone numbers and email addresses inside migrated article
 * HTML into tel: and mailto: links.
 *
 * The archive was published through WordPress over eight years and prints
 * contacts as plain text, so a reader on a phone has to copy a number by hand
 * to use it. This runs at render time rather than rewriting the 59 stored
 * articles: the archive stays byte-identical to what was published, and
 * anything added later is covered without a migration.
 *
 * Only text outside an existing anchor is touched, so a number that is already
 * a link is never wrapped twice, and nothing inside a tag or an attribute is
 * rewritten.
 */

/**
 * Email first in the alternation. A local part can contain digits, and without
 * that ordering a run of digits inside an address would be pulled out as a
 * telephone number and the address split in half.
 *
 * Sri Lankan numbers are nine national digits behind either +94 or a single
 * leading zero, written with spaces or hyphens in any grouping. The guards at
 * both ends stop a longer digit run, such as an identifier, matching its first
 * ten digits.
 */
const CONTACT =
  /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+|(?<![\d+])(?:\+94|0)(?:[\s-]?\d){9}(?!\d)/g;

/** Splits on whole tags so the text between them can be handled on its own. */
const TAG = /(<[^>]+>)/;

function telephoneHref(printed: string) {
  const compact = printed.replace(/[^\d+]/g, "");
  return compact.startsWith("+") ? compact : `+94${compact.slice(1)}`;
}

function linkifyText(text: string) {
  return text.replace(CONTACT, (match) =>
    match.includes("@")
      ? `<a href="mailto:${match}">${match}</a>`
      : `<a href="tel:${telephoneHref(match)}">${match}</a>`,
  );
}

/**
 * The same treatment for copy stored as plain text rather than HTML, such as a
 * FAQ answer or an article lede. The text is escaped first, so a stray angle
 * bracket in the copy cannot become markup.
 */
export function linkifyPlainText(text: string) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return linkifyText(escaped);
}

export function linkifyContacts(html: string) {
  let depth = 0;

  return html
    .split(TAG)
    .map((segment) => {
      if (!segment.startsWith("<")) {
        return depth === 0 ? linkifyText(segment) : segment;
      }
      if (/^<a\b/i.test(segment)) depth += 1;
      else if (/^<\/a\b/i.test(segment) && depth > 0) depth -= 1;
      return segment;
    })
    .join("");
}
