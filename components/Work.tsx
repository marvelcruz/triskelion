"use client";

import { motion } from "framer-motion";
import { works } from "@/constants";
import Stack from "./Stack";
import { motionValues } from "@/lib/utils";

const Stacks = () => {
  const { title, values } = works;

  return (
    <section id="stacks" className="section section_px section-gap space-y-8">
      <div>
        <motion.h2 className="section-h2 mb-8" {...motionValues}>
          {title}
        </motion.h2>
      </div>

      <main>
        <div className="flex flex-wrap flex-col sm:flex-row gap-y-8">
          {values.map((value, index) => (
            <motion.div
              className="flex itmes-center gap-4 basis-1/2"
              {...motionValues}
            >
              <value.icon className="size-20 text-color-1" />
              <div className="flex flex-col gap-2">
                <h3 className="section-h3_">{value.title}</h3>
                <p className="section-p_">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Stacks;
