'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientSideHelpers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  return null; // Δεν επιστρέφει τίποτα στην οθόνη, μόνο τρέχει το JS
}