"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/components/lib/utils";

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
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <>
    <section className="w-full hero-bg  lg:py-24 items-center justify-center">   
    <h1 className="text-3xl font-orbitron  md:text-4xl lg:text-6xl text-center font-extrabold leading-tight mb-4 text-gray-900 ">
      
       Past Events
  
    </h1>
        <motion.p className="mt-2 text-lg text-center mb-4 text-gray-800">
            A glimpse into our past events and activities.
           
        </motion.p>
    <motion.div
      className="relative scrollbar-hide overflow-y-auto flex h-[30rem] justify-center space-x-6  rounded-md p-10"
      ref={ref}
    >
      <div className="flex w-[100%] lg:w-[60%] items-start px-4">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="md:text-3xl text-md font-bold text-gray-800"
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
          <div className="h-40" />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-10 hidden h-[100%] w-[35%] overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
    </section>
    </>
  );
};
