import { MetadataRoute } from "next";
import { OFFICIAL_DOMAIN_URL } from "./constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: OFFICIAL_DOMAIN_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
