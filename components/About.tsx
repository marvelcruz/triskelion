"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { details } from "@/constants";
import { motionValues } from "@/lib/utils";

const About = () => {
  const { aboutTitle, aboutSubtitle, aboutDesc } = details;

  return (
    <section
      id="about"
      className="section section_px mt-[90px] h-fit lg:h-hero text-white"
    >
      <main className="about">
        <div className="flex flex-col gap-5 sm:gap-7">
          <motion.h1 className="about-title" {...motionValues}>
            {aboutTitle.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 className="about-subtitle" {...motionValues}>
            <span>{"[ "}</span>
            {aboutSubtitle}
            <span>{" ]"}</span>
          </motion.h2>

          <motion.div {...motionValues}>
            <p className="about-desc mb-2">I'm passionate about transforming how businesses operate behind the scenes. Through my work, I help lean teams unlock their full potential with smart automation, streamlined processes, and strategic systems that make everything flow effortlessly.</p>
            <p className="about-desc mb-2">Over the past 5 years, I've partnered with 3 businesses and, most significantly, supported 1 Canadian Region and 18 chapters of the world's largest and most successful referral networking organization BNI®, being part of the team that grew it to #1 from 2020 to 2025. Through this work, I helped slash operational costs by 30% and boost productivity by 40%. My diverse expertise spans <span className="font-bold">Executive administration, Process automation, Financial Operations Support,</span> and <span className="font-bold">technical coordination, </span> plus specialized skills in GoHighLevel, Zapier automation, Typeform programming, and graphic design.</p>
            <p className="about-desc mb-2">This versatility means I can tackle everything from complex workflow automation and project management to creative marketing support and systems coordination.</p>
            <p className="about-desc mb-2">I love building solutions that make ambitious teams run like enterprise-grade machines without the enterprise overhead.</p>
            <p className="about-desc mb-2 italic">My approach is simple: identify what's slowing you down, create systems that work smarter, and build sustainable foundations that grow with your vision.</p>
            <p className="about-desc mb-2">When I'm not crafting operational magic, you'll find me on the soccer field or vibing to Afrobeats and Jazz.</p>
            <p className="about-desc mb-2">Let's connect and build something remarkable together.</p>
            <p className="about-desc mb-2">MARVEL IS YOU GUY!!!</p>
          </motion.div>
        </div>

        <div className="flex-center h-full w-full">
          <motion.div className="img-container" {...motionValues}>
            <Image
              src="/images/profile.png"
              alt="developer image"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default About;
