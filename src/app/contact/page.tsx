import { Metadata } from "next";
import ContactHero from "@/components/sections/contact/contact-hero";
import ContactForm from "@/components/sections/contact/contact-form";
import ContactDetails from "@/components/sections/contact/contact-details";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description: "Connect with the Northern Chamber of Information Technology for inquiries regarding membership, partnerships, investments, and more.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </>
  );
}
