import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://washuwant.com/",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://washuwant.com/pricing",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://washuwant.com/contact-us",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
