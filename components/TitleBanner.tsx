import { cn } from "@/lib/utils";
import React from "react";

type TitleBannerProps = {
  className?: string;
  label?: string;
  headingStart?: string;
  highlight?: string;
  headingEnd?: string;
};

const TitleBanner = ({ className, label }: TitleBannerProps) => {
  return (
    <div
      className={cn(
        "p-0 flex flex-col items-center justify-center gap-[5px]",
        className
      )}>
      <div className="backdrop-blur-md rounded-[20px] opacity-100 bg-white/5 px-[39px] py-2.5 border border-white/10 text-sm text-[#9f8bcf] box-border">
        <span className="leading-none">{label}</span>
      </div>
    </div>
  );
};

export default TitleBanner;
