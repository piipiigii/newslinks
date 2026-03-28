import Link from "next/link";
import { Heart, Newspaper } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-12 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/50 transition-colors relative overflow-hidden">
      {/* Subtle background glow for dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent dark:via-emerald-500/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 emerald-gradient rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:rotate-6 transition-transform">
                <Newspaper className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg dark:text-white">NewsBird</span>
            </Link>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 text-center md:text-left">
              © {new Date().getFullYear()} NewsBird Premium Links. <br className="hidden md:block" />
              All rights reserved.
            </p>
          </div>

          {/* Modern Badge - Made with love */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/80 shadow-sm backdrop-blur-sm group hover:border-emerald-200 dark:hover:border-emerald-900/40 transition-all duration-300">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 group-hover:scale-125 transition-transform animate-pulse" />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">by</span>
              <p
                className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline decoration-emerald-500/30 underline-offset-4"
              >
                NewsBird Team
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex justify-center md:justify-end gap-6 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Assamese</Link>
            <Link href="/bangla" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">Bangla</Link>
            <Link href="/english" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">English</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
