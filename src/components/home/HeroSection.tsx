"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { URLS } from "@/lib/constants";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.4em] text-muted mb-8"
        >
          Since 2023 &mdash; Seoul
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-9xl font-extralight tracking-[-0.02em] text-foreground uppercase"
        >
          Studio
          <br />
          <span className="italic font-light">Darly</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 text-xs sm:text-sm text-muted font-light tracking-[0.15em] uppercase"
        >
          증명사진 · 여권사진 · 프로필 촬영
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={URLS.naverReserve}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 text-sm uppercase tracking-[0.15em] bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors"
          >
            Reserve
          </a>
          <Link
            href="/portfolio/"
            className="px-10 py-3 text-sm uppercase tracking-[0.15em] border border-foreground/20 text-foreground/60 font-medium hover:border-foreground/50 hover:text-foreground transition-colors"
          >
            Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-foreground/0 via-foreground/20 to-foreground/0"
        />
      </motion.div>
    </section>
  );
}
