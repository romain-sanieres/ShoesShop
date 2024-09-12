"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <QueryClientProvider client={queryClient}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ProgressBar
              height="2px"
              color="#18181B"
              options={{ showSpinner: false }}
              shallowRouting
            />
            <Navigation />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </QueryClientProvider>
    </html>
  );
}
