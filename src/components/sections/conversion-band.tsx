import { ActionLink } from "@/components/ui/action";

/**
 * The closing call to action.
 *
 * One intent, one label. The previous page finished with three different ways
 * of saying the same thing, which left a visitor choosing between synonyms
 * rather than deciding. "Become a member" is the phrase used in the hero, so
 * the page opens and closes on the same words.
 */
export default function ConversionBand() {
    return (
        <section aria-labelledby="home-join" className="border-t border-ncit-line bg-ncit-surface py-16 md:py-20">
            <div className="ncit-container">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <h2 id="home-join" className="ncit-h2">
                            Join the chamber
                        </h2>
                        <p className="ncit-lede mt-4">
                            Membership connects your organisation to the Northern technology industry, to national
                            bodies and to the chamber&rsquo;s programmes. Applications are reviewed by the board.
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                        <ActionLink href="/membership/apply" variant="primary" withArrow>
                            Become a member
                        </ActionLink>
                        <ActionLink href="/contact" variant="secondary">
                            Contact NCIT
                        </ActionLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
