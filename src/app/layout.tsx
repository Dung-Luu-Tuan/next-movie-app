'use client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import SplashScreen from '@/components/splash/SplashScreen';
import { theme } from '@/static';

const combinedTheme = {
  fontFamily: 'Helvetica Neue, sans-serif',
  fontFamilyMonospace: 'Liberation Mono, Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
  ...theme,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideSplash(true); // Start fade out
      setTimeout(() => setLoading(false), 500); // Wait for fade animation to finish
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={combinedTheme}>
          {loading && <SplashScreen fadeOut={hideSplash} />}
          {!loading && (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
