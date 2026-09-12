"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { GA_MEASUREMENT_ID } from "@/lib/seo";

/**
 * Analytics consent, and the gate that enforces it.
 *
 * Google Analytics is not loaded at all until someone accepts. That is a
 * stronger promise than Consent Mode, which loads gtag immediately and then
 * asks it to behave, and it is the one a person can check: before a decision
 * there is no request to googletagmanager.com in the network panel.
 *
 * The cost is real and worth stating plainly. Visits from people who decline,
 * and from people who leave before choosing, are not counted at all. GA4 will
 * therefore read lower than the true traffic rather than as a sample of it.
 *
 * localStorage is read through useSyncExternalStore rather than an effect.
 * Reading it during render is impossible on the server, and setting state from
 * an effect to work around that is the cascading-render pattern React now
 * warns about. This is the tool meant for the job, and subscribing to the
 * storage event means a choice made in one tab settles the others too.
 */

const STORAGE_KEY = "ncit-analytics-consent";

/**
 * Set when the browser refuses to persist, which private windows and blocked
 * site data both do. Without it the banner would reappear on every click,
 * because the value written would never read back.
 */
let sessionFallback: string | null = null;

function subscribe(onChange: () => void) {
    window.addEventListener("storage", onChange);
    listeners.add(onChange);
    return () => {
        window.removeEventListener("storage", onChange);
        listeners.delete(onChange);
    };
}

const listeners = new Set<() => void>();

function readConsent() {
    try {
        return window.localStorage.getItem(STORAGE_KEY) ?? sessionFallback;
    } catch {
        return sessionFallback;
    }
}

/**
 * The server has no storage, and this value is also what the hydration pass
 * renders. It is a distinct sentinel rather than null so that nothing is drawn
 * until the real answer is known: rendering the banner here would flash it at
 * every returning visitor who already decided, for the few milliseconds before
 * hydration swaps it away.
 */
const NOT_YET_KNOWN = "server";

function readOnServer() {
    return NOT_YET_KNOWN;
}

function writeConsent(value: "granted" | "denied") {
    sessionFallback = value;
    try {
        window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // The choice still holds for this visit through sessionFallback.
    }
    for (const listener of listeners) {
        listener();
    }
}

export default function CookieConsent() {
    const consent = useSyncExternalStore(subscribe, readConsent, readOnServer);

    if (consent === "granted") {
        return GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null;
    }

    if (consent === "denied" || consent === NOT_YET_KNOWN) {
        return null;
    }

    return (
        <div
            role="region"
            aria-label="Cookie notice"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-ncit-line-strong bg-ncit-paper"
        >
            <div className="ncit-container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <p className="max-w-2xl text-sm leading-relaxed text-ncit-ink-2">
                    We use Google Analytics to see which pages people read. It stores a random ID in your browser so
                    that a returning visit is not counted twice. Decline and nothing is loaded.
                </p>
                <div className="flex shrink-0 gap-3">
                    <button
                        type="button"
                        onClick={() => writeConsent("denied")}
                        className="h-11 rounded-lg border border-ncit-line-strong bg-ncit-paper px-5 text-sm font-medium text-ncit-ink transition-colors hover:border-ncit-ink hover:bg-ncit-surface"
                    >
                        Decline
                    </button>
                    <button
                        type="button"
                        onClick={() => writeConsent("granted")}
                        className="h-11 rounded-lg border border-transparent bg-ncit-blue px-5 text-sm font-medium text-white transition-colors hover:bg-ncit-blue-hover"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
