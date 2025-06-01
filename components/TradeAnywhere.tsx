"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const TradeAnywhere = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -200 },
        {
          x: 400,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: true,
            //markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#060710] bg-[radial-gradient(16%_29%_at_50%_50%,#574c70,#00000069)] h-[85vh] w-full flex flex-col justify-center overflow-hidden relative">
      <div className="relative">
        <h1
          className="lg:text-[140px] text-4xl text-white font-medium text-center"
          ref={textRef}
          id="trade-anywhere">
          Trade Anytime, <span className="text-[#a35ca2]">Anywhere</span>
        </h1>
      </div>
      <div className="absolute inset-0 md:flex hidden justify-center items-center z-0 ">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.1}
          transitionSpeed={250}
          className="rounded-[15px] p-3 bg-[#0a0b17] rotate-[1deg]">
          <div className="bg-white rounded-[24px]">
            <Image
              src="/qr.png"
              alt="QR Code"
              width={230}
              height={220}
              className=""
            />
          </div>
        </Tilt>
      </div>

      <Image
        src="/AvailableOn.png"
        height={75}
        width={125}
        alt="Available on App store and Google Plkay Store"
        className="absolute bottom-8 mx-auto left-1/2 transform -translate-x-1/2"
      />
    </section>
  );
};

export default TradeAnywhere;
