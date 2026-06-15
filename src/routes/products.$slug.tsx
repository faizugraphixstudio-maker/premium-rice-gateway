import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Wheat, Droplets, Sparkles, Boxes, Calendar, ChefHat, Mail, Phone } from "lucide-react";
import { getProduct, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) {
      return { meta: [{ title: "Product Not Found — UTS Rice Co." }] };
    }
    const title = `${product.name} — UTS Rice Co. Premium Pakistani Rice Exporter`;
    const description = product.desc;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: product.img },
        { name: "twitter:image", content: product.img },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl font-medium">Product not found</h1>
        <p className="mt-3 text-muted-foreground">The product you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-sm font-medium">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-medium">Something went wrong</h1>
        <button onClick={reset} className="mt-6 bg-gold text-black px-6 py-3 rounded-sm font-medium">Try again</button>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  const specs = [
    { icon: MapPin, label: "Origin", value: product.origin },
    { icon: Wheat, label: "Grain Length", value: product.grainLength },
    { icon: Droplets, label: "Moisture", value: product.moisture },
    { icon: Sparkles, label: "Purity", value: product.purity },
    { icon: BadgeCheck, label: "Brokens", value: product.brokens },
    { icon: Calendar, label: "Crop Year", value: product.cropYear },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-lg font-medium">UTS Rice Co.</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={product.img} alt={product.name} className="rounded-sm shadow-2xl w-full aspect-square object-cover" />
            <div className="absolute -top-4 -left-4 bg-gold text-black px-5 py-2 rounded-sm shadow-xl">
              <div className="text-xs uppercase tracking-widest font-medium">Export Grade</div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Premium Rice Variety</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">{product.name}</h1>
            <p className="mt-4 text-xl text-gold italic font-light">{product.tagline}</p>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{product.desc}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 bg-gold text-black px-7 py-4 rounded-sm font-medium hover:bg-[oklch(0.7_0.14_75)] transition-colors">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-4 rounded-sm font-medium hover:border-gold hover:text-gold transition-colors">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Overview</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
            About <span className="italic gold-text">{product.name}</span>
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {product.longDescription.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Specifications</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium">Technical <span className="italic gold-text">data sheet</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specs.map((s) => (
              <div key={s.label} className="bg-white p-6 rounded-sm border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-items-center rounded-sm bg-secondary text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
                <div className="font-display text-lg font-medium">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & cooking */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-black text-white p-10 rounded-sm">
            <Boxes className="h-10 w-10 text-gold mb-5" />
            <h3 className="font-display text-2xl font-medium">Packaging Options</h3>
            <p className="mt-2 text-white/60 text-sm">Flexible packaging to meet retail, wholesale, and bulk export needs.</p>
            <ul className="mt-6 space-y-3">
              {product.packaging.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary/60 p-10 rounded-sm border border-border">
            <ChefHat className="h-10 w-10 text-gold mb-5" />
            <h3 className="font-display text-2xl font-medium">Cooking Guidance</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.cooking}</p>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Ideal Uses</div>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((u) => (
                  <span key={u} className="text-xs font-medium bg-white border border-border px-3 py-1.5 rounded-sm">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium">Ready to import <span className="italic gold-text">{product.name}</span>?</h2>
          <p className="mt-4 text-white/70 text-lg">Contact our export desk for pricing, samples, and shipping schedules.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:export@utsrice.com" className="inline-flex items-center gap-2 bg-gold text-black px-7 py-4 rounded-sm font-medium hover:bg-white transition-colors">
              <Mail className="h-4 w-4" /> export@utsrice.com
            </a>
            <a href="tel:+922134567890" className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded-sm font-medium hover:bg-white hover:text-black transition-colors">
              <Phone className="h-4 w-4" /> +92 21 3456 7890
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Related</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-medium">Other premium <span className="italic gold-text">varieties</span></h2>
            </div>
            <Link to="/" hash="products" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-gold">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group bg-white rounded-sm overflow-hidden border border-border hover-lift block">
                <div className="aspect-square overflow-hidden bg-black">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-medium">{p.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium group-hover:text-gold">
                    View details <ArrowRight className="h-3 w-3" />
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
