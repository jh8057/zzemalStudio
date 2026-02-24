"use client";

import { motion } from "framer-motion";
import { PRICING, URLS } from "@/lib/constants";

export default function PricingTable() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 bg-surface text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
            {PRICING.weekday.label}
          </div>
          <div className="text-3xl font-extralight text-foreground">
            {PRICING.weekday.priceFormatted}
          </div>
          <div className="text-xs text-muted mt-2">{PRICING.weekday.unit}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-10 bg-surface text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
            {PRICING.weekend.label}
          </div>
          <div className="text-3xl font-extralight text-foreground">
            {PRICING.weekend.priceFormatted}
          </div>
          <div className="text-xs text-muted mt-2">{PRICING.weekend.unit}</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-xs text-muted mt-6"
      >
        추가 인원 {PRICING.additionalPerson.priceFormatted}
        {PRICING.additionalPerson.unit} · 최소 {PRICING.minimumHours}시간
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-10"
      >
        <a
          href={URLS.naverReserve}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-3.5 text-sm uppercase tracking-[0.15em] bg-foreground text-background font-medium hover:bg-foreground/80 transition-colors"
        >
          Reserve Now
        </a>
      </motion.div>
    </div>
  );
}
