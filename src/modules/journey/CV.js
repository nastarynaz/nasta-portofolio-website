"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, B1 } from "@/components/Elements/Typography";
import { Button } from "@/components/Elements/Button";

export default function CV() {
  return (
    <DefaultLayout>
      <div className="h-[1px] mb-[20px] bg-red-500" />
      <div className="flex flex-col">
        <H2 className="font-bold text-2xl">That’s wrap up! Or is it?</H2>
        <B1>Curious More? Look CV Here!</B1>

        <Button link="/assets/docs/cv-nasta.pdf" className="mt-6" download>
          <Download size={15} /> <span>Download CV</span>
        </Button>
        <iframe
          width="100%"
          style={{ aspectRatio: 1 / 1.414 }}
          src="/assets/docs/cv-nasta.pdf"
          title="CV Muhammad Khoirunas"
          className="rounded-[10px] mt-6"
          loading="lazy"
        />
      </div>
      <div className="flex w-full justify-center h-[700px] items-center mt-10">
        <H2 className="font-bold text-left">
          That’s all from me. <br />
          Let’s work together in the future.
        </H2>
      </div>
    </DefaultLayout>
  );
}
