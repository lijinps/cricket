"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CricketBallSVG from "./CricketBallSVG";

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface MovingCricketBallProps {
  ballCount?: number;
  speed?: number; // Speed multiplier (0.5 = slow, 1 = normal, 2 = fast)
}

export default function MovingCricketBall({
  ballCount = 3,
  speed = 1,
}: MovingCricketBallProps) {
  const [balls, setBalls] = useState<Ball[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    setIsVisible(true);

    // Generate balls based on ballCount and device type
    const generateBalls = (count: number): Ball[] => {
      const balls: Ball[] = [];
      const container = containerRef.current;
      const maxX = container ? container.offsetWidth : 500;
      const maxY = container ? container.offsetHeight : 400;

      // Reduce ball count and size on mobile
      const mobileAdjustedCount = isMobile ? Math.min(count, 1) : count;
      const baseSizeMultiplier = isMobile ? 0.8 : 1;
      const speedMultiplier = isMobile ? 0.8 : 1;

      for (let i = 0; i < mobileAdjustedCount; i++) {
        balls.push({
          id: i + 1,
          x: Math.random() * (maxX - 100) + 50,
          y: Math.random() * (maxY - 100) + 50,
          vx: (Math.random() - 0.5) * 4 * speed * speedMultiplier,
          vy: (Math.random() - 0.5) * 4 * speed * speedMultiplier,
          size: (Math.random() * 20 + 25) * baseSizeMultiplier,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8 * speed * speedMultiplier,
        });
      }

      return balls;
    };

    setBalls(generateBalls(ballCount));

    const animate = (currentTime: number) => {
      const deltaTime = lastTimeRef.current
        ? currentTime - lastTimeRef.current
        : 16.67;
      lastTimeRef.current = currentTime;
      const timeScale = deltaTime / 16.67;

      setBalls((prevBalls) => {
        return prevBalls.map((ball) => {
          let newX = ball.x + ball.vx * timeScale;
          let newY = ball.y + ball.vy * timeScale;
          let newVx = ball.vx;
          let newVy = ball.vy;

          const container = containerRef.current;
          const maxX = container ? container.offsetWidth - ball.size : 500;
          const maxY = container ? container.offsetHeight - ball.size : 400;

          if (newX <= 0 || newX >= maxX) {
            newVx = -newVx * 0.98;
            newX = newX <= 0 ? 0 : maxX;
          }

          if (newY <= 0 || newY >= maxY) {
            newVy = -newVy * 0.98;
            newY = newY <= 0 ? 0 : maxY;
          }

          const newRotation = ball.rotation + ball.rotationSpeed * timeScale;

          return {
            ...ball,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation,
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", checkMobile);
    };
  }, [ballCount, speed, isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 5 }}
    >
      <AnimatePresence>
        {balls.map((ball, index) => (
          <motion.div
            key={ball.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: ball.x,
              y: ball.y,
              rotate: ball.rotation,
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              scale: { duration: 0.3, delay: index * 0.1 },
              x: { duration: 0.05, ease: "linear" },
              y: { duration: 0.05, ease: "linear" },
              rotate: { duration: 0.05, ease: "linear" },
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            <motion.div
              animate={{
                y: isMobile ? 0 : [0, -10, 0],
              }}
              transition={{
                duration: isMobile ? 0 : 2 / speed,
                repeat: isMobile ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <CricketBallSVG width={ball.size} height={ball.size} />
            </motion.div>

            {!isMobile && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 1.5 / speed,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
