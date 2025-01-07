import { Benefits } from "@/components/landing_page_ui/Benefits";
import { Features } from "@/components/landing_page_ui/Features";
import { Header } from "@/components/landing_page_ui/Header";
import { HeroSection } from "@/components/landing_page_ui/HeroSection";
import { Pricing } from "@/components/landing_page_ui/Pricing";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="flex-1 pt-16">
        <HeroSection />
        <Features />
        <Benefits />
        <Pricing />
      </div>
    </div>
  );
}
