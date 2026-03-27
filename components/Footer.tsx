"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/note", label: "note" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-6 md:grid-cols-12 md:gap-5">
          {/* Brand */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="app-card-solid p-8 md:p-10">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.08em] text-[var(--color-ink)]">
                Synthera
              </p>
              <div className="mt-3 h-px w-6 bg-[var(--color-accent-soft)]/60" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
                Creative Digital Studio。テクノロジーとクリエイティビティの融合で、次の体験を設計します。
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="app-card md:col-span-4 flex flex-col justify-between p-8 md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
              Explore
            </p>
            <ul className="mt-6 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-paper)]/70"
                  >
                    <span className="transition-colors group-hover:text-[var(--color-accent)]">
                      {l.label}
                    </span>
                    <span className="translate-x-0 text-xs text-[var(--color-muted)]/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="app-card-solid md:col-span-3 flex flex-col justify-between overflow-hidden bg-[var(--color-ink)] p-8 text-white md:p-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-white/45">
                Direct
              </p>
              <a
                href="mailto:synthera.2025@gmail.com"
                className="mt-4 block break-all text-sm font-medium text-white/85 underline-offset-4 transition hover:text-white hover:underline"
              >
                synthera.2025@gmail.com
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase backdrop-blur-sm transition hover:bg-white hover:text-[var(--color-ink)]"
            >
              フォーム →
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] py-5 text-center text-[10px] font-medium tracking-[0.38em] text-[var(--color-muted)]/70">
        © {new Date().getFullYear()} SYNTHERA
      </div>
    </footer>
  );
}
