import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Lazy load sections below the fold for better performance
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>,
});

const CivicDutySection = dynamic(() => import("@/components/CivicDutySection"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>,
});

const ReportDemoSection = dynamic(() => import("@/components/ReportDemoSection"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>,
});

const Footer = dynamic(() => import("@/components/Footer"));
const BackToTop = dynamic(() => import("@/components/BackToTop"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="civic-duty">
        <CivicDutySection />
      </div>
      <div id="report-demo">
        <ReportDemoSection />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}