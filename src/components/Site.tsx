import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu, X, ChevronDown, ArrowRight, Award, Globe, Truck, BadgeCheck,
  ShieldCheck, Package, Headphones, Wheat, Leaf, Factory, FlaskConical,
  Boxes, MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin,
  ArrowUp, MessageCircle, Star, Quote, Plus, Minus, Send,
} from "lucide-react";
import heroImg from "@/assets/hero-rice-fields.jpg";
import grainsImg from "@/assets/basmati-grains.jpg";
import processingImg from "@/assets/rice-processing.jpg";
import shippingImg from "@/assets/export-shipping.jpg";
import packagingImg from "@/assets/rice-packaging.jpg";
import inspectionImg from "@/assets/quality-inspection.jpg";
import pBasmati from "@/assets/product-basmati.jpg";
import pWhite from "@/assets/product-white.jpg";
import pBrown from "@/assets/product-brown.jpg";
import pSella from "@/assets/product-sella.jpg";
import logoAsset from "@/assets/logo.png.asset.json";

const NAV_MAIN = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NAV_MORE = [
  { label: "Certifications", href: "#certifications" },
  { label: "Quality Assurance", href: "#quality" },
  { label: "Export Markets", href: "#export" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "News & Updates", href: "#news" },
];

const PRODUCTS = [
  { name: "Super Basmati Rice", desc: "Long, slender grains with an unmistakable aroma — the crown jewel of Pakistani Basmati.", img: pBasmati },
  { name: "1121 Basmati Rice", desc: "Extra-long grain Basmati prized for length, elongation, and exceptional fluffiness.", img: grainsImg },
  { name: "1509 Basmati Rice", desc: "Premium Basmati with quick cooking time and pristine white finish.", img: pWhite },
  { name: "PK-386 Rice", desc: "Long grain non-Basmati known for clean appearance and consistent quality.", img: pBasmati },
  { name: "IRRI-6 Rice", desc: "Versatile medium grain rice ideal for foodservice and industrial applications.", img: pWhite },
  { name: "Brown Rice", desc: "Whole-grain rice retaining bran and germ — naturally rich in fiber and minerals.", img: pBrown },
  { name: "Steam Rice", desc: "Steam-treated Basmati preserving nutrients with improved cooking performance.", img: pSella },
  { name: "Sella Rice", desc: "Parboiled rice with a golden hue, firm texture, and non-sticky cooked grains.", img: pSella },
  { name: "Long Grain Rice", desc: "Slender, elongated grains that cook light, dry, and separate.", img: grainsImg },
  { name: "White Rice", desc: "Polished, milled white rice in multiple grades for global distribution.", img: pWhite },
];

const FEATURES = [
  { icon: Award, title: "Premium Quality", desc: "Hand-selected grains meeting the highest international standards." },
  { icon: Globe, title: "Global Export Network", desc: "Trusted partners and logistics across 60+ countries." },
  { icon: Truck, title: "Timely Delivery", desc: "Reliable shipping schedules with real-time tracking." },
  { icon: BadgeCheck, title: "Competitive Pricing", desc: "Direct-from-source pricing without compromising quality." },
  { icon: ShieldCheck, title: "Strict Quality Control", desc: "Multi-stage inspection from paddy to packaging." },
  { icon: FlaskConical, title: "International Standards", desc: "ISO, HACCP, and BRC certified facilities." },
  { icon: Package, title: "Secure Packaging", desc: "Custom packaging from 1kg retail to 50kg jute bags." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personal account managers for every export partner." },
];

const STATS = [
  { value: "60+", label: "Export Countries" },
  { value: "400+", label: "International Clients" },
  { value: "25+", label: "Years of Experience" },
  { value: "120K MT", label: "Annual Capacity" },
];

const CERTS = ["ISO 22000", "HACCP", "BRC Global", "SGS Verified", "Halal Certified", "FSSAI"];

const REGIONS = [
  "Middle East", "European Union", "United Kingdom", "North America",
  "Africa", "Southeast Asia", "Australia & Oceania", "South America",
];

const TESTIMONIALS = [
  { quote: "Auragrain has been our most consistent Basmati supplier for the past seven years. Every shipment arrives on schedule and exceeds spec.", name: "Khalid Al-Rashid", role: "Procurement Director", company: "Gulf Foods Trading, Dubai" },
  { quote: "The quality of their 1121 Basmati is exceptional. Our retail partners across Europe trust the brand we built around Auragrain rice.", name: "Sophie Laurent", role: "Managing Director", company: "Maison Riziere, Paris" },
  { quote: "Documentation, certifications, packaging — everything is handled with the professionalism of a Fortune 500 operation.", name: "James Okonkwo", role: "Head of Imports", company: "WestAfrica Foods Ltd, Lagos" },
];

const FAQS = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is one 20ft container (approximately 24 metric tons). We accommodate smaller orders for sample-based partnerships." },
  { q: "What packaging options do you offer?", a: "Retail packs from 1kg to 25kg in polypropylene, paper, or cotton bags, plus 50kg jute bags for bulk. Private-label packaging available." },
  { q: "How long does shipping take?", a: "FOB Karachi delivery is typically 7–10 days from order confirmation. Sea freight times depend on destination, ranging from 18 to 45 days." },
  { q: "Which countries do you export to?", a: "We currently export to over 60 countries across the Middle East, EU, UK, North America, Africa, and Asia-Pacific." },
  { q: "How do you ensure quality?", a: "Every lot undergoes a 14-point inspection including moisture, broken percentage, foreign matter, and aroma analysis in our certified lab." },
  { q: "What payment methods do you accept?", a: "We accept Letters of Credit (L/C at sight), Telegraphic Transfer (T/T), and Documents against Payment (D/P) through Tier-1 banks." },
];

const GALLERY = [
  { src: heroImg, alt: "Lush rice paddy fields at sunset" },
  { src: processingImg, alt: "Modern rice processing facility" },
  { src: packagingImg, alt: "Premium rice packaging in warehouse" },
  { src: shippingImg, alt: "Export cargo containers at port" },
  { src: inspectionImg, alt: "Quality inspection laboratory" },
  { src: grainsImg, alt: "Premium Basmati rice grains" },
];

export function Site() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Products />
      <WhyUs />
      <Quality />
      <Certifications />
      <ExportNetwork />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <img src={logoAsset.url} alt="UTS Millers Suppliers & Exporters" className="h-12 w-auto object-contain" />
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {NAV_MAIN.map((item) => (
            <a key={item.label} href={item.href} className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${scrolled ? "text-foreground" : "text-white"}`}>{item.label}</a>
          ))}
          <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium hover:text-gold ${scrolled ? "text-foreground" : "text-white"}`}>
              More <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56">
                <div className="rounded-md bg-white shadow-xl border border-border overflow-hidden animate-fade-up">
                  {NAV_MORE.map((item) => (
                    <a key={item.label} href={item.href} className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-gold transition-colors">{item.label}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-3 justify-end">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gold text-black px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-[oklch(0.7_0.14_75)] transition-colors">
            Get Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {[...NAV_MAIN, ...NAV_MORE].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="px-2 py-3 text-sm font-medium border-b border-border last:border-0">{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Premium rice paddy fields" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative mx-auto max-w-7xl px-6 py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white">Exporting Excellence Since 1999</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight">
            Premium Pakistani Rice<br />
            <span className="gold-text italic">Exported Worldwide</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Delivering exceptional quality, purity, and consistency to international markets across six continents.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="group inline-flex items-center gap-3 bg-gold text-black px-8 py-4 rounded-sm font-medium hover:bg-[oklch(0.7_0.14_75)] transition-all hover:gap-4">
              Explore Products <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-sm font-medium hover:bg-white hover:text-black transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left border-l border-white/10 pl-6">
            <div className="font-display text-4xl md:text-5xl font-medium gold-text">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span className="h-px w-10 bg-gold" />
      <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">{children}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={processingImg} alt="Modern rice processing facility" loading="lazy" width={1280} height={960} className="rounded-sm shadow-2xl w-full h-auto" />
          <img src={inspectionImg} alt="Quality inspection" loading="lazy" width={1280} height={960} className="hidden md:block absolute -bottom-12 -right-8 w-2/3 rounded-sm shadow-2xl border-8 border-background" />
          <div className="absolute -top-6 -left-6 bg-gold text-black p-6 rounded-sm shadow-xl hidden md:block">
            <div className="font-display text-4xl font-medium">25+</div>
            <div className="text-xs uppercase tracking-widest">Years Trusted</div>
          </div>
        </div>
        <div>
          <SectionLabel>About Auragrain</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            A heritage of rice <span className="italic gold-text">excellence</span>, exported with integrity.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            For over two decades, Auragrain has stood at the forefront of Pakistani rice export — bridging the fertile fields of Punjab and Sindh with discerning buyers in more than sixty countries. We don't just trade rice; we steward a craft.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
              "Global export capabilities",
              "International trade expertise",
              "Uncompromising quality commitment",
              "Certified food safety standards",
              "Long-term business relationships",
              "Reliable end-to-end supply chain",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <a href="#products" className="mt-10 inline-flex items-center gap-2 text-sm font-medium border-b-2 border-gold pb-1 hover:gap-3 transition-all">
            Discover our products <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            Ten varieties. <span className="italic gold-text">One uncompromising</span> standard.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">From the world-renowned Super Basmati to specialty parboiled varieties — every grain meets export-grade specification.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group bg-white rounded-sm overflow-hidden hover-lift border border-border">
              <div className="aspect-square overflow-hidden bg-black">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium leading-tight">{p.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">{p.desc}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-gold transition-colors">
                  View Details <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Built on trust. <span className="italic gold-text">Proven by results.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="group p-8 border border-border rounded-sm bg-white hover:border-gold hover:shadow-xl transition-all duration-500">
              <div className="h-12 w-12 grid place-items-center rounded-sm bg-secondary text-gold group-hover:bg-gold group-hover:text-black transition-colors mb-5">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const steps = [
    { icon: Wheat, title: "Grain Selection", desc: "Hand-picked from trusted farms in Punjab and Sindh." },
    { icon: Leaf, title: "Cleaning Process", desc: "De-stoning, color-sorting, and impurity removal." },
    { icon: FlaskConical, title: "Quality Inspection", desc: "14-point laboratory analysis on every lot." },
    { icon: Boxes, title: "Packaging Standards", desc: "Food-grade materials in custom specifications." },
    { icon: ShieldCheck, title: "Food Safety Compliance", desc: "Adherence to global HACCP and ISO protocols." },
  ];
  return (
    <section id="quality" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      <img src={inspectionImg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Quality Assurance</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">From paddy to port — <span className="italic gold-text">every grain inspected.</span></h2>
          <p className="mt-5 text-white/70 text-lg">A five-stage quality protocol ensures every container leaving our facility upholds the Auragrain promise.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-black p-8 hover:bg-white/5 transition-colors">
              <div className="text-gold text-xs font-medium mb-3">0{i + 1}</div>
              <s.icon className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-display text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-medium">Trusted by <span className="italic gold-text">global standards.</span></h2>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">Independently audited and certified by the world's most respected regulatory bodies.</p>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CERTS.map((c) => (
            <div key={c} className="group p-8 border-2 border-border rounded-sm hover:border-gold hover:bg-secondary transition-all">
              <div className="h-16 w-16 mx-auto mb-3 rounded-full border-2 border-gold grid place-items-center group-hover:bg-gold transition-colors">
                <Award className="h-8 w-8 text-gold group-hover:text-black transition-colors" />
              </div>
              <div className="font-display font-medium text-sm">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportNetwork() {
  return (
    <section id="export" className="py-24 md:py-32 bg-secondary/50 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Global Reach</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">A worldwide network <span className="italic gold-text">on every continent.</span></h2>
          <p className="mt-5 text-muted-foreground text-lg">Our export operations span sixty countries, supported by long-standing partnerships with importers, distributors, and major food brands.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {REGIONS.map((r) => (
              <div key={r} className="flex items-center gap-3 p-3 bg-white rounded-sm border border-border">
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={shippingImg} alt="International export shipping" loading="lazy" width={1600} height={900} className="rounded-sm shadow-2xl w-full h-auto" />
          <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur text-white p-6 rounded-sm">
            <div className="flex items-center gap-4">
              <Globe className="h-10 w-10 text-gold" />
              <div>
                <div className="font-display text-2xl">60+ Countries</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Active export destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Inside our <span className="italic gold-text">world.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className={`group relative overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors grid place-items-center">
                <Plus className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[60] bg-black/95 grid place-items-center p-6 animate-fade-up">
          <button className="absolute top-6 right-6 text-white" onClick={() => setActive(null)}><X className="h-8 w-8" /></button>
          <img src={GALLERY[active].src} alt={GALLERY[active].alt} className="max-h-[90vh] max-w-full rounded-sm" />
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-medium">What our partners <span className="italic gold-text">say.</span></h2>
        <div className="mt-16 relative">
          <Quote className="h-16 w-16 text-gold/30 mx-auto mb-6" />
          <blockquote className="font-display text-2xl md:text-3xl leading-relaxed font-light italic">
            "{TESTIMONIALS[i].quote}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
          </div>
          <div className="mt-6">
            <div className="font-medium">{TESTIMONIALS[i].name}</div>
            <div className="text-sm text-white/60">{TESTIMONIALS[i].role} — {TESTIMONIALS[i].company}</div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "bg-gold w-10" : "bg-white/20 w-4"}`} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Frequently asked <span className="italic gold-text">questions.</span></h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-sm border border-border overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                <span className="font-display text-lg font-medium">{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-gold shrink-0" /> : <Plus className="h-5 w-5 text-gold shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">Looking for a reliable <span className="italic gold-text">rice export partner?</span></h2>
          <p className="mt-5 text-muted-foreground text-lg">Contact our team for quotations, product information, and export inquiries.</p>
          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Headquarters", value: "Trade Tower, Shahrah-e-Faisal, Karachi 74400, Pakistan" },
              { icon: Phone, label: "Phone", value: "+92 21 3456 7890" },
              { icon: Mail, label: "Email", value: "export@auragrain.com" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM PKT" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-sm bg-secondary text-gold shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-sm mt-1">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-gold/10 border-l-4 border-gold rounded-sm">
            <div className="text-sm font-medium">We respond to all inquiries within 24 hours.</div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); (e.target as HTMLFormElement).reset(); }}
          className="lg:col-span-3 bg-secondary/40 p-8 md:p-10 rounded-sm border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "name", label: "Full Name", type: "text", required: true },
              { name: "company", label: "Company Name", type: "text", required: true },
              { name: "email", label: "Email Address", type: "email", required: true },
              { name: "phone", label: "Phone Number", type: "tel" },
              { name: "country", label: "Country", type: "text", required: true },
              { name: "product", label: "Product Interest", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{f.label}</label>
                <input name={f.name} type={f.type} required={f.required} maxLength={150} className="w-full bg-white border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea name="message" rows={5} maxLength={1500} required className="w-full bg-white border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-sm font-medium hover:bg-gold hover:text-black transition-colors">
            Send Inquiry <Send className="h-4 w-4" />
          </button>
          {sent && <div className="mt-4 text-sm text-gold font-medium">Thank you. Our export team will contact you within 24 hours.</div>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">Premium Pakistani rice exported to over 60 countries. A heritage of quality, trusted by global importers since 1999.</p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Trade Tower, Shahrah-e-Faisal, Karachi 74400</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +92 21 3456 7890</div>
              <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-gold" /> +92 300 1234567</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> export@auragrain.com</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon – Sat, 9 AM – 6 PM PKT</div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display text-base mb-5 text-gold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {NAV_MAIN.concat([{ label: "Certifications", href: "#certifications" }]).map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-display text-base mb-5 text-gold">Products</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Basmati Rice", "White Rice", "Brown Rice", "Steam Rice", "Sella Rice"].map((p) => (
                <li key={p}><a href="#products" className="hover:text-gold transition-colors">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="font-display text-base mb-5 text-gold">Stay Connected</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe for market updates, new harvest releases, and export insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" required placeholder="your@email.com" className="flex-1 bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold" />
              <button className="bg-gold text-black px-5 py-3 rounded-sm font-medium hover:bg-white transition-colors">Subscribe</button>
            </form>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "mailto:export@auragrain.com" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="h-10 w-10 grid place-items-center border border-white/20 rounded-sm hover:bg-gold hover:text-black hover:border-gold transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>© 2026 Auragrain Rice Exporters. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Trade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-black text-gold border border-gold shadow-xl hover:bg-gold hover:text-black transition-colors animate-fade-up"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
