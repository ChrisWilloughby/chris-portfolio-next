import { HeroBanner } from "@/components/hero/hero-banner";
import { SnapshotSection } from "@/components/home/snapshot-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { ResumePreviewSection } from "@/components/home/resume-preview-section";
import { FinalCTASection } from "@/components/home/final-cta-section";
import { SinistralDesignSystemSection } from "@/components/home/sinistral-design-system-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Homepage Sections */}
      <main id="main-content">
        <SnapshotSection />
        <ResumePreviewSection />
        <FeaturedWorkSection />
        <SinistralDesignSystemSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
