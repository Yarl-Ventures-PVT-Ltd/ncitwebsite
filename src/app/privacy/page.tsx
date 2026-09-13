import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import ConsentControl from "@/components/sections/privacy/consent-control";
import { SITE, GA_MEASUREMENT_ID, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Privacy Notice",
    socialTitle: "Privacy Notice",
    description:
        "How the Northern Chamber of Information Technology handles information on this website: what is collected, why, who it is shared with, and how to exercise your choices.",
    path: "/privacy",
});

/**
 * Privacy notice.
 *
 * Written against the code, not from a template. Every statement here is one a
 * reader can verify: the analytics gate, the cookie, the security headers, the
 * absence of any cookie set by the site itself. Where a fact belongs to the
 * secretariat rather than to the codebase, such as how long a membership file
 * is kept, the notice says how to ask instead of inventing a number.
 *
 * This is a description of practice. It is not legal advice and it has not been
 * settled by a lawyer. Keep it in step with the code: if a form starts
 * submitting somewhere, a third party is added, or the analytics property
 * changes, this page is part of that change and not a follow up.
 */

const LAST_UPDATED = "12 September 2026";

const CONTENTS = [
    { id: "scope", title: "Scope of this notice" },
    { id: "who-we-are", title: "Who we are" },
    { id: "what-we-collect", title: "Information we collect" },
    { id: "cookies", title: "Cookies and local storage" },
    { id: "how-we-use", title: "How we use information" },
    { id: "your-choices", title: "Your choices" },
    { id: "sharing", title: "Who we share information with" },
    { id: "transfers", title: "Where information is processed" },
    { id: "retention", title: "How long information is kept" },
    { id: "security", title: "Security" },
    { id: "third-party", title: "Third party content and links" },
    { id: "children", title: "Children" },
    { id: "changes", title: "Changes to this notice" },
    { id: "contact", title: "Contact and requests" },
];

export default function PrivacyPage() {
    return (
        <>
            <PageHeader
                title="Privacy Notice"
                lede="What this website collects, why, who it is shared with, and how to exercise your choices."
                crumbs={[{ name: "Privacy", path: "/privacy" }]}
                meta={`Last updated ${LAST_UPDATED}`}
            />

            <Section tone="paper">
                <div className="grid gap-12 lg:grid-cols-12">
                    <nav aria-labelledby="contents-heading" className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                        <h2 id="contents-heading" className="ncit-meta text-ncit-ink-3">
                            Contents
                        </h2>
                        <ol className="mt-4 space-y-1 text-sm">
                            {CONTENTS.map((item, index) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="inline-block py-1 text-ncit-ink-2 underline-offset-4 transition-colors hover:text-ncit-blue hover:underline"
                                    >
                                        <span className="text-ncit-ink-3">{index + 1}.</span> {item.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <div className="prose max-w-none lg:col-span-8 prose-headings:font-semibold prose-headings:text-ncit-ink prose-p:leading-relaxed prose-p:text-ncit-ink-2 prose-a:text-ncit-blue prose-a:underline-offset-4 prose-li:text-ncit-ink-2 prose-strong:text-ncit-ink">
                        <h2 id="scope">1. Scope of this notice</h2>
                        <p>
                            This notice covers the public website at{" "}
                            <strong>{SITE.url.replace("https://", "")}</strong>. It explains what information the
                            website collects, why, who it is shared with, and the choices available to you.
                        </p>
                        <p>
                            The NCIT member portal is a separate system with its own sign in, its own records and its
                            own terms. This notice does not describe it. Membership correspondence handled by the
                            secretariat over email is described in section 3 because it begins on this site.
                        </p>

                        <h2 id="who-we-are">2. Who we are</h2>
                        <p>
                            The {SITE.legalName} (NCIT) is the industry chamber for the information and communication
                            technology sector in the Northern Province of Sri Lanka, established in {SITE.founded}. The
                            chamber is the controller of the information described here.
                        </p>
                        <p>
                            Office: {SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode},{" "}
                            {SITE.address.region}, Sri Lanka. General enquiries:{" "}
                            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Telephone:{" "}
                            <a href={`tel:${SITE.telephone}`}>{SITE.telephoneDisplay}</a>.
                        </p>

                        <h2 id="what-we-collect">3. Information we collect</h2>
                        <h3>3.1 Information you choose to send us</h3>
                        <p>
                            If you write to the chamber, what you send is what we hold: your message, your email
                            address, and anything you attach. Nothing more is gathered from you in the background.
                        </p>
                        <p>
                            <strong>The enquiry forms.</strong> When you send an enquiry through the{" "}
                            <Link href="/contact">contact page</Link> or the investor form on the{" "}
                            <Link href="/invest">invest page</Link>, the form collects your name, your email address,
                            your organisation, the kind of enquiry, a subject or area of interest, and your message,
                            and on the contact page optionally a telephone number and member ID. It is sent by email to the chairman&rsquo;s office at{" "}
                            <a href={`mailto:${SITE.enquiriesEmail}`}>{SITE.enquiriesEmail}</a>, addressed so that a
                            reply comes back to you, and a confirmation listing your enquiry details, though not your
                            message, is emailed back to the address you gave. The website itself stores none of it: the two emails are the only
                            copies.
                        </p>
                        <p>
                            A membership application is the main case. Applicants download a form, complete it, and
                            email it to <a href={`mailto:${SITE.applicationsEmail}`}>{SITE.applicationsEmail}</a> with
                            supporting documents and a payment receipt. That correspondence contains the details the
                            form asks for, and it sits in the chamber&rsquo;s mailbox so the secretariat can assess the
                            application against the eligibility rules in the bylaws.
                        </p>
                        <h3>3.2 Information collected automatically</h3>
                        <p>
                            <strong>Analytics, only with your consent.</strong> The site uses Google Analytics to count
                            visits and see which pages are read. It is not loaded until you press Accept on the notice
                            at the foot of the page. Until then, and permanently if you press Decline, no request is
                            made to Google and nothing is recorded. When it is running, Google receives the page
                            viewed, an approximate location derived from the network address, and the device and
                            browser type, in the chamber&rsquo;s analytics property
                            {GA_MEASUREMENT_ID ? (
                                <>
                                    {" "}
                                    <code>{GA_MEASUREMENT_ID}</code>
                                </>
                            ) : null}
                            .
                        </p>
                        <p>
                            <strong>Page speed measurement.</strong> The site records how quickly pages load, using the
                            measurement built into our host. It collects timings and the page they belong to. It sets no
                            cookie and does not identify you, which is why it sits outside the consent question.
                        </p>
                        <p>
                            <strong>Server logs.</strong> Like every web server, the host keeps short term request logs
                            that include the network address a request came from and the browser that made it. These
                            are operational records used to serve the site and investigate faults.
                        </p>

                        <h2 id="cookies">4. Cookies and local storage</h2>
                        <p>
                            <strong>This website sets no cookies of its own.</strong> Two things are stored in your
                            browser, and only two:
                        </p>
                        <ul>
                            <li>
                                <strong>A Google Analytics cookie</strong>, and only if you accept. It holds a randomly
                                generated identifier whose job is to tell a returning visit from a new one so the same
                                person is not counted twice. The site never gives it your name.
                            </li>
                            <li>
                                <strong>Your answer to the consent notice</strong>, kept in your browser&rsquo;s local
                                storage so you are not asked on every page. It is not a cookie, it is never transmitted,
                                and it is specific to that browser.
                            </li>
                        </ul>
                        <p>
                            No advertising cookies are set, and the site carries no advertising or remarketing tags of
                            any kind.
                        </p>

                        <h2 id="how-we-use">5. How we use information</h2>
                        <ul>
                            <li>To answer your enquiry or assess your membership application.</li>
                            <li>
                                To understand which pages are read, so the chamber can improve what it publishes. This
                                is done in aggregate and only with your consent.
                            </li>
                            <li>To keep the site running, secure and reasonably fast.</li>
                        </ul>
                        <p>
                            We do not use your information to make automated decisions about you, and we do not profile
                            you.
                        </p>

                        <h2 id="your-choices">6. Your choices</h2>
                        <p>
                            Analytics is a choice you make, and you can change it at any time. Your browser also gives
                            you controls of its own: you can clear site data, block cookies, or use a private window,
                            and the site works the same either way.
                        </p>
                        <ConsentControl />

                        <h2 id="sharing">7. Who we share information with</h2>
                        <p>Three service providers are involved in running this site, and no others:</p>
                        <ul>
                            <li>
                                <strong>Google</strong>, which provides Google Analytics, and only where you have
                                accepted.
                            </li>
                            <li>
                                <strong>Vercel</strong>, which hosts the site and provides the page speed measurement.
                            </li>
                            <li>
                                <strong>Amazon Web Services</strong>, whose email service delivers contact form
                                enquiries to the secretariat.
                            </li>
                        </ul>
                        <p>
                            The chamber does not sell your information, does not share it for anyone else&rsquo;s own
                            purposes, and does not pass it to advertisers. Information may be disclosed where the
                            chamber is required to do so by law.
                        </p>

                        <h2 id="transfers">8. Where information is processed</h2>
                        <p>
                            The chamber is in Sri Lanka. The two providers named above operate globally, so information
                            handled by them, including analytics data and server logs, is processed on infrastructure
                            outside Sri Lanka under their own terms. If this matters to you, declining analytics stops
                            anything being sent to Google at all.
                        </p>

                        <h2 id="retention">9. How long information is kept</h2>
                        <ul>
                            <li>
                                <strong>Your consent choice</strong> stays in your browser until you change it or clear
                                your site data. Nobody else can read it.
                            </li>
                            <li>
                                <strong>Analytics data</strong> is held by Google under the retention period set on the
                                chamber&rsquo;s property.
                            </li>
                            <li>
                                <strong>Server logs</strong> are short lived operational records held by the host.
                            </li>
                            <li>
                                <strong>Correspondence and membership files</strong> are kept by the secretariat for as
                                long as needed to administer the membership and to meet the chamber&rsquo;s record
                                keeping obligations. Ask the secretariat if you need the position for your own file.
                            </li>
                        </ul>

                        <h2 id="security">10. Security</h2>
                        <p>
                            The site is served over HTTPS only, with HTTP Strict Transport Security, so a browser will
                            not connect to it insecurely. A Content Security Policy restricts what the page is allowed
                            to load, and the site sends <code>X-Content-Type-Options</code>,{" "}
                            <code>Referrer-Policy</code> and a <code>Permissions-Policy</code> that switches off camera,
                            microphone, geolocation, payment and USB access.
                        </p>
                        <p>
                            <strong>No payment is ever taken on this website</strong>, and it asks for no card or bank
                            details. If a page ever appears to do so, it is not ours. No method of transmission over
                            the internet is completely secure, and email in particular is not: please do not send
                            identity document numbers or bank details by email unless the secretariat has asked you to.
                        </p>

                        <h2 id="third-party">11. Third party content and links</h2>
                        <p>
                            The contact page embeds a Google map so you can find the office. That frame is served by
                            Google and is subject to Google&rsquo;s own terms. The site also links out to the
                            chamber&rsquo;s social accounts, to member and partner organisations, and to government
                            bodies. Once you follow a link, you are on someone else&rsquo;s site and their notice
                            applies, not this one.
                        </p>

                        <h2 id="children">12. Children</h2>
                        <p>
                            This website is aimed at businesses, professionals and institutions, and it is not
                            directed at children. Beyond the analytics and server logs described in section 3, which
                            apply to every visitor alike, the only personal details it receives are the ones a person
                            types into an enquiry form and chooses to send.
                            Where a membership category involves a student, the application is made by the applicant or
                            their institution to the secretariat by email.
                        </p>

                        <h2 id="changes">13. Changes to this notice</h2>
                        <p>
                            This notice is updated when the website&rsquo;s practice changes, and the date at the top
                            records the last revision. Material changes will be reflected here rather than announced
                            individually. The current version is the one on this page.
                        </p>

                        <h2 id="contact">14. Contact and requests</h2>
                        <p>
                            To ask what the chamber holds about you, to ask for it to be corrected or removed, or to
                            raise a concern about how it has been handled, write to{" "}
                            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, telephone{" "}
                            <a href={`tel:${SITE.telephone}`}>{SITE.telephoneDisplay}</a>, or use the{" "}
                            <Link href="/contact">contact page</Link>. Membership matters are best sent to{" "}
                            <a href={`mailto:${SITE.applicationsEmail}`}>{SITE.applicationsEmail}</a>. Post reaches the
                            secretariat at the office address in section 2.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
