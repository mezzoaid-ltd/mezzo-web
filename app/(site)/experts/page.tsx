import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection/experts";
import ExpertCategories from "@/components/ExpertCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedExperts from "@/components/FeaturedExperts";
import Pricing from "@/components/Pricing/experts";
import BecomeExpert from "@/components/BecomeExpert";
import FAQ from "@/components/FAQ/experts";

export const metadata: Metadata = {
  title:
    "Expert Marketplace - Mezzo Aid | Connect with Nigerian Business Professionals",
  description:
    "Connect with verified Nigerian accountants, lawyers, consultants, and entrepreneurs. Get personalized guidance to make your business fundable.",
  keywords: [
    "business experts",
    "Nigerian consultants",
    "business advisors",
    "startup mentors",
    "expert marketplace",
    "professional services",
  ],
};

export default function ExpertsPage() {
  return (
    <>
      <HeroSection />
      <ExpertCategories />
      <HowItWorks />
      <FeaturedExperts />
      <Pricing />
      <BecomeExpert />
      <FAQ />
    </>
  );
}
