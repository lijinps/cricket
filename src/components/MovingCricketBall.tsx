"use client";

import { useEffect, useState, useRef } from "react";
import CricketBallSVG from "./CricketBallSVG";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

export default function MovingCricketBall() {
  const [balls, setBalls] = useState<Ball[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    setIsVisible(true);

    // Initialize 3 balls with different starting positions and velocities
    const initialBalls: Ball[] = [
      {
        x: 100,
        y: 100,
        vx: 2,
        vy: 1.5,
        size: 40,
        rotation: 0,
        rotationSpeed: 3,
      },
      {
        x: 300,
        y: 150,
        vx: -1.8,
        vy: 2.2,
        size: 32,
        rotation: 0,
        rotationSpeed: -2,
      },
      {
        x: 200,
        y: 200,
        vx: 1.5,
        vy: -1.8,
        size: 36,
        rotation: 0,
        rotationSpeed: 4,
      },
    ];

    setBalls(initialBalls);

    const animate = () => {
      setBalls((prevBalls) => {
        return prevBalls.map((ball) => {
          // Update position
          let newX = ball.x + ball.vx;
          let newY = ball.y + ball.vy;
          let newVx = ball.vx;
          let newVy = ball.vy;

          // Get container bounds
          const container = containerRef.current;
          const maxX = container ? container.offsetWidth - ball.size : 500;
          const maxY = container ? container.offsetHeight - ball.size : 400;

          // Bounce off edges
          if (newX <= 0 || newX >= maxX) {
            newVx = -newVx;
            newX = newX <= 0 ? 0 : maxX;
          }

          if (newY <= 0 || newY >= maxY) {
            newVy = -newVy;
            newY = newY <= 0 ? 0 : maxY;
          }

          // Update rotation
          const newRotation = ball.rotation + ball.rotationSpeed;

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

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 5 }}
    >
      {balls.map((ball, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${ball.x}px`,
            top: `${ball.y}px`,
            transform: `translate(-50%, -50%) rotate(${ball.rotation}deg)`,
            zIndex: 20,
          }}
        >
          <div
            className="animate-bounce"
            style={{ animationDuration: `${1 + index * 0.3}s` }}
          >
            <CricketBallSVG width={ball.size} height={ball.size} />
          </div>

          {/* Trail effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-4 h-4 bg-red-500 rounded-full opacity-20 animate-ping"
              style={{
                animationDuration: "1.5s",
                animationDelay: `${index * 0.2}s`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
