import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MapPin, ToggleRight, Lightbulb } from "lucide-react";
import { B1 } from "@/components/Elements/Typography";
import { Marquee } from "@/modules/home/components/Marquee";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
];

export default function Skills() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 items-center justify-center">
        {/* Highlight */}
        <div className=" text-base justify-between font-bold flex flex-row gap-4">
          <B1 className="flex flex-row gap-2">
            <MapPin className="text-red-500" /> Based in Yogyakarta, Indonesia
          </B1>
          |
          <B1 className="flex flex-row gap-2">
            <ToggleRight className="text-red-500" /> Onsite and Remote Available
          </B1>
          |
          <B1 className="flex flex-row gap-2">
            <Lightbulb className="text-red-500" /> 1+ Experienced Year
          </B1>
        </div>
        {/* Description */}
        <div className="md:w-[70%] flex justify-center mt-4">
          Nasta is a passionate Developer with a strong focus on mobile app and
          frontend development. Proficient in TypeScript and JavaScript
          especially in Next.js and React Native environment.
          <br />
          Nasta is a passionate Developer with a strong focus on mobile app and
          frontend development. Proficient in TypeScript and JavaScript
          especially in Next.js and React Native environment
        </div>
        {/* Marquee */}
        <div>
          {/* Onverse Marquee */}
          {/* Reverse Marquee */}
        </div>
      </div>
    </DefaultLayout>
  );
}
