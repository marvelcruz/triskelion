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
    <Card className='w-4/5 h-fit border border-white rounded-xl p-4 lg:p-6'>
      <div className='project-wrapper'>
        <div className='project-detail_wrapper'>
          <div className='flex-between px-3'>
            <h3 className='project-h3'>{title}</h3>

            <Button onClick={toggleDescription}>
              {showDescription ? (
                <IoMdArrowDropup className='text-white size-5' />
              ) : (
                <IoMdArrowDropdown className='text-white size-5' />
              )}
            </Button>
          </div>

          {showDescription && (
            <div className='px-3'>
              <p className='project-p'>{description}</p>
            </div>
          )}
        </div>
        <div className='w-full flex flex-col gap-4'>
          <Link href={url}>
            <Image
              src={src}
              alt={title}
              width={500}
              height={150}
              className='w-full lg:w-full rounded-xl'
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Project;
