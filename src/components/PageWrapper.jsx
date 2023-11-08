'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/src/hooks/useScroll';
import { useState, forwardRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Pagination from './Pagination';
import FrozenRouter from './FrozenRouter';

const Child = forwardRef(({ children }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 4 }}
    >
      <FrozenRouter>{children}</FrozenRouter>
    </motion.div>
  );
});

Child.displayName = 'Child';

const PageWrapper = ({ children }) => {
  const router = useRouter();
  const path = usePathname();
  const [ready, setReady] = useState(true);

  useScroll(ready, setReady);

  //touch control
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isDownSwipe = distance > minSwipeDistance;
    const isUpSwipe = distance < -minSwipeDistance;

    if (path == '/') {
      if (isDownSwipe) {
        router.push('/project');
      }
    }

    if (path == '/project') {
      if (isUpSwipe) {
        router.push('/');
      }
      if (isDownSwipe) {
        router.push('/location');
      }
    }

    if (path == '/location') {
      if (isUpSwipe) {
        router.push('/project');
      }
      if (isDownSwipe) {
        router.push('/architecture');
      }
    }

    if (path == '/architecture') {
      if (isUpSwipe) {
        router.push('/location');
      }
      if (isDownSwipe) {
        router.push('/infrastructure');
      }
    }

    if (path == '/infrastructure') {
      if (isUpSwipe) {
        router.push('/architecture');
      }
      if (isDownSwipe) {
        router.push('/layouts');
      }
    }

    if (path == '/layouts') {
      if (isUpSwipe) {
        router.push('/infrastructure');
      }
      if (isDownSwipe) {
        router.push('/parking');
      }
    }

    if (path == '/parking') {
      if (isUpSwipe) {
        router.push('/layouts');
      }
      if (isDownSwipe) {
        router.push('/contacts');
      }
    }

    if (path == '/contacts') {
      if (isUpSwipe) {
        router.push('/parking');
      }
    }
  };

  const onReady = () => {
    setReady(true);
  };

  return (
    <AnimatePresence mode='popLayout' initial={false}>
      {/* <motion.div
        key={router.pathname}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onAnimationEnd={onReady}
        // onAnimationComplete={onReady}
      >
        <motion.div
          className='slide-in'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className='slide-out'
          initial={{ y: 0 }}
          animate={{ y: '-100vh' }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [1, 1, 0.36, 1] }}
        ></motion.div>

        <Pagination currentPath={path} />
      </motion.div> */}
      <Child key={path}>{children}</Child>
    </AnimatePresence>
  );
};

export default PageWrapper;
