"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

const areas = [
  {
    title: "SNS",
    subtitle: "SNS運用",
    desc: "Podcast、note、ゲーム配信など多様なプラットフォームでの戦略的なSNS運用・展開。",
    span: "md:col-span-2 md:row-span-2",
    accent: "from-amber-500/8 to-transparent",
    index: "01",
  },
  {
    title: "Brand",
    subtitle: "ブランド運営",
    desc: "独自のブランドアイデンティティの構築・展開。ファッション・アパレルを含む体験設計。",
    span: "md:col-span-1",
    accent: "from-stone-400/10 to-transparent",
    index: "02",
  },
  {
    title: "Development",
    subtitle: "アプリ開発",
    desc: "ユーザー体験を重視した革新的なアプリケーションの設計・開発。",
    span: "md:col-span-1",
    accent: "from-neutral-500/8 to-transparent",
    index: "03",
  },
  {
    title: "Writing",
    subtitle: "個人ライティング",
    desc: "価値あるコンテンツの執筆・発信。動画台本や学びの共有を note で展開。",
    span: "md:col-span-1",
    accent: "from-amber-600/6 to-transparent",
    index: "04",
  },
  {
    title: "Affiliate",
    subtitle: "アフィリエイト",
    desc: "品質の高い製品を推薦し、実使用に基づく誠実な情報提供。",
    span: "md:col-span-1",
    accent: "from-zinc-400/8 to-transparent",
    index: "05",
  },
  {
    title: "Japanese Quality",
    subtitle: "日本製品を世界へ",
    desc: "日本の品質とモノづくりの誇りを世界に示すサイト運営とコンテンツ。",
    span: "md:col-span-2",
    accent: "from-[var(--color-accent-soft)]/10 to-transparent",
    index: "06",
  },
];

const stats = [
  { n: "6+", l: "事業領域", sub: "Areas" },
  { n: "複数", l: "進行中プロジェクト", sub: "Live" },
  { n: "24/7", l: "発信・改善の姿勢", sub: "Always on" },
];

export function HomeClient() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Subtle gradient base */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-paper)] via-white to-white"
          aria-hidden
        />

        {/* Very subtle orbs */}
        <div
          className="hero-orb -left-16 top-8 h-[28rem] w-[28rem] bg-[var(--color-accent-soft)]/25"
          aria-hidden
        />
        <div
          className="hero-orb hero-orb-2 right-[-4%] top-1/3 h-[32rem] w-[32rem] bg-[var(--color-accent)]/12"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 pb-14 pt-24 md:px-10 md:pb-18 md:pt-28">
          {/* Top: Badge + Headline */}
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label-tag">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-soft)] opacity-55" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                Creative Digital Studio
              </span>
            </motion.div>

            <motion.h1
              className="mt-10 font-[family-name:var(--font-display)] text-[clamp(3.25rem,9.5vw,7.5rem)] font-light leading-[1.0] tracking-[-0.01em] md:mt-12"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-shimmer block">革新的なコンテンツで</span>
              <span className="block pl-[6vw] text-[var(--color-ink)] md:pl-[8vw]">
                未来を創造する
              </span>
            </motion.h1>
          </div>

          {/* Bottom: Rule + Description + CTA */}
          <div>
            <motion.div
              className="my-10 h-px bg-gradient-to-r from-[var(--color-accent-soft)]/50 via-[var(--color-line)] to-transparent md:my-14"
              initial={reduce ? false : { scaleX: 0, originX: "0%" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <motion.p
                className="max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px]"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Syntheraは個人経営のクリエイティブデジタルスタジオとして、テクノロジーとクリエイティビティの融合により、新しい価値を創造しています。
              </motion.p>

              <motion.div
                className="flex shrink-0 items-center gap-3"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                >
                  プロジェクト
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white/90 px-8 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink)] shadow-[var(--shadow-xs)] backdrop-blur-md transition-all hover:border-[var(--color-ink)]/15 hover:shadow-sm"
                >
                  について
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            aria-hidden
          >
            <span className="text-[9px] font-semibold tracking-[0.38em] uppercase text-[var(--color-muted)]/55">
              Scroll
            </span>
            <span className="flex h-10 w-6 justify-center rounded-full border border-[var(--color-line)] bg-white/70 pt-2 backdrop-blur">
              <span className="h-2 w-1 rounded-full bg-[var(--color-ink)]/25 animate-scroll-hint" />
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── About + Stats ─── */}
      <section className="border-y border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
            <div>
              <Reveal>
                <SectionLabel en="About" ja="Synthera について" />
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-xl text-[var(--color-muted)] md:text-[16px] md:leading-relaxed">
                  多様な事業領域を横断し、ブランド構築からアプリ開発、ライティング、アフィリエイト、そして「This is Japanese
                  Quality」に至るまで、一貫した品質観で挑戦を続けています。
                </p>
              </Reveal>
            </div>
          </div>

          {/* Stats — editorial horizontal grid, no cards */}
          <Reveal delay={0.14} className="mt-16">
            <div className="grid grid-cols-3 divide-x divide-[var(--color-line)] overflow-hidden rounded-2xl border border-[var(--color-line)]">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="group cursor-default p-8 text-center transition-colors duration-300 hover:bg-[var(--color-paper)]/60 md:p-12"
                >
                  <p className="text-[9px] font-bold tracking-[0.34em] uppercase text-[var(--color-accent)]">
                    {s.sub}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-display)] text-5xl font-light tracking-tight text-[var(--color-ink)] md:text-6xl">
                    {s.n}
                  </p>
                  <p className="mt-3 text-[11px] font-medium tracking-[0.18em] text-[var(--color-muted)]">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bento — 事業領域 ─── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <SectionLabel en="Business Areas" ja="事業領域" />
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href="/projects"
                className="mb-[3.5rem] inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase shadow-[var(--shadow-xs)] transition hover:shadow-sm md:mb-[4.25rem]"
              >
                すべて見る →
              </Link>
            </Reveal>
          </div>

          <div className="mt-2 grid auto-rows-fr gap-3 md:grid-cols-4 md:gap-4">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.045} className={`${a.span} min-h-[148px]`}>
                <motion.article
                  className="app-card group relative flex h-full min-h-[inherit] flex-col overflow-hidden p-7 md:p-8"
                  {...(!reduce ? { whileHover: { y: -5, scale: 1.008 } } : {})}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.accent} opacity-75 transition-opacity duration-400 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                        {a.title}
                      </p>
                      <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-muted)]/35">
                        {a.index}
                      </span>
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium md:text-2xl">
                      {a.subtitle}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[var(--color-muted)]">
                      {a.desc}
                    </p>
                    <div className="mt-6 flex justify-end">
                      <span className="text-[10px] font-bold tracking-[0.28em] text-[var(--color-ink)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Japanese Quality — Split card ─── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="grid gap-3 overflow-hidden rounded-[calc(var(--radius-app)+8px)] border border-[var(--color-line)] bg-white p-2 shadow-[var(--shadow-app-lg)] md:grid-cols-12 md:gap-4 md:p-3">
              {/* Dark panel */}
              <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl p-10 md:col-span-5">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#221c12]"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\")",
                  }}
                />
                <p className="relative text-[9px] font-bold tracking-[0.42em] text-[var(--color-accent-soft)]/70">
                  THIS IS JAPANESE QUALITY
                </p>
                <div className="relative">
                  <div className="mb-5 h-px w-8 bg-[var(--color-accent-soft)]/40" />
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-light leading-tight text-white md:text-[2.5rem]">
                    日本製品を
                    <br />
                    世界へ。
                  </h2>
                </div>
              </div>

              {/* Light panel */}
              <div className="flex flex-col justify-center p-8 md:col-span-7 md:p-12">
                <SectionLabel en="This is Japanese Quality" ja="日本製品を世界へ" />
                <p className="text-[var(--color-muted)] leading-relaxed">
                  日本の優良製品を紹介するWebサイトを運営しています。実際に使用した製品を誠実に紹介し、日本のモノづくりの誇りと品質を世界に伝えます。企業連携を通じて、日本の製品を世界に広める取り組みを進めています。
                </p>
                <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                  伝統的な職人精神と最高品質へのこだわりを世界に示す——それが私たちの信念です。
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/projects#japanese-quality"
                    className="inline-flex rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-7 py-3 text-[10px] font-bold tracking-[0.22em] uppercase text-white transition hover:scale-[1.02] hover:shadow-md"
                  >
                    詳しく見る
                  </Link>
                  <Link
                    href="/note"
                    className="inline-flex rounded-[var(--radius-pill)] border border-[var(--color-line)] px-7 py-3 text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-ink)] transition hover:bg-[var(--color-paper)]"
                  >
                    活動報告
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden border-t border-[var(--color-line)] py-24 md:py-32">
        <div className="absolute inset-0 bg-[var(--color-ink)]" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 75% at 12% 55%, rgba(174,142,110,0.16), transparent 52%), radial-gradient(ellipse 45% 60% at 88% 25%, rgba(255,255,255,0.04), transparent 48%)",
          }}
          aria-hidden
        />
        {/* Top decorative line */}
        <div
          className="absolute top-0 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <motion.p
            className="text-[9px] font-bold tracking-[0.5em] uppercase text-[var(--color-accent-soft)]/60"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Create Together
          </motion.p>
          <motion.h2
            className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5.5vw,3.75rem)] font-light tracking-tight text-white"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            一緒に未来を創造しませんか？
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-md text-sm text-white/45"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14, duration: 0.6 }}
          >
            革新的なアイデアと最新技術で、新しい価値を生み出しましょう。
          </motion.p>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <Link
              href="/contact"
              className="inline-flex rounded-[var(--radius-pill)] bg-white px-11 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-ink)] shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
            >
              お問い合わせ
            </Link>
            <Link
              href="/projects"
              className="inline-flex rounded-[var(--radius-pill)] border border-white/18 px-11 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-white/75 backdrop-blur-sm transition hover:border-white/35 hover:text-white"
            >
              Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
