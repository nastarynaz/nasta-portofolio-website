import React from "react";
import { cn } from "@/utils/helpers/cn";

// Simple Marquee Component
export function Marquee({
  children,
  className,
  reverse = false,
  speed = "normal",
  pauseOnHover = true,
  ...props
}) {
  const speedMap = {
    slow: "30s",
    normal: "20s",
    fast: "10s",
  };

  return (
    <div
      className={cn("relative overflow-hidden whitespace-nowrap", className)}
      {...props}
    >
      <div
        className={cn(
          "inline-block animate-marquee",
          pauseOnHover && "hover:pause-animation"
        )}
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {children}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className="inline-block animate-marquee"
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
