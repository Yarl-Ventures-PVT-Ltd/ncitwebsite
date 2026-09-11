import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The site's call to action.
 *
 * It renders a link, not a button, because every one of these navigates. That
 * is the correct element for the job and it gives keyboard and screen reader
 * users the behaviour they expect, which a styled <button> does not.
 *
 * Height is 44px so the target clears the minimum on a phone. The shadcn
 * button sizes top out at 36px, which is why these do not go through it.
 *
 * Contrast, measured, on the surfaces each variant is allowed on:
 *   primary    white on #2448CC  7.3:1
 *   secondary  #101828 on white  15.9:1, with a #CBD3E0 border to give the
 *              control an edge rather than floating on the page
 *   onNavy     #101828 on white  15.9:1
 */
const variants = {
    primary: "bg-ncit-blue text-white hover:bg-ncit-blue-hover border border-transparent",
    secondary: "bg-ncit-paper text-ncit-ink border border-ncit-line-strong hover:border-ncit-ink hover:bg-ncit-surface",
    onNavy: "bg-ncit-paper text-ncit-ink border border-transparent hover:bg-ncit-surface-2",
    onNavyGhost: "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/10",
    quiet: "bg-transparent text-ncit-blue border border-transparent hover:bg-ncit-blue-tint px-0 hover:px-3",
};

export function ActionLink({
    href,
    children,
    variant = "primary",
    withArrow = false,
    className,
    ...rest
}: {
    href: string;
    children: React.ReactNode;
    variant?: keyof typeof variants;
    withArrow?: boolean;
    className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors",
                variants[variant],
                className,
            )}
            {...rest}
        >
            {children}
            {withArrow ? (
                <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                />
            ) : null}
        </Link>
    );
}

/**
 * The inline "see everything" link that sits beside a section heading. It is
 * not a button and should never be styled as one, so a section never ends up
 * with two things competing to look like the primary action.
 */
export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group inline-flex min-h-[24px] items-center gap-1.5 py-0.5 text-sm font-medium text-ncit-blue underline-offset-4 hover:underline"
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
    );
}
