import { siteConfig } from "@/data/site-config";

export default function robots() {
  const baseUrl = siteConfig.canonicalBase || siteConfig.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/_static/"],
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
        ],
        allow: ["/", "/llms.txt"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
