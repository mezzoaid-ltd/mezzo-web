import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import QuestSystem from "@/components/QuestSystem";
import JourneySteps from "@/components/JourneySteps";
import ReadinessScore from "@/components/ReadinessScore";
import ExpertHelp from "@/components/ExpertHelp";
import SuccessStories from "@/components/SuccessStories";
import CTASection from "@/components/CTA";

export const metadata: Metadata = {
  title: "How It Works - Mezzo Aid | From Idea to Investment",
  description:
    "Learn how Mezzo Aid's quest system helps African entrepreneurs build fundable businesses through structured guidance, progress tracking, and expert support.",
  keywords: [
    "how it works",
    "quest system",
    "business readiness",
    "entrepreneur guide",
    "funding preparation",
    "African startups",
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection />
      <QuestSystem />
      <JourneySteps />
      <ReadinessScore />
      <ExpertHelp />
      <SuccessStories />
      <CTASection />
    </>
  );
}
