import Github from "@/src/modules/Github";
import ProjectAll from "@/src/modules/ProjectAll";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen">
      <Github />
      <ProjectAll />
    </section>
  );
}
