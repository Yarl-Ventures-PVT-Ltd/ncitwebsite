"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

/**
 * Share control for an article.
 *
 * This replaced a button that had no handler at all: it looked like a control,
 * took a click, and did nothing. On a chamber's announcement page that matters,
 * because sharing a notice with a colleague is one of the main things a member
 * comes here to do.
 *
 * It uses the Web Share API where the browser has it, which on a phone opens
 * the real share sheet, and falls back to copying the address. The fallback is
 * not an error path: on a desktop browser it is the normal behaviour, which is
 * why the icon does not change between the two. Branching it needed an effect
 * to read navigator after mount, and reading navigator during render instead
 * made the server and client draw different icons, which is a hydration
 * mismatch. The label says Share in both cases, so the icon can be constant.
 */
export function ShareButton({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const onShare = async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title, url });
                return;
            } catch {
                // A cancelled share sheet throws. That is the reader changing
                // their mind, not a failure, so fall through to copying.
            }
        }

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2400);
        } catch {
            // Clipboard access can be refused, over http or by policy. Nothing
            // useful to say beyond leaving the address in the bar.
        }
    };

    return (
        <button
            type="button"
            onClick={onShare}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-ncit-line-strong bg-ncit-paper px-4 text-sm font-medium text-ncit-ink transition-colors hover:bg-ncit-surface"
        >
            {copied ? (
                <Check className="h-4 w-4 text-ncit-blue" aria-hidden="true" />
            ) : (
                <Share2 className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? "Link copied" : "Share"}
            <span aria-live="polite" className="sr-only">
                {copied ? "Link copied to clipboard" : ""}
            </span>
        </button>
    );
}
