import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "note",
  description: "Synthera の活動報告・ライティング — note へのリンクと概要",
};

const feeds = [
  {
    title: "EraCast 動画台本",
    desc: "EraCastチャンネルで制作した動画の台本を記事として発信。世界のトレンド分析の視点を共有しています。",
    href: "https://note.com/eracast/scripts",
    label: "note.com/eracast/scripts",
  },
  {
    title: "学びの共有",
    desc: "ビジネス活動を通じて学んだことを記事として発信。経験を通じた気づきや知見を共有しています。",
    href: "https://note.com/eracast/lessons",
    label: "note.com/eracast/lessons",
  },
];

export default function NotePage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="section-hero border-b border-[var(--color-line)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="label-tag inline-flex">note</p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight tracking-tight text-[var(--color-ink)]">
                活動報告
              </h1>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent" />
              <p className="mt-6 text-[var(--color-muted)]">
                Podcast・ブランド・開発・アフィリエイト、「This is Japanese Quality」など、各事業の更新や学びは
                note で発信しています。下記より最新の記事一覧へアクセスできます。
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionLabel en="Publications" ja="掲載カテゴリ" />
        </Reveal>
        <Stagger className="mt-6 grid gap-5 md:grid-cols-2" stagger={0.12}>
          {feeds.map((f) => (
            <StaggerItem key={f.href}>
              <article className="app-card group flex h-full flex-col p-8 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">note</p>
                  <span className="rounded-[var(--radius-pill)] border border-[var(--color-line)] px-3 py-1 text-[9px] font-bold tracking-wider text-[var(--color-muted)]">
                    External
                  </span>
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-light md:text-[1.75rem]">
                  {f.title}
                </h2>
                <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
                <p className="mt-5 flex-1 text-sm text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
                <Link
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-2.5 rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-7 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white transition hover:scale-[1.02] hover:shadow-md"
                >
                  記事を読む
                  <span aria-hidden>→</span>
                </Link>
                <p className="mt-3 text-[11px] text-[var(--color-muted)]/70">{f.label}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-[var(--color-line)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-sm text-[var(--color-muted)]">
              取材・協業・サポートなどのご相談は、お問い合わせフォームまたはメールにて承ります。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-10 py-3.5 text-[11px] font-bold tracking-[0.22em] uppercase text-white transition hover:scale-[1.02] hover:shadow-md"
            >
              Contact
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
