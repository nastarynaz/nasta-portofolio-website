import DefaultLayout from "@/components/Layout/DefaultLayout";
import { B1 } from "@/components/Elements/Typography";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Project() {
  return (
    <DefaultLayout className="h-screen">
      <div className="w-full gap-10 grid grid-cols-2">
        <div className="grid grid-rows-3 gap-8">
          {/* Col 1 */}
          {/* Row 1 */}
          <Link href="/journey">
            <div className="relative bg-red-500 rounded-[10px] hover:bg-red-400 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="text-white">Check Journey</B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
          {/* Row 2 */}
          <Link href="/achievements">
            <div className="relative bg-red-500 rounded-[10px] hover:bg-red-400 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="text-white">Check Achievement</B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
          {/* Row 3 */}
          <Link href="/projects">
            <div className="relative bg-red-500 rounded-[10px] hover:bg-red-400 cursor-pointer h-[170px] flex items-center justify-center">
              <B1 className="text-white">Check Project</B1>
              <ExternalLink className="text-white absolute right-5 top-5" />
            </div>
          </Link>
        </div>
        {/* Col 2 */}
        <div className="bg-red-500 flex items-center justify-center rounded-[10px] p-10">
          <B1 className="text-white text-left sm:text-[40px] text-base font-jakarta-extrabold">
            “We don&apos;t just write code, we build possibilities.”
          </B1>
        </div>
      </div>
    </DefaultLayout>
  );
}
