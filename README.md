# Synthera Web

Next.js (App Router) で構築した Synthera の公式サイトです。

## フォーム送信（Resend）を公開サーバーで有効化する

このプロジェクトは `app/api/contact/route.ts` で Resend を使ってメール送信します。

### 1. 公開サーバーを使用する

`/api/contact` はサーバー実行が必要です。GitHub Pages（静的配信）では動きません。

推奨: Vercel / Render / Fly.io など Node.js サーバーが動く環境。

### 2. 環境変数を設定する

以下をデプロイ先に設定してください。

- `RESEND_API_KEY`
- `CONTACT_TO`
- `RESEND_FROM`（任意）

例:

```dotenv
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO=synthera.2025@gmail.com
RESEND_FROM=Synthera <onboarding@resend.dev>
```

### 3. 静的エクスポートを無効のまま運用する

デフォルトではサーバー運用向けです（`STATIC_EXPORT` 未設定）。

- `STATIC_EXPORT=true` を設定した場合のみ静的出力モードになります。
- フォーム送信を使う公開サーバーでは `STATIC_EXPORT` を設定しないでください。

## ローカル実行

```bash
npm install
npm run dev
```

## 本番ビルド確認

```bash
npm run build
```

`Route (app)` に `ƒ /api/contact` が表示されればサーバーAPIが有効です。
