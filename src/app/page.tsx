import { SiteHeader } from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import { PartnerTrustBar } from "@/components/PartnerTrustBar";
import { CourseDiscovery } from "@/components/CourseDiscovery";
import { LearningPaths } from "@/components/LearningPaths";
import { ValuePropSplitSection } from "@/components/ValuePropSplitSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
         <HeroSection/>
        <PartnerTrustBar />
        <CourseDiscovery />
        <LearningPaths />
        <ValuePropSplitSection />
        <CtaBanner />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
