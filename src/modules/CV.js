"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function CV() {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-[80%] flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-center w-[40%] items-center">
          <h2 className="font-bold text-2xl">You can check my CV too:</h2>
          <iframe
            width="100%"
            style={{ aspectRatio: 1 / 1.414 }}
            src="/assets/docs/cv-nasta.pdf"
            title="CV Muhammad Khoirunas"
            className="rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
          <div className="group w-[70%] bg-orange rounded-full shadow-lg flex justify-center items-center mt-4 p-2">
            <Link
              href="/assets/docs/cv-nasta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-x-3 text-white group-hover:underline group-hover:scale-105 ease-in-out duration-300 font-bold"
            >
              <Download /> Download CV
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-left">
            That’s all from me. <br />
            Let’s work together in the future.
          </h2>
        </div>
      </div>
    </section>
  );
}
