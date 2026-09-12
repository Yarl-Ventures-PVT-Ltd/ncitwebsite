import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Category and status chip.
 *
 * The documented exception to the radius scale: everything on the site is
 * 2px to 14px, chips are full pill. They are the only pill on the page, which
 * is what makes a label readable at a glance in a dense list.
 *
 * Chips were distinguished by weight alone until now, to hold the one-accent
 * rule. They carry hue on the understanding that one rule governs the palette:
 *
 *     Green means Completed, and nothing else.
 *
 * That is why the category hues deliberately exclude emerald. A reader who
 * learns green means finished should never meet a green chip that means "this
 * is a seminar". Status is the only family whose colour carries meaning; the
 * rest is wayfinding, so it is muted and drawn from a set that cannot be
 * mistaken for a state.
 */
const TONES = {
    neutral: "border-ncit-line bg-ncit-surface text-ncit-ink-2",
    accent: "border-transparent bg-ncit-blue-tint text-ncit-blue-hover",
    onDark: "border-white/20 bg-white/10 text-white",

    // Status. Meaning-carrying, and the only place green appears.
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
    progress: "border-blue-200 bg-blue-50 text-blue-800",
    pending: "border-amber-200 bg-amber-50 text-amber-800",

    // Categories. Wayfinding only, emerald deliberately absent.
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-800",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
    teal: "border-teal-200 bg-teal-50 text-teal-800",
    orange: "border-orange-200 bg-orange-50 text-orange-800",
    rose: "border-rose-200 bg-rose-50 text-rose-800",
    violet: "border-violet-200 bg-violet-50 text-violet-800",
} as const;

export type ChipTone = keyof typeof TONES;

/**
 * Label to tone, in one place, so a chip looks the same wherever it appears.
 * A label with no entry falls back to neutral, which keeps a new event kind or
 * article category from breaking a page before anyone has picked a colour.
 */
const TONE_BY_LABEL: Record<string, ChipTone> = {
    Completed: "success",
    Ongoing: "progress",
    "In progress": "progress",
    Planned: "pending",

    Summit: "indigo",
    Forum: "cyan",
    Seminar: "teal",
    Workshop: "orange",
    Exhibition: "rose",
    "Startup Weekend": "violet",
    "Tech Talk": "neutral",

    News: "progress",
    Announcements: "pending",
    Policy: "indigo",
    "Member Stories": "rose",
    Ecosystem: "teal",
    Press: "orange",
};

/**
 * Matched case insensitively on purpose. The project data carries both
 * "In progress" and "In Progress", and on an exact match one of them went grey
 * while the other went blue, for the same state, on the same screen.
 */
const TONE_BY_LOWER_LABEL: Record<string, ChipTone> = Object.fromEntries(
    Object.entries(TONE_BY_LABEL).map(([label, tone]) => [label.toLowerCase(), tone]),
);

export function chipTone(label: unknown, fallback: ChipTone = "neutral"): ChipTone {
    if (typeof label !== "string") {
        return fallback;
    }
    return TONE_BY_LOWER_LABEL[label.trim().toLowerCase()] ?? fallback;
}

export function Chip({
    children,
    href,
    tone,
    className,
}: {
    children: React.ReactNode;
    href?: string;
    /** Omit it and the chip colours itself from its own text. */
    tone?: ChipTone;
    className?: string;
}) {
    const resolved = tone ?? chipTone(children);

    const base = cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em]",
        TONES[resolved],
        href && "transition-opacity hover:opacity-80",
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
