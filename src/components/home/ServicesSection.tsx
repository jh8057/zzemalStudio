"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="py-32 px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Services
          </p>
          <h2 className="text-2xl md:text-3xl font-extralight tracking-wide">
            촬영 서비스
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {SERVICES.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-surface p-10 group hover:bg-surface-alt transition-colors duration-500"
            >
              <span className="text-xs text-muted/40 font-mono">
                0{i + 1}
              </span>
              <h3 className="text-lg font-light mt-4 mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-xs text-foreground/50 tracking-wide">
                {service.startingPrice}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/reserve/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300"
          >
            전체 상품 보기
            <span className="w-8 h-px bg-current" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
