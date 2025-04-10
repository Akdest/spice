import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Title */}
        <title>SPICE - Instrumentation & Control Engineering Club</title>

        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Official site of SPICE - Student club for Instrumentation and Control Engineering at [Your College Name]. Discover events, teams, and more." />
        <meta name="keywords" content="SPICE, Instrumentation, Control Engineering, Student Club, Events, ICE" />
        <meta name="author" content="SPICE Team" />
        <meta name="theme-color" content="#2563eb" />

        {/* Open Graph / Social Preview */}
        <meta property="og:title" content="SPICE - ICE Student Club" />
        <meta property="og:description" content="Explore the innovative world of Instrumentation and Control Engineering with SPICE." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://spice-ice.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
