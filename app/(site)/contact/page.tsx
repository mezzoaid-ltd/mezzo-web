import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection/contact";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ/contact";
import Map from "@/components/Map";

export const metadata: Metadata = {
  title: "Contact Us - Mezzo Aid | Get in Touch",
  description:
    "Have questions about Mezzo Aid? Contact our support team. We're here to help Nigerian entrepreneurs succeed.",
  keywords: [
    "contact mezzo aid",
    "customer support",
    "help",
    "get in touch",
    "entrepreneur support",
  ],
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <Map />
    </>
  );
}
