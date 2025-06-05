import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H2, B1 } from "@/components/Elements/Typography";
import { ChevronRight, ChevronLeft, ArrowDownToDot } from "lucide-react";
import { cn } from "@/utils/helpers/cn";

export default function About() {
  return (
    <DefaultLayout>
      <NavbarResolver />
      <div>
        <H2>Hey, I guess you are really interested about me!</H2>
        <B1>Lets deep down a bit!</B1>
      </div>
      <div className="border-[1px] border-red-500 px-20 py-10 flex items-end flex-col rounded-[36px] my-10 w-[60%] mx-auto">
        <B1 className="w-full">
          My name is Muhammad Khoirunas, but I often called Nasta. So to make an
          ease memorable name, I brand myself into: “Nasta Khoirunas”
        </B1>
        <div className="flex flex-row gap-10 items-center mt-4">
          <div className="flex flex-row gap-2">
            <div className={cn("rounded-full h-[13px] w-16 bg-red-500")} />
            <div className={cn("rounded-full h-[13px] w-4 bg-red-300")} />
            <div className={cn("rounded-full h-[13px] w-4 bg-red-300")} />
          </div>
          <div className="flex flex-row gap-2">
            <div className="bg-red-500 rounded-full aspect-square h-[30px] flex justify-center items-center hover:bg-red-400 cursor-pointer">
              <ChevronLeft className="text-center text-white" />
            </div>
            <div className="bg-red-500 rounded-full aspect-square h-[30px] flex justify-center items-center hover:bg-red-400 cursor-pointer">
              <ChevronRight className="text-center text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center leading-none">
        <ArrowDownToDot className="text-red-500" />
      </div>
    </DefaultLayout>
  );
}
