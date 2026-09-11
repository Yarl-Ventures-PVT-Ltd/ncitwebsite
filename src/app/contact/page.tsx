import { Metadata } from "next";
import ContactForm from "@/components/sections/contact/contact-form";
import ContactDetails from "@/components/sections/contact/contact-details";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description: "Connect with the Northern Chamber of Information Technology for inquiries regarding membership, partnerships, investments, and more.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact NCIT"
        lede="To join, partner, invest, collaborate or request support, choose the route below and the enquiry will reach the right people."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <ContactForm />
      <ContactDetails />
    </>
  );
}
