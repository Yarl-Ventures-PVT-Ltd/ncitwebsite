"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import NcitLogo from "@/components/ui/ncit-logo";
import { ActionLink } from "@/components/ui/action";
import { NAV_GROUPS, NAV_SIMPLE } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

/**
 * Site header.
 *
 * The previous version opened its submenus on mouse hover only. A keyboard
 * user could tab to the top level link but had no way to reach anything
 * underneath it, which put five of the site's six sections out of reach
 * without a mouse. Every submenu here is a real button with aria-expanded,
 * opens on click or on hover, closes on Escape, and returns focus to its
 * trigger when it does.
 *
 * The bar is 72px, inside the 80px ceiling, and the desktop navigation is one
 * line at every width it is shown at. Below xl it collapses, because six
 * group labels plus the logo and the join button do not fit on one line at
 * 1024px without shrinking the text past comfortable reading.
 */
export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);

    // Any navigation closes whatever was open. Without this the submenu stayed
    // open over the new page after a click. Adjusted during render rather than
    // in an effect, so the new page never paints with the old menu still open.
    const [lastPathname, setLastPathname] = useState(pathname);
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setMobileOpen(false);
        setOpenGroup(null);
    }

    // Escape closes the open submenu and hands focus back to its trigger.
    useEffect(() => {
        if (!openGroup && !mobileOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;

            if (openGroup) {
                const trigger = navRef.current?.querySelector<HTMLButtonElement>(
                    `[data-group-trigger="${openGroup}"]`,
                );
                setOpenGroup(null);
                trigger?.focus();
                return;
            }

            setMobileOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [openGroup, mobileOpen]);

    // A click outside the navigation closes the submenu.
    useEffect(() => {
        if (!openGroup) return;

        const onPointerDown = (event: PointerEvent) => {
            if (navRef.current?.contains(event.target as Node)) return;
            setOpenGroup(null);
        };

        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [openGroup]);

    const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

    return (
        <header className="sticky top-0 z-50 w-full glass-header">
            <div className="ncit-container flex h-[72px] items-center justify-between gap-6">
                <Link href="/" className="flex shrink-0 items-center" aria-label="NCIT home">
                    <NcitLogo priority className="h-9 w-auto md:h-10" />
                </Link>

                <nav ref={navRef} aria-label="Main" className="hidden xl:flex xl:items-center xl:gap-1">
                    {NAV_GROUPS.map((group) => {
                        const open = openGroup === group.label;

                        return (
                            <div
                                key={group.label}
                                className="relative"
                                onMouseEnter={() => setOpenGroup(group.label)}
                                onMouseLeave={() => setOpenGroup(null)}
                            >
                                <button
                                    type="button"
                                    data-group-trigger={group.label}
                                    aria-expanded={open}
                                    aria-haspopup="true"
                                    onClick={() => setOpenGroup(open ? null : group.label)}
                                    className={cn(
                                        "inline-flex h-[72px] items-center gap-1 px-3 text-sm font-medium transition-colors",
                                        isCurrent(group.href) ? "text-ncit-blue" : "text-ncit-ink hover:text-ncit-blue",
                                    )}
                                >
                                    {group.label}
                                    <ChevronDown
                                        className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
                                        aria-hidden="true"
                                    />
                                </button>

                                {open ? (
                                    <div className="absolute top-full left-0 w-[320px] rounded-lg border border-ncit-line bg-ncit-paper p-2 shadow-[0_12px_32px_rgb(16_24_40_/_0.10)]">
                                        <ul>
                                            {group.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2.5 transition-colors hover:bg-ncit-surface"
                                                        aria-current={pathname === item.href ? "page" : undefined}
                                                    >
                                                        <span className="block text-sm font-medium text-ncit-ink">
                                                            {item.label}
                                                        </span>
                                                        {item.description ? (
                                                            <span className="mt-0.5 block text-xs leading-relaxed text-ncit-ink-3">
                                                                {item.description}
                                                            </span>
                                                        ) : null}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}

                    {NAV_SIMPLE.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isCurrent(item.href) ? "page" : undefined}
                            className={cn(
                                "inline-flex h-[72px] items-center px-3 text-sm font-medium transition-colors",
                                isCurrent(item.href) ? "text-ncit-blue" : "text-ncit-ink hover:text-ncit-blue",
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex shrink-0 items-center gap-2">
                    <ActionLink href="/membership/apply" variant="primary" className="hidden sm:inline-flex">
                        Become a member
                    </ActionLink>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ncit-line text-ncit-ink xl:hidden"
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                        <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
                    </button>
                </div>
            </div>

            {mobileOpen ? (
                <div
                    id="mobile-nav"
                    className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-ncit-line bg-ncit-paper xl:hidden"
                >
                    <nav aria-label="Main, mobile" className="ncit-container py-4">
                        {NAV_GROUPS.map((group) => (
                            <div key={group.label} className="border-b border-ncit-line py-3 last:border-b-0">
                                <p className="ncit-meta mb-2 text-ncit-ink-3">{group.label}</p>
                                <ul className="space-y-0.5">
                                    {group.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                aria-current={pathname === item.href ? "page" : undefined}
                                                className="block rounded-md py-2.5 text-[0.95rem] text-ncit-ink transition-colors hover:text-ncit-blue"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="mt-4 flex flex-col gap-3 border-t border-ncit-line pt-4">
                            {NAV_SIMPLE.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="py-1 text-[0.95rem] font-medium text-ncit-ink"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <ActionLink href="/membership/apply" variant="primary" className="sm:hidden">
                                Become a member
                            </ActionLink>
                        </div>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
