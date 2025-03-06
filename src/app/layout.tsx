import type { Metadata } from "next";
import "./globals.css";
import {
  Big_Shoulders_Stencil_Display,
  Noto_Sans_Javanese,
} from "next/font/google";

export const metadata: Metadata = {
  title: "README Blogs",
  description: "All trending topics in readme.md",
};

const bigShoulderStencilDisplay = Big_Shoulders_Stencil_Display({
  variable: "--font-big-shoulder-stencil-display",
  subsets: ["latin"],
});

const notoSansJavanese = Noto_Sans_Javanese({
  variable: "--font-noto-sans-javanese",
  subsets: ["javanese"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulderStencilDisplay.variable} ${notoSansJavanese.variable} antialiased px-48 py-8`}
      >
        {children}
      </body>
    </html>
  );
}
