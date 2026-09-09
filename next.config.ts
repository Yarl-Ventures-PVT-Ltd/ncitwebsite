import type { NextConfig } from "next";

/**
 * Redirects from the previous WordPress site.
 *
 * www.ncit.lk has been indexed since 2016 and every one of these paths is a
 * live, indexed URL today. The rebuild changes the routing entirely: articles
 * move from /<slug> to /insights/<slug>, and pages like /about-us and
 * /contact-us become /about and /contact. Without these rules every indexed URL
 * would return 404 on launch day, throwing away ten years of accumulated
 * ranking signal and filling Search Console with errors.
 *
 * Generated from the crawl archive in ncit-lk-crawl, so the list is the site's
 * actual URLs rather than a guess. 301 (permanent) is correct here: the moves
 * are permanent and the signal should pass to the new location.
 *
 * WordPress category, author and paged archives are handled by the pattern
 * rules at the end rather than one line each.
 */
const legacyRedirects = [
  {
    source: "/107-2",
    destination: "/insights/startup-weekend-jaffna-winning-ideas"
  },
  {
    source: "/345-2",
    destination: "/insights/digital-transformation-workshop-batticaloa-2017"
  },
  {
    source: "/a-new-chapter-begins-for-the-northern-ict-industry",
    destination: "/insights/a-new-chapter-begins-for-the-northern-ict-industry"
  },
  {
    source: "/action-plan-development-with-wusc",
    destination: "/insights/action-plan-development-with-wusc"
  },
  {
    source: "/all-technology-startups-in-sri-lanka-are-requested-to-register-at-startupsl-lk",
    destination: "/insights/all-technology-startups-in-sri-lanka-are-requested-to-register-at-startupsl-lk"
  },
  {
    source: "/application-called-for-employment-based-skill-training-programme-2018",
    destination: "/insights/application-called-for-employment-based-skill-training-programme-2018"
  },
  {
    source: "/applications-for-infotel2017-exhibition-from-north-region-it-smes",
    destination: "/insights/applications-for-infotel2017-exhibition-from-north-region-it-smes"
  },
  {
    source: "/awareness-program-on-5g-technology",
    destination: "/insights/awareness-program-on-5g-technology"
  },
  {
    source: "/boost-your-business-through-ict-event-in-kilinochchi-and-mullaitivu",
    destination: "/insights/boost-your-business-through-ict-event-in-kilinochchi-and-mullaitivu"
  },
  {
    source: "/business-digitalization-seminar-in-mannar",
    destination: "/insights/business-digitalization-seminar-in-mannar"
  },
  {
    source: "/call-for-tender25052018",
    destination: "/insights/call-for-tender25052018"
  },
  {
    source: "/capacity-development-work-shop",
    destination: "/insights/capacity-development-work-shop"
  },
  {
    source: "/covid19",
    destination: "/insights/covid19"
  },
  {
    source: "/digital-marketing-challenge-2018",
    destination: "/insights/digital-marketing-challenge-2018"
  },
  {
    source: "/digital-marketing-challenge-2018-registration-open",
    destination: "/insights/digital-marketing-challenge-2018-registration-open"
  },
  {
    source: "/digital-roadmap-for-northern-province-online-event-26th-june-2-30pm",
    destination: "/insights/digital-roadmap-for-northern-province-online-event-26th-june-2-30pm"
  },
  {
    source: "/first-ever-startup-weekend-mannar-came-to-end",
    destination: "/insights/first-ever-startup-weekend-mannar-came-to-end"
  },
  {
    source: "/flood2018",
    destination: "/insights/flood2018"
  },
  {
    source: "/inauguration-meeting-was-held-on-22-feb-2016",
    destination: "/insights/inauguration-meeting-was-held-on-22-feb-2016"
  },
  {
    source: "/infotel-2017",
    destination: "/insights/infotel-2017"
  },
  {
    source: "/itsmeexhibition",
    destination: "/insights/itsmeexhibition"
  },
  {
    source: "/july-2016-board-meeting-key-decisions",
    destination: "/insights/july-2016-board-meeting-key-decisions"
  },
  {
    source: "/meeting-with-canadian-high-commissioner-mr-david-mckinnon",
    destination: "/insights/meeting-with-canadian-high-commissioner-mr-david-mckinnon"
  },
  {
    source: "/meeting-with-cheryl-edison",
    destination: "/insights/meeting-with-cheryl-edison"
  },
  {
    source: "/meeting-with-deputy-chief-of-mission-robert-b-hilton",
    destination: "/insights/meeting-with-deputy-chief-of-mission-robert-b-hilton"
  },
  {
    source: "/meeting-with-stax-mdf",
    destination: "/insights/meeting-with-stax-mdf"
  },
  {
    source: "/membership-will-be-open-soon",
    destination: "/insights/membership-will-be-open-soon"
  },
  {
    source: "/ncit-agm-held-and-board-of-directors-elected-for-2018-2019",
    destination: "/insights/ncit-agm-held-and-board-of-directors-elected-for-2018-2019"
  },
  {
    source: "/ncit-business-incubation-center-declared-open",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-get-together-2016",
    destination: "/insights/ncit-get-together-2016"
  },
  {
    source: "/ncit-got-appreciation-award-from-wusc",
    destination: "/insights/ncit-got-appreciation-award-from-wusc"
  },
  {
    source: "/ncit-hosted-its-first-ever-regional-networking-for-members",
    destination: "/insights/ncit-hosted-its-first-ever-regional-networking-for-members"
  },
  {
    source: "/ncit-is-now-trusted-partner-channel-member-of-facebook",
    destination: "/insights/ncit-is-now-trusted-partner-channel-member-of-facebook"
  },
  {
    source: "/ncit-joined-as-official-challenge-partner-to-succeed-the-climathon-jaffna-2019",
    destination: "/insights/ncit-joined-as-official-challenge-partner-to-succeed-the-climathon-jaffna-2019"
  },
  {
    source: "/ncit-members-participated-in-indiasoft-2019-hyderabad",
    destination: "/insights/ncit-members-participated-in-indiasoft-2019-hyderabad"
  },
  {
    source: "/ncit-starts-women-chapter",
    destination: "/insights/ncit-starts-women-chapter"
  },
  {
    source: "/ncits-first-ever-tech-talk-in-jaffna",
    destination: "/insights/ncits-first-ever-tech-talk-in-jaffna"
  },
  {
    source: "/northern-go-digital-2019",
    destination: "/insights/northern-go-digital-2019"
  },
  {
    source: "/northern-it-sme-business-to-business-expo-2017-organized-in-grant-scale-for-smes-in-northern-province",
    destination: "/insights/northern-it-sme-business-to-business-expo-2017-organized-in-grant-scale-for-smes-in-northern-province"
  },
  {
    source: "/northern-province-ict-education-member-application-form",
    destination: "/insights/northern-province-ict-education-member-application-form"
  },
  {
    source: "/presentation-of-itcs-report-on-the-sri-lankan-entrepreneurship-support-ecosystem",
    destination: "/insights/presentation-of-itcs-report-on-the-sri-lankan-entrepreneurship-support-ecosystem"
  },
  {
    source: "/selected-vt-institutions-for-the-employment-based-skill-training-programe-2018",
    destination: "/insights/selected-vt-institutions-for-the-employment-based-skill-training-programe-2018"
  },
  {
    source: "/seminar-for-new-ventures",
    destination: "/insights/seminar-for-new-ventures"
  },
  {
    source: "/seminar-on-computerization-of-business-in-mannar",
    destination: "/insights/seminar-on-computerization-of-business-in-mannar"
  },
  {
    source: "/september-board-meeting-key-decisions",
    destination: "/insights/september-board-meeting-key-decisions"
  },
  {
    source: "/sirakukal-organized-workshop-with-the-support-of-ncit",
    destination: "/insights/sirakukal-organized-workshop-with-the-support-of-ncit"
  },
  {
    source: "/slasscom-presents-sri-lankas-largest-it-bpm-week-2021-ncit-on-board-as-event-partner",
    destination: "/insights/slasscom-presents-sri-lankas-largest-it-bpm-week-2021-ncit-on-board-as-event-partner"
  },
  {
    source: "/social-media-for-business",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/startup-weekend-jaffna-2017",
    destination: "/insights/startup-weekend-jaffna-2017"
  },
  {
    source: "/startup-weekend-vanni-was-success-full-end-for-startup-weekend-journey-in-2016",
    destination: "/insights/startup-weekend-vanni-was-success-full-end-for-startup-weekend-journey-in-2016"
  },
  {
    source: "/startupweekendjaffna",
    destination: "/insights/startupweekendjaffna"
  },
  {
    source: "/talk-session-kannan",
    destination: "/insights/talk-session-kannan"
  },
  {
    source: "/tech-summit-nextwork-2020-scheduled-in-14th-15th-and-16th-february-2020",
    destination: "/insights/tech-summit-nextwork-2020-scheduled-in-14th-15th-and-16th-february-2020"
  },
  {
    source: "/the-first-ever-international-tech-summit-nextwork-2020-in-jaffna-successfully-came-to-end",
    destination: "/insights/the-first-ever-international-tech-summit-nextwork-2020-in-jaffna-successfully-came-to-end"
  },
  {
    source: "/the-world-tourism-day-exhibition-2018-was-held-in-jaffna-with-the-theme-of-drive-digital-tourism",
    destination: "/insights/the-world-tourism-day-exhibition-2018-was-held-in-jaffna-with-the-theme-of-drive-digital-tourism"
  },
  {
    source: "/vacancy-for-administrative-officer",
    destination: "/insights/vacancy-for-administrative-officer"
  },
  {
    source: "/women-empowerment-and-digitization-workshop",
    destination: "/insights/women-empowerment-and-digitization-workshop"
  },
  {
    source: "/world-survey-only-for-startup-companies-age-less-than-10-years-old",
    destination: "/insights/world-survey-only-for-startup-companies-age-less-than-10-years-old"
  },
  {
    source: "/youth-entrepreneurship-technical-advisory-forum",
    destination: "/insights/youth-entrepreneurship-technical-advisory-forum"
  },
  {
    source: "/home",
    destination: "/"
  },
  {
    source: "/about-us",
    destination: "/about"
  },
  {
    source: "/contact-us",
    destination: "/contact"
  },
  {
    source: "/board",
    destination: "/about/board"
  },
  {
    source: "/board-2026-2027",
    destination: "/about/board"
  },
  {
    source: "/board-2021-2022",
    destination: "/about/board"
  },
  {
    source: "/board-2017-18",
    destination: "/about/board"
  },
  {
    source: "/bylaws",
    destination: "/about/governance/bylaws"
  },
  {
    source: "/presentation",
    destination: "/about"
  },
  {
    source: "/business-incubation-center",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/projects",
    destination: "/what-we-do/projects"
  },
  {
    source: "/services",
    destination: "/what-we-do/services"
  },
  {
    source: "/member-benefits",
    destination: "/membership/benefits"
  },
  {
    source: "/join-with-us",
    destination: "/membership/apply"
  },
  {
    source: "/ictmemberdirectory",
    destination: "/members"
  },
  {
    source: "/resources",
    destination: "/ecosystem/resources"
  },
  {
    source: "/useful-links",
    destination: "/ecosystem/resources"
  },
  {
    source: "/notice-board",
    destination: "/insights"
  },
  {
    source: "/calendar",
    destination: "/insights"
  },
  {
    source: "/business-incubation-center/img-20180406-wa0017",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180427-wa0011",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180427-wa0013",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180427-wa0015",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0004",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0005",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0006",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0007",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0008",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0009",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0010",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0011",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0012",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/business-incubation-center/img-20180531-wa0013",
    destination: "/what-we-do/business-incubation-center"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/35229510_2596808003878710_682941856383762432_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36002879_2596675247225319_530006875656159232_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36235381_2596675870558590_211197844185415680_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36236854_2596676317225212_2976012045176012800_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36257372_2596675683891942_3937731703233052672_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36276421_2596675770558600_8243285556746780672_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36302503_2596675617225282_7151362264304451584_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36305135_2596676077225236_8692141001029976064_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36316791_2596677447225099_6198485441398702080_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36317886_2596676103891900_5774605768812658688_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/ncit-business-incubation-center-declared-open/36330911_2596809320545245_2136125585510891520_o",
    destination: "/insights/ncit-business-incubation-center-declared-open"
  },
  {
    source: "/social-media-for-business/14249758_1068363813284500_9064136118583302174_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14258164_1068364156617799_4731251383690940681_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14258308_1068373969950151_629687284300677088_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14289907_1068367579950790_2262329036231941577_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14311469_1068364799951068_6644478326150774807_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14324138_1068370716617143_442036288741820580_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14352043_1068368449950703_3606268112236741114_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14361329_1068366806617534_8409551825240663076_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14372321_1068364069951141_322832781046788718_o",
    destination: "/insights/social-media-for-business"
  },
  {
    source: "/social-media-for-business/14372401_1068366549950893_8860478147891489481_o",
    destination: "/insights/social-media-for-business"
  }
];

const nextConfig: NextConfig = {
  images: {
    // Next ships a srcset for every entry here on every image. The defaults run
    // to 3840px, which no slot on this site uses: the gallery grid caps at 25vw
    // and the widest single image is an article hero. Trimming the list cuts the
    // rendered markup sharply on the gallery, which holds 172 images at once.
    // AVIF first, WebP second, original last. Next negotiates per request,
    // so an older browser still gets a format it understands.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },

  /**
   * Response headers. The site sent none of these before.
   *
   * script-src and style-src need 'unsafe-inline' because headers() is static,
   * so there is no per-request nonce to hand Next's hydration payload or the
   * inline style attributes React server-renders. A nonce-based policy is
   * stricter but needs middleware, which is a bigger change than this one.
   * JSON-LD needs no allowance: a script tag with a non-JS type is never
   * executed, so script-src is never consulted for it.
   *
   * frame-src allows google.com for the map embed on the contact page.
   * HSTS does nothing until the real host serves HTTPS.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self' data:",
              "frame-src 'self' https://www.google.com",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),

      // Two posts kept the WordPress post-id slugs they were published under.
      // One of them is the longest article on the site, so it had the worst URL
      // of the lot. Renamed, with the old article paths redirected.
      { source: "/insights/107-2", destination: "/insights/startup-weekend-jaffna-winning-ideas", permanent: true },
      { source: "/insights/345-2", destination: "/insights/digital-transformation-workshop-batticaloa-2017", permanent: true },

      // WordPress taxonomy and pagination. These listed posts; the insights
      // index is the equivalent.
      { source: "/category/:slug*", destination: "/insights", permanent: true },
      { source: "/author/:slug*", destination: "/insights", permanent: true },
      { source: "/page/:num*", destination: "/insights", permanent: true },

      // Date archives such as /2017/07/06.
      { source: "/:year(\\d{4})", destination: "/insights", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})", destination: "/insights", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})", destination: "/insights", permanent: true },

      // The WordPress sitemaps. The new one is at /sitemap.xml.
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-:rest", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
