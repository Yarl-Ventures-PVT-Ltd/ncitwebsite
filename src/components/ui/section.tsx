import { cn } from "@/lib/utils";

/**
 * Page section shell.
 *
 * Every section on the site goes through this, which is what keeps the left
 * text edge identical from the header to the footer and stops the vertical
 * rhythm drifting section by section. The old pages each set their own
 * container and padding, so no two agreed.
 *
 * `tone` is the only visual choice a section gets. There is no per-section
 * accent colour, by design: the page has exactly one accent.
 */
export function Section({
    children,
    className,
    tone = "paper",
    id,
    as: Tag = "section",
    labelledBy,
}: {
    children: React.ReactNode;
    className?: string;
    tone?: "paper" | "surface" | "navy";
    id?: string;
    as?: "section" | "div" | "article" | "aside";
    labelledBy?: string;
}) {
    const tones = {
        paper: "bg-ncit-paper text-ncit-ink",
        surface: "bg-ncit-surface text-ncit-ink",
        navy: "bg-ncit-navy text-white",
    };

    return (
        <Tag id={id} aria-labelledby={labelledBy} className={cn("py-16 md:py-24", tones[tone], className)}>
            <div className="ncit-container">{children}</div>
        </Tag>
    );
}

/**
 * Section heading.
 *
 * The accent tick replaces the uppercase eyebrow label that the previous
 * design put above every single heading, which made nine different sections
 * read with the same templated rhythm. `eyebrow` is still available, but it is
 * rationed: at most one per three sections on a page.
 */
export function SectionHeading({
    title,
    lede,
    eyebrow,
    id,
    action,
    align = "left",
    className,
}: {
    title: string;
    lede?: string;
    eyebrow?: string;
    id?: string;
    action?: React.ReactNode;
    align?: "left" | "center";
    className?: string;
}) {
    const centered = align === "center";

    return (
        <div
            className={cn(
                "mb-10 md:mb-14",
                centered ? "text-center" : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                className,
            )}
        >
            <div className={cn(centered ? "mx-auto max-w-2xl" : "max-w-2xl")}>
                {eyebrow ? <p className="ncit-meta mb-4 text-ncit-ink-3">{eyebrow}</p> : null}
                <h2 id={id} className={cn("ncit-h2", !eyebrow && !centered && "ncit-tick")}>
                    {title}
                </h2>
                {lede ? <p className="ncit-lede mt-4">{lede}</p> : null}
            </div>
            {action ? <div className={cn("shrink-0", centered && "mt-6")}>{action}</div> : null}
        </div>
    );
}
