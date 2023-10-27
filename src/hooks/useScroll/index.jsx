`use client`;

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useScroll = () => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  });

  const handleScroll = (event) => {
    // console.log('scroll event', event.deltaY);
    // console.log(path);

    if (path == '/') {
      if (event.deltaY > 10) {
        router.push('/project');
      }
    }

    if (path == '/project') {
      if (event.deltaY < -10) {
        router.push('/');
      }

      if (event.deltaY > 10) {
        router.push('/location');
      }
    }

    if (path == '/location') {
      if (event.deltaY < -10) {
        router.push('/project');
      }

      if (event.deltaY > 10) {
        router.push('/infrastructure');
      }
    }

    if (path == '/infrastructure') {
      if (event.deltaY < -10) {
        router.push('/location');
      }

      if (event.deltaY > 10) {
        router.push('/architecture');
      }
    }

    if (path == '/architecture') {
      if (event.deltaY < -10) {
        router.push('/infrastructure');
      }

      if (event.deltaY > 10) {
        router.push('/layouts');
      }
    }

    if (path == '/layouts') {
      if (event.deltaY < -10) {
        router.push('/architecture');
      }

      if (event.deltaY > 60) {
        router.push('/parking');
      }
    }

    if (path == '/parking') {
      if (event.deltaY < -10) {
        router.push('/layouts');
      }

      if (event.deltaY > 10) {
        router.push('/contacts');
      }
    }

    if (path == '/contacts') {
      if (event.deltaY < -80) {
        router.push('/layouts');
      }
    }
  };
};
