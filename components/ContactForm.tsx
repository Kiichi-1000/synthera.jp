"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { value: "general", label: "一般・その他" },
  { value: "sns", label: "SNS・Podcast・配信" },
  { value: "brand", label: "ブランド・アパレル" },
  { value: "app", label: "アプリ開発" },
  { value: "writing", label: "ライティング・note" },
  { value: "affiliate", label: "アフィリエイト・Affiling" },
  { value: "jiq", label: "This is Japanese Quality" },
  { value: "ec", label: "EC・Etsy・ショップ" },
  { value: "support", label: "サポート" },
] as const;

const fieldClass =
  "mt-3 w-full rounded-xl border border-[var(--color-line)] bg-white/80 px-4 py-3.5 text-[var(--color-ink)] shadow-sm outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]/40 focus:ring-2 focus:ring-[var(--color-accent)]/15";
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const honeypot = fd.get("company") as string;
    if (honeypot) {
      setStatus("success");
      return;
    }
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      category: String(fd.get("category") || "general"),
      message: String(fd.get("message") || "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage("必須項目を入力してください。");
      return;
    }
    if (!contactEndpoint) {
      setStatus("error");
      setErrorMessage("現在フォーム送信は停止中です。contact@synthera.jp までご連絡ください。");
      return;
    }

    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "送信に失敗しました。時間をおいて再度お試しください。");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-8">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-muted)]"
          >
            お名前 <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-muted)]"
          >
            メールアドレス <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-muted)]"
        >
          お問い合わせ種別
        </label>
        <select id="category" name="category" className={`${fieldClass} cursor-pointer appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b6b6b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")` }}>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        <p className="mt-2 text-[12px] text-[var(--color-muted)]">
          各事業・サポート窓口としてご利用いただけます。内容に応じて折り返しご連絡いたします。
        </p>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--color-muted)]"
        >
          お問い合わせ内容 <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <motion.p
          className="rounded-xl border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-muted)]"
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          送信が完了しました。内容を確認のうえ、必要に応じてご返信いたします。
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="inline-flex min-w-[200px] items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-10 py-4 text-[11px] font-bold tracking-[0.22em] uppercase text-white shadow-lg transition disabled:opacity-50"
      >
        {status === "loading" ? "送信中…" : "送信する"}
      </motion.button>
    </form>
  );
}
