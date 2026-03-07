import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Land Survey & GIS Services | Al-salaam",
    template: "%s | AL-Salaam",
  },
  description:
    "Trusted geospatial engineering and land surveying firm delivering precision and innovation.",
  openGraph: {
    title: "Al-salaam Geo-mapping",
    description: "Professional surveying and GIS solutions.",
    url: "https://yourdomain.com",
    siteName: "Al-salaam Geo-mapping",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#111",
              padding: "2rem",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
