import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Land Survey & GIS Services | Al-salaam",
  description:
    "Professional land surveying, engineering surveys, GIS mapping and geospatial solutions in Nigeria.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
