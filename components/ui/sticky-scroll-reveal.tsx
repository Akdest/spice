"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/components/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

export const PastEvents = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const visibleCards = isLargeScreen || showAll ? content : content.slice(0, 3);
    const breakpoints = visibleCards.map((_, index) => index / visibleCards.length);
    const closestIndex = breakpoints.reduce((acc, bp, i) => {
      const dist = Math.abs(latest - bp);
      return dist < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closestIndex);
  });

  const displayedContent = isLargeScreen || showAll ? content : content.slice(0, 3);

  return (
    <section className="w-full hero-bg py-12 lg:py-24 items-center justify-center">
      <h1 className="text-3xl font-orbitron md:text-4xl lg:text-6xl text-center font-extrabold leading-tight mb-4 text-gray-900">
        Archived Missions
      </h1>
      <motion.p className="mt-2 text-lg text-center mb-4 text-gray-800">
        A glimpse into our past events and activities.
      </motion.p>

      <motion.div
        className="relative scrollbar-hide overflow-y-auto flex h-[30rem] justify-center space-x-6 rounded-md p-6"
        ref={ref}
      >
        {/* Timeline Text */}
        <div className="flex w-full lg:w-[60%] items-start px-2">
          <div className="w-full">
            {displayedContent.map((item, index) => (
              <div key={item.title + index} className="my-10 lg:my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg mt-6 max-w-2xl text-blue-600"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}

            {/* Show More / Show Less Toggle on sm/md */}
          

{/* Toggle Button for sm/md */}
{!isLargeScreen && content.length > 3 && (
  <div className="flex justify-center">
    <button
      onClick={() => setShowAll(!showAll)}
      className="mt-4 z-30 px-5 py-3 flex items-center gap-2 border border-blue-500 text-blue-500 hover:text-white rounded-[0.4rem] backdrop-blur-md bg-white/10 shadow-[0_0_12px_rgba(0,170,255,0.4)] group overflow-hidden transition-all duration-300"
    >
      {/* Arrow Icon */}
      {showAll ? (
        <ChevronUp className="z-10 relative transition-transform text-blue-600 duration-300 group-hover:-translate-y-1" />
      ) : (
        <ChevronDown className="z-10 relative transition-transform text-blue-600 duration-300 group-hover:translate-y-1" />
      )}

      {/* Button Label */}
      <span className="font-bold text-blue-600 tracking-wide">
        {showAll ? "Conceal Mission Logbook" : "Reveal Mission Logbook"}
      </span>

      {/* Glow Ping on Hover */}
      <span className="absolute inset-0 rounded-[0.4rem] bg-blue-500 opacity-0 group-hover:opacity-10 group-hover:animate-ping-fast pointer-events-none"></span>
    </button>
  </div>
)}

            <div className="h-20" />
          </div>
        </div>

        {/* Sticky Preview on lg only */}
        {isLargeScreen && (
          <div
            className={cn(
              "sticky top-10 h-[100%] w-[35%] overflow-hidden rounded-md hidden lg:block",
              contentClassName,
            )}
          >
            {content[activeCard]?.content ?? null}
          </div>
        )}
      </motion.div>
    </section>
  );
};
