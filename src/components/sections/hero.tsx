import { ActionLink } from "@/components/ui/action";
import HeroSlideshow, { type HeroSlide } from "@/components/sections/hero-slideshow";

/**
 * Home page hero.
 *
 * This replaced a centred hero that sat over three blurred colour orbs, with a
 * purple to pink gradient headline and four separately animated blocks. It was
 * the default look, and it said nothing about the chamber.
 *
 * What it says now comes from NCIT's own words. "The unified voice of the
 * Northern ICT industry" is the phrase the board used when announcing the
 * 2026 to 2027 term, so the page opens in the organisation's register rather
 * than in marketing language.
 *
 * The photographs rotate. All four come from the chamber's own archive at
 * 1500px or wider, and between them they show what NCIT actually does: its
 * stand at the national INFOTEL exhibition, a Startup Weekend, an international
 * summit, and its pavilion of member companies at a trade exhibition. The
 * first slide carries the largest contentful paint, so it is the only one
 * marked priority and the rest load lazily.
 *
 * The slideshow itself is the only moving thing on the home page, and it can
 * be paused. See hero-slideshow.tsx for how that obligation is met.
 */
const SLIDES: HeroSlide[] = [
    {
        src: "/wp-content/uploads/2017/11/ncit-infotel-2017-2017-01.jpg",
        alt: "The Northern Chamber of Information Technology stand at the INFOTEL exhibition in 2017, with teams from member companies standing in front of the NCIT banner.",
        caption: "INFOTEL exhibition, 2017",
    },
    {
        src: "/wp-content/uploads/2017/11/ncit-startup-weekend-jaffna-2017-2017-01.jpg",
        alt: "Participants and mentors gathered for a group photograph at Startup Weekend Jaffna in November 2017, beneath the NCIT and Techstars banners.",
        caption: "Startup Weekend Jaffna, 2017",
    },
    {
        src: "/wp-content/uploads/2020/02/ncit-first-ever-international-tech-summit-nextwork-2020-2020-09.jpg",
        alt: "Industry delegates examining a demonstration on a tablet at NExTWORK, the international technology summit hosted by NCIT in Jaffna in February 2020.",
        caption: "NExTWORK summit, Jaffna, 2020",
    },
    {
        src: "/wp-content/uploads/2018/10/ncit-world-tourism-day-exhibition-2018-held-jaffna-2018-03.jpg",
        alt: "The Northern Chamber of Information Technology pavilion at the 2018 World Tourism Day exhibition in Jaffna, with member company stands along the aisle.",
        caption: "Chamber pavilion, Jaffna, 2018",
    },
];
export default function HeroSection() {
    return (
        <section className="border-b border-ncit-line bg-ncit-paper">
            <div className="ncit-container">
                <div className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
                    <div className="lg:col-span-7">
                        <h1 className="ncit-display text-balance text-ncit-ink">
                            The unified voice of the Northern ICT industry.
                        </h1>

                        <p className="ncit-lede mt-6 max-w-xl">
                            NCIT represents technology companies, educators, startups and professionals across the five
                            districts of Sri Lanka&rsquo;s Northern Province.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <ActionLink href="/membership/apply" variant="primary" withArrow>
                                Become a member
                            </ActionLink>
                            <ActionLink href="/about" variant="secondary">
                                Explore NCIT
                            </ActionLink>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <HeroSlideshow slides={SLIDES} />
                    </div>
                </div>
            </div>
        </section>
    );
}
