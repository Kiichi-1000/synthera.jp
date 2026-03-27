import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO || "synthera.2025@gmail.com";
const RESEND_FROM =
  process.env.RESEND_FROM || "Synthera Website <onboarding@resend.dev>";

const categoryLabels: Record<string, string> = {
  general: "一般・その他",
  sns: "SNS・Podcast・配信",
  brand: "ブランド・アパレル",
  app: "アプリ開発",
  writing: "ライティング・note",
  affiliate: "アフィリエイト・Affiling",
  jiq: "This is Japanese Quality",
  ec: "EC・Etsy・ショップ",
  support: "サポート",
};

export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "メール送信が設定されていません。管理者にお問い合わせください。" },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; category?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "不正なリクエストです。" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const category = String(body.category || "general");
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  if (message.length > 12000) {
    return NextResponse.json({ error: "本文が長すぎます。" }, { status: 400 });
  }

  const categoryLabel = categoryLabels[category] || category;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: [CONTACT_TO],
    replyTo: email,
    subject: `[Synthera] ${categoryLabel} / ${name} 様`,
    html: `
      <p><strong>お名前</strong><br>${escapeHtml(name)}</p>
      <p><strong>メール</strong><br>${escapeHtml(email)}</p>
      <p><strong>種別</strong><br>${escapeHtml(categoryLabel)}</p>
      <p><strong>内容</strong></p>
      <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;">${escapeHtml(message)}</pre>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "送信に失敗しました。しばらくしてから再度お試しください。" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
