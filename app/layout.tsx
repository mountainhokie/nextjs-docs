import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Documentation App",
  description:
    "A documentation app built with Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="flex flex-col h-screen">
          <PageLayout>{children}</PageLayout>
        </div>
      </body>
    </html>
  );
}
