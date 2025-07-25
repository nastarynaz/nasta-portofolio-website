import AboutMe from "@/modules/journey/AboutMe";
import Education from "@/modules/journey/Education";
import Careers from "@/modules/journey/Careers";
import CV from "@/modules/journey/CV";

export const metadata = {
  title: "Journey | Nasta Footprint",
};

export default function JourneyPage() {
  return (
    <>
      <AboutMe />
      <Education />
      <Careers />
      <CV />
    </>
  );
}
