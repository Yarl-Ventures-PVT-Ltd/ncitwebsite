/**
 * The analytics consent value, and the plumbing both the banner and the
 * privacy page read it through.
 *
 * It lives here rather than inside the banner because two components need the
 * same store: the banner asks the question, the privacy page reports the
 * answer and takes it back. Two copies of this would drift.
 */

export const CONSENT_STORAGE_KEY = "ncit-analytics-consent";

export type Consent = "granted" | "denied";

/**
 * Set when the browser refuses to persist, which private windows and blocked
 * site data both do. Without it a choice would never read back and the banner
 * would reappear on every click.
 */
let sessionFallback: string | null = null;

const listeners = new Set<() => void>();

export function subscribeToConsent(onChange: () => void) {
    window.addEventListener("storage", onChange);
    listeners.add(onChange);
    return () => {
        window.removeEventListener("storage", onChange);
        listeners.delete(onChange);
    };
}

export function readConsent() {
    try {
        return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? sessionFallback;
    } catch {
        return sessionFallback;
    }
}

function notify() {
    for (const listener of listeners) {
        listener();
    }
}

export function writeConsent(value: Consent) {
    sessionFallback = value;
    try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
        // The choice still holds for this visit through sessionFallback.
    }
    notify();
}

/**
 * Forgetting the answer brings the banner back. Google Analytics is already
 * loaded in the page that accepted, and a script cannot be unloaded, so the
 * page is reloaded to make "changed my mind" mean it from this moment on.
 */
export function clearConsent() {
    sessionFallback = null;
    try {
        window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
        // Nothing was stored to begin with.
    }
    notify();
    window.location.reload();
}
