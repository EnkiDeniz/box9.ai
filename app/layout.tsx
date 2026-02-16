import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOX9 — The Physics Engine for Team Intelligence",
  description:
    "The Physics Engine for Team Intelligence. Built by LAKIN.",
  keywords: [
    "AI",
    "team intelligence",
    "physics engine",
    "coordination",
    "Box9",
    "LAKIN",
  ],
  authors: [{ name: "Lakin" }],
  openGraph: {
    title: "BOX9 — The Physics Engine for Team Intelligence",
    description: "The Physics Engine for Team Intelligence. Built by LAKIN.",
    url: "https://box9.ai",
    siteName: "BOX9",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOX9 — The Physics Engine for Team Intelligence",
    description: "The Physics Engine for Team Intelligence. Built by LAKIN.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
