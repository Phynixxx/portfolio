import type { MetadataRoute } from "next"

const DOMAIN = "https://yorrick-dettlaff.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ]
}
