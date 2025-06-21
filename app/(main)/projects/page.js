import Contribution from "@/modules/projects/Contribution";
import Project from "@/modules/projects/Project";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <Project />
      <Contribution />
    </section>
  );
}
