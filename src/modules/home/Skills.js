import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MapPin, ToggleRight, Lightbulb } from "lucide-react";
import { B1 } from "@/components/Elements/Typography";
import { techStack } from "@/modules/home/data/dataMarquee";
import { Marquee } from "@/modules/home/components/Marquee";

export default function Skills() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full relative">
        {/* Highlight */}
        <div className="text-base sm:justify-between sm:px-10 font-bold flex flex-col sm:flex-row gap-4">
          <div className="flex flex-row gap-2">
            <MapPin className="text-red-500" />
            <B1 className="">Based in Yogyakarta, Indonesia</B1>
          </div>
          <span className="sm:block hidden">|</span>
          <div className="flex flex-row gap-2">
            <ToggleRight className="text-red-500" />
            <B1 className="">Available Worldwide</B1>
          </div>
          <span className="sm:block hidden">|</span>
          <div className="flex flex-row gap-2">
            <Lightbulb className="text-red-500" />
            <B1 className="">Years of Experience</B1>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col mx-auto items-center justify-center pt-10 sm:w-[80%] lg:w-[75%]">
          <B1>
            Nasta is a passionate developer with a sharp focus on mobile app and
            frontend development, blending clean code with seamless user
            experiences. With deep expertise in TypeScript and JavaScript, Nasta
            thrives in building scalable, performant applications using React
            Native and Next.js. Whether it&apos;s crafting intuitive mobile
            interfaces or developing responsive, dynamic web apps, Nasta
            delivers products that are both visually engaging and functionally
            robust.
          </B1>
          <br />
          <B1>
            Driven by a love for elegant design and efficient architecture,
            Nasta constantly explores the latest in frontend technologies to
            bring bold ideas to life. From prototyping to production, every line
            of code is written with care, clarity, and purpose. With a proven
            track record of transforming concepts into high-quality digital
            solutions, Nasta is ready to tackle new challenges and build
            exceptional experiences for users around the world.
          </B1>
        </div>
        {/* Marquee */}
        <Marquee className="mt-20" techStack={techStack} />
      </div>
    </DefaultLayout>
  );
}
