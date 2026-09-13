/**
 * The contact form's shared vocabulary.
 *
 * Imported by the form in the browser and by the API route on the server, so
 * the inquiry types a visitor can pick and the ones the server accepts are the
 * same list and cannot drift. Anything the server receives that is not on this
 * list is rejected, which is what stops a hand-built request from inventing a
 * category.
 */

export const INQUIRY_TYPES = [
    { id: "General", label: "General Inquiry" },
    { id: "Membership", label: "Membership" },
    { id: "Investment", label: "Investment & Partnerships" },
    { id: "Government", label: "Government / Institutional" },
    { id: "Media", label: "Media & Press" },
    { id: "Support", label: "Member Support" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["id"];

export function isInquiryType(value: unknown): value is InquiryType {
    return typeof value === "string" && INQUIRY_TYPES.some((type) => type.id === value);
}

export function inquiryLabel(id: InquiryType) {
    return INQUIRY_TYPES.find((type) => type.id === id)?.label ?? id;
}

/**
 * Upper bounds on every field. They exist so a single request cannot post a
 * megabyte of text into the chamber's inbox, not to police what people write,
 * so they are set well above anything a real enquiry needs.
 */
export const FIELD_LIMITS = {
    firstName: 80,
    lastName: 80,
    email: 254,
    phone: 40,
    organisation: 160,
    memberId: 60,
    subject: 200,
    message: 5000,
} as const;

export type ContactPayload = {
    inquiryType: InquiryType;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organisation: string;
    memberId: string;
    subject: string;
    message: string;
    consent: boolean;
    /** Honeypot. Hidden from people, filled in by naive bots. */
    website: string;
};
