import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Features from "@/components/Features";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FounderStories from "@/components/FounderStories";

export const metadata: Metadata = {
  title:
    "Mezzo Aid - From Idea to Investment | Your Journey to Funding Readiness",
  description:
    "Build a fundable business with expert support. Track your progress through guided quests, unlock badges, and connect with verified experts. Join thousands of African entrepreneurs on the funding journey.",
  keywords:
    "business funding, entrepreneur support, funding readiness, African startups, business expert marketplace, quest-based learning, Nigeria entrepreneurs",
  openGraph: {
    title: "Mezzo Aid - From Idea to Investment",
    description:
      "Build a fundable business with expert support through our gamified roadmap.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Features />
      <About />
      <HowItWorks />
      <Impact />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <FounderStories />
    </main>
  );
}
