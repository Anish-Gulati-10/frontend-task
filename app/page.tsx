import HeroSection from "@/components/HeroSection";
import PayoutSection from "@/components/PayoutSection";
import PricingSection from "@/components/PricingSection";
import TradeAnywhere from "@/components/TradeAnywhere";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <PricingSection />
      <PayoutSection />
      <TradeAnywhere />
    </main>
  );
}
