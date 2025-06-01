import { cn } from "@/lib/utils";
import React from "react";

type TitleBannerProps = {
  className?: string;
  label?: string;
  headingStart?: string;
  highlight?: string;
  headingEnd?: string;
  description?: string;
};

const TitleBanner = ({ className, label, headingStart, highlight, headingEnd, description }: TitleBannerProps) => {
  return (
    <div
      className={cn(
        "p-0 flex flex-col items-center justify-center gap-[5px]",
        className
      )}>
      <div className="backdrop-blur-md rounded-[20px] opacity-100 bg-[#ffffff02] px-[39px] py-2.5 border border-white/10 text-sm text-[#9f8bcf] box-border">
        <span className="leading-none">{label}</span>
      </div>
      <h1 className="text-[58px] text-white text-center">
        {headingStart}{" "}
        <span className="text-[#a35ca2]">
          {highlight}
        </span>{" "}
        {headingEnd}
      </h1>
      <p className="text-base text-[#FFFFFFBF]">
        {description}
      </p>
    </div>
  );
};

export default TitleBanner;
