import DefaultLayout from "@/components/Layout/DefaultLayout";
import { B1 } from "@/components/Elements/Typography";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Project() {
  return (
    <DefaultLayout>
      <div className="w-full gap-2 md:gap-4 lg:gap-8 grid grid-cols-1 sm:grid-cols-2">
        {/* Col 1 */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          className="grid grid-rows-3 md:gap-4 gap-2 lg:gap-8"
        >
          {/* Row 1 */}
          <Link href="/journey">
            <div className="relative bg-[url('/assets/images/links/journey.png')] bg-cover bg-center rounded-[10px] hover:grayscale-50 hover:scale-105 transition-all duration-500 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="font-light text-[4vw] sm:text-base text-white">
                Check Journey
              </B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
          {/* Row 2 */}
          <Link href="/achievements">
            <div className="relative bg-[url('/assets/images/links/achievement.png')] bg-cover bg-center rounded-[10px] hover:grayscale-50 hover:scale-105 transition-all duration-500 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="font-light text-[4vw] sm:text-base text-white">
                Check Achievement
              </B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
          {/* Row 3 */}
          <Link href="/projects">
            <div className="relative bg-[url('/assets/images/links/projects.png')] bg-cover bg-center rounded-[10px] hover:grayscale-50 hover:scale-105 transition-all duration-500 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="font-light text-[4vw] sm:text-base text-white">
                Check Project
              </B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
        </div>
        {/* Col 2 */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
          className="bg-red-500 flex items-center justify-center rounded-[10px] p-10"
        >
          <B1 className="text-white text-left sm:text-[30px] text-[6vw] font-jakarta-extrabold">
            “We don&apos;t just write code, we build possibilities.”
          </B1>
        </div>
      </div>
    </DefaultLayout>
  );
}
