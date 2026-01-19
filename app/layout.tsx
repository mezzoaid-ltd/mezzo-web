import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mezzo Aid | Empowering African Entrepreneurs",
  description:
    "Connecting African entrepreneurs with resources, mentorship, and funding to build successful businesses.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`dark:bg-black ${inter.className}`}
        suppressHydrationWarning
      >
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
