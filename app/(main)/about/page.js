import AboutMe from "@/src/modules/AboutMe";
import Galleries from "@/src/modules/Galleries";
import Timeline from "@/src/modules/Timeline";
import CV from "@/src/modules/CV";

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen">
      <AboutMe />
      <Galleries />
      <Timeline />
      <CV />
    </section>
  );
}
