"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Newspaper, ArrowUpRight } from "lucide-react";

export const NewsCard = ({ newspaper }) => {
  return (
    <div className="group relative animate-in h-full">
      {/* Background Glow Effect */}
      <div className="card-glow" />

      <Link
        href={newspaper.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col glass-card rounded-3xl overflow-hidden h-full group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-500"
      >
        {/* Top Image Section */}
        <div className="relative h-44 w-full bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-8 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
          {/* Decorative background patterns */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
            {newspaper.img ? (
              <Image
                src={newspaper.img}
                alt={newspaper.name}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md bg-gray-100 shadow-sm brightness-100 dark:brightness-90 contrast-110"
              />
            ) : (
              <Newspaper className="w-16 h-16 text-zinc-300 dark:text-zinc-700" />
            )}
          </div>

          {/* Floating Category/Badge if needed could go here */}
        </div>

        {/* Improved Lower Section */}
        <div className="p-5 flex flex-col justify-between bg-white dark:bg-zinc-900/40 relative">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
              {newspaper.name}
            </h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {newspaper.about}
            </p>
          </div>

          {/* Action indicator - subtle but premium */}
          <div className="mt-4 pt-4 border-t border-zinc-50 dark:border-zinc-800/50 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600/70 dark:text-emerald-400/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Read Online
            </span>
            <div className="p-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowUpRight size={14} strokeWidth={3} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
