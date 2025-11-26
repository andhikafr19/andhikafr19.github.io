import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://namasaya.com"),
  title: {
    default: "Andhika Firdaus R - Software Engineer",
    template: "%s | Andhika Firdaus R",
  },
  description:
    "Software Engineer yang fokus pada pengembangan web aplikasi performa tinggi dengan Next.js, TypeScript, dan teknologi modern lainnya.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Full Stack Developer",
  ],
  authors: [{ name: "Andhika Firdaus R", url: "https://namasaya.com" }],
  creator: "Andhika Firdaus R",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://namasaya.com",
    siteName: "Andhika Firdaus R",
    title: "Andhika Firdaus R - Software Engineer",
    description:
      "Software Engineer yang fokus pada pengembangan web aplikasi performa tinggi.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Andhika Firdaus R - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andhika Firdaus R - Software Engineer",
    description:
      "Software Engineer yang fokus pada pengembangan web aplikasi performa tinggi.",
    images: ["/og.png"],
    creator: "@username",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
