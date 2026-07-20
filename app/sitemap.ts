import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elsaresearch.com",
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
