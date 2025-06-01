"use client";
import { useEffect, useState } from "react";

const LiveCounter = () => {
  const [count, setCount] = useState(999150);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="lg:text-[240px] text-[75px] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent helvetica">
      ${count.toLocaleString()}<span className="bg-gradient-to-b from-[#9f8bcf] to-[#9f8bcf]/40 bg-clip-text text-transparent">+</span>
    </div>
  );
};

export default LiveCounter;
