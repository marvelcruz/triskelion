"use client";

import { motion } from "framer-motion";
import { stacks, supports } from "@/constants";
import Stack from "./Stack";
import { motionValues } from "@/lib/utils";

const Stacks = () => {
  const { title, description, tools } = stacks;

  return (
    <section id="stacks" className="section section_px section-gap">
      <div>
        <motion.h2 className="section-h2 mb-8" {...motionValues}>
          {title}
        </motion.h2>
      </div>

      <main className="flex-center flex-col gap-8 lg:flex-row">
        <div className="basis-1/2 flex-center">
          <motion.div className="space-y-3" {...motionValues}>
            <h3 className="section-h3_">Here's How I Can Support You</h3>
            <div className="flex flex-col gap-3">
              {supports.map(({ title, values }, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="section-h4">
                    <span>{index + 1}. </span>
                    {title}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {values.map((value, index) => (
                      <p key={index} className="section-p_ ml-4">
                        <span className="font-bold">• </span>
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="basis-1/2 flex flex-center flex-col">
          <motion.div
            className="grid grid-cols-6 gap-1 sm:gap-2 place-items-center"
            {...motionValues}
          >
            {Array.from({ length: 30 }).map((_, index) => {
              const stackStyles =
                index % 2 === 0
                  ? "bg-white"
                  : "bg-gradient-to-b from-color-3 to-transparent";

              return (
                <motion.div
                  key={index}
                  className={`flex-center size-10 sm:size-12 md:size-14 rounded-full ${stackStyles} bg-opacity-10`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                >
                  <Stack
                    index={index}
                    className="text-white size-5 sm:size-7"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="flex-center flex-wrap gap-4 mt-10"
            {...motionValues}
          >
            {tools.map((tool, index) => (
              <p key={index} className="section-p">
                {tool}
              </p>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Stacks;
