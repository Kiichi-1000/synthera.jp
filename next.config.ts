import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPagesRepository = repositoryName.endsWith(".github.io");
const defaultBasePath =
  isStaticExport && repositoryName && !isUserPagesRepository
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
  assetPrefix: basePath || undefined,
};

export default nextConfig;
