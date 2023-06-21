import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const fontHeading = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-heading",
});

export const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
