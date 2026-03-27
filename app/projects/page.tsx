import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { SectionDock } from "@/components/projects/SectionDock";

export const metadata: Metadata = {
  title: "Project",
  description: "SNS、ブランド、アプリ開発、ライティング、アフィリエイト、EC、This is Japanese Quality — Synthera の事業領域",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="section-hero border-b border-[var(--color-line)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="label-tag inline-flex">Project</p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight tracking-tight text-[var(--color-ink)]">
              事業領域
            </h1>
            <div className="mt-4 h-px w-12 bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent" />
            <p className="mt-6 max-w-2xl text-[var(--color-muted)] md:text-[15px] md:leading-relaxed">
              様々なチャネルを通じて価値あるコンテンツを制作・発信し、ブランドとプロダクト、そして日本の品質を世界へ届けます。
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionDock />
      </div>

      {/* SNS */}
      <section id="sns" className="scroll-mt-32 border-b border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="SNS" ja="SNS運用" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            Podcast、note、ゲーム配信など、多様なプラットフォームで戦略的にコンテンツを展開しています。
          </p>
          <div className="mt-14 space-y-4">
            <article className="app-card-solid grid gap-6 p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">
                  Podcast
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light">Cityboys</h3>
              </div>
              <div>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  幼馴染二人で始めたPodcastチャンネルです。日本一のPodcastチャンネルを目指しています。
                </p>
              </div>
            </article>
            <article className="app-card-solid grid gap-6 bg-[var(--color-paper)]/40 p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">Brand</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light">BrandSNS</h3>
              </div>
              <div>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  世界で戦えるブランドを作るために。わたしたちにしか出せない価値を創出し、その価値を皆様に共有するために運用しています。
                </p>
              </div>
            </article>
            <article className="app-card-solid grid gap-6 p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">
                  Content
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light">This is Japanese Quality</h3>
              </div>
              <div>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  日本の優良商品を世界に紹介し、日本製品の良さを伝えるコンテンツを制作しています。
                </p>
              </div>
            </article>
            <article className="app-card-solid grid gap-6 bg-[var(--color-paper)]/40 p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)]">
                  Web / Affiliate
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-light">Affiling</h3>
                <Link
                  href="https://synthera.jp/affiling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[11px] tracking-widest text-[var(--color-accent)] hover:underline"
                >
                  詳細を見る →
                </Link>
              </div>
              <div>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  商品比較やランキングなどの記事を作成するWebサイトを運営。実際に使用した製品を誠実に紹介しています。
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Brand */}
      <section id="brand" className="scroll-mt-32 border-b border-[var(--color-line)] bg-[var(--color-paper)]/25 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="Brand" ja="ブランド運営" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            独自のブランドアイデンティティを構築し、一貫したメッセージとビジュアルで価値を伝えています。
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <article className="app-card-solid p-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">SYNTHERA</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-light">ブランドロゴ</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                モダンで洗練されたデザインで、革新的なイメージを表現しています。
              </p>
            </article>
            <article className="app-card-solid p-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light">デザイナー</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                ブランド全体の世界観やビジュアルコンセプトを設計し、統一感のある体験をデザインしています。
              </p>
            </article>
            <article className="app-card-solid p-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">Story</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-light">憧れを世界へ。</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                ブランドストーリーとしてのメッセージを、国内外のオーディエンスへ届けます。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Development */}
      <section id="development" className="scroll-mt-32 border-b border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="Development" ja="アプリ開発" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            ユーザー体験を重視したアプリケーションを開発しています。現在4つのアプリ案があり、そのうち2つを開発中です。
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="app-card-solid p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm bg-[var(--color-ink)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-white">
                  Development
                </span>
                <span className="rounded-sm border border-[var(--color-line)] px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Active
                </span>
                <span className="rounded-sm border border-[var(--color-line)] px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Mobile
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-light">Calendar App</h3>
              <div className="mt-3 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                日々の予定管理をシンプルにするカレンダーアプリを開発中です。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  シンプルなUXで予定が見やすい
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  通知機能で抜け漏れを防止
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  共有機能でチームコラボをサポート
                </li>
              </ul>
            </article>
            <article className="app-card-solid p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm bg-[var(--color-ink)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-white">
                  Development
                </span>
                <span className="rounded-sm border border-[var(--color-line)] px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Active
                </span>
                <span className="rounded-sm border border-[var(--color-line)] px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Multi-platform
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-light">ToDoアプリ</h3>
              <div className="mt-3 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                4分割ポストイット、ホワイトボード、ノート機能を統合したタスク管理アプリを開発しています。スケジューリング機能や目標設定機能、分析機能も搭載予定です。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  4分割ポストイットで日々のタスクを直感的に整理
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  ホワイトボードでアイデアを俯瞰
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  目標設定と分析で継続的な改善をサポート
                </li>
              </ul>
            </article>
            <article className="app-card-solid bg-[var(--color-paper)]/30 p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm border border-[var(--color-line)] bg-white px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Planning
                </span>
                <span className="rounded-sm border border-[var(--color-line)] bg-white px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Draft
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-light">アプリ開発案 A</h3>
              <div className="mt-3 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                複数のアプリアイデアを検討中。市場調査とプロトタイピングを進行予定です。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  機能要件の整理中
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  ターゲットユーザーの調査を実施予定
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  デザインコンセプトを検討中
                </li>
              </ul>
            </article>
            <article className="app-card-solid bg-[var(--color-paper)]/30 p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm border border-[var(--color-line)] bg-white px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Planning
                </span>
                <span className="rounded-sm border border-[var(--color-line)] bg-white px-2.5 py-1 text-[10px] tracking-wider text-[var(--color-muted)]">
                  Draft
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-light">アプリ開発案 B</h3>
              <div className="mt-3 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                新たな体験価値を提供するプロダクト案を検討中。技術検証を行いロードマップを策定予定です。
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  課題ヒアリングを実施予定
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  技術スタックの検討中
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-muted)]/40" />
                  PoC の準備を進行
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="scroll-mt-32 border-b border-[var(--color-line)] bg-[var(--color-paper)]/25 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="Writing" ja="個人ライティング" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            EraCastの動画台本や、ビジネスを通じて学んだことを記事として発信しています。
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="app-card-solid p-8 md:p-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">Note記事</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-light">EraCast動画台本</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                EraCastチャンネルで制作した動画の台本を記事として発信しています。世界のトレンド分析の視点を共有しています。
              </p>
              <Link
                href="https://note.com/eracast/scripts"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] font-medium tracking-widest text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                記事を読む →
              </Link>
            </article>
            <article className="app-card-solid p-8 md:p-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)]">Note記事</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-light">学びの共有</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                ビジネス活動を通じて学んだことを記事として発信しています。経験を通じた気づきや知見を共有しています。
              </p>
              <Link
                href="https://note.com/eracast/lessons"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] font-medium tracking-widest text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                記事を読む →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Affiliate */}
      <section id="affiliate" className="scroll-mt-32 border-b border-[var(--color-line)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="Affiliate" ja="アフィリエイト" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            品質の高い製品を厳選し、おすすめ情報を提供することで、皆様の生活に価値を届けています。実際に使用した製品を誠実に紹介することを大切にしています。
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="app-card-solid p-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light">Affiling</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                商品比較やランキングなどの記事を作成するWebサイト。実際に使用した製品を誠実に紹介しています。
              </p>
              <Link
                href="https://synthera.jp/affiling.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] tracking-widest text-[var(--color-accent)] hover:underline"
              >
                記事を見る →
              </Link>
            </article>
            <article className="app-card-solid p-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light">This is Japanese Quality</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                日本の優良製品を海外に紹介するWebサイト。日本のモノづくりの誇りと品質を世界に伝える活動です。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EC */}
      <section id="ec" className="scroll-mt-32 border-b border-[var(--color-line)] bg-[var(--color-paper)]/25 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="EC" ja="EC運営" />
          <p className="max-w-2xl text-[var(--color-muted)]">
            海外に向けて日本の製品を販売し、オリジナルブランドの構築に取り組んでいます。
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="app-card-solid p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light">Etsyショップ</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                海外に向けて日本の製品を販売しています。日本人らしいものを世界に届ける活動です。
              </p>
              <Link
                href="https://syntherastore.etsy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] font-medium tracking-widest text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                ショップを見る →
              </Link>
            </article>
            <article className="app-card-solid p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-light">アパレルブランド</h3>
              <div className="mt-3 h-px w-6 bg-[var(--color-line)]" />
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                オリジナルブランドの構築に取り組んでいます。プロトタイプ開発と市場検証を進行中です。
              </p>
              <Link
                href="https://shop.synthera.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] font-medium tracking-widest text-[var(--color-ink)] underline-offset-4 hover:underline"
              >
                ショップを見る →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Japanese Quality */}
      <section id="japanese-quality" className="scroll-mt-32 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionLabel en="This is Japanese Quality" ja="THIS IS JAPANESE QUALITY" />
          <p className="max-w-3xl font-[family-name:var(--font-display)] text-2xl font-light md:text-3xl">
            日本製品を世界へ。これが日本だ。
          </p>

          <div className="mt-16 space-y-12">
            <div>
              <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                Our Mission
              </h3>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <article className="app-card-solid p-7">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-light">日本再興</h4>
                  <div className="mt-2 h-px w-5 bg-[var(--color-line)]" />
                  <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                    アメリカに並ぶ大国として日本を再復興させる。先進技術は遅れていても、モノづくりで世界一の日本を再主張する。
                  </p>
                </article>
                <article className="app-card-solid p-7">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-light">品質への誇り</h4>
                  <div className="mt-2 h-px w-5 bg-[var(--color-line)]" />
                  <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                    アメリカ的な合理ビジネスではなく、品質やモノづくりへの誇りという非合理的な愛情という面で成り上がった日本を再主張する。
                  </p>
                </article>
                <article className="app-card-solid p-7">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-light">世界への発信</h4>
                  <div className="mt-2 h-px w-5 bg-[var(--color-line)]" />
                  <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
                    日本の製品と品質、職人精神を世界に発信し、日本の真の強さを世界中の人々に示す。
                  </p>
                </article>
              </div>
            </div>

            <div className="app-card-solid bg-[var(--color-paper)]/30 p-8 md:p-12">
              <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                This is Japanese Story
              </h3>
              <div className="mt-4 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-6 text-sm text-[var(--color-muted)] leading-relaxed md:text-base">
                企業活動開始予定：11月18日 ／ 現在：学生一人による挑戦
              </p>
              <p className="mt-6 text-sm text-[var(--color-muted)] leading-relaxed md:text-base">
                この企業の魅力は、ゼロから歩みを刻む物語にあります。はじまりは小さくとも、一歩ずつ前進する過程こそが価値になる。その信念のもと、私たちは「This
                is Japanese Story」を掲げ、まずは大企業の商品をお借りしたネットミーム的な取り組みからスタートします。
              </p>
              <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed md:text-base">
                しかし、それは通過点に過ぎません。ゆくゆくは自らの手で開発した製品にこの印を掲げ、「これが日本だ」と胸を張って世界に示します。合理性だけに収まらない、品質とモノづくりへの非合理的な愛情を原動力に、物語を積み上げていきます。
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-light">日本の強さ</h3>
              <div className="mt-4 h-px w-8 bg-[var(--color-line)]" />
              <p className="mt-6 max-w-3xl text-[var(--color-muted)] leading-relaxed">
                効率や利益だけでなく、モノづくりへの情熱と完璧を追求する姿勢。これこそが日本の真の強さです。私たちは、日本の伝統的な職人精神と最高品質へのこだわりを世界に示します。製造工程の一つ一つに込められた想い、品質への徹底的なこだわり、そして職人の技術と経験が生み出す最高の製品を、世界の人々に届けます。
              </p>
              <p className="mt-4 max-w-3xl text-[var(--color-muted)] leading-relaxed">
                先進技術の競争では後れを取っていても、モノづくりの品質と職人精神において、日本は世界一です。この誇りを胸に、日本の製品を世界へ広めていきます。
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                Japanese Values
              </h3>
              <ol className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  {
                    t: "職人精神",
                    b: "長年積み上げてきた技術と経験、そして完璧を追求する姿勢。一つの製品を作り上げる過程で、職人の魂が込められます。",
                  },
                  {
                    t: "品質への徹底的なこだわり",
                    b: "妥協を許さない品質基準。一つ一つの工程を丁寧に仕上げ、最高品質を実現するための不断の努力。",
                  },
                  {
                    t: "非合理的な愛情",
                    b: "効率や利益だけでは測れない、モノづくりへの情熱と愛情。この非合理的な愛情こそが、日本製品の真の価値を生み出します。",
                  },
                  {
                    t: "継続的な改善",
                    b: "常に向上を目指し、より良い製品を作り続ける姿勢。伝統を守りながらも、絶えず進化し続ける日本の力。",
                  },
                ].map((item, i) => (
                  <li key={item.t} className="app-card-solid flex gap-5 p-7">
                    <span className="font-[family-name:var(--font-display)] text-2xl font-light text-[var(--color-accent-soft)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-medium">{item.t}</h4>
                      <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{item.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
