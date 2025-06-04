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
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Tech Stack (Fast Speed)
            </h2>
            <Marquee
              speed="fast"
              className="bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded"
            >
              <div className="flex items-center space-x-8 text-white">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/20 px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Reverse Marquee */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Reverse Direction (Slow Speed)
            </h2>
            <Marquee reverse speed="slow" className="bg-green-100 py-4 rounded">
              <span className="text-green-800 font-medium px-8">
                ← This text moves from left to right (reverse direction) →
              </span>
            </Marquee>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
