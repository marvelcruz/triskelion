import { Fragment } from "react";
import About from "@/components/About";
import Provenresults from "@/components/Provenresults";
import Stacks from "@/components/Stacks";
import HowIHelpYou from "@/components/HowIHelpYou";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Services from "@/components/Services";
import Designs from "@/components/Designs";
import WorkPlans from "@/components/WorkPlans";
import FailureandDocumentation from "@/components/FailureandDocumentation";
import TheArtofthePencil from "@/components/TheArtofthePencil";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <About />
      <Provenresults />
      <Stacks />
      <HowIHelpYou />
      <Projects />
      <Recognition />
      <Services />
      <Designs />
      <WorkPlans />
      <FailureandDocumentation />
      <TheArtofthePencil />
      <Contact />
    </Fragment>
  );
}