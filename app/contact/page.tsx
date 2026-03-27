import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Synthera へのお問い合わせ・各事業サポート窓口",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="section-hero border-b border-[var(--color-line)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="label-tag inline-flex">Contact</p>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight tracking-tight text-[var(--color-ink)]">
                お問い合わせ
              </h1>
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent" />
              <p className="mt-6 text-[var(--color-muted)]">
                取材、協業、商品・サービスに関するご質問、各事業のサポートなど、下記フォームよりお送りください。折り返しメールにて対応いたします。
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10 md:px-10 md:py-24">
        <Reveal className="min-w-0">
          <aside className="app-card-solid space-y-8 p-8 text-sm text-[var(--color-muted)]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-[var(--color-ink)]">Email</p>
              <div className="mt-2 h-px w-5 bg-[var(--color-line)]" />
              <a
                href="mailto:synthera.2025@gmail.com"
                className="mt-4 inline-block break-all font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
              >
                synthera.2025@gmail.com
              </a>
            </div>
            <p className="leading-relaxed text-[13px]">
              フォーム送信時は、返信先としてご入力いただいたメールアドレスを使用します。ドメイン指定受信をご利用の場合は、「resend.com」からのメールも受信できるよう設定をご確認ください。
            </p>
          </aside>
        </Reveal>
        <Reveal delay={0.08} className="min-w-0">
          <div className="app-card p-8 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
