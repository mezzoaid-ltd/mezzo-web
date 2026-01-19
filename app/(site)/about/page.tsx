import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection/about";
import OurStory from "@/components/OurStory";
import OurMission from "@/components/OurMission";
import OurValues from "@/components/OurValues";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import JoinUs from "@/components/JoinUs";

export const metadata: Metadata = {
  title: "About Us - Mezzo Aid | Empowering African Entrepreneurs",
  description:
    "Learn about Mezzo Aid's mission to help Nigerian entrepreneurs build fundable businesses through structured guidance and expert support.",
  keywords: [
    "about mezzo aid",
    "our mission",
    "african entrepreneurs",
    "startup support",
    "business funding",
  ],
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <OurMission />
      <OurValues />
      <Team />
      <Impact />
      <JoinUs />
    </>
  );
}
