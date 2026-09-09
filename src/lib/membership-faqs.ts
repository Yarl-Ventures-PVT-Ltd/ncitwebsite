/**
 * The membership questions shown on /membership.
 *
 * These live outside the component because both the client component that
 * renders them and the server page that emits the FAQPage schema need the same
 * array. A "use client" module cannot supply a plain value to a server
 * component: the import resolves to a client reference, not the data.
 */
export const MEMBERSHIP_FAQS = [
  {
    question: "Do I have to pay when submitting the application?",
    answer: "No. You do not pay during the application stage. NCIT will first review your eligibility and documents. If approved, you will receive an invoice with payment instructions to activate your membership."
  },
  {
    question: "What documents do I need to apply?",
    answer: "For Corporate/Association memberships, you will need a copy of your Business Registration (BR) or equivalent organizational registration. For Professional, Freelancer, or Student memberships, you will need a valid ID, student ID, or a link to your professional profile (like LinkedIn) depending on the category."
  },
  {
    question: "How long does the approval process take?",
    answer: "Applications are typically reviewed by the Secretariat and approved by the Executive Committee within 7-14 business days. You will be notified via email of your status."
  },
  {
    question: "Can I upgrade my membership later?",
    answer: "Yes, you can request to upgrade your membership (for example, from Ordinary to Full Member once your business crosses the 2-year operational requirement). Upgrades are subject to approval and payment of the fee difference."
  },
  {
    question: "How does the annual renewal work?",
    answer: "Membership is valid for one year from the date of activation. You will receive a renewal notice 30 days before your membership expires. Renewals can be paid directly through the member portal."
  }
];
