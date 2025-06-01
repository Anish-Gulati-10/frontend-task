import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <PricingSection />
    </main>
  );
}
