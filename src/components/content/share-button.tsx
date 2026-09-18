"use client";

import { useState } from "react";
import { Check, Share2, TriangleAlert } from "lucide-react";

/**
 * Copies text without the Clipboard API, by selecting it in a field the reader
 * never sees. Older than the API and still the only thing that works when the
 * page is served over plain http, or when the browser refuses clipboard access.
 */
function copyBySelection(text: string): boolean {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();

    let copied = false;
    try {
        copied = document.execCommand("copy");
    } catch {
        copied = false;
    }

    document.body.removeChild(field);
    return copied;
}

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
 *
 * Every outcome says something. A clipboard write can be refused (an unfocused
 * page, plain http, or browser policy) and the first version of this swallowed
 * that silently, so a refused copy looked exactly like a button that does
 * nothing. Now a refusal tries the older selection copy, and if that fails too
 * the button says so and the address stays on screen to copy by hand.
 */
export function ShareButton({ title }: { title: string }) {
    const [result, setResult] = useState<"idle" | "copied" | "failed">("idle");

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

        let copied = false;

        try {
            await navigator.clipboard.writeText(url);
            copied = true;
        } catch {
            copied = copyBySelection(url);
        }

        setResult(copied ? "copied" : "failed");
        window.setTimeout(() => setResult("idle"), 2400);
    };

    let label = "Share";
    let Icon = Share2;
    let spoken = "";

    if (result === "copied") {
        label = "Link copied";
        Icon = Check;
        spoken = "Link copied to clipboard";
    }

    if (result === "failed") {
        label = "Copy failed";
        Icon = TriangleAlert;
        spoken = "The link could not be copied. Copy it from the address bar.";
    }

    return (
        <button
            type="button"
            onClick={onShare}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-ncit-line-strong bg-ncit-paper px-4 text-sm font-medium text-ncit-ink transition-colors hover:bg-ncit-surface"
        >
            <Icon className={result === "idle" ? "h-4 w-4" : "h-4 w-4 text-ncit-blue"} aria-hidden="true" />
            {label}
            <span aria-live="polite" className="sr-only">
                {spoken}
            </span>
        </button>
    );
}
