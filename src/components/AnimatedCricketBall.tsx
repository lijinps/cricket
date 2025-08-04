"use client";

import { useEffect, useState } from "react";
import CricketBallSVG from "./CricketBallSVG";

export default function AnimatedCricketBall() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Create a moving animation pattern
    let angle = 0;
    const radius = 100;
    const centerX = 200;
    const centerY = 150;

    const animate = () => {
      angle += 0.02;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      setPosition({ x, y });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className={`absolute transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      <div className="animate-bounce">
        <CricketBallSVG width={48} height={48} />
      </div>

      {/* Shadow effect */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
        <div className="w-8 h-2 bg-black opacity-20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
