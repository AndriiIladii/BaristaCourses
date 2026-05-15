import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CoffeeLoader from "@/components/ui/CoffeeLoader";
import { AosProvider } from "@/components/providers/AosProvider";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

const Playfair_DisplaySans = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_PATH ? `https://barista-course-poltava.vercel.app` : 'http://localhost:3000'),
  title: "Школа Бариста в Полтаві | Навчання від Діани Рохманько",
  description: "Курс для тих, хто хоче навчитися розуміти каву, варити ідеальний еспресо і малювати лате-арт. Записуйся на курси бариста в Полтаві!",
  keywords: ["школа бариста", "курси бариста полтава", "навчання бариста", "лате-арт", "кава", "навчання кава полтава", "еспресо"],
  authors: [{ name: "Діана Рохманько" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Школа Бариста в Полтаві",
    description: "Навчись малювати лате-арт, розуміти зерно та будувати кар'єру бариста з нуля — у Полтаві.",
    siteName: "Barista School Poltava",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-4.png`,
        width: 1200,
        height: 630,
        alt: "Процес приготування кави на курсі",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Школа Бариста в Полтаві",
    description: "Практичні курси бариста з нуля. Лате-арт, еспресо, альтернатива.",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/gallery/gallery-4.png`],
  },
  alternates: {
    canonical: '/',
  },
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
      className={`${InterSans.variable} ${Playfair_DisplaySans.variable}  h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preload" as="image" href="/poster.jpg" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <AosProvider>
          <CoffeeLoader />
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
