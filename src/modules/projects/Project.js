import DefaultLayout from "@/components/Layout/DefaultLayout";
import { H2, H3, B1, B2 } from "@/components/Elements/Typography";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { Search } from "lucide-react";
import Image from "next/image";
import { ProjectCard } from "./components/ProjectCard";

export default function ProjectAll() {
  return (
    <DefaultLayout>
      <NavbarResolver />
      {/* Title and desc */}
      <div>
        <H2>Projects</H2>
        <B1>A whole projects compiled.</B1>
      </div>
      <div className="border-[1px] border-red-500" />
      {/* Search input */}
      <div className="flex flex-row w-full my-4 gap-2 bg-neutral-50 rounded-[10px] border-neutral-300 border-[1px] p-2 focus-within:border-red-500">
        <Search className="text-red-500" />
        <input
          placeholder="Search for projects"
          aria-label="Search for projects"
          type="text"
          className="w-full text-base bg-transparent outline-none focus:outline-none"
        />
      </div>
      {/* Card Wrapper */}
      <ProjectCard />
    </DefaultLayout>
  );
}
