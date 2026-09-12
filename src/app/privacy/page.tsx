import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/layout/page-header";
import { Section } from "@/components/ui/section";
import ConsentControl from "@/components/sections/privacy/consent-control";
import { SITE, GA_MEASUREMENT_ID, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Privacy",
    socialTitle: "Privacy",
    description:
        "What this website collects, what it does not, and how to change your analytics choice. NCIT, the Northern Chamber of Information Technology.",
    path: "/privacy",
});

/**
 * Privacy.
 *
 * Written to describe what this site actually does, checked against the code
 * rather than copied from a template. Every claim here is one a reader can
 * verify in their own browser, which is the only kind worth publishing. Where
 * a fact belongs to the secretariat rather than to the code, it is left out
 * instead of guessed at.
 *
 * Keep it in step with the code. If a form starts submitting somewhere, if a
 * third party is added, or if the analytics property changes, this page is
 * part of that change and not a follow up.
 */

const LAST_UPDATED = "12 September 2026";

export default function PrivacyPage() {
    return (
        <>
            <PageHeader
                title="Privacy"
                lede="What this website collects, what it does not, and how to change your mind."
                crumbs={[{ name: "Privacy", path: "/privacy" }]}
                meta={`Last updated ${LAST_UPDATED}`}
            />

            <Section tone="paper">
                <div className="prose max-w-3xl prose-headings:font-semibold prose-headings:text-ncit-ink prose-p:leading-relaxed prose-p:text-ncit-ink-2 prose-a:text-ncit-blue prose-a:underline-offset-4 prose-li:text-ncit-ink-2 prose-strong:text-ncit-ink">
                    <h2>Analytics, only if you accept</h2>
                    <p>
                        This site uses Google Analytics to count visits and see which pages get read. It is not
                        loaded until you press Accept on the notice at the bottom of the page. Until then, and
                        permanently if you press Decline, no request is made to Google and nothing is recorded.
                    </p>
                    <p>
                        If you accept, Google Analytics stores a cookie in your browser holding a randomly
                        generated ID. Its job is to tell a returning visit from a new one so the same person is not
                        counted twice. It carries your name nowhere because the site never gives it one. Google
                        receives the page you viewed, roughly where in the world the request came from, and what
                        kind of device and browser you used. That information is held by Google under its own
                        terms, in the chamber&rsquo;s analytics property{" "}
                        {GA_MEASUREMENT_ID ? <code>{GA_MEASUREMENT_ID}</code> : null}.
                    </p>

                    <h3>Your current choice</h3>
                    <ConsentControl />

                    <h2>Page speed</h2>
                    <p>
                        The site measures how quickly pages load, using the measurement built into our host. It
                        records timings and the page they belong to. It sets no cookie and it does not identify
                        you, which is why it is not part of the question above.
                    </p>

                    <h2>Hosting</h2>
                    <p>
                        The site is served by Vercel. Like every web server, it keeps short term request logs that
                        include the address your request came from and the browser that made it. These are
                        operational records used to keep the site running and to investigate faults.
                    </p>

                    <h2>Getting in touch</h2>
                    <p>
                        Enquiries reach the chamber by email and telephone, and what you send us is what we hold.
                        If you write to{" "}
                        <a
                            href={`mailto:${SITE.email}`}
                        >
                            {SITE.email}
                        </a>
                        , your message and your address sit in the chamber&rsquo;s mailbox so the secretariat can
                        answer you.
                    </p>

                    <h2>What this site does not do</h2>
                    <ul>
                        <li>It carries no advertising and no advertising trackers.</li>
                        <li>It does not sell or share what it collects with anyone for their own purposes.</li>
                        <li>It does not build a profile of you or follow you to other websites.</li>
                        <li>
                            Google Analytics and the host named above are the only third parties involved in
                            serving this site.
                        </li>
                    </ul>

                    <h2>Questions</h2>
                    <p>
                        To ask what the chamber holds about you, or to ask for it to be removed, write to{" "}
                        <a
                            href={`mailto:${SITE.email}`}
                        >
                            {SITE.email}
                        </a>{" "}
                        or use the{" "}
                        <Link
                            href="/contact"
                        >
                            contact page
                        </Link>
                        . This page describes the website. The member portal is a separate system and is covered by
                        its own terms.
                    </p>
                </div>
            </Section>
        </>
    );
}
