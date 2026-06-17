import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu, X, ChevronDown, ArrowRight, ArrowLeft, Award, Globe, Truck, BadgeCheck,
  ShieldCheck, Package, Headphones, Wheat, Leaf, Factory, FlaskConical,
  Boxes, MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin,
  ArrowUp, MessageCircle, Star, Quote, Plus, Minus, Send, UserCircle2,
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
import ceoImg from "@/assets/ceo-portrait.jpg";
import logoAsset from "@/assets/logo.png.asset.json";

/* ---------- shared hooks ---------- */
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useCountUp(target: number, suffix = "", duration = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return `${val.toLocaleString()}${suffix}`;
}


const NAV_MAIN = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NAV_MORE = [
  { label: "Message from the CEO", href: "#ceo" },
  { label: "Certifications", href: "#certifications" },
  { label: "Quality Assurance", href: "#quality" },
  { label: "Export Markets", href: "#export" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "News & Updates", href: "#news" },
];

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 60, suffix: "+", label: "Export Countries" },
  { value: 400, suffix: "+", label: "International Clients" },
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "K MT", label: "Annual Capacity" },
];


import { PRODUCTS } from "@/data/products";


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


const CERTS = ["ISO 22000", "HACCP", "BRC Global", "SGS Verified", "Halal Certified", "FSSAI"];




const TESTIMONIALS = [
  { quote: "UTS Rice Co. has been our most consistent Basmati supplier for the past seven years. Every shipment arrives on schedule and exceeds spec.", name: "Khalid Al-Rashid", role: "Procurement Director", company: "Gulf Foods Trading, Dubai" },
  { quote: "The quality of their 1121 Basmati is exceptional. Our retail partners across Europe trust the brand we built around UTS Rice Co. rice.", name: "Sophie Laurent", role: "Managing Director", company: "Maison Riziere, Paris" },
  { quote: "Documentation, certifications, packaging — everything is handled with the professionalism of a Fortune 500 operation.", name: "James Okonkwo", role: "Head of Imports", company: "WestAfrica Foods Ltd, Lagos" },
  { quote: "Their parboiled Sella is now the backbone of our private-label biryani range — flawless grain length and aroma in every batch.", name: "Aisha Mahmoud", role: "Category Manager", company: "BlueNile Retail, Cairo" },
  { quote: "Five years, sixty containers, zero quality claims. That is the kind of partner every importer dreams of working with.", name: "Marcus Thornton", role: "Director of Sourcing", company: "Atlantic Grains LLC, Houston" },
  { quote: "From sample dispatch to bill of lading, UTS Rice Co. communicates with rare clarity. Truly a benchmark exporter.", name: "Lin Wei",        role: "Import Lead",         company: "Pacific Foods Co., Singapore" },
  { quote: "The aroma of their Super Basmati sells itself in our stores. Customers come back asking for the brand by name.", name: "Hiroshi Tanaka",  role: "Owner",               company: "Sakura Pantry, Tokyo" },
];

const FAQS = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is one 20ft container (approximately 24 metric tons). We accommodate smaller orders for sample-based partnerships." },
  { q: "What packaging options do you offer?", a: "Retail packs from 1kg to 25kg in polypropylene, paper, or cotton bags, plus 50kg jute bags for bulk. Private-label packaging available." },
  { q: "How long does shipping take?", a: "FOB Karachi delivery is typically 7–10 days from order confirmation. Sea freight times depend on destination, ranging from 18 to 45 days." },
  { q: "Which countries do you export to?", a: "We currently export to over 60 countries across the Middle East, EU, UK, North America, Africa, and Asia-Pacific." },
  { q: "How do you ensure quality?", a: "Every lot undergoes a 14-point inspection including moisture, broken percentage, foreign matter, and aroma analysis in our certified lab." },
  { q: "What payment methods do you accept?", a: "We accept Letters of Credit (L/C at sight), Telegraphic Transfer (T/T), and Documents against Payment (D/P) through Tier-1 banks." },
];

import bagSuperBasmati from "@/assets/bag-super-basmati.jpg";
import bag1121 from "@/assets/bag-1121.jpg";
import bag1509 from "@/assets/bag-1509.jpg";
import bagSella from "@/assets/bag-sella.jpg";
import bagBrown from "@/assets/bag-brown.jpg";
import bagSteam from "@/assets/bag-steam.jpg";

const GALLERY = [
  { src: heroImg, alt: "Lush rice paddy fields at sunset" },
  { src: processingImg, alt: "Modern rice processing facility" },
  { src: packagingImg, alt: "Premium rice packaging in warehouse" },
  { src: shippingImg, alt: "Export cargo containers at port" },
  { src: inspectionImg, alt: "Quality inspection laboratory" },
  { src: grainsImg, alt: "Premium Basmati rice grains" },
  { src: bagSuperBasmati, alt: "Super Basmati export bag" },
  { src: bag1121, alt: "1121 Basmati premium packaging" },
  { src: bag1509, alt: "1509 Basmati retail bag" },
  { src: bagSella, alt: "Sella parboiled rice bag" },
  { src: bagBrown, alt: "Brown rice whole-grain bag" },
  { src: bagSteam, alt: "Steam rice export bag" },
  { src: pBasmati, alt: "Long-grain Basmati closeup" },
  { src: pWhite, alt: "Polished white rice grains" },
];

export function Site() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <About />
      <CeoMessage />
      <WhyUs />
      <Quality />
      <Certifications />
      <Products />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}


function HeroCtas() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href="#products" className="group inline-flex items-center gap-3 bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-gold-soft transition-all hover:gap-4 shadow-lg">
        Explore Products <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
      <a href="#contact" className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-colors">
        Request a Quote
      </a>
    </div>
  );
}


function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <img src={logoAsset.url} alt="UTS Millers Suppliers & Exporters" className="h-14 md:h-16 w-auto object-contain" />
    </Link>
  );
}


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [hover, setHover] = useState<{ left: number; width: number; visible: boolean }>({ left: 0, width: 0, visible: false });
  const navRef = useRef<HTMLDivElement | null>(null);
  const [pressed, setPressed] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moveBlob = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const parent = navRef.current;
    if (!parent) return;
    const pr = parent.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    setHover({ left: tr.left - pr.left, width: tr.width, visible: true });
  };
  const onPress = (label: string) => { setPressed(label); setTimeout(() => setPressed(null), 450); };

  const items = [...NAV_MAIN, { label: "More", href: "#more", isMore: true as const }];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center">
          <div
            ref={navRef}
            onMouseLeave={() => { setHover((h) => ({ ...h, visible: false })); setMoreOpen(false); }}
            className="relative glass-bar flex items-center gap-0.5 rounded-full px-1.5 py-1"
          >
            {/* Sliding blob */}
            <span
              aria-hidden
              style={{
                transform: `translateX(${hover.left}px)`,
                width: hover.width,
                opacity: hover.visible ? 1 : 0,
              }}
              className="pointer-events-none absolute top-1 bottom-1 left-0 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.25)] transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />
            {items.map((item) => {
              const isMore = "isMore" in item;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={(e) => { moveBlob(e); if (isMore) setMoreOpen(true); else setMoreOpen(false); }}
                >
                  <a
                    href={isMore ? undefined : item.href}
                    onClick={(e) => { if (isMore) e.preventDefault(); onPress(item.label); }}
                    className={`relative z-10 flex items-center gap-1 px-4 py-1.5 text-[13.5px] font-medium tracking-wide text-white/95 rounded-full cursor-pointer select-none ${pressed === item.label ? "nav-press" : ""}`}
                  >
                    {item.label}
                    {isMore && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />}
                  </a>
                  {isMore && moreOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 z-20">
                      <div className="glass-panel rounded-2xl overflow-hidden animate-fade-up text-white/90">
                        {NAV_MORE.map((m) => (
                          <a
                            key={m.label}
                            href={m.href}
                            onClick={() => { onPress(m.label); setMoreOpen(false); }}
                            className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-white/10 hover:text-gold hover:pl-7"
                          >
                            {m.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
        <div className="flex items-center gap-3 justify-end">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gold text-black px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-gold-soft transition-colors shadow-md">
            Get Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass-panel border-t border-white/10 mt-2 mx-4 rounded-2xl overflow-hidden text-white/90">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {[...NAV_MAIN, ...NAV_MORE].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="px-3 py-3 text-sm font-medium rounded-xl hover:bg-white/10">{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function CeoMessage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="ceo" className="py-24 md:py-32 bg-secondary/40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={ceoImg} alt="Mr. Tariq Mahmood, Chief Executive Officer" loading="lazy" width={1024} height={1024} className="w-full h-auto object-cover" />
            <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-r from-[oklch(0.78_0.15_82)] via-[oklch(0.85_0.16_85)] to-[oklch(0.7_0.15_75)] text-black px-6 py-4 flex items-center gap-3">
              <Award className="h-5 w-5" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-semibold opacity-80">Leadership</div>
                <div className="text-sm font-bold">30+ Years of Rice Export Experience</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>Message from the CEO</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            A word from our <span className="italic red-text">Chief Executive.</span>
          </h2>
          <blockquote className="mt-6 text-lg text-muted-foreground leading-relaxed border-l-4 border-[var(--brand-red)] pl-5 italic">
            "When we started UTS Rice Co., we made a simple promise: every grain we ship will be one we would proudly serve at our own table. Three decades and sixty countries later, that promise still defines who we are. We don't sell rice — we deliver trust, harvest after harvest."
          </blockquote>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our commitment to quality, transparency, and long-term partnership has built relationships that span generations. As we expand into new markets, our values remain rooted in the soil of Punjab — discipline, integrity, and an unwavering respect for the craft.
          </p>
          <div className="mt-8">
            <div className="font-display text-xl font-semibold">Mr. Tariq Mahmood</div>
            <div className="text-sm text-muted-foreground">Founder & Chief Executive Officer, UTS Rice Co.</div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Hero() {
  const slides = [heroImg, processingImg, packagingImg, inspectionImg];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);
  const go = (dir: number) => setIdx((p) => (p + dir + slides.length) % slides.length);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-[1200ms] ease-in-out"
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${idx * (100 / slides.length)}%)` }}
        >
          {slides.map((src, k) => (
            <img
              key={k}
              src={src}
              alt="Premium Pakistani rice fields, processing, packaging and inspection"
              width={1920}
              height={1080}
              className="h-full object-cover flex-shrink-0 brightness-50"
              style={{ width: `${100 / slides.length}%` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Prev / Next (minimal) */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 grid place-items-center text-white/80 hover:text-gold transition-colors"
      >
        <ArrowLeft className="h-7 w-7" strokeWidth={1.5} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 grid place-items-center text-white/80 hover:text-gold transition-colors"
      >
        <ArrowRight className="h-7 w-7" strokeWidth={1.5} />
      </button>

      <div className="relative mx-auto max-w-7xl px-6 py-32 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/50 backdrop-blur px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">EXPORTING EXCELLENCE SINCE 2010</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Premium Pakistani Rice<br />
            <span className="gold-text">Exported Worldwide</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Delivering exceptional quality, purity, and consistency to international markets across six continents.
          </p>
          <div className="mt-10">
            <HeroCtas />
          </div>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, k) => (
          <button
            key={k}
            onClick={() => setIdx(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-1.5 rounded-full transition-all ${k === idx ? "bg-gold w-10" : "bg-white/40 w-4 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}


function StatItem({ s, start }: { s: { value: number; suffix: string; label: string }; start: boolean }) {
  const display = useCountUp(s.value, s.suffix, 1600, start);
  return (
    <div className="text-center md:text-left border-l border-gold/40 pl-6">
      <div className="font-display text-4xl md:text-5xl font-bold text-gold tabular-nums">{display}</div>
      <div className="mt-2 text-sm uppercase tracking-widest text-white/85">{s.label}</div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setStart(true)), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      <img src={heroImg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" style={{ filter: "brightness(0.4) hue-rotate(60deg) saturate(1.4)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[oklch(0.15_0.08_150)]/70 to-black/90" />
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((s) => <StatItem key={s.label} s={s} start={start} />)}
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
          <SectionLabel>About UTS Rice Co.</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            A heritage of rice <span className="italic red-text">excellence</span>, exported with integrity.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            For over two decades, UTS Rice Co. has stood at the forefront of Pakistani rice export — bridging the fertile fields of Punjab and Sindh with discerning buyers in more than sixty countries. We don't just trade rice; we steward a craft.
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
  const featured = PRODUCTS.slice(0, 6);
  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Our Portfolio</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            Ten varieties. <span className="italic red-text">One uncompromising</span> standard.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">From the world-renowned Super Basmati to specialty parboiled varieties — every grain meets export-grade specification.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group bg-white rounded-2xl overflow-hidden hover-lift border border-border block"
            >
              <div className="aspect-square overflow-hidden bg-black">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium leading-tight">{p.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground group-hover:red-text transition-colors">
                  View Details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 bg-black text-gold border border-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-all"
          >
            Explore More Products <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
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
          <h2 className="font-display text-4xl md:text-5xl font-medium">Built on trust. <span className="italic red-text">Proven by results.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="card-flip-light group p-8 border border-border rounded-2xl bg-white">
              <div className="relative z-10 h-12 w-12 grid place-items-center rounded-xl bg-secondary text-[var(--brand-red)] accent-on-hover mb-5 transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="relative z-10 font-display text-xl font-medium">{f.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground muted-on-hover leading-relaxed">{f.desc}</p>
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
        <h2 className="font-display text-4xl md:text-5xl font-medium">Trusted by <span className="italic red-text">global standards.</span></h2>
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




function Gallery() {
  const INITIAL = 6;
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? GALLERY : GALLERY.slice(0, INITIAL);
  const go = (dir: number) =>
    setActive((p) => (p === null ? p : (p + dir + GALLERY.length) % GALLERY.length));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Inside our <span className="italic red-text">world.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {visible.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className={`group relative overflow-hidden rounded-xl ${i === 0 && !showAll ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors grid place-items-center">
                <Plus className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
        {!showAll && GALLERY.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-3 bg-black text-gold border border-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-all"
            >
              More Photos <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
      {active !== null && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[60] bg-black/95 grid place-items-center p-6 animate-fade-up">
          <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors" onClick={(e) => { e.stopPropagation(); setActive(null); }}><X className="h-8 w-8" /></button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-9 w-9" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-gold transition-colors"
          >
            <ArrowRight className="h-9 w-9" strokeWidth={1.5} />
          </button>
          <img onClick={(e) => e.stopPropagation()} src={GALLERY[active].src} alt={GALLERY[active].alt} className="max-h-[90vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);
  const go = (dir: number) => setI((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-medium">What our partners <span className="italic gold-text">say.</span></h2>
        <div className="mt-16 relative">
          {/* Prev / Next (minimal) */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-7 w-7" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold transition-colors"
          >
            <ArrowRight className="h-7 w-7" strokeWidth={1.5} />
          </button>

          <div key={i} className="animate-fade-up">
            <Quote className="h-16 w-16 text-gold/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl leading-relaxed font-light italic">
              "{t.quote}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
            <div className="mt-6">
              <div className="font-medium">{t.name}</div>
              <div className="text-sm text-white/60">{t.role} — {t.company}</div>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "bg-gold w-10" : "bg-white/20 w-4 hover:bg-white/40"}`} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
        </div>
        <div className="mt-14 flex justify-center">
          <HeroCtas />
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
          <h2 className="font-display text-4xl md:text-5xl font-medium">Frequently asked <span className="italic red-text">questions.</span></h2>
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
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">Looking for a reliable <span className="italic red-text">rice export partner?</span></h2>
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
          <button type="submit" className="mt-6 w-full inline-flex justify-center items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gold hover:text-black transition-colors">
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
    <footer className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08] pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">Premium Pakistani rice exported to over 60 countries. A heritage of quality, trusted by global importers since 1999.</p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Trade Tower, Shahrah-e-Faisal, Karachi 74400</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +92 21 3456 7890</div>
              <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-gold" /> +92 300 1234567</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> export@utsrice.com</div>
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
              <input type="email" required placeholder="your@email.com" className="flex-1 bg-white/5 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold" />
              <button className="bg-gold text-black px-5 py-3 rounded-full font-medium hover:bg-white transition-colors">Subscribe</button>
            </form>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "mailto:export@utsrice.com" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="bounce-icon h-11 w-11 grid place-items-center border border-white/20 rounded-full text-white hover:bg-gold hover:text-black hover:border-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>© 2026 UTS Rice Co. Rice Exporters. All Rights Reserved.</div>
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
