'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const PageWrapper = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <AnimatePresence wait={true}>
      <motion.div key={router.pathname}>
        {/* <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div> */}
        <motion.div
          className='slide-out'
          initial={{ y: 0 }}
          animate={{ y: '-100vh' }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
