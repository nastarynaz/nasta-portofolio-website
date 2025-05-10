import Hero from "@/src/modules/Hero";
import Maps from "@/src/modules/Maps";
import Skills from "@/src/modules/Skills";
import Contact from "@/src/modules/Contact";
import ProjectHero from "@/src/modules/ProjectHero";

export default function Home() {
  return (
    <>
      <Hero />
      <Maps />
      <Skills />
      <ProjectHero />
      <Contact />
    </>
  );
}
