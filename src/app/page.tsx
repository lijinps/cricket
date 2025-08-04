import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScreenshotSection from "@/components/ScreenshotSection";
import FeaturesSection from "@/components/FeaturesSection";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import TeamCollaborationSection from "@/components/TeamCollaborationSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <Header />
      <HeroSection />
      {/* <ScreenshotSection />
      <FeaturesSection />
      <AIFeaturesSection />
      <TeamCollaborationSection />
      <FeaturesGrid />
      <CTASection />
      <Footer /> */}
    </div>
  );
}
