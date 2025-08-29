import AboutMe from "@/modules/journey/AboutMe";
import Educations from "@/modules/journey/Educations";
import Careers from "@/modules/journey/Careers";
import CV from "@/modules/journey/CV";

export const metadata = {
  title: "Journey | Nasta Footprint",
};

export default function JourneyPage() {
  return (
    <>
      <AboutMe />
      <Educations />
      <Careers />
      <CV />
    </>
  );
}
