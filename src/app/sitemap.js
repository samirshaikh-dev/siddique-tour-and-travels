import { siteConfig } from "@/data/site-config";
import { packages } from "@/data/packages";

export default function sitemap() {
  const baseUrl = siteConfig.canonicalBase || siteConfig.url;
  const lastModMain = "2026-10-07T00:00:00.000Z";

  const staticRoutes = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/umrah", priority: 0.95, changefreq: "weekly" },
    { url: "/hajj", priority: 0.95, changefreq: "monthly" },
    { url: "/ziyarat", priority: 0.9, changefreq: "weekly" },
    { url: "/services", priority: 0.8, changefreq: "monthly" },
    { url: "/about", priority: 0.7, changefreq: "yearly" },
    { url: "/contact", priority: 0.7, changefreq: "yearly" },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.url}`,
    lastModified: lastModMain,
    changeFrequency: r.changefreq,
    priority: r.priority,
    alternates: {
      languages: Object.fromEntries(
        siteConfig.languageAlternates.map((l) => [
          l.hrefLang,
          `${l.href}${r.url === "/" ? "" : r.url}`,
        ])
      ),
    },
  }));

  const packageEntries = packages.map((pkg) => {
    const categoryPath =
      pkg.category === "Umrah"
        ? "/umrah"
        : pkg.category === "Hajj"
        ? "/hajj"
        : "/ziyarat";
    return {
      url: `${baseUrl}${categoryPath}#${pkg.slug}`,
      lastModified: lastModMain,
      changeFrequency: "weekly",
      priority: 0.85,
    };
  });

  return [...staticEntries, ...packageEntries];
}
