import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const coachella = localFont({
  src: [
    {
      path: "../public/fonts/Coachella-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Coachella-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Coachella-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Coachella-Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Coachella-Medium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Coachella-Thin.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-coachella",
});

export const metadata: Metadata = {
  title: "Rooftop Solutions",
  description: "Best rooftop company in Louisiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${coachella.variable}`}>
        {children}
      </body>
    </html>
  );
}
