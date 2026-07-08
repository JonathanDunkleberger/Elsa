import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elsaresearch.co",
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
