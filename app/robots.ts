import { MetadataRoute } from "next";
import { OFFICIAL_DOMAIN_URL } from "./constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${OFFICIAL_DOMAIN_URL}sitemap.xml`,
    host: OFFICIAL_DOMAIN_URL.replace(/\/$/, ""),
  };
}
