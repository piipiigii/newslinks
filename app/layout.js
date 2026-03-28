import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import InstallPWA from "../components/pwa/InstallPWA";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NewsBird - Assamese, Bangla & English News links",
  description: "Your gateway to the latest news from across the region. Quick access to top newspapers.",
  manifest: "/manifest.json",
  themeColor: "#10b981",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NewsBird",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-vh-100 bg-zinc-50 dark:bg-zinc-950 transition-colors`}>
        <Providers>
          <Navbar />
          <main className="flex-grow pt-24 pb-12">
            {children}
          </main>
          <div className="text-center py-4 bg-zinc-50 dark:bg-zinc-950">
            <InstallPWA />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
