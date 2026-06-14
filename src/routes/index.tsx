import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/Site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auragrain — Premium Pakistani Rice Exported Worldwide" },
      { name: "description", content: "Auragrain exports premium Pakistani Basmati and specialty rice to over 60 countries. Trusted by importers, distributors, wholesalers, and food companies worldwide." },
      { property: "og:title", content: "Auragrain — Premium Pakistani Rice Exported Worldwide" },
      { property: "og:description", content: "Premium Basmati and specialty rice delivered with uncompromising quality to international markets." },
    ],
  }),
  component: Site,
});
