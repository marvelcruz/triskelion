import { Fragment } from "react";
import HomeComponent from "@/components/Home"; // Renamed import
import About from "@/components/About";
import HowIHelpYou from "@/components/HowIHelpYou";
import Designs from "@/components/Designs";
import Projects from "@/components/Projects";
import Leadgeneration from "@/components/Leadgeneration";
import Socialmediamangement from "@/components/Socialmediamangement";
import WorkPlans from "@/components/WorkPlans";
import FailureandDocumentation from "@/components/FailureandDocumentation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <HomeComponent /> {/* Updated to use renamed import */}
    </Fragment>
  );
}