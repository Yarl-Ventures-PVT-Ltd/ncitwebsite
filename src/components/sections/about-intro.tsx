import { MoreLink } from "@/components/ui/action";
import { Section } from "@/components/ui/section";

/**
 * The "what is this organisation" section, directly under the hero.
 *
 * A visitor arriving from a search result for a board member or a 2017 event
 * has no idea what NCIT is. The previous home page went from the hero into a
 * grid of audience tiles without ever answering that, so this section exists
 * to answer it in one paragraph before the page asks for anything.
 */
export default function AboutIntro() {
    const roles = [
        {
            title: "Represents the industry",
            body: "A single point of contact between Northern technology businesses and government, national bodies and international partners.",
            href: "/what-we-do/advocacy",
            linkLabel: "Advocacy",
        },
        {
            title: "Builds the ecosystem",
            body: "Startup Weekends, forums, tech talks and an incubation centre that give founders and professionals somewhere to start.",
            href: "/what-we-do/projects",
            linkLabel: "Projects",
        },
        {
            title: "Opens markets",
            body: "Exhibitions, trade events and buyer introductions that put Northern companies in front of customers beyond the province.",
            href: "/what-we-do/market-access",
            linkLabel: "Market access",
        },
    ];

    return (
        <Section tone="paper" labelledBy="home-about">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                    <h2 id="home-about" className="ncit-h2 ncit-tick">
                        What the chamber is for
                    </h2>
                </div>

                <div className="lg:col-span-7">
                    <p className="text-lg leading-relaxed text-ncit-ink md:text-xl">
                        The Northern Chamber of Information Technology was established in 2016 to give the technology
                        sector of Sri Lanka&rsquo;s Northern Province one organised voice. It brings together software
                        companies, ICT educators, associations, startups and individual professionals so the region can
                        speak to government, to national industry bodies and to international partners as a single
                        industry rather than as scattered firms.
                    </p>

                    <div className="mt-8">
                        <MoreLink href="/about">About NCIT</MoreLink>
                    </div>
                </div>
            </div>

            <ul className="ncit-rule mt-14 grid gap-px bg-ncit-line md:mt-16 md:grid-cols-3">
                {roles.map((role) => (
                    <li key={role.title} className="bg-ncit-paper pt-8 md:px-6 md:first:pl-0 md:last:pr-0">
                        <h3 className="text-base font-semibold text-ncit-ink">{role.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">{role.body}</p>
                        <div className="mt-4">
                            <MoreLink href={role.href}>{role.linkLabel}</MoreLink>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
