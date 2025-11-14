import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamSphere",
  description: "StreamSphere - Discover movies powered by TMDB"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white antialiased">
        <div className="relative min-h-screen">
          <Header />
          <main className="pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}


