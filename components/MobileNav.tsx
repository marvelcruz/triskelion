import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const MobileNav = ({ links, show }: LinkProps) => {
  const variants1: Variants = {
    open: {
      height: '33.33vh',
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.1,
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    close: {
      height: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        delay: 0.1,
        duration: 0.7,
        when: 'afterChildren',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const variants2: Variants = {
    open: { x: 0, y: 0, opacity: 1 },
    close: { x: 0, y: -3, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          className='mobile-nav border_b'
          key='modal'
          variants={variants1}
          initial='close'
          animate='open'
          exit='close'
        >
          <ul className='flex-center flex-col gap-4'>
            {links.map(({ title, href }: Link, index) => (
              <motion.li key={index} variants={variants2}>
                <Link href={href} className='link focus:mobile-nav_link-active'>
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
