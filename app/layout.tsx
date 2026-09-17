import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joshfletch.com"),
  title: "Josh Fletcher | Forward-Deployed Engineer & Product Builder",
  description:
    "Josh Fletcher builds production software, AI-assisted workflows, and operational systems that turn complex business problems into usable products.",
  keywords: [
    "Josh Fletcher",
    "forward-deployed engineer",
    "full-stack developer",
    "solutions architect",
    "AI systems",
    "Next.js developer",
  ],
  authors: [{ name: "Josh Fletcher", url: "https://www.joshfletch.com" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Josh Fletcher | Systems That Move Work Forward",
    description:
      "Production software, AI-assisted workflows, and operational systems built for real-world use.",
    url: "https://www.joshfletch.com",
    siteName: "Josh Fletcher",
    images: [{ url: "/social-preview.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Fletcher | Forward-Deployed Engineer & Product Builder",
    description:
      "I turn complicated business problems into clear, working systems.",
    images: ["/social-preview.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b10",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
