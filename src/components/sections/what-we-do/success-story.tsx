import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/ui/action";
import { Chip } from "@/components/ui/chip";

/**
 * Market access in practice.
 *
 * This section used to carry a case study under a "MEMBER SUCCESS" badge,
 * headed "From Local Startup to International Exporter", about a company
 * called NorthernTech Solutions that won a multi-year contract through a trade
 * mission to Singapore in 2024 and grew from five engineers to twenty five.
 * The body text did concede in brackets that the company was a fictitious
 * example, but the badge, the heading and the layout all said case study, and
 * that is what a reader skimming the page took away. Beside it sat an empty
 * grey box captioned "Success Story Image".
 *
 * A chamber cannot demonstrate market access with an invented exporter. What
 * follows is what NCIT actually did: it put Northern IT small and medium
 * businesses in front of buyers at national exhibitions, and it published a
 * record of doing so.
 */
const EVIDENCE = [
    {
        slug: "northern-it-sme-business-to-business-expo-2017-organized-in-grant-scale-for-smes-in-northern-province",
        title: "Northern IT SME Business to Business Expo",
        year: "2017",
        note: "A business to business exhibition organised for small and medium technology businesses across the Northern Province.",
    },
    {
        slug: "applications-for-infotel2017-exhibition-from-north-region-it-smes",
        title: "INFOTEL, national exhibition",
        year: "2017",
        note: "The chamber called for Northern IT small and medium businesses to exhibit at the national INFOTEL exhibition in Colombo.",
    },
    {
        slug: "itsmeexhibition",
        title: "IT SME Business to Business exhibition",
        year: "2017",
        note: "Buyer and supplier introductions for Northern technology firms.",
    },
];

export default function SuccessStory() {
    return (
        <section aria-labelledby="market-access-record" className="border-t border-ncit-line bg-ncit-paper py-16 md:py-24">
            <div className="ncit-container">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <h2 id="market-access-record" className="ncit-h2 ncit-tick">
                            Market access in practice
                        </h2>
                        <p className="ncit-lede mt-4">
                            The chamber&rsquo;s route to market for members has been the exhibition floor: getting
                            Northern firms in front of buyers at national events rather than leaving them to find their
                            own way there.
                        </p>

                        <figure className="mt-8">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ncit-surface-2">
                                <Image
                                    src="/wp-content/uploads/2017/06/ncit-northern-sme-business-business-expo-2017-organized-2017-01.jpg"
                                    alt="Exhibitors and visitors at the Northern IT SME Business to Business Expo organised by NCIT in 2017"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 440px"
                                    className="object-cover"
                                />
                            </div>
                            <figcaption className="ncit-meta mt-3 text-ncit-ink-3">
                                Northern IT SME B2B Expo, 2017
                            </figcaption>
                        </figure>
                    </div>

                    <div className="lg:col-span-7">
                        <ul className="border-t border-ncit-line">
                            {EVIDENCE.map((item) => (
                                <li key={item.slug} className="group relative border-b border-ncit-line py-6">
                                    <div className="mb-3">
                                        <Chip>{item.year}</Chip>
                                    </div>
                                    <h3 className="text-base font-semibold text-ncit-ink">
                                        <Link
                                            href={`/insights/${item.slug}`}
                                            className="after:absolute after:inset-0 after:content-[''] group-hover:text-ncit-blue"
                                        >
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">{item.note}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ActionLink href="/membership/apply" variant="primary" withArrow>
                                Become a member
                            </ActionLink>
                            <ActionLink href="/members" variant="secondary">
                                Member directory
                            </ActionLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
