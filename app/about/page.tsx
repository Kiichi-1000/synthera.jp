import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "企業理念、代表者紹介、価値観、沿革 — Synthera",
};

const values = [
  {
    title: "Innovation",
    ja: "革新",
    body: "常に新しいアイデアを追求し、既存の枠を超えた価値を創造します。",
  },
  {
    title: "Quality",
    ja: "品質",
    body: "最高品質のコンテンツとサービスを提供することを最優先とします。",
  },
  {
    title: "Authenticity",
    ja: "誠実さ",
    body: "真実性と透明性を大切にし、信頼関係を築くことを重視します。",
  },
  {
    title: "Growth",
    ja: "成長",
    body: "継続的な学習と成長を通じて、常に進化し続けます。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="section-hero border-b border-[var(--color-line)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="label-tag inline-flex">About</p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight tracking-tight text-[var(--color-ink)]">
                私たちについて
              </h1>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vision + Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="app-card h-full p-8 md:p-10">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)]/60">01</span>
              <SectionLabel en="Vision" ja="ビジョン" />
              <p className="text-[var(--color-muted)] leading-relaxed md:text-[16px]">
                テクノロジーとクリエイティビティの融合により、新しい価値を創造し、世界をより良くしていく。
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="app-card-solid h-full p-8 md:p-10">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)]/60">02</span>
              <SectionLabel en="Mission" ja="ミッション" />
              <p className="text-[var(--color-muted)] leading-relaxed md:text-[16px]">
                革新的なコンテンツとサービスを通じて、人々の生活を豊かにし、可能性を広げる。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Representative */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper)]/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel en="Representative" ja="代表者プロフィール" />
          </Reveal>
          <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12">
            <Reveal className="min-w-0">
              <div className="app-card-solid relative aspect-[3/4] w-full max-w-[280px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-paper)] via-white to-[var(--color-accent-pale)]/30" />
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
                <p className="absolute bottom-6 left-6 right-6 text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--color-muted)]/60">
                  Profile
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="app-card flex flex-col justify-center p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-light">筑井 貴一</h3>
                <div className="mt-3 h-px w-8 bg-[var(--color-accent-soft)]/50" />
                <p className="mt-2 text-sm text-[var(--color-muted)]">生年月日: 2006年11月18日</p>
                <p className="mt-8 text-[var(--color-muted)] leading-relaxed">
                  Syntheraの代表として、テクノロジーとクリエイティビティの融合領域で新しい価値の創造に取り組んでいます。
                </p>
                <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                  SNS運用、ブランド構築、アプリ開発、ライティング活動、そして「This is Japanese
                  Quality」を通じて、多角的なアプローチで革新的なコンテンツを提供しています。
                </p>
                <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                  大学生のゼロから始めるビジネスをぜひ応援していただけると幸いです。
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {["Creative Direction", "Digital Strategy", "Content Creation", "Brand Development"].map((t) => (
                    <span
                      key={t}
                      className="rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white px-4 py-2 text-[10px] font-semibold tracking-wider text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-sm">
                  <span className="text-[var(--color-muted)]">Contact — </span>
                  <a
                    href="mailto:synthera.2025@gmail.com"
                    className="font-medium transition hover:text-[var(--color-accent)]"
                  >
                    synthera.2025@gmail.com
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionLabel en="Values" ja="価値観" />
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2" stagger={0.1}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <article className="app-card-solid group h-full p-8 transition md:p-10">
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                  {v.title}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-light transition-colors group-hover:text-[var(--color-accent)]">
                  {v.ja}
                </h3>
                <div className="mt-3 h-px w-6 bg-[var(--color-line)] transition-colors group-hover:bg-[var(--color-accent-soft)]/50" />
                <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">{v.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Timeline */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-paper)]/25 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel en="Timeline" ja="沿革" />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="relative mt-10 space-y-0 border-l border-[var(--color-line)] pl-10 md:pl-14">
              <li className="relative pb-12">
                <span className="absolute -left-[calc(0.3rem+1px)] top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[var(--color-ink)] shadow-sm" />
                <time className="text-[11px] font-semibold tracking-widest text-[var(--color-accent)]">
                  2025.11.18
                </time>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-medium">企業始動</h3>
                <p className="mt-2 max-w-xl text-sm text-[var(--color-muted)]">
                  学生一人による挑戦として企業活動を正式に開始。
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
