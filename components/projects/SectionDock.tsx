"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  { href: "#sns", label: "SNS" },
  { href: "#brand", label: "Brand" },
  { href: "#development", label: "Dev" },
  { href: "#writing", label: "Writing" },
  { href: "#affiliate", label: "Affiliate" },
  { href: "#ec", label: "EC" },
  { href: "#japanese-quality", label: "JIQ" },
] as const;

export function SectionDock() {
  return (
    <motion.div
      className="sticky top-[5.25rem] z-20 -mx-1 mb-12 hidden md:block"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full gap-2 rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white/85 p-1.5 shadow-[var(--shadow-app)] backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-pill)] px-4 py-2 text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--color-muted)] transition hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
