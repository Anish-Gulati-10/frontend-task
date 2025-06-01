import React from "react";
import TitleBanner from "./TitleBanner";
import Link from "next/link";
import { Button } from "./ui/button";
import { BorderBeam } from "./ui/border-beam";

const PricingSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-[50px] bg-[#060710] pb-[30px] ">
      <TitleBanner
        label="Compare Plans"
        headingStart="Compare your"
        highlight="Abcd"
        headingEnd="plan"
        description="Flexible Deposits for Every Trader"
      />
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-[3px] backdrop-blur-[15px]">

        <div className="flex flex-col justify-center gap-[15px] text-sm text-[#ffffffbf]">
            <p>Who It&apos;s For</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Initial Capital Requirement</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Spread Advantage</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Trading Fees</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Leverage Capacity</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Minimum Lot Size</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Trade Execution Limit</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Open Position Capacity</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Stop Out Threshold</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Margin Call Activation</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Swap Policy</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Risk Exposure</p>
            <div className="h-px w-full opacity-40 flex-none bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)]" />
            <p>Asset Options</p>
        </div>

        {Plans.map((plan, index)=>{
            return (
                <div key={index} className={`relative text-center border border-white/10 rounded-[15px] md:w-[350px] w-fit py-[30px] px-[25px] flex flex-col gap-[30px] ${index === 1 ? "" : "bg-[linear-gradient(156deg,_#3811387d,_#000_72%)]"}`}>
                  <h3 className="text-[30px] font-semibold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent ">{plan.title}</h3>
                  <div className="text-sm text-white flex flex-col gap-[15px] justify-center items-center">
                      <p>{plan.subtitle}</p>
                      {plan.data.map((item) => (
                          <>
                              <div className="bg-[linear-gradient(270deg,_#000,_#736496_53%,_#000)] w-full h-px"/>
                              <p className="max-w-[144px]">{item}</p>
                          </>
                      ))}
                  </div>
                  <Link href="#" className="mt-auto">
                      <Button className="!px-[25px] !py-2.5 text-base text-white bg-[#6142a5] hover:bg-[#6142a5d7] relative overflow-hidden">
                          Start Trading
                      </Button>
                  </Link>
                  {index ===1 && <BorderBeam size={200}/>}
                </div>
            )
        })}

      </div>
    </section>
  );
};

const Plans = [
  {
    title: "Abcd Vintage",
    subtitle:
      "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    data: [
      "$10%",
      "from 0.2 pips",
      "No Commission",
      "1:Unlimited",
      "0.01",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Moderate",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    title: "Abcd Cent",
    subtitle:
      "Designed for beginners ready to step into the trading world with minimal risk.",
    data: [
      "$10",
      "from 0.3 pips",
      "Zero Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Low",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    title: "Abcd Pro",
    subtitle:
      "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    data: [
      "$500",
      "from 0.1 pips",
      "No Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "High",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
];

export default PricingSection;
