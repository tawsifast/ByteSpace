import { CourseDiscovery } from "@/components/CourseDiscovery";
import { CtaBanner } from "@/components/CtaBanner";
import { GrowthSection } from "@/components/GrowthSection";
import { HeroSection } from "@/components/HeroSection";
import { InstructorSection } from "@/components/InstructorSection";
import { LearningPaths } from "@/components/LearningPaths";
import { PartnerTrustBar } from "@/components/PartnerTrustBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PartnerTrustBar />
        <CourseDiscovery />
        <LearningPaths />
        <GrowthSection />
        <InstructorSection />
        <CtaBanner />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
