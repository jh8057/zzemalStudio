"use client";

import { motion } from "framer-motion";
import { URLS, STUDIO } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-32 px-8 border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-6">
            Reservation
          </p>
          <h2 className="text-2xl md:text-4xl font-extralight tracking-wide mb-6">
            지금 바로 예약하세요
          </h2>
          <p className="text-muted text-sm mb-14 max-w-md mx-auto leading-relaxed">
            네이버 예약으로 간편하게 예약하고, 전문 촬영을 경험해 보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={URLS.naverReserve}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3.5 text-sm uppercase tracking-[0.15em] bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors"
            >
              Reserve Now
            </a>
            <a
              href={URLS.kakaoChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3.5 text-sm uppercase tracking-[0.15em] border border-border text-muted font-medium hover:border-foreground/50 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
