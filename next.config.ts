import type { NextConfig } from "next";

/**
 * Cloudflare Pages ではビルド時に CF_PAGES=1 が付与される（ルート配信）。
 * GitHub 連携で GITHUB_REPOSITORY が入っても、ここではサブパスを付けない。
 * 付けると _next/static やページアセットが /repo/... を向いて 404 になる。
 */
const isCloudflarePages =
  process.env.CF_PAGES === "1" || process.env.CLOUDFLARE_PAGES === "1";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPagesRepository = repositoryName.endsWith(".github.io");

const defaultBasePath =
  !isCloudflarePages &&
  isStaticExport &&
  repositoryName &&
  !isUserPagesRepository
    ? `/${repositoryName}`
    : "";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? defaultBasePath;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isStaticExport ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? basePath : undefined,
};

export default nextConfig;
