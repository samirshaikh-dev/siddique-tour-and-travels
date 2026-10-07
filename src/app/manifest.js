import { siteConfig } from "@/data/site-config";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.alternateName || "Siddique Tours",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b3d2e",
    theme_color: "#0b3d2e",
    orientation: "portrait-primary",
    categories: ["travel", "lifestyle", "business", "religion"],
    lang: "en-IN",
    dir: "ltr",
    scope: "/",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "Umrah Packages",
        url: "/umrah",
        description: "Browse year-round Umrah packages",
      },
      {
        name: "Hajj Packages",
        url: "/hajj",
        description: "Hajj guidance and registration",
      },
      {
        name: "Contact Office",
        url: "/contact",
        description: "Reach Siddique Tours head office",
      },
    ],
  };
}
