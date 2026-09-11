/**
 * The chamber's downloadable documents and its outward links.
 *
 * Everything here was carried over from the previous ncit.lk and every file is
 * present under public/wp-content/uploads. The sizes are real, measured from
 * those files, and they are shown because a good share of this audience is on
 * a mobile connection where a 3.7 MB newsletter is a decision, not a click.
 *
 * To refresh the sizes after replacing a file:
 *   du -h public/wp-content/uploads/<path>
 */
export interface ResourceItem {
    name: string;
    href: string;
    /** PDF, DOCX, or LINK for an external site. */
    kind: "PDF" | "DOCX" | "LINK";
    /** Publication date as NCIT dated it, or the issuing body for a link. */
    note: string;
    /** Only set for files that are hosted here. */
    size?: string;
}

export interface ResourceGroup {
    slug: string;
    title: string;
    description: string;
    items: ResourceItem[];
}

export const DOCUMENT_GROUPS: ResourceGroup[] = [
    {
        slug: "membership",
        title: "Membership documents",
        description: "Application forms and membership notices, in English and Tamil.",
        items: [
            {
                name: "NCIT membership form (English)",
                href: "/wp-content/uploads/2017/03/NCIT_Membership_Form.pdf",
                kind: "PDF",
                note: "March 2017",
                size: "168 KB",
            },
            {
                name: "NCIT membership form (Tamil)",
                href: "/wp-content/uploads/2017/03/NCIT_membership_tamil.pdf",
                kind: "PDF",
                note: "March 2017",
                size: "136 KB",
            },
            {
                name: "IT SME notice",
                href: "/wp-content/uploads/2019/02/ITSMENotice.pdf",
                kind: "PDF",
                note: "February 2019",
                size: "328 KB",
            },
        ],
    },
    {
        slug: "proposals",
        title: "Project proposal formats",
        description: "Templates issued for the ASSET ICT zone proposals.",
        items: [
            {
                name: "Project proposal format, ASSET ICT Zone 1",
                href: "/wp-content/uploads/2018/05/Format-Project-Proposal-ASSET-ICT-Zone1.docx",
                kind: "DOCX",
                note: "May 2018",
                size: "176 KB",
            },
            {
                name: "Project proposal format, ASSET ICT Zone 2",
                href: "/wp-content/uploads/2018/05/Format-Project-Proposal-ASSET-ICT-Zone2.docx",
                kind: "DOCX",
                note: "May 2018",
                size: "1.6 MB",
            },
        ],
    },
    {
        slug: "publications",
        title: "Newsletters and brochures",
        description: "Chamber publications from the archive.",
        items: [
            {
                name: "NCIT newsletter",
                href: "/wp-content/uploads/2017/01/News-letter.pdf",
                kind: "PDF",
                note: "January 2017",
                size: "3.7 MB",
            },
            {
                name: "NCIT general brochure",
                href: "/wp-content/uploads/2016/06/brocher.pdf",
                kind: "PDF",
                note: "June 2016",
                size: "216 KB",
            },
        ],
    },
    {
        slug: "speeches",
        title: "Speeches and presentations",
        description: "Keynotes delivered at chamber events.",
        items: [
            {
                name: "NExTWORK 2020, Angajan speech",
                href: "/wp-content/uploads/2020/02/Nextwork2020-angajanSpeech.pdf",
                kind: "PDF",
                note: "February 2020",
                size: "108 KB",
            },
            {
                name: "NExTWORK 2020, Thavaruban speech",
                href: "/wp-content/uploads/2020/02/NextWork2020ThavarubanSpeech.pdf",
                kind: "PDF",
                note: "February 2020",
                size: "400 KB",
            },
            {
                name: "Thavaruban speech",
                href: "/wp-content/uploads/2018/06/Thavaruban-Speach26062018.pdf",
                kind: "PDF",
                note: "June 2018",
                size: "220 KB",
            },
        ],
    },
];

/**
 * Every link here is checked to serve HTTPS before it is published. A
 * chamber pointing members at a government portal over plaintext is a small
 * thing that reads badly, and ICTA redirects from http anyway.
 *
 * Outward links, kept separate from the documents because they behave
 * differently: they leave the site, they are not dated, and they are the
 * places a member is most often trying to reach.
 */
export const USEFUL_LINK_GROUPS: ResourceGroup[] = [
    {
        slug: "government",
        title: "Government and regulators",
        description: "The national bodies a Northern technology business deals with most often.",
        items: [
            {
                name: "ICT Agency of Sri Lanka (ICTA)",
                href: "https://www.icta.lk/",
                kind: "LINK",
                note: "National ICT agency",
            },
            {
                name: "Sri Lanka Export Development Board",
                href: "https://www.edb.gov.lk/",
                kind: "LINK",
                note: "Export development",
            },
            {
                name: "Department for Registration of Companies",
                href: "https://www.drc.gov.lk/",
                kind: "LINK",
                note: "Company registration",
            },
            {
                name: "Ministry of Finance, Treasury",
                href: "https://treasury.gov.lk/",
                kind: "LINK",
                note: "Public finance",
            },
        ],
    },
];

export const DOCUMENT_COUNT = DOCUMENT_GROUPS.reduce((total, group) => total + group.items.length, 0);
export const USEFUL_LINK_COUNT = USEFUL_LINK_GROUPS.reduce((total, group) => total + group.items.length, 0);
