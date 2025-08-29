"use client";

import { Download } from "lucide-react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, B1 } from "@/components/Elements/Typography";
import { Button } from "@/components/Elements/Button";
import { motion } from "motion/react";

export default function CV() {
  return (
    <DefaultLayout>
      {/* Title and desc */}
      <div
        className="text-center space-y-4 mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <H2>
          And that&apos;s a{" "}
          <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
            wrap up
          </span>{" "}
          about me!
        </H2>
        <B1 className="text-gray-600">Curious More? Download my CV Here!</B1>
      </div>

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="flex flex-col items-center mt-8 space-y-6"
      >
        {/* Download Button */}
        <div>
          <Button link="/assets/journey/cv-nasta.pdf" download>
            <Download size={20} className="mr-2" />
            <B1 className="text-white">Download CV</B1>
          </Button>
        </div>

        {/* CV Preview */}
        <div className="w-full">
          <div className="bg-white rounded-[20px] shadow-xl border border-red-100 p-4 hover:shadow-2xl transition-all duration-500">
            <iframe
              width="100%"
              style={{ aspectRatio: 1 / 1.414 }}
              src="/assets/journey/cv-nasta.pdf"
              title="CV Muhammad Khoirunas"
              className="rounded-[15px] h-[70vh] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
