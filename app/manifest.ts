import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wash U Want | Laundry Services",
    short_name: "Wash U Want",
    description:
      "Wash U Want provides laundry services to those who do not have time to do their own laundry, so you can focus on what's more important.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { type: "image/x-icon", src: "/favicon.ico" },
      { type: "image/png", sizes: "16x16", src: "/favicon-16x16.png" },
      { type: "image/png", sizes: "32x32", src: "/favicon-32x32.png" },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
