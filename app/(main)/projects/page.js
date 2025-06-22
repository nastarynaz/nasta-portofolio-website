import Contribution from "@/modules/projects/Contribution";
import Project from "@/modules/projects/Project";

export const metadata = {
  title: "Projects | Nasta Footprint",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <Project />
      <Contribution />
    </section>
  );
}
