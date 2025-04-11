"use client";
import React from "react";

import Image from "next/image";
import { PastEvents } from "./ui/sticky-scroll-reveal";

const pastEventData = [
    {
        title: "Startup Sparks: Vision to Venture",
        description: "An inspiring session with Mr. Lovesangeet Singh Aulakh, CEO of Countryside Express, as he shares his journey of building a multi-crore logistics startup",
        content: <img src="/images/events/01_new.jpg" alt="Vision to venture" className="w-full h-full object-cover" />,
    },
    {
        title: "Placement Success Stories – Inspiring Journeys from ICE!",
        description: "SPICE Society hosted an empowering session featuring Kartikey Jain (Reliance & HPCL) and Bhavya (Microsoft SDE) as they shared their placement journeys, challenges, and preparation tips. The event was packed with insights, inspiration, and interactive Q&A. A true boost for aspiring achievers!",
        content: <img src="/images/events/03_new.jpg" alt="Placement Stories" className="w-full h-full object-cover" />,
    },
    {
        title: "Code & Glow – A Sparkling Success!",
        description: "'Code & Glow' brought together 100+ coding enthusiasts for an electrifying Arduino experience. From glowing bulbs to glowing smiles, the event was a hit! Hosted by SPICE Society, it sparked curiosity, creativity, and plenty of tech-fueled fun",
        content: <img src="/images/events/code_glow.jpg" alt="Code&Glow" className="w-full h-full object-cover" />,
    },
   
    {
        title: "Tricky Circuits",
        description: "Tricky Circuits is an exciting electronics competition that challenges participants to solve circuit-based puzzles under time pressure. Test your creativity, logic, and hands-on skills as you tackle unique and mind-bending circuit challenges!",
        content: <img src="/images/events/05_new.jpg" alt="AI Seminar" className="w-full h-full object-cover" />,
    },
    {
        title: "RoboHunt",
        description: "RoboHunt is a thrilling robotics competition where teams program compact robots (under 6 kg and 20x20x20 cm) to autonomously navigate complex paths and collect target balls. Combining precision engineering with strategic coding, this event challenges participants to optimize their bots for speed, accuracy, and adaptability. ",
        content: <img src="/images/events/robohunt.jpg" alt="RoboHunt" className="w-full h-full object-cover" />,
    },
    {
        title: "AI/ML Workshop",
        description: "AI/ML Workshop is a hands-on session introducing the fundamentals of Artificial Intelligence and Machine Learning. Learn how smart systems work, build basic models, and explore real-world applications.",
        content: <img src="/images/events/01.jpg" alt="Circuit Workshop" className="w-full h-full object-cover" />,
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
