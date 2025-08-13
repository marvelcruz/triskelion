'use client';

import { motion } from 'framer-motion';
import { motionValues } from '@/lib/utils';

const Footer = () => {
  return (
    <section className='footer'>
      <footer className='section section_px py-1'>
        <main className='flex-center flex-col'>
          <motion.p className='footer-p' {...motionValues}>
            <span className='font-bold text-base'>©</span>{' '}
            {new Date().getFullYear()} Marvellous
          </motion.p>
          <motion.p className='footer-p' {...motionValues}>
            All rights reserved.
          </motion.p>
        </main>
      </footer>
    </section>
  );
};

export default Footer;
