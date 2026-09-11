import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import { MoreLink } from "@/components/ui/action";
import { DOCUMENT_GROUPS } from "@/lib/resources";

/**
 * Publications and photographs from the chamber's early years.
 *
 * What was here before was invented. The publications list named three PDFs
 * that exist nowhere in the archive, an "NCIT Annual Tech Report" for 2019,
 * "Startup Incubation Guidelines" for 2018 and an "Inaugural Chamber
 * Newsletter" for 2017, each dressed as a download with a file type and a
 * download icon, and none of them carried a link. The gallery beside it
 * rendered four empty grey boxes from [1, 2, 3, 4] under a heading promising
 * moments from the founding years.
 *
 * Both now draw on what the chamber actually holds: the publications and
 * speeches carried over from the previous site, and photographs from the
 * February 2016 inauguration and the first Startup Weekend.
 */
const FOUNDING_PHOTOGRAPHS = [
    {
        src: "/wp-content/uploads/2016/02/ncit-inauguration-meeting-held-22-feb-2016-2016-01.jpg",
        alt: "The NCIT inauguration meeting held on 22 February 2016 in Jaffna",
    },
    {
        src: "/wp-content/uploads/2016/02/ncit-inauguration-meeting-held-22-feb-2016-2016-02.jpg",
        alt: "Attendees at the NCIT inauguration meeting, February 2016",
    },
    {
        src: "/wp-content/uploads/2016/02/ncit-inauguration-meeting-held-22-feb-2016-2016-03.jpg",
        alt: "Members of the newly formed chamber at the February 2016 inauguration",
    },
    {
        src: "/wp-content/uploads/2016/06/ncit-startup-weekend-jaffna-2016-01.png",
        alt: "Participants at the first Startup Weekend Jaffna, June 2016",
    },
];

export default function HistoricGallery() {
    // Publications and recorded speeches are the two groups that belong on a
    // history page. Forms and proposal templates do not.
    const archiveDocuments = DOCUMENT_GROUPS.filter((group) =>
        ["publications", "speeches"].includes(group.slug),
    ).flatMap((group) => group.items);

    return (
        <section aria-labelledby="history-archive" className="border-t border-ncit-line bg-ncit-paper py-16 md:py-24">
            <div className="ncit-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 id="history-archive" className="ncit-h2">
                            Publications and speeches
                        </h2>
                        <p className="ncit-lede mt-4">
                            Newsletters, brochures and conference keynotes kept from the chamber&rsquo;s archive.
                        </p>

                        <ul className="mt-8 border-t border-ncit-line">
                            {archiveDocuments.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                                    >
                                        <Download
                                            className="h-4 w-4 shrink-0 text-ncit-ink-3 group-hover:text-ncit-blue"
                                            aria-hidden="true"
                                        />
                                        <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                            {item.name}
                                            <span className="sr-only">
                                                , {item.kind}
                                                {item.size ? `, ${item.size}` : ""}
                                            </span>
                                        </span>
                                        <span className="ncit-meta shrink-0 text-ncit-ink-3" aria-hidden="true">
                                            {item.note}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <MoreLink href="/resources">All documents</MoreLink>
                        </div>
                    </div>

                    <div>
                        <h2 className="ncit-h2">From the founding years</h2>
                        <p className="ncit-lede mt-4">
                            The inauguration in February 2016, and the first Startup Weekend held in Jaffna that June.
                        </p>

                        <ul className="mt-8 grid grid-cols-2 gap-4">
                            {FOUNDING_PHOTOGRAPHS.map((photo) => (
                                <li key={photo.src}>
                                    <Link
                                        href="/gallery"
                                        className="group block overflow-hidden rounded-lg border border-ncit-line"
                                    >
                                        <span className="relative block aspect-[4/3] bg-ncit-surface-2">
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                sizes="(max-width: 1024px) 45vw, 260px"
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                            />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <MoreLink href="/gallery">Full photo gallery</MoreLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
