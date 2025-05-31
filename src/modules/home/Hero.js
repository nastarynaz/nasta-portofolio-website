import Image from "next/image";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H1, B1 } from "@/components/Elements/Typography";
import { Button } from "@/components/Elements/Button";
import { ArrowDownToDot } from "lucide-react";

export default function Hero() {
  return (
    <DefaultLayout className="items-center">
      <NavbarResolver />
      <div className="flex flex-row justify-evenly items-center">
        <div className="relative flex flex-col">
          <div>
            <span className="text-2xl">Hello, I&apos;m</span>
            <H1 className="text-6xl">Nasta Khoirunas</H1>
          </div>
          <div className="space-y-0">
            <B1 className="text-red-500 text-3xl font-jakarta-bold">
              A passionate
            </B1>
            <B1 className="text-red-500 text-3xl font-jakarta-bold">
              Front-End Developer
            </B1>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="px-[10px] py-[6px]">Get in touch</Button>
            <Button className="px-[10px] py-[6px]">Contact</Button>
          </div>
        </div>
        <div className="bg-red-500 relative aspect-[258/370] rounded-[10px] px-4 flex items-end justify-center">
          <div className="relative aspect-[223/316] w-[295px]">
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
      </div>
      <div className="flex flex-col gap-0 leading-none">
        <ArrowDownToDot className="text-red-500" />
      </div>
    </DefaultLayout>
  );
}
