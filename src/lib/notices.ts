import { ALL_ARTICLES, type InsightArticle } from "@/lib/content";

/**
 * The notice board and the press record.
 *
 * Both are drawn from the article archive, and the split between them is
 * deliberate rather than a category filter, because the stored categories do
 * not line up with how a reader uses these two pages.
 *
 *   Notice board  things a member or supplier may need to act on: calls for
 *                 bids, vacancies, calls for applications, selection results.
 *   Press         the chamber speaking officially: AGM outcomes, board
 *                 decisions, partnership announcements.
 *
 * The two lists do not overlap, which is checked below at build time. Without
 * that check the "selected VT institutions" notice would have sat on both,
 * since it is filed under Policy but reads as a selection result.
 *
 * Slugs are listed explicitly rather than matched on a category or a keyword.
 * A keyword rule over titles put administrative notices onto the events page
 * and would do the same here.
 */
const NOTICE_SLUGS: string[] = [
    "call-for-tender25052018",
    "vacancy-for-administrative-officer",
    "selected-vt-institutions-for-the-employment-based-skill-training-programe-2018",
    "application-called-for-employment-based-skill-training-programme-2018",
    "applications-for-infotel2017-exhibition-from-north-region-it-smes",
];

const PRESS_SLUGS: string[] = [
    "a-new-chapter-begins-for-the-northern-ict-industry",
    "slasscom-presents-sri-lankas-largest-it-bpm-week-2021-ncit-on-board-as-event-partner",
    "ncit-agm-held-and-board-of-directors-elected-for-2018-2019",
    "september-board-meeting-key-decisions",
    "july-2016-board-meeting-key-decisions",
];

/**
 * Resolves a slug list to articles, newest first. A slug with no article is
 * dropped and logged rather than rendering a link to a page that is not there.
 */
function resolve(slugs: string[], label: string): InsightArticle[] {
    const resolved: InsightArticle[] = [];

    for (const slug of slugs) {
        const article = ALL_ARTICLES.find((candidate) => candidate.slug === slug);

        if (!article) {
            console.warn(`[${label}] no article for slug "${slug}", dropping it from the list`);
            continue;
        }

        resolved.push(article);
    }

    return resolved.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const overlap = NOTICE_SLUGS.filter((slug) => PRESS_SLUGS.includes(slug));

if (overlap.length > 0) {
    console.warn(`[notices] these slugs are on both the notice board and the press page: ${overlap.join(", ")}`);
}

export function noticeBoardItems(): InsightArticle[] {
    return resolve(NOTICE_SLUGS, "notice-board");
}

export function pressItems(): InsightArticle[] {
    return resolve(PRESS_SLUGS, "press");
}
