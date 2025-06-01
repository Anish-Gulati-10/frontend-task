import React from "react";
import TitleBanner from "./TitleBanner";
import LiveCounter from "./Counter";

const PayoutSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-[15px] bg-[#060710] pt-[100px]">
      <TitleBanner
        label="Payouts"
        animate={true}
        headingStart="We&apos;ve Paid Out Over"
        headingEnd="$1M to Traders"
        description="Your Trust is Our Fuel—Power Up with Abcd"
      />
      <LiveCounter />
    </section>
  );
};

export default PayoutSection;
