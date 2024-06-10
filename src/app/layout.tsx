// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import Navbar from "@/components/navbar/Navbar";
import { theme } from "@/static";
import Footer from "@/components/footer/Footer";

const combinedTheme = {
  fontFamily: "Helvetica Neue, sans-serif",
  fontFamilyMonospace: "Liberation Mono, Monaco, Courier, monospace",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
  ...theme,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={combinedTheme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
