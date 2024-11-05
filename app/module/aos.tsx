"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // This is the hook for getting the current path in app directory
import 'aos/dist/aos.css';
import AOS from 'aos';

export const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation will only happen once
    });

    // Re-initialize AOS on route change
    AOS.refresh();
  }, [pathname]);

  return null
}