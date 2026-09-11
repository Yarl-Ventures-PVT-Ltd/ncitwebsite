import { MEMBER_COUNT, MEMBER_CATEGORIES } from "@/lib/members";
import { ARTICLE_COUNT, archiveYears } from "@/lib/content";
import { SITE } from "@/lib/seo";

/**
 * The chamber's record, at a glance.
 *
 * This used to read "150+ Active Members" and "40+ Ecosystem Events". Neither
 * number appears anywhere in NCIT's own material. They were invented, and a
 * chamber that publishes a membership figure it cannot support is one question
 * away from an awkward conversation with the member who asks to see the list.
 *
 * Every figure below is now counted from the data the site actually ships, at
 * build time, so none of them can drift from what a visitor can go and verify
 * on the members and insights pages. If a member is added to members.ts the
 * count here moves on its own.
 *
 * These are deliberately set at body scale rather than as large counters. The
 * numbers are small and honest, and blowing them up to 5xl would be asking
 * them to carry weight they do not have.
 */
export default function CredibilityStrip() {
    const years = archiveYears();

    const facts = [
        {
            value: SITE.founded,
            label: "Established",
            note: "Inaugurated in Jaffna",
        },
        {
            value: "5",
            label: "Districts represented",
            note: "Jaffna, Kilinochchi, Mannar, Mullaitivu, Vavuniya",
        },
        {
            value: String(MEMBER_COUNT),
            label: "Member companies listed",
            note: `Across ${MEMBER_CATEGORIES.length} membership categories`,
        },
        {
            value: String(ARTICLE_COUNT),
            label: "Published updates",
            note: `From ${years.first} to ${years.last}`,
        },
    ];

    return (
        <section aria-label="NCIT at a glance" className="border-b border-ncit-line bg-ncit-surface">
            <div className="ncit-container">
                <dl className="grid grid-cols-1 divide-y divide-ncit-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
                    {facts.map((fact) => (
                        <div
                            key={fact.label}
                            className="py-6 sm:border-b sm:border-ncit-line sm:py-8 lg:border-b-0 lg:border-l lg:border-ncit-line lg:px-6 lg:first:border-l-0 lg:first:pl-0"
                        >
                            <dt className="ncit-meta text-ncit-ink-3">{fact.label}</dt>
                            <dd className="mt-2 font-mono text-2xl font-medium tracking-tight text-ncit-ink">
                                {fact.value}
                            </dd>
                            <dd className="mt-1 text-sm leading-relaxed text-ncit-ink-3">{fact.note}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
