"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H1, B1 } from "@/components/Elements/Typography";
import { Button } from "@/components/Elements/Button";
import { ArrowDownToDot } from "lucide-react";
import { cn } from "@/utils/helpers/cn";
import { useRef } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const scrollerRef = useRef(null);
  const fullText = "Nasta Khoirunas";

  const occupationText = [
    "Front-End Developer",
    "Mobile App Developer",
    "Project Manager",
    "Business Analyst",
  ];

  // Duplicate occupation text for animation
  useEffect(() => {
    const scroller = scrollerRef.current;

    function animateScroller() {
      if (!scroller) return;

      const textScroller = scroller.querySelector(".text-scroll");
      if (!textScroller) return;

      if (textScroller.getAttribute("data-cloned") === "true") {
        return; // Avoid cloning if already done
      }
      const textScrollerChildren = Array.from(textScroller.children);

      textScrollerChildren.forEach((item) => {
        const extendedText = item.cloneNode(true);
        textScroller.appendChild(extendedText);
      });
      textScroller.setAttribute("data-cloned", "true");
    }

    // Only run after the component is complete to ensure DOM is ready
    if (isComplete) {
      animateScroller();
    }
  }, [isComplete]);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Typing Effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, fullText]);

  // Cursor Effect
  useEffect(() => {
    if (!isComplete) return;
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [isComplete]);

  return (
    <DefaultLayout className="items-center flex flex-col gap-6">
      <NavbarResolver />
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full lg:items-center">
        {/* Left Content */}
        <div className="relative flex space-y-6 flex-col">
          {/* Main Text */}
          <div className="animate-fade-in w-full text-left space-y-2">
            <span className="text-[4vw] sm:text-2xl">Hello, I&apos;m</span>
            <H1 className="text-[10vw] sm:text-6xl">
              {displayText}
              {!isComplete && showCursor && (
                <span className="animate-pulse">|</span>
              )}
            </H1>
            {/* Animated Underline */}
            <div
              className={cn(
                "h-1 bg-gradient-to-r from-red-500 to-black-500 rounded-[10px] transition-all duration-1000",
                isComplete ? "w-full opacity-100" : "w-0 opacity-0"
              )}
            />
          </div>

          {/* Description Text */}
          <div
            className={cn(
              "space-y-0 transition-all duration-800 ",
              isComplete
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            )}
          >
            <B1 className="text-red-300 text-[4vw] sm:text-base font-light">
              a passionate
            </B1>
            {/* Animated Occupation Text */}
            <div
              ref={scrollerRef}
              className="h-[5vh] sm:h-12 overflow-hidden relative"
            >
              <div
                className={cn(
                  "text-scroll transition-transform duration-1000 ease-in-out",
                  isComplete && "animate-textSlideUp"
                )}
              >
                {occupationText.map((text) => (
                  <div
                    key={text}
                    className="h-[5vh] sm:h-12 flex items-center justify-left"
                  >
                    <B1 className="bg-gradient-to-r  from-red-300 to-red-500 bg-clip-text text-transparent text-[5vw] sm:text-4xl font-jakarta-bold">
                      {text}
                    </B1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Button */}
          <div
            className={cn(
              "space-y-0 transition-all hidden lg:flex flex-row gap-4 duration-800 delay-500",
              isComplete
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            )}
          >
            <Button link="#contact" className="w-[170px] py-[6px]">
              Get in touch
            </Button>
            <Button link="/projects" className="w-[170px] py-[6px]">
              View Portofolio
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div
          className={cn(
            "relative flex flex-col gap-2 transition-all duration-800",
            isComplete
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          )}
        >
          <Button link="#contact" className="lg:hidden block w-full">
            Get in touch
          </Button>
          <div
            className={cn(
              "space-y-0  bg-red-500 relative aspect-[258/370] rounded-[10px] px-4 flex items-end justify-center"
            )}
          >
            {/* Photo */}
            <div className="relative aspect-[223/316] w-full lg:w-[225px] xl:w-[255px]">
              <div className="absolute aspect-[223/316] w-full h-full">
                <Image
                  src="/assets/images/foto-nasta-khoirunas.png"
                  alt="Nasta"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <Button link="/projects" className="lg:hidden block w-full">
            View Portofolio
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "transition-all flex flex-col  items-center mt-20 leading-none gap-4 duration-800 ",
          isComplete
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4"
        )}
      >
        <span className="text-sm font-light">Scroll to explore</span>
        <ArrowDownToDot className="text-red-500 animate-bounce group-hover:text-red-400 transition-colors" />
      </div>
    </DefaultLayout>
  );
}
