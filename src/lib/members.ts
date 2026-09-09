/**
 * The chamber's member list, in one place.
 *
 * This used to live inside the members page, with a second hand-written copy in
 * the home page marquee. The two drifted: the marquee advertised a company that
 * was not a member, under a heading that called it a trusted member, and the
 * page claimed "over 40+" members against a real list of 33. One source now
 * feeds both, and the count is derived rather than typed.
 *
 * The category names are NCIT's own membership classes from the bylaws, not
 * sectors. Only the `info` line describes what a member actually does, and it is
 * only present where the chamber recorded it. Nothing here is inferred from a
 * company name or a domain.
 */
export interface Member {
  name: string;
  /** What the member does, where the chamber recorded it. */
  info?: string;
  /** Public website, where one is known. */
  link?: string | null;
}

export interface MemberCategory {
  /** Stable key, used to pick the icon on the directory page. */
  key: "full" | "second" | "associations" | "individuals" | "offshore" | "startup";
  title: string;
  description?: string;
  members: Member[];
}

export const MEMBER_CATEGORIES: MemberCategory[] = [
  {
    key: "full",
    title: "Category I (Full Members)",
    members: [
      { name: "Speed IT net", link: "http://en.speeditnet.com/" },
      { name: "Innovay", link: "http://www.innovay.com/" },
      { name: "MCS IT Campus", info: "ICT Education", link: "http://www.mcsitcampus.com/" },
      { name: "College of ICT", info: "ICT Education", link: "http://www.cictjaffna.com/" },
      { name: "Business Network System", link: null },
      { name: "Iconic Coder", link: "http://iconiccoder.com/" },
      { name: "Kale Systems", link: "http://www.kalesystems.com/" },
      { name: "ePixcell Solutions", link: "http://epixcell.com/" },
      { name: "Sun Microcreators(Pte) Ltd", link: "https://algoinn.com/" },
      { name: "ezBooking", link: "http://www.ezbooking.io/" },
      { name: "AppsLanka", link: "http://appslanka.lk/" },
      { name: "Loncey Tech", link: "https://lonceytech.com/" },
      { name: "3axislabs", link: "https://3axislabs.com/" },
      { name: "Apptimus Tech", link: "https://apptimustech.com/" },
      { name: "UNITEC Campus", link: "https://unitec.edu.lk/" },
      { name: "EDUS", info: "EdTech", link: "https://edus.lk/" },
    ],
  },
  {
    key: "second",
    title: "Category II",
    members: [
      { name: "DMI Computer Education", info: "ICT Education", link: "http://itdmi.com/" },
      { name: "Apex of Computer Technology", link: null },
      { name: "Winsoft Technology", link: "https://www.facebook.com/winsoftlk/" },
      { name: "UMK Web Design", link: "http://umkwebdesign.com/" },
      { name: "Yazhi Innovations (private) Limited", link: "http://www.yazhii.net/" },
      { name: "Future Clicks Pvt Ltd", link: "http://www.futureclicks.lk/" },
      { name: "Evergreen Buzz", link: null },
      { name: "AKAMATHI Group", link: "http://www.akamathi.com/" },
      { name: "Infonits", link: "https://infonits.io/" },
    ],
  },
  {
    key: "associations",
    title: "Category III (Associations)",
    description: "All members of Associate members will be NCIT Ordinary Members",
    members: [
      { name: "MANFICT", info: "Mannar Federation of Information Communication Technology", link: "https://www.facebook.com/manfict/" },
      { name: "VICTA", info: "Vavuniya Information & Communication Association", link: "http://www.victa.org/" },
      { name: "Aaruthal", link: "http://www.aaruthal.lk/" },
    ],
  },
  {
    key: "individuals",
    title: "Category IV (Individuals)",
    members: [
      { name: "S. Garigaraganapathy", info: "Head, IT, ATI Jaffna", link: null },
      { name: "T. Lenin Arivalakan", info: "Dep of Education, NP", link: null },
    ],
  },
  {
    key: "offshore",
    title: "Category V (Offshore)",
    members: [
      { name: "Micro PC Systems", link: "http://www.micropcsystems.com/" },
      { name: "Ceymplon", link: "http://www.ceymplon.lk/" },
      { name: "IDM Nations Campus", link: "http://www.idmedu.lk/" },
    ],
  },
  {
    key: "startup",
    title: "Category VI (Startup)",
    members: [{ name: "Mithu IT Solutions", link: null }],
  },
];

export const ALL_MEMBERS: Member[] = MEMBER_CATEGORIES.flatMap((c) => c.members);

export const MEMBER_COUNT = ALL_MEMBERS.length;

/**
 * Members with a public website, for the home page strip. A verifiable link is
 * the only claim the strip makes about each name, so it is also the filter.
 */
export const LINKED_MEMBERS: Member[] = ALL_MEMBERS.filter((m) => Boolean(m.link));
