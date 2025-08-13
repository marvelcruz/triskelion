import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Variants } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFullUrlPathWithHash = () => {
  if (window !== undefined) {
    return window.location.href;
  }

  return '';
};

export const parseStringify = (value: any) => {
  return JSON.parse(JSON.stringify(value));
};

export const variants: Variants = {
  start: { opacity: 0.3, y: 3 },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.3,
      duration: 0.5,
      bounce: 0.9,
      stiffness: 100,
      when: 'beforeChildren',
    },
  },
};

export const motionValues: MotionValues = {
  variants: variants,
  initial: 'start',
  whileInView: 'end',
};
