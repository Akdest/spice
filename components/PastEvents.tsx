"use client";
import React from "react";

import Image from "next/image";
import { PastEvents } from "./ui/sticky-scroll-reveal";

const pastEventData = [
    {
        title: "SPICE Launch",
        description: "Our grand club launch with 100+ attendees, keynote speeches, and fun activities.",
        content: <img src="/images/events/01_new.jpg" alt="SPICE Launch" className="w-full h-full object-cover" />,
    },
    {
        title: "Automation Workshop",
        description: "Hands-on experience with PLCs, IoT sensors, and basic programming.",
        content: <img src="/images/events/02_new.jpg" alt="Workshop" className="w-full h-full object-cover" />,
    },
    {
        title: "Robotics Challenge",
        description: "A thrilling competition where teams designed and programmed robots to complete complex tasks.",
        content: <img src="/images/events/03_new.jpg" alt="Robotics Challenge" className="w-full h-full object-cover" />,
    },
    {
        title: "AI & Machine Learning Seminar",
        description: "An insightful seminar covering the fundamentals and applications of AI and machine learning.",
        content: <img src="/images/events/04_new.jpg" alt="AI Seminar" className="w-full h-full object-cover" />,
    },
    {
        title: "Embedded Systems Project Fair",
        description: "Showcasing innovative embedded systems projects developed by our members.",
        content: <img src="/images/events/05_new.jpg" alt="Embedded Fair" className="w-full h-full object-cover" />,
    },
    {
        title: "Circuit Design Workshop",
        description: "A practical workshop focusing on circuit design and PCB fabrication techniques.",
        content: <img src="/images/events/06_new.jpg" alt="Circuit Workshop" className="w-full h-full object-cover" />,
    },
    {
        title: "   ",
        description: "",
        content: "" ,
    },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <PastEvents content={pastEventData} />
    </div>
  );
}
