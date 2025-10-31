import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Civic Vigilance - The People's Voice",
  description: "Empowering citizens to report and resolve societal issues through transparency, community engagement, and real-time tracking. Join thousands of active citizens making a difference in their communities.",
  keywords: [
    "civic engagement",
    "community",
    "issue reporting",
    "social awareness",
    "civic duty",
    "citizen participation",
    "civic responsibility",
    "community impact",
    "local issues",
    "civic vigilance",
  ],
  authors: [{ name: "Civic Vigilance Team" }],
  creator: "Civic Vigilance",
  publisher: "Civic Vigilance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://civicvigilance.com",
    siteName: "Civic Vigilance",
    title: "Civic Vigilance - The People's Voice",
    description: "Empowering citizens to report and resolve societal issues through transparency and community engagement. Be the change your community deserves.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Purple-and-Blue-Illustrated-Let-s-Play-A-Game-Men-Linkedin-Profile-Picture-3-1761871471696.png",
        width: 1200,
        height: 630,
        alt: "Civic Vigilance - Empowering Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civic Vigilance - The People's Voice",
    description: "Empowering citizens to report and resolve societal issues. Join the movement for better communities.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Purple-and-Blue-Illustrated-Let-s-Play-A-Game-Men-Linkedin-Profile-Picture-3-1761871471696.png"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}