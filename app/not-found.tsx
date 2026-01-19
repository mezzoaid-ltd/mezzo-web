import type { Metadata } from "next";
import NotFoundComponent from "@/components/NotFound";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Mezzo Aid",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFoundPage() {
  return <NotFoundComponent />;
}
