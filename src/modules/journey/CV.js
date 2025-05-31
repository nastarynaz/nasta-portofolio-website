"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, B1 } from "@/components/Elements/Typography";
import { Button } from "@/components/Elements/Button";

export default function CV() {
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center">
        <H2 className="font-bold text-2xl">That’s wrap up! Or is it?</H2>
        <B1>Curious More? Look CV Here!</B1>
        <Link
          href="/assets/docs/cv-nasta.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button>
            <Download /> <span>Download CV</span>
          </Button>
        </Link>

        <iframe
          width="100%"
          style={{ aspectRatio: 1 / 1.414 }}
          src="/assets/docs/cv-nasta.pdf"
          title="CV Muhammad Khoirunas"
          className="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-left">
          That’s all from me. <br />
          Let’s work together in the future.
        </h2>
      </div>
    </DefaultLayout>
  );
}
