import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moosa Junaadh",
  description: "Portfolio of junaadh a cs student",
  appleWebApp: {
    title: "Moosa Junaadh",
    statusBarStyle: "black-translucent",
  },
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "stone" },
//     { media: "(prefers-color-scheme: dark)", color: "#272e3f" },
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} dark:bg-slate-900/90 bg-stone-700/80 min-h-[100dvh] w-screen flex flex-col justify-center items-center`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
