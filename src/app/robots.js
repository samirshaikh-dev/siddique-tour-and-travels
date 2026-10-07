import { siteConfig } from "@/data/site-config";

export default function robots() {
  const baseUrl = siteConfig.canonicalBase || siteConfig.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/_static/",
          "/*.json$",
          "/*.xml$",
          "/*.txt$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 2,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 3,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
