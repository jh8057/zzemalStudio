"use client";

import { motion } from "framer-motion";
import { PRODUCTS, URLS } from "@/lib/constants";

export default function PricingTable() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-14">
        {PRODUCTS.map((group, catIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.08 }}
          >
            <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-4 pb-3 border-b border-border">
              {group.category}
            </h3>
            <div className="space-y-px bg-border">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-surface flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-light text-foreground mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                    {item.priceNote && (
                      <p className="text-xs text-muted/60 mt-2">
                        {item.priceNote}
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    {item.originalPrice !== item.price && (
                      <p className="text-xs text-muted line-through">
                        {item.originalPrice.toLocaleString()}원
                      </p>
                    )}
                    <p className="text-base font-light text-foreground">
                      {item.price.toLocaleString()}원
                    </p>
                    <p className="text-xs text-muted mt-1">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-14"
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
