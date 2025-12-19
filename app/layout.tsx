import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";

// Outfit for Headings (Futuristic/Modern feel)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Inter for Body text (Clean/Readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Subhadeep Mistri | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Subhadeep Mistri - A cinematic digital experience showcasing intelligent design and fluid engineering.",
  keywords: ["UI/UX Design", "Frontend Developer", "React", "Next.js", "Portfolio", "Web Design", "Subhadeep Mistri"],
  openGraph: {
    title: "Subhadeep Mistri | UI/UX & Frontend",
    description: "A cinematic portfolio experience.",
    url: "https://subhadeepmistri.com", // Replace with actual URL if known or leave placeholder
    siteName: "Subhadeep Mistri Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhadeep Mistri | UI/UX & Frontend",
    description: "A cinematic portfolio experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden",
          outfit.variable,
          inter.variable
        )}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
