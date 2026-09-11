import { Metadata } from "next";
import ContactForm from "@/components/sections/contact/contact-form";
import ContactDetails from "@/components/sections/contact/contact-details";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact NCIT",
  socialTitle: "Contact NCIT",
  description: "Reach the chamber secretariat at 136/1 Palaly Road, Parameswara Junction, Jaffna, for membership, partnership or media enquiries.",
  path: "/contact",
});

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
