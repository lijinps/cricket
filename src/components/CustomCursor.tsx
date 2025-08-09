"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CricketBatSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

function CricketBatSVG({
  width = 32,
  height = 32,
  className = "",
}: CricketBatSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 410.68 410.68"
      xmlSpace="preserve"
      width={width}
      height={height}
      fill="#000000"
      transform="rotate(90)"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path
              style={{ fill: "#eabd43" }}
              d="M124.203,237.148c1.979,1.98,4.624,15.082-5.271,24.979L4.593,376.464 c-6.123,6.124-6.123,16.144,0,22.268l7.355,7.355c6.123,6.123,16.143,6.123,22.267,0l114.339-114.34 c9.896-9.896,22.998-7.25,24.978-5.271L124.203,237.148z"
            ></path>
            <rect
              x="44.569"
              y="311.165"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -211.8256 152.8296)"
              style={{ fill: "#d2d46e" }}
              width="68"
              height="41.892"
            ></rect>
            <path
              style={{ fill: "#FF6361" }}
              d="M39.716,341.341L4.593,376.464c-6.123,6.124-6.123,16.144,0,22.268l7.355,7.355 c6.123,6.123,16.143,6.123,22.267,0l35.123-35.124L39.716,341.341z"
            ></path>
          </g>
          <path
            style={{ fill: "#d9ada0" }}
            d="M404.246,92.431c6.295-6.297,8.322-18.03,4.504-26.074l-13.797-29.061 c-3.82-8.043-13.525-17.75-21.57-21.568L344.322,1.93c-8.043-3.819-19.777-1.792-26.072,4.505L114.756,209.927 c-6.296,6.297-6.296,16.6,0,22.896l63.1,63.1c6.297,6.297,16.6,6.297,22.895,0L404.246,92.431z"
          ></path>
          <path
            style={{ fill: "#caa1a0" }}
            d="M313.525,17.711c-0.414-1.818-0.822-3.61-1.199-5.352L299.775,24.91 c4.086,18.286,7.373,38.393-8.615,54.38c-13.68,13.682-30.959,13.476-49.259,13.25c-3.234-0.04-6.489-0.079-9.728-0.029 l-17.23,17.229c7.414-2.424,16.625-2.322,26.776-2.201c19.647,0.24,41.897,0.508,60.048-17.642 C324.75,66.914,318.264,38.476,313.525,17.711z M272.16,182.581c-20.66,20.552-20.648,42.222-20.639,59.634 c0.001,0.993,0,1.971-0.003,2.942l15.238-15.238c0.731-12.446,3.733-24.518,15.981-36.703 c12.977-12.907,24.691-15.143,38.131-17.409l20.041-20.039c-7.309,2.682-14.322,3.865-21.512,5.075 C304.379,163.37,288.848,165.982,272.16,182.581z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();

    // Don't show custom cursor on touch devices
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Hide default cursor globally
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    // Hide cursor on all interactive elements
    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
      a, button, input, textarea, select, [role="button"], [tabindex] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      // Restore default cursor
      document.body.style.cursor = "auto";
      document.documentElement.style.cursor = "auto";

      // Remove the style element
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isTouchDevice]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        x: { duration: 0.1, ease: "linear" },
        y: { duration: 0.1, ease: "linear" },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      <CricketBatSVG width={32} height={32} className="drop-shadow-lg" />
    </motion.div>
  );
}
