"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 200,
  height = 200,
  className = "",
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback SVG logo if image is not found
  const FallbackLogo = () => (
    <div
      className={`inline-flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full ${className}`}
      style={{ width, height }}
    >
      <div className="text-white font-bold text-center">
        <div className="text-xs">🏏</div>
        <div className="text-xs font-bold">TOP</div>
      </div>
    </div>
  );

  if (imageError) {
    return <FallbackLogo />;
  }

  return (
    <Image
      src="/cricket-logo.png"
      alt="TOP Cricket Team Logo"
      width={width}
      height={height}
      className={`rounded-lg ${className}`}
      priority
      onError={() => setImageError(true)}
    />
  );
}
