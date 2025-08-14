'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiShadcnui, SiRedux, SiAppwrite } from 'react-icons/si';
import Card from './ui/Card';
import Button from './ui/UIButton';

// Triskelion Logo Component
const TriskelionLogo = ({ size = 80, className = "" }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
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
  </div>
);

const ProjectStacks = ({ id, className }: ProjectStacksProps) => {
  switch (id) {
    case 'havco':
      return (
        <div className='flex gap-[1px] sm:gap-1 md:gap-2'>
          <FaReact className={className} />
          <RiNextjsFill className={className} />
          <BiLogoTypescript className={className} />
          <RiTailwindCssFill className={className} />
          <SiShadcnui className={className} />
          <SiAppwrite className={className} />
        </div>
      );
    case 'magnum':
      return (
        <div className='flex gap-[1px] sm:gap-1 md:gap-2'>
          <FaReact className={className} />
          <RiNextjsFill className={className} />
          <BiLogoTypescript className={className} />
          <RiTailwindCssFill className={className} />
        </div>
      );
    case 'hilink':
      return (
        <div className='flex gap-[1px] sm:gap-1 md:gap-2'>
          <FaReact className={className} />
          <RiNextjsFill className={className} />
          <BiLogoTypescript className={className} />
          <RiTailwindCssFill className={className} />
        </div>
      );
    case 'nike_clone_app':
      return (
        <div className='flex gap-[1px] sm:gap-1 md:gap-2'>
          <FaReact className={className} />
          <BiLogoTypescript className={className} />
          <RiTailwindCssFill className={className} />
        </div>
      );
  }
};

const Project = ({
  project: { id, title, description, src, url, gitLink },
}: ProjectProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = (event: React.MouseEvent) => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full">
      {/* Background Triskelion Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
          <TriskelionLogo size={120} className="opacity-20" />
        </div>
        <div className="absolute top-3/4 right-1/4 translate-x-1/2 -translate-y-1/2">
          <TriskelionLogo size={100} className="opacity-15" />
        </div>
        <div className="absolute bottom-1/3 left-3/4 -translate-x-1/2 translate-y-1/2">
          <TriskelionLogo size={80} className="opacity-10" />
        </div>
      </div>

      <Card className='relative w-4/5 h-fit border border-white/30 rounded-xl p-4 lg:p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm z-10'>
        <div className='project-wrapper'>
          <div className='project-detail_wrapper'>
            <div className='flex-between px-3'>
              <h3 className='project-h3 text-white'>{title}</h3>

              <Button 
                onClick={toggleDescription}
                className="bg-blue-600/50 hover:bg-blue-600/70 transition-all"
              >
                {showDescription ? (
                  <IoMdArrowDropup className='text-white size-5' />
                ) : (
                  <IoMdArrowDropdown className='text-white size-5' />
                )}
              </Button>
            </div>

            {showDescription && (
              <div className='px-3 mt-2'>
                <p className='project-p text-gray-300'>{description}</p>
              </div>
            )}
          </div>
          
          <div className='w-full flex flex-col gap-4 mt-4'>
            <Link href={url} className="relative group">
              <Image
                src={src}
                alt={title}
                width={500}
                height={150}
                className='w-full lg:w-full rounded-xl border border-white/20 group-hover:border-blue-500/50 transition-all'
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
                <IoEyeOutline className="text-white text-2xl" />
              </div>
            </Link>
            
            <div className="flex justify-between items-center px-2">
              <ProjectStacks id={id} className="text-xl text-blue-400" />
              
              {gitLink && (
                <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="text-gray-400 hover:text-white text-xl transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Project;