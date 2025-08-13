"use client";

import { motion } from "framer-motion";
import { stories } from "@/constants";
import { motionValues } from "@/lib/utils";

const Stories = () => {
  const { title, desc, values } = stories;

  return (
    <section id="stacks" className="section section_px section-gap space-y-8">
      <div>
        <motion.h2 className="section-h2 mb-8" {...motionValues}>
          {title}
        </motion.h2>
        <motion.h3 className="section-h3__ mb-8" {...motionValues}>
          {desc}
        </motion.h3>
      </div>

      <main className="">
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex-center gap-4 basis-1/3 bg-black rounded-xl p-3 shadow-lg"
              {...motionValues}
            >
              <div className="flex flex-col gap-2 text-center">
                <h3 className="section-h3__">{value.title}</h3>
                <p className="section-p__ italic">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Stories;
