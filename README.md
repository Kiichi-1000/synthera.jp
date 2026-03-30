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

## Cloudflare Pages での設定（`synthera-jp.pages.dev`）

Cloudflare側が `build_command` / `destination_dir` 空欄だと 404 になりやすいため、以下で固定してください。

- Framework preset: `None`
- Build command: `npm run build:cf`
- Build output directory: `.vercel/output/static`
- Root directory: 空欄（リポジトリルート）

**`nodejs_compat` / Node.js Compatibility Error が出る場合**

`@cloudflare/next-on-pages` は Workers 上で Node 互換レイヤーが必要です。

1. **リポジトリ** — ルートに `wrangler.toml` を置き、`compatibility_flags = ["nodejs_compat"]` が含まれていることを確認してから再デプロイしてください（このリポジトリには同ファイルを同梱しています）。
2. **ダッシュボード（併用・保険）** — Cloudflare ダッシュボード → **Workers & Pages** → 対象プロジェクト → **Settings** → **Functions**（または **Compatibility flags**）で、**Production と Preview の両方**に **`nodejs_compat`** を追加できる場合は有効にしてください。

環境変数（Cloudflare Pages > Settings > Environment variables）:

- `RESEND_API_KEY`
- `CONTACT_TO`
- `RESEND_FROM`（任意）

**CSS/JS が 404・真っ白になる場合（重要）**

- Cloudflare ではビルド時に `CF_PAGES=1` が付与され、`next.config.ts` 側で **GitHub Project Pages 用の `basePath`（`/リポジトリ名`）を付けない**ようにしています。
- Cloudflare の環境変数に **`NEXT_PUBLIC_BASE_PATH` を手動で入れている**と、同様にアセットパスがずれます。**不要なら削除**するか、空に近い値にしないでください（未設定でルート配信）。
- 変更後は **Clear build cache and deploy** を実行してください。
