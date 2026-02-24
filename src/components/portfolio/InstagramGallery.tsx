"use client";

import { motion } from "framer-motion";
import { URLS } from "@/lib/constants";

export default function InstagramGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="w-full max-w-4xl mx-auto overflow-hidden border border-border">
        <iframe
          src="https://www.instagram.com/studio.darly/embed/"
          className="w-full border-0"
          style={{ height: "clamp(370px, 65vw, 750px)" }}
          scrolling="no"
          loading="lazy"
          title="Studio Darly Instagram Gallery"
        />
      </div>

      <div className="text-center mt-14">
        <a
          href={URLS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
        >
          View on Instagram
          <span className="w-8 h-px bg-current" />
        </a>
      </div>
    </motion.div>
  );
}
