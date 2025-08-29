"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, B1, B2 } from "@/components/Elements/Typography";
import { motion } from "motion/react";
import EducationCard from "@/modules/journey/components/EducationCard";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { educationData } from "@/data";
import { useMobile } from "@/utils/hooks/MobileProvider";

export default function Educations() {
  const ref = useRef(null);
  const isMobile = useMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <DefaultLayout>
      {/* Title and desc */}
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <H2>Education</H2>
        <B1>My educational journey</B1>
        <div className="w-24 h-1 mt-4 mb-8 bg-gradient-to-r from-red-300 to-red-500 rounded-full" />
      </div>
      <div ref={ref} className="flex relative flex-col mt-8">
        <motion.div
          style={{
            scaleY: scrollYProgress,
            height: isMobile
              ? `${(educationData.length - 1) * 200}px`
              : `${(educationData.length - 1) * 120}px`,
          }}
          className="absolute left-[26px] sm:left-[134px] top-6 w-1 bg-gradient-to-b from-red-300 to-red-500 origin-top z-0 rounded-full"
        />
        <div className="flex flex-col relative gap-4">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              degree={education.degree}
              institution={education.institution}
              year={education.year}
              description={education.description}
              isLast={index === educationData.length - 1}
              index={index}
              className="min-h-[100px]"
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
