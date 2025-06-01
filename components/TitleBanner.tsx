import { cn } from "@/lib/utils";
import React from "react";
import { TextAnimate } from "./ui/text-animate";

type TitleBannerProps = {
  className?: string;
  label?: string;
  headingStart?: string;
  highlight?: string;
  headingEnd?: string;
  description?: string;
  animate?: boolean;
};

const TitleBanner = ({
  className,
  label,
  headingStart,
  highlight,
  headingEnd,
  description,
  animate,
}: TitleBannerProps) => {
  return (
    <div
      className={cn(
        "p-0 flex flex-col items-center justify-center gap-[5px]",
        className
      )}>
      <div className="backdrop-blur-md rounded-[20px] opacity-100 bg-[#ffffff02] px-[39px] py-2.5 border border-white/10 text-sm text-[#9f8bcf] box-border">
        <span className="leading-none">{label}</span>
      </div>
      {animate ? (
        <>
          <TextAnimate animation="blurInUp" by="character" once className="text-[58px] text-white text-center whitespace-pre-line font-bold">
            {(headingStart ?? "")}
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character" once className="text-[58px] text-white text-center whitespace-pre-line font-bold">
            {(headingEnd ?? "")}
          </TextAnimate>
        </>
      ) : (
        <h1 className="text-[58px] text-white text-center font-semibold">
          {headingStart} <span className="text-[#a35ca2]">{highlight}</span>{" "}
          {headingEnd}
        </h1>
      )}
      <p className="text-base text-[#FFFFFFBF]">{description}</p>
    </div>
  );
};

export default TitleBanner;
