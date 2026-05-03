import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

const Playfair_DisplaySans = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Barista Courses",
  description: "Курси бариста у Полтаві | Назва Кав'ярні",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`${InterSans.variable} ${Playfair_DisplaySans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
