import { MetadataRoute } from "next";
import {db} from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await db.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
