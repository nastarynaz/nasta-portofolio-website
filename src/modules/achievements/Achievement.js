import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H2, B1 } from "@/components/Elements/Typography";
import { Search } from "lucide-react";

export default function Achievement() {
  return (
    <DefaultLayout>
      <NavbarResolver />
      {/* Title and desc */}
      <div>
        <H2>Achievements</H2>
        <B1>Appreciate that I got</B1>
        <div className="border-[1px] border-red-500" />
      </div>
      {/* Search input */}
      <div className="flex flex-row w-full my-4 gap-2 bg-neutral-50 rounded-[10px] border-neutral-300 border-[1px] p-2 focus-within:border-red-500">
        <Search className="text-red-500" />
        <input
          placeholder="Search for achievements"
          aria-label="Search for achievements"
          type="text"
          className="w-full text-base bg-transparent outline-none focus:outline-none"
        />
      </div>
    </DefaultLayout>
  );
}
