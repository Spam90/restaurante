import type { MetadataRoute } from "next";
import { restaurantConfig } from "@/data/restaurant";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurantConfig.siteUrl;
  const routes = ["", "/menu", "/experience", "/reservations", "/location"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
