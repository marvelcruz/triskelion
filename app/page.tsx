import { Fragment } from "react";
import HomeComponent from "@/components/Home"; // Renamed import
import About from "@/components/About";
import HowIHelpYou from "@/components/HowIHelpYou";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
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
      <Services />
      <Designs />
      <WorkPlans />
      <FailureandDocumentation />
      <Contact />
    </Fragment>
  );
}