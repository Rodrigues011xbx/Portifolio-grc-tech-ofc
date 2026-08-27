import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Rodrigues Calixto — Backend / Full-Stack Developer",
  description:
    "Portfolio of Gabriel Rodrigues Calixto. Backend and Full-Stack developer specializing in Node.js, TypeScript, AWS, PostgreSQL, and scalable system architecture.",
  keywords: [
    "Backend Developer",
    "Full-Stack Developer",
    "Node.js",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Software Architecture",
    "SaaS",
    "Gabriel Rodrigues Calixto",
  ],
  authors: [{ name: "Gabriel Rodrigues Calixto" }],
  openGraph: {
    title: "Gabriel Rodrigues Calixto — Backend / Full-Stack Developer",
    description:
      "Building scalable systems, APIs, and digital products with focus on performance and architecture.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
