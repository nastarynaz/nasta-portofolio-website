"use client";

import { cn } from "@/utils/helpers/cn";
import { useEffect, useRef } from "react";
import { MarqueeRow } from "@/modules/home/components/MarqueeRow";

export function Marquee({
  techStack,
  className,
  children,
  speed = "normal",
  pauseOnHover = true,
  direction = "left",
  ...props
}) {
  const scrollerRef1 = useRef(null);
  const scrollerRef2 = useRef(null);

  // Duplicate logos function
  useEffect(() => {
    function animateScroller(scroller) {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(".scroller-inner");
      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-cloned") === "true") {
        return; // Avoid cloning if already done
      }

      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach((item) => {
        const extendedLogos = item.cloneNode(true);
        extendedLogos.setAttribute("aria-hidden", "true");
        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute("data-cloned", "true");
    }

    animateScroller(scrollerRef1.current);
    animateScroller(scrollerRef2.current);
  }, [techStack]);

  return (
    <div
      className={cn(
        "marquee-container w-full overflow-hidden py-4 gap-2 flex flex-col",
        className
      )}
      {...props}
    >
      {/* First Marquee - Left to Right */}
      <MarqueeRow
        ref={scrollerRef1}
        speed={speed}
        pauseOnHover={pauseOnHover}
        techItems={techStack}
      />

      {/* Second Marquee - Right to Left */}
      <MarqueeRow
        ref={scrollerRef2}
        reverse={true}
        speed={speed}
        pauseOnHover={pauseOnHover}
        techItems={[...techStack].reverse()}
      />

      {children}
    </div>
  );
}
