import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "All Rice Products — UTS Rice Co. Premium Pakistani Rice Exporter" },
      { name: "description", content: "Browse the full catalogue of premium Pakistani rice varieties exported worldwide by UTS Rice Co. — Basmati, Sella, Steam, Brown, IRRI-6 and more." },
      { property: "og:title", content: "All Rice Products — UTS Rice Co." },
      { property: "og:description", content: "Explore every premium Pakistani rice variety in our export catalogue." },
    ],
  }),
  component: ProductsList,
});

function ProductsList() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoAsset.url} alt="UTS Rice Co." className="h-12 w-auto object-contain" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <section className="bg-black text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Full Catalogue</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            All Rice <span className="gold-text">Varieties</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/75 text-lg">
            Every premium Pakistani rice grade we export — click any product for full specifications, packaging options and cooking guidance.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group bg-white rounded-sm overflow-hidden hover-lift border border-border block"
              >
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium leading-tight">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold red-text">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white/60 py-8 text-center text-xs">
        © 2026 UTS Rice Co. Rice Exporters. All Rights Reserved.
      </footer>
    </div>
  );
}
