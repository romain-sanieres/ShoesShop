import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation/Navigation";

const font = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "simple_boilerplate",
  description:
    "simple_boilerplate is a modern web application built with Next.js, offering secure authentication and a smooth user experience. This project serves as a robust starting point for developing complex web applications with integrated authentication features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
