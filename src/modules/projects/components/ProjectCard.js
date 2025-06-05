import Image from "next/image";
import { H3, B2 } from "@/components/Elements/Typography";
import { cn } from "@/utils/helpers/cn";

export const ProjectCard = ({ className }) => (
  <div
    className={cn(
      "relative space-y-4 border-neutral-200 border-[1px] p-4 group rounded-[10px] hover:bg-neutral-100 cursor-pointer",
      className
    )}
  >
    <div className="relative w-full h-[250px] rounded-[2px]">
      <Image
        alt="apakek"
        src="/projects/images/image.png"
        className="cover"
        fill
      />
    </div>
    <div>
      <H3 className="group-hover:underline group-hover:text-blue-900">
        Apalah.site
      </H3>
      <B2>
        Ini adalah sebuah apa ya kalau dibilang website ya sebenernya ga juga
        sih
      </B2>
    </div>
  </div>
);
