import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import TouchActive from "@/components/TouchActive/TouchActive";
import "./globals.css";

export const metadata: Metadata = {
  title: "LSeT Foundation: Conservation's Technology Partner",
  description:
    "We combine education, conservation expertise and innovative technology to help wildlife organisations solve complex challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400..900&family=Google+Sans:wght@400;500&family=Inter:wght@400;500;600&family=Inter+Tight:wght@400;600&display=swap"
        />
      </head>
      <body>
        {/* The bar and the footer are identical on every page, and the bar has
            to outlive a route change for its brand highlight to travel between
            pages, so both live here rather than in the pages.

            The wrapper is not decoration: `.sticky` is a sticky element, and a
            sticky element is confined to its parent's box. Inside this div its
            reach is the nav plus <main>, which is exactly what it was when the
            pages rendered it inside their own <main>. Dropped straight into
            <body> it would instead stay pinned over the footer. */}
        <TouchActive />

        <div className="shell">
          <NavBar />
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
