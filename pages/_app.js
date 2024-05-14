import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
      easing: 'ease', // Easing function
      anchorPlacement: 'top-bottom', // Anchor placement
    });

    // Remove AOS animations when navigating to a new page
    router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 50);
    });

    return () => {
      router.events.off('routeChangeComplete');
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
