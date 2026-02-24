"use client";

import { motion } from "framer-motion";
import { URLS } from "@/lib/constants";

export default function InstagramFeed() {
  return (
    <section className="py-32 px-8 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Recent Work
          </p>
          <h2 className="text-2xl md:text-3xl font-extralight tracking-wide">
            최근 작업
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-3xl overflow-hidden border border-border">
            <iframe
              src="https://www.instagram.com/studio.darly/embed/"
              className="w-full border-0"
              height="650"
              scrolling="no"
              loading="lazy"
              title="Studio Darly Instagram"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
          >
            View on Instagram
            <span className="w-8 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
