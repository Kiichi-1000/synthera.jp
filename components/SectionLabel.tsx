"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function SectionLabel({ en, ja }: { en: string; ja: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <motion.span
          className="inline-block h-px w-10 origin-left bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent md:w-14"
          initial={reduce ? false : { scaleX: 0 }}
          animate={reduce || inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="text-[11px] font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]"
          initial={reduce ? false : { opacity: 0, x: -10 }}
          animate={reduce || inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.1 }}
        >
          {en}
        </motion.p>
      </div>
      <motion.h2
        className="mt-3 font-[family-name:var(--font-display)] text-[2rem] font-light tracking-tight text-[var(--color-ink)] md:text-[2.75rem] md:leading-tight"
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={reduce || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        {ja}
      </motion.h2>
    </div>
  );
}
