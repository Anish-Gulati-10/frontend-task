import React from "react";
import TitleBanner from "./TitleBanner";
import StepGuide from "./StepGuide";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-[100px] bg-[#060710] gap-[50px] relative">
      <div className="absolute inset-0 rounded-[inherit] z-0">
        <Image
          src="/herobg.png"
          alt="Background"
          fill
          className="object-cover object-center rounded-[inherit] opacity-10"
          sizes="100vw"
          priority
        />
      </div>
      <TitleBanner
        label="Our Process"
        headingStart="Become a"
        highlight="Abcd Pro"
        headingEnd="in sec..."
        description="🚀 Sign up. Fund. Trade."
      />
      <StepGuide />
      <div className="!px-4 !py-3 text-base text-white bg-[#6142a5] hover:bg-[#6142a5d7] relative rounded-md flex items-center gap-2 cursor-pointer">
        Open FREE Account <ArrowUpRight size={16} />
        <BorderBeam size={40} colorFrom="#FFFFFF" colorTo="#FFFFFF50"/>
      </div>
    </section>
  );
};

export default HeroSection;
