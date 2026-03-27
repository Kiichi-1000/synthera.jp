"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/about", label: "About", short: "About" },
  { href: "/projects", label: "Project", short: "Work" },
  { href: "/note", label: "note", short: "note" },
  { href: "/contact", label: "Contact", short: "Mail" },
] as const;

function Icon({ name }: { name: (typeof nav)[number]["href"] }) {
  const stroke = "currentColor";
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.5 };
  switch (name) {
    case "/":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" strokeLinejoin="round" />
        </svg>
      );
    case "/about":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6 20v-1.5C6 16 8.5 14.5 12 14.5s6 1.5 6 4V20" strokeLinecap="round" />
        </svg>
      );
    case "/projects":
      return (
        <svg {...common} aria-hidden>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "/note":
      return (
        <svg {...common} aria-hidden>
          <path d="M8 4h10a1 1 0 011 1v16l-3-2-3 2-3-2-3 2V5a1 1 0 011-1z" strokeLinejoin="round" />
        </svg>
      );
    case "/contact":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 6h16v12H4V6z" strokeLinejoin="round" />
          <path d="M4 8l8 5 8-5" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function Header() {
  const pathname = usePathname();
  const [sheet, setSheet] = useState(false);

  return (
    <>
      {/* Desktop — フローティングピル */}
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 hidden justify-center px-5 pt-5 md:flex">
        <div className="pointer-events-auto flex w-full max-w-[52rem] items-center justify-between gap-4 rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white/88 px-2 py-1.5 pl-6 shadow-[var(--shadow-app)] backdrop-blur-2xl">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.12em] text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
          >
            Synthera
          </Link>

          <LayoutGroup id="main-nav">
            <nav className="flex items-center gap-0.5 rounded-[var(--radius-pill)] bg-[var(--color-paper)] p-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-[var(--radius-pill)] bg-white shadow-[var(--shadow-xs)]"
                        transition={{ type: "spring", stiffness: 360, damping: 34 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        active ? "text-[var(--color-ink)]" : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>
        </div>
      </header>

      {/* Mobile — トップバー */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[var(--color-line)] bg-white/92 px-5 py-3.5 backdrop-blur-xl md:hidden">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.1em] text-[var(--color-ink)]"
        >
          Synthera
        </Link>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-xs)] transition hover:bg-[var(--color-paper)]"
          aria-expanded={sheet}
          aria-label="メニューを開く"
          onClick={() => setSheet(true)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </span>
        </button>
      </header>

      {/* Mobile — ドロワーメニュー */}
      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] cursor-default bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSheet(false)}
            />
            <motion.nav
              className="fixed bottom-0 left-0 right-0 z-[70] max-h-[78vh] overflow-auto rounded-t-[var(--radius-app)] border border-b-0 border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-app-lg)] md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 38 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[var(--color-muted)]">
                  Menu
                </span>
                <button
                  type="button"
                  className="rounded-full border border-[var(--color-line)] px-5 py-1.5 text-xs font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-paper)]"
                  onClick={() => setSheet(false)}
                >
                  閉じる
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setSheet(false)}
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium tracking-wide transition ${
                          active
                            ? "bg-[var(--color-paper)] text-[var(--color-ink)]"
                            : "text-[var(--color-muted)] hover:bg-[var(--color-paper)]/50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-[var(--color-muted)]/60">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Mobile — ボトムドック */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-line)] bg-white/94 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden"
        aria-label="メインナビゲーション"
      >
        <ul className="mx-auto flex max-w-md justify-between">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={`flex flex-col items-center gap-1 py-2 text-[9px] font-semibold tracking-wider uppercase ${
                    active ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                      active
                        ? "bg-[var(--color-paper)] text-[var(--color-ink)] shadow-[var(--shadow-xs)]"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    <Icon name={item.href} />
                  </span>
                  {item.short}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
