import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlowOrb = ({ delay = 0 }) => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      });
    };

    const interval = setInterval(updatePosition, 5000); // Update every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-60 pointer-events-none"
      style={{
        filter: "blur(100px)",
      }}
      animate={{
        top: position.top,
        left: position.left,
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default function AnimatedGlowBackground() {
  return (
    <>
      <GlowOrb />
      <GlowOrb delay={1} />
      <GlowOrb delay={2.5} />
    </>
  );
}
