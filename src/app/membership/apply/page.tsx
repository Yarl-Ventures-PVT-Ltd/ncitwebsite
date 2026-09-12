import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, Phone } from "lucide-react";

import PageHeader from "@/components/layout/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { ActionLink, MoreLink } from "@/components/ui/action";
import { Chip } from "@/components/ui/chip";
import { pageMetadata, SITE } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Join With Us",
    socialTitle: "Join With Us",
    description:
        "How to apply for NCIT membership: the six categories in the bylaws, the application forms in English and Tamil, and how the board reviews an application.",
    path: "/membership/apply",
});

/**
 * How to join the chamber.
 *
 * This page used to render a maintenance screen reading "Application System
 * Update, please check back soon", while twelve links across the site pointed
 * at it, including the "Become a member" button in the header on every page
 * and both calls to action on the home page. The site's entire conversion path
 * ended in a holding notice, and the page was indexed with a description
 * promising an application process, so a search for "join NCIT" landed on it.
 *
 * There is no online application system, so this does not pretend there is.
 * What NCIT does have is the two application forms it has published since
 * 2017, in English and Tamil, and a secretariat that accepts them. That is
 * what this page gives a visitor.
 *
 * The six categories and their eligibility wording are taken from the chamber
 * bylaws, which are published in full at /about/governance/bylaws. Nothing
 * here is invented: if a fee schedule is wanted on this page, it has to come
 * from NCIT, because the chamber does not publish one.
 */
const CATEGORIES = [
    {
        name: "Full Membership",
        eligibility: "Registered or approved IT organisations with a head office in the Northern Province.",
    },
    {
        name: "Offshore Membership",
        eligibility: "Offshore companies operating a branch office in the Northern Province.",
    },
    {
        name: "Association Membership",
        eligibility: "Non-profit organisations based in the Northern Province.",
    },
    {
        name: "Professional Individual",
        eligibility: "Individual IT experts, academics and consultants.",
    },
    {
        name: "Freelancer Membership",
        eligibility: "Freelancers, and unregistered or virtual companies.",
    },
    {
        name: "Student Membership",
        eligibility: "Students enrolled in an ICT programme.",
    },
];

const FORMS = [
    {
        name: "NCIT membership form, English",
        href: "/wp-content/uploads/2017/03/NCIT_Membership_Form.pdf",
        size: "168 KB",
    },
    {
        name: "NCIT membership form, Tamil",
        href: "/wp-content/uploads/2017/03/NCIT_membership_tamil.pdf",
        size: "136 KB",
    },
];

const STEPS = [
    { n: "1", title: "Choose a category", body: "Pick the membership class your organisation or profile is eligible for." },
    {
        n: "2",
        title: "Complete the form",
        body: "Download the form in English or Tamil and fill it in with your supporting documents.",
    },
    {
        n: "3",
        title: "Pay the membership fee",
        body: "Ask the secretariat for the fee for your category and the payment details, then keep the receipt.",
    },
    {
        n: "4",
        title: "Email the form and the receipt together",
        body: "Send the completed form, your supporting documents and the payment receipt in one email. An application without the receipt waits.",
    },
    {
        n: "5",
        title: "Verification",
        body: "The secretariat checks the documents against the eligibility rules in the bylaws and confirms the payment.",
    },
    {
        n: "6",
        title: "Approval and activation",
        body: "The board approves the application and the membership is activated.",
    },
];

export default function ApplyPage() {
    return (
        <>
            <PageHeader
                title="Join With Us"
                lede="Membership is open to technology companies, ICT educators, associations, offshore firms, startups and individual professionals connected to the Northern Province."
                crumbs={[
                    { name: "Membership", path: "/membership" },
                    { name: "Join with us", path: "/membership/apply" },
                ]}
                meta="Six membership categories, set out in the chamber bylaws"
            />

            <Section tone="paper" labelledBy="apply-forms">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <h2 id="apply-forms" className="ncit-h2 ncit-tick">
                            The application form
                        </h2>
                        <p className="ncit-lede mt-4">
                            Applications are made on the chamber&rsquo;s form and returned to the secretariat. The form
                            is published in both English and Tamil.
                        </p>

                        <ul className="mt-8 border-t border-ncit-line">
                            {FORMS.map((form) => (
                                <li key={form.href}>
                                    <a
                                        href={form.href}
                                        className="group flex items-center gap-4 border-b border-ncit-line py-4 transition-colors hover:bg-ncit-surface"
                                    >
                                        <Download
                                            className="h-4 w-4 shrink-0 text-ncit-ink-3 group-hover:text-ncit-blue"
                                            aria-hidden="true"
                                        />
                                        <span className="min-w-0 flex-1 text-sm font-medium text-ncit-ink group-hover:text-ncit-blue">
                                            {form.name}
                                            <span className="sr-only">, PDF, {form.size}</span>
                                        </span>
                                        <span className="ncit-meta shrink-0 text-ncit-ink-3" aria-hidden="true">
                                            PDF, {form.size}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <ActionLink href="/membership/benefits" variant="primary" withArrow>
                                Member benefits
                            </ActionLink>
                            <ActionLink href="/about/governance/bylaws" variant="secondary">
                                Read the bylaws
                            </ActionLink>
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <div className="rounded-lg border border-ncit-line bg-ncit-surface p-6">
                            <h2 className="text-base font-semibold text-ncit-ink">Where to send it</h2>
                            <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">
                                Email the completed form, your supporting documents and the payment receipt together,
                                in one message, to the applications inbox. The secretariat reviews and approves from
                                that email.
                            </p>

                            <dl className="mt-5 space-y-4 text-sm">
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">Applications</dt>
                                    <dd className="mt-1 flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-ncit-ink-3" aria-hidden="true" />
                                        <a
                                            href={`mailto:${SITE.applicationsEmail}?subject=NCIT%20membership%20application`}
                                            className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                        >
                                            {SITE.applicationsEmail}
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">General enquiries</dt>
                                    <dd className="mt-1 flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-ncit-ink-3" aria-hidden="true" />
                                        <a
                                            href={`mailto:${SITE.email}`}
                                            className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                        >
                                            {SITE.email}
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">Telephone</dt>
                                    <dd className="mt-1 flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-ncit-ink-3" aria-hidden="true" />
                                        <a
                                            href={`tel:${SITE.telephone}`}
                                            className="inline-block py-1 text-ncit-blue underline underline-offset-4 hover:no-underline"
                                        >
                                            {SITE.telephoneDisplay}
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="ncit-meta text-ncit-ink-3">Office</dt>
                                    <dd className="mt-1 leading-relaxed text-ncit-ink-2">
                                        {SITE.address.street}
                                        <br />
                                        {SITE.address.locality} {SITE.address.postalCode}
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-5">
                                <ActionLink href="/contact" variant="secondary">
                                    Contact the chamber
                                </ActionLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </Section>

            <Section tone="surface" labelledBy="apply-categories">
                <SectionHeading
                    id="apply-categories"
                    title="Membership categories"
                    lede="The classes of membership set out in the chamber bylaws, and who each one is for."
                    action={<MoreLink href="/about/governance/bylaws">Full bylaws</MoreLink>}
                />

                <ul className="grid gap-px overflow-hidden rounded-lg border border-ncit-line bg-ncit-line sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map((category) => (
                        <li key={category.name} className="bg-ncit-paper p-6">
                            <h3 className="text-base font-semibold text-ncit-ink">{category.name}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">{category.eligibility}</p>
                        </li>
                    ))}
                </ul>

                <p className="mt-6 text-sm text-ncit-ink-3">
                    The annual fee differs by category. The secretariat issues an invoice once an application is
                    approved. See{" "}
                    <Link
                        href="/members"
                        className="text-ncit-blue underline underline-offset-4 hover:no-underline"
                    >
                        the member directory
                    </Link>{" "}
                    for the organisations currently listed.
                </p>
            </Section>

            <Section tone="paper" labelledBy="apply-process">
                <SectionHeading
                    id="apply-process"
                    title="How an application is handled"
                    lede="From choosing a category to activation."
                />

                <ol className="grid gap-px overflow-hidden rounded-lg border border-ncit-line bg-ncit-line sm:grid-cols-2 lg:grid-cols-3">
                    {STEPS.map((step) => (
                        <li key={step.n} className="bg-ncit-paper p-6">
                            <Chip>{`Step ${step.n}`}</Chip>
                            <h3 className="mt-3 text-base font-semibold text-ncit-ink">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ncit-ink-2">{step.body}</p>
                        </li>
                    ))}
                </ol>
            </Section>
        </>
    );
}
