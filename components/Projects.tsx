'use client';

import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { projects } from '@/constants';
import Project from '@/components/Project';
import { motionValues } from '@/lib/utils';

// Triskelion Logo Component
const TriskelionLogo = ({ size = 80, className = "" }) => (
  <motion.div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  >
    <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-lg">
      <defs>
        <linearGradient id="triskelion-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      <circle cx="60" cy="60" r="10" fill="url(#triskelion-gradient)" />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -20,-30 -30,-50 Q -45,-55 -50,-40 Q -45,-30 -30,-25 Q -20,-20 -15,-30 Q -10,-40 -20,-45"
              fill="url(#triskelion-gradient)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.8"
            />
            <circle cx="-30" cy="-40" r="10" fill="url(#triskelion-gradient)" />
          </g>
        ))}
      </g>
    </svg>
  </motion.div>
);

const Projects = () => {
  const { title, description, projects: projects_ } = projects;

  return (
    <section 
      id='projects' 
      className='relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden'
    >
      {/* Background Triskelion Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <TriskelionLogo size={200} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-10">
          <TriskelionLogo size={180} />
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-05">
          <TriskelionLogo size={150} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <main className='flex flex-col gap-12'>
          <div className='flex-center flex-col gap-6 text-center'>
            <motion.div 
              className="mb-4"
              {...motionValues}
            >
              <TriskelionLogo size={80} className="mx-auto" />
            </motion.div>

            <motion.h2 
              className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'
              {...motionValues}
            >
              {title}
            </motion.h2>

            <motion.p 
              className='text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'
              {...motionValues}
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            {...motionValues}
            className="relative"
          >
            <Carousel 
              className='w-full' 
              orientation='horizontal'
              opts={{
                align: "start",
                slidesToScroll: "auto",
                loop: true,
              }}
            >
              <CarouselContent>
                {projects_.map((project: ProjectProp, index: number) => (
                  <CarouselItem 
                    key={index} 
                    className="basis-full sm:basis-1/2 lg:basis-1/3 px-4 py-2"
                  >
                    <Project project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='carousel-left_button bg-gray-800/80 hover:bg-gray-700/80 border-gray-700 text-white' />
              <CarouselNext className='carousel-right_button bg-gray-800/80 hover:bg-gray-700/80 border-gray-700 text-white' />
            </Carousel>
          </motion.div>
        </main>
      </div>
    </section>
  );
};

export default Projects;