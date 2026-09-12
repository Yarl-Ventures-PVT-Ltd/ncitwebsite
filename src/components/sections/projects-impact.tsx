import { Section, SectionHeading } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { MoreLink } from "@/components/ui/action";
import { PROJECTS } from "@/lib/projects";

/**
 * Projects and initiatives, on the home page.
 *
 * Presented as a register rather than as three marketing cards with headline
 * figures, because a register is what the chamber has evidence for. The status
 * of each programme is the useful information: a visitor wants to know whether
 * the incubation centre is open and whether the job bank exists yet.
 */
export default function ProjectsImpact() {
    return (
        <Section tone="paper" labelledBy="home-projects">
            <SectionHeading
                id="home-projects"
                title="Projects and initiatives"
                lede="Programmes the chamber runs directly, with their current status."
                action={<MoreLink href="/what-we-do/projects">All projects</MoreLink>}
            />

            <ul className="grid gap-px overflow-hidden rounded-lg border border-ncit-line bg-ncit-line sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <li key={project.slug} className="flex flex-col bg-ncit-paper p-6">
                        <div className="mb-4">
                            <Chip>{project.status}</Chip>
                        </div>

                        <h3 className="text-base font-semibold text-ncit-ink">{project.title}</h3>

                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ncit-ink-2">{project.description}</p>

                        <ul className="mt-4 space-y-1 border-t border-ncit-line pt-4">
                            {project.details.map((detail) => (
                                <li key={detail} className="text-sm text-ncit-ink-3">
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
