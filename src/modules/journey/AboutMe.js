"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H1, B1, H3, B3, H4, H2 } from "@/components/Elements/Typography";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/utils/helpers/cn";
import { ArrowDownToDot } from "lucide-react";

const carouselItems = [
  {
    title: "Introduction",
    content:
      "I am Muhammad Khoirunas, often called Nasta. A developer who loves building digital solutions that inspire and create impact.",
  },
  {
    title: "Background",
    content:
      "Born in Yogyakarta, I began coding in university and found my passion for creating web apps while working on real-world projects.",
  },
  {
    title: "Philosophy",
    content:
      "I believe in clean code, user-first design, and continuous learning. Each project is a chance to grow and deliver true value.",
  },
  {
    title: "Goals",
    content:
      "My goal is to become a world-class developer, contribute to open source, mentor others, and create tech that empowers people.",
  },
];

export default function About() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <DefaultLayout>
      <NavbarResolver />

      {/* Hero Section */}
      <div
        className="text-center space-y-4 mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <H2>
          Hey, I guess you are really{" "}
          <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
            interested
          </span>{" "}
          about me!
        </H2>
        <B1 className="text-gray-600">Let&apos;s deep down a bit!</B1>
      </div>

      <Carousel
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        setApi={setApi}
        className="w-full overflow-visible"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="py-10">
          {carouselItems.map((item, index) => {
            const isCenter = index === current;
            // Calculate distance considering loop - find minimum distance in both directions
            const directDistance = Math.abs(index - current);
            const wrapDistance = carouselItems.length - directDistance;
            const distance = Math.min(directDistance, wrapDistance);

            return (
              <CarouselItem key={index} className="basis-full lg:basis-1/3">
                <div className="flex justify-center px-2 relative">
                  <div
                    className={cn(
                      "border-[1px] border-red-500 rounded-[10px] px-4 py-2 transition-all duration-300 w-[90%] max-w-[400px] min-h-[200px]",
                      isCenter
                        ? "scale-110 blur-none shadow-lg z-10 relative"
                        : distance === 1
                        ? "opacity-90 blur-xs scale-95"
                        : "opacity-80 blur-sm scale-90"
                    )}
                  >
                    <H4 className="mb-2">{item.title}</H4>
                    <div className="w-[60%] h-[1px] mb-4 bg-red-500" />
                    <B3 className="text-gray-700">{item.content}</B3>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          variant="red"
          className="rounded-[10px] cursor-pointer"
        />
        <CarouselNext variant="red" className="rounded-[10px] cursor-pointer" />
      </Carousel>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className={cn(
          "transition-all flex flex-col  items-center mt-24 leading-none gap-4 duration-800"
        )}
      >
        <span className="text-sm font-light">Scroll to explore</span>
        <ArrowDownToDot className="text-red-500 animate-bounce group-hover:text-red-400 transition-colors" />
      </div>
    </DefaultLayout>
  );
}
