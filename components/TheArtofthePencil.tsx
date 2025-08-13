'use client';

import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TheArtofthePencil } from '@/constants';
import Project from '@/components/Project';
import { motionValues } from '@/lib/utils';

const Projects = () => {
  const { title, description, projects: projects_ } = TheArtofthePencil;

  return (
    <section id='The Art of the Pencil' className='section section_px section-gap'>
      <main className='flex flex-col gap-8 lg:gap-8'>
        <div className='flex-center flex-col gap-8'>
          <motion.h2 className='section-h2' {...motionValues}>
            {title}
          </motion.h2>

          <motion.h3 className='section-h3' {...motionValues}>
            {description}
          </motion.h3>
        </div>

        <motion.div {...motionValues}>
          <Carousel 
            className='w-full' 
            orientation='horizontal'
            opts={{
              align: "start",
              slidesToScroll: "auto",
            }}
          >
            <CarouselContent>
              {projects_.map((project: ProjectProp, index: number) => (
                <CarouselItem key={index} className='flex-center basis-1/3'> {/* Adjust basis as needed */}
                  <Project project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='carousel-left_button' />
            <CarouselNext className='carousel-right_button' />
          </Carousel>
        </motion.div>
      </main>
    </section>
  );
};

export default Projects;