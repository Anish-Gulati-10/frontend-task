import React from "react";
import TitleBanner from "./TitleBanner";
import StepGuide from "./StepGuide";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-[100px] bg-[#060710] gap-[50px]">
      <TitleBanner
        label="Our Process"
        headingStart="Become a"
        highlight="Abcd Pro"
        headingEnd="in sec..."
        description="🚀 Sign up. Fund. Trade."
      />
      <StepGuide />
      <Button className="!px-4 !py-3 text-base text-white bg-[#6142a5] hover:bg-[#6142a5d7] relative overflow-hidden" borderRadius="15px">
        <span className="flex items-center gap-2">
          Open FREE Account <ArrowUpRight size={16} />
        </span>
      </Button>


    </section>
  );
};

export default HeroSection;
