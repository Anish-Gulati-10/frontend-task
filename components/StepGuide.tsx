"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Step 1", description: "Register your account" },
  { title: "Step 2", description: "Deposit your funds" },
  { title: "Step 3", description: "KYC" },
  { title: "Step 4", description: "Start Trading & Earn Profits" },
];

export default function StepGuide() {

useEffect(() => {
  const steps = gsap.utils.toArray<HTMLElement>(".step");

  steps.forEach((step) => {
    gsap.fromTo(
      step,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: step,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);




  return (
    <div className="max-w-[1280px] w-full px-5 flex flex-col gap-[5px] justify-center relative">
      {steps.map((step, index) => {
        const isRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex w-full items-stretch gap-12 ${
              isRight ? "flex-row" : "lg:flex-row-reverse"
            }`}>
            <div className="blank" />

            <div className="flex flex-col gap-5 justify-center items-center min-h-[385px] w-[100px]">
              <h2 className="step text-[42px] opacity-0 text-white">{`0${
                index + 1
              }`}</h2>
              <div
                className={`flex-1 w-[3px] ${
                  isRight ? "bg-[#ffffff]" : "bg-[#a35ca2]"
                } `}
              />
            </div>

            <div
              className={`flex flex-col gap-6 justify-center max-w-[610px] pb-6 flex-1 ${
                isRight
                  ? "items-start"
                  : "items-start text-left lg:items-end lg:text-right"
              }`}>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg text-[#FFFFFF80]">{step.title}</h3>
                <p className="text-[#FFFFFFBF] text-[22px]">
                  {step.description}
                </p>
              </div>
              <div className="h-[250px] w-[350px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
