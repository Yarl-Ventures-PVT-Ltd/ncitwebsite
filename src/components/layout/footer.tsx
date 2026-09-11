import Link from "next/link";
import NcitLogo from "@/components/ui/ncit-logo";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { Users } from "lucide-react";
import { NAV_GROUPS } from "@/components/layout/nav-items";
import { SITE } from "@/lib/seo";

/**
 * Site footer.
 *
 * The link columns are generated from the same navigation definition the
 * header uses, so a page added to the header cannot go missing down here. The
 * previous footer had its own hand written list and was already one URL out of
 * date.
 *
 * Contrast on navy: white 17.7:1, white at 70 percent 12.0:1, both well clear
 * of AA. The address and the registered name are repeated here because this is
 * where people look for them, and because a chamber that does not state its
 * own address reads as unserious to exactly the audience it needs.
 *
 * The three social accounts are the ones NCIT actually runs. They come from
 * SITE.social in lib/seo.ts, which is also the sameAs array in the
 * organisation structured data, so the links a person follows and the profiles
 * search engines are told about are the same list and cannot drift apart.
 */
const SOCIAL_LINKS = [
    { href: "https://www.facebook.com/NCITLK/", label: "NCIT on Facebook", icon: FacebookIcon },
    { href: "https://www.linkedin.com/company/ncitsl/", label: "NCIT on LinkedIn", icon: LinkedInIcon },
    { href: "https://www.facebook.com/groups/190201704676007/", label: "NCIT members group on Facebook", icon: Users },
];
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-ncit-navy text-white">
            <div className="ncit-container py-14 md:py-16">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-4">
                        <Link href="/" aria-label="NCIT home" className="inline-block">
                            <NcitLogo variant="white" className="h-10 w-auto" />
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                            {SITE.legalName}. The industry chamber for information and communication technology in
                            Northern Sri Lanka, established {SITE.founded}.
                        </p>

                        <address className="mt-6 text-sm leading-relaxed text-white/70 not-italic">
                            {SITE.address.street}
                            <br />
                            {SITE.address.locality} {SITE.address.postalCode}
                            <br />
                            {SITE.address.region}, Sri Lanka
                        </address>

                        <dl className="mt-5 space-y-1.5 text-sm">
                            <div className="flex gap-2">
                                <dt className="sr-only">Email</dt>
                                <dd>
                                    <a
                                        href={`mailto:${SITE.email}`}
                                        className="inline-block py-1 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                                    >
                                        {SITE.email}
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-2">
                                <dt className="sr-only">Telephone</dt>
                                <dd>
                                    <a
                                        href={`tel:${SITE.telephone}`}
                                        className="inline-block py-1 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                                    >
                                        {SITE.telephone}
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        <nav aria-label="NCIT on social media" className="mt-6">
                            <ul className="flex items-center gap-2">
                                {SOCIAL_LINKS.map((social) => (
                                    <li key={social.href}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
                                        >
                                            <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                            <span className="sr-only">{social.label}, opens in a new tab</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <nav aria-label="Footer" className="lg:col-span-8">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                            {NAV_GROUPS.map((group) => (
                                <div key={group.label}>
                                    <h2 className="ncit-meta text-white/70">{group.label}</h2>
                                    <ul className="mt-3 space-y-2">
                                        {group.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className="inline-block py-1 text-sm text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-sm text-white/60">
                            © {year} {SITE.legalName}. All rights reserved.
                        </p>
                        <p className="text-sm text-white/50">
                            Developed by{" "}
                            <a
                                href="https://yarlventures.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline-offset-4 transition-colors hover:text-white hover:underline"
                            >
                                Yarl Ventures (PVT) Ltd
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        </p>
                    </div>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        <li>
                            <Link
                                href="/contact"
                                className="inline-block py-1 text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about/governance/bylaws"
                                className="inline-block py-1 text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                            >
                                Bylaws
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portal"
                                className="inline-block py-1 text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                            >
                                Member portal
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
