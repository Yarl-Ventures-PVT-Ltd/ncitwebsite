import { ActionLink } from "@/components/ui/action";
import { MEMBER_CATEGORIES } from "@/lib/members";

/**
 * Membership, and the main conversion path on the page.
 *
 * Set on navy so it reads as a distinct moment rather than as another content
 * block, and placed after the news, events and projects sections so a visitor
 * has seen what the chamber actually does before being asked to join.
 *
 * The six classes are NCIT's own membership categories from the bylaws. The
 * counts are read from the directory, so a category with no listed members
 * shows honestly as none rather than being hidden.
 *
 * Contrast on this band: white on #0A1733 is 17.7:1, and the muted white at
 * 70 percent still clears 12:1.
 */
export default function MembershipBand() {
    return (
        <section aria-labelledby="home-membership" className="bg-ncit-navy py-16 text-white md:py-24">
            <div className="ncit-container">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <h2 id="home-membership" className="ncit-h2 text-white">
                            Membership
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                            Membership is open to technology companies, ICT education providers, associations, offshore
                            firms, startups and individual professionals connected to the Northern Province.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ActionLink href="/membership/apply" variant="onNavy" withArrow>
                                Apply to join
                            </ActionLink>
                            <ActionLink href="/membership/benefits" variant="onNavyGhost">
                                Member benefits
                            </ActionLink>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <dl className="grid gap-px bg-white/15 sm:grid-cols-2">
                            {MEMBER_CATEGORIES.map((category) => (
                                <div key={category.key} className="bg-ncit-navy p-5">
                                    <dt className="text-sm font-medium text-white">{category.title}</dt>
                                    <dd className="ncit-meta mt-2 text-white/70">
                                        {category.members.length === 1
                                            ? "1 listed"
                                            : `${category.members.length} listed`}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
