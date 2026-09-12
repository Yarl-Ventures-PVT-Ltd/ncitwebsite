"use client";

import { useSyncExternalStore } from "react";

import { CONSENT_STORAGE_KEY, clearConsent, subscribeToConsent, readConsent } from "@/lib/consent";

/**
 * Shows the reader the analytics choice their browser is holding, and lets
 * them take it back.
 *
 * A banner that can only be answered once is a weak promise. This is the way
 * back, and it is on the page a person looks for when they want one.
 */
export default function ConsentControl() {
    const consent = useSyncExternalStore(subscribeToConsent, readConsent, () => "server");

    if (consent === "server") {
        return null;
    }

    const label =
        consent === "granted"
            ? "You accepted analytics on this browser."
            : consent === "denied"
              ? "You declined analytics on this browser."
              : "You have not answered the banner on this browser yet.";

    return (
        <div className="mt-6 rounded-lg border border-ncit-line bg-ncit-surface p-5">
            <p className="text-sm text-ncit-ink">{label}</p>
            {consent ? (
                <button
                    type="button"
                    onClick={clearConsent}
                    className="mt-4 h-11 rounded-lg border border-ncit-line-strong bg-ncit-paper px-5 text-sm font-medium text-ncit-ink transition-colors hover:border-ncit-ink hover:bg-ncit-surface"
                >
                    Change my choice
                </button>
            ) : null}
            <p className="mt-3 text-xs text-ncit-ink-3">
                The choice is kept in this browser under <code>{CONSENT_STORAGE_KEY}</code>. It is not sent
                anywhere, so clearing your site data resets it and other browsers are unaffected.
            </p>
        </div>
    );
}
