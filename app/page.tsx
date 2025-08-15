import { Fragment } from "react";
import HomeComponent from "@/components/Home"; // Renamed import
import About from "@/components/About";
import HowIHelpYou from "@/components/HowIHelpYou";
import Projects from "@/components/Projects";
import Leadgeneration from "@/components/Leadgeneration";
import Designs from "@/components/Designs";
import WorkPlans from "@/components/WorkPlans";
import FailureandDocumentation from "@/components/FailureandDocumentation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <HomeComponent /> {/* Updated to use renamed import */}
      <About />
      <HowIHelpYou />
      <Projects />
      <Leadgeneration />
      <Designs />
      <WorkPlans />
      <FailureandDocumentation />
      <Contact />
    </Fragment>
  );
}