import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Category chip.
 *
 * The documented exception to the radius scale: everything on the site is
 * 2px to 14px, chips are full pill. They are the only pill on the page, which
 * is what makes a category readable at a glance in a dense list of notices.
 *
 * Categories are distinguished by weight rather than by hue, because a
 * six-colour category system would break the one-accent rule and would stop
 * reading as an institution.
 */
export function Chip({
    children,
    href,
    tone = "neutral",
    className,
}: {
    children: React.ReactNode;
    href?: string;
    tone?: "neutral" | "accent" | "onDark";
    className?: string;
}) {
    const tones = {
        neutral: "border-ncit-line bg-ncit-surface text-ncit-ink-2",
        accent: "border-transparent bg-ncit-blue-tint text-ncit-blue-hover",
        onDark: "border-white/20 bg-white/10 text-white",
    };

    const base = cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em]",
        tones[tone],
        href && "transition-colors hover:border-ncit-blue hover:text-ncit-blue",
        className,
    );

    if (href) {
        return (
            <Link href={href} className={base}>
                {children}
            </Link>
        );
    }

    return <span className={base}>{children}</span>;
}
