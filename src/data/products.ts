import bagSuperBasmati from "@/assets/bag-super-basmati.jpg";
import bag1121 from "@/assets/bag-1121.jpg";
import bag1509 from "@/assets/bag-1509.jpg";
import bagPk386 from "@/assets/bag-pk386.jpg";
import bagIrri6 from "@/assets/bag-irri6.jpg";
import bagBrown from "@/assets/bag-brown.jpg";
import bagSteam from "@/assets/bag-steam.jpg";
import bagSella from "@/assets/bag-sella.jpg";
import bagLongGrain from "@/assets/bag-longgrain.jpg";
import bagWhite from "@/assets/bag-white.jpg";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  img: string;
  tagline: string;
  origin: string;
  grainLength: string;
  moisture: string;
  brokens: string;
  purity: string;
  cropYear: string;
  packaging: string[];
  cooking: string;
  longDescription: string[];
  uses: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "super-basmati-rice",
    name: "Super Basmati Rice",
    desc: "Long, slender grains with an unmistakable aroma — the crown jewel of Pakistani Basmati.",
    img: bagSuperBasmati,
    tagline: "The Crown Jewel of Pakistani Basmati",
    origin: "Punjab, Pakistan",
    grainLength: "7.2 – 7.5 mm (avg)",
    moisture: "12% max",
    brokens: "2% max",
    purity: "99% min",
    cropYear: "Latest harvest",
    packaging: ["1kg, 5kg, 10kg, 20kg retail", "25kg / 50kg PP & jute bags", "Private label available"],
    cooking: "Soak 20 min, cook 12–15 min. Grains elongate up to 2x original length.",
    longDescription: [
      "Super Basmati is Pakistan's most celebrated rice variety, grown exclusively in the fertile Kalar belt of Punjab where the unique combination of climate, soil, and pure river water produces grains of legendary aroma and length.",
      "Each grain is hand-graded and inspected for color, length, and purity before sortex cleaning. The result is a pristine, naturally fragrant rice that cooks fluffy, dry, and beautifully separated — the gold standard for biryani, pulao, and fine dining.",
    ],
    uses: ["Biryani", "Pulao", "Fine dining", "Premium retail"],
  },
  {
    slug: "1121-basmati-rice",
    name: "1121 Basmati Rice",
    desc: "Extra-long grain Basmati prized for length, elongation, and exceptional fluffiness.",
    img: bag1121,
    tagline: "World's Longest Grain Rice",
    origin: "Punjab, Pakistan",
    grainLength: "8.3 – 8.4 mm (avg)",
    moisture: "12.5% max",
    brokens: "2% max",
    purity: "99% min",
    cropYear: "Latest harvest",
    packaging: ["5kg, 10kg, 20kg retail", "25kg / 50kg PP & jute bags", "Custom OEM packaging"],
    cooking: "Soak 30 min, cook 15 min. Cooked grain length reaches 18–22 mm.",
    longDescription: [
      "1121 Basmati holds the world record for the longest grain rice. After cooking, individual grains extend to more than double their raw length while remaining slender, non-sticky, and aromatic.",
      "Highly favored in the Middle East, GCC, Europe, and North America for premium biryani houses, hotel chains, and gourmet retailers seeking the ultimate visual and culinary impact.",
    ],
    uses: ["Premium biryani", "Hotel & restaurant", "Export retail", "Gourmet markets"],
  },
  {
    slug: "1509-basmati-rice",
    name: "1509 Basmati Rice",
    desc: "Premium Basmati with quick cooking time and pristine white finish.",
    img: bag1509,
    tagline: "Quick-Cook Premium Basmati",
    origin: "Punjab, Pakistan",
    grainLength: "8.0 – 8.2 mm (avg)",
    moisture: "13% max",
    brokens: "2% max",
    purity: "98% min",
    cropYear: "Latest harvest",
    packaging: ["1kg, 5kg, 10kg retail", "25kg / 50kg PP bags", "Private label available"],
    cooking: "Soak 15 min, cook 10–12 min. Light, fluffy, non-sticky.",
    longDescription: [
      "1509 Basmati combines the elegance of long-grain Basmati with shorter cooking time and a brilliant white appearance — ideal for foodservice operations that prize consistency and speed.",
      "A favorite of cloud kitchens, catering companies, and premium ready-to-eat manufacturers around the world.",
    ],
    uses: ["Foodservice", "Cloud kitchens", "Ready meals", "Catering"],
  },
  {
    slug: "pk-386-rice",
    name: "PK-386 Rice",
    desc: "Long grain non-Basmati known for clean appearance and consistent quality.",
    img: bagPk386,
    tagline: "Reliable Long Grain Workhorse",
    origin: "Sindh & Punjab, Pakistan",
    grainLength: "6.5 – 6.8 mm (avg)",
    moisture: "13% max",
    brokens: "5% max",
    purity: "97% min",
    cropYear: "Latest harvest",
    packaging: ["25kg / 50kg PP bags", "Jute bags", "Bulk container loading"],
    cooking: "Cook 15–18 min. Soft, slightly sticky, neutral flavor.",
    longDescription: [
      "PK-386 is a dependable long grain non-Basmati variety with a clean white appearance and neutral taste profile that pairs well with bold seasonings and sauces.",
      "Widely consumed across Africa, Central Asia, and the Middle East as an everyday staple grain.",
    ],
    uses: ["Everyday cooking", "Institutional catering", "Food aid programs", "Bulk distribution"],
  },
  {
    slug: "irri-6-rice",
    name: "IRRI-6 Rice",
    desc: "Versatile medium grain rice ideal for foodservice and industrial applications.",
    img: bagIrri6,
    tagline: "The Global Volume Variety",
    origin: "Sindh, Pakistan",
    grainLength: "6.2 mm (avg)",
    moisture: "14% max",
    brokens: "5%, 10%, 15%, 25% grades",
    purity: "96% min",
    cropYear: "Latest harvest",
    packaging: ["25kg / 50kg PP bags", "Jute bags", "Bulk vessel shipment"],
    cooking: "Cook 12–15 min. Soft texture, holds sauces well.",
    longDescription: [
      "IRRI-6 is Pakistan's largest-volume export rice — a versatile medium grain offered in multiple broken percentage grades to suit diverse market price points.",
      "Trusted across West Africa, East Africa, the Caribbean, and Southeast Asia for daily household and industrial consumption.",
    ],
    uses: ["Mass retail", "Industrial use", "Food processing", "Government tenders"],
  },
  {
    slug: "brown-rice",
    name: "Brown Rice",
    desc: "Whole-grain rice retaining bran and germ — naturally rich in fiber and minerals.",
    img: bagBrown,
    tagline: "Whole Grain. Whole Goodness.",
    origin: "Punjab, Pakistan",
    grainLength: "6.8 – 7.2 mm",
    moisture: "12% max",
    brokens: "3% max",
    purity: "98% min",
    cropYear: "Latest harvest",
    packaging: ["500g, 1kg, 5kg retail", "25kg PP bags", "Vacuum-sealed options"],
    cooking: "Soak 1 hour, cook 35–40 min. Nutty flavor, chewy texture.",
    longDescription: [
      "Our brown rice is minimally processed — only the inedible outer husk is removed, leaving the nutrient-rich bran and germ layers intact. The result is a naturally high-fiber, mineral-dense whole grain.",
      "Increasingly demanded by health-conscious consumers, organic retailers, and wellness brands across Europe, North America, and East Asia.",
    ],
    uses: ["Health food retail", "Organic stores", "Wellness brands", "Diabetic-friendly meals"],
  },
  {
    slug: "steam-rice",
    name: "Steam Rice",
    desc: "Steam-treated Basmati preserving nutrients with improved cooking performance.",
    img: bagSteam,
    tagline: "Nutrient-Locked Premium Grain",
    origin: "Punjab, Pakistan",
    grainLength: "7.2 – 8.2 mm",
    moisture: "12% max",
    brokens: "2% max",
    purity: "99% min",
    cropYear: "Latest harvest",
    packaging: ["5kg, 10kg, 20kg retail", "25kg / 50kg PP & jute bags"],
    cooking: "Soak 20 min, cook 14–16 min. Firm, separate, glossy grains.",
    longDescription: [
      "Steam rice undergoes a controlled steam treatment that gelatinizes starches inside the husk, locking nutrients into the kernel and producing grains that cook firmer and more separated than raw milled rice.",
      "A premium choice for biryani houses and discerning retailers who demand both nutrition and presentation.",
    ],
    uses: ["Premium biryani", "Hotels", "Retail", "Foodservice"],
  },
  {
    slug: "sella-rice",
    name: "Sella Rice",
    desc: "Parboiled rice with a golden hue, firm texture, and non-sticky cooked grains.",
    img: bagSella,
    tagline: "Golden Parboiled Excellence",
    origin: "Punjab & Sindh, Pakistan",
    grainLength: "7.0 – 8.3 mm (variety dependent)",
    moisture: "12.5% max",
    brokens: "2% max",
    purity: "99% min",
    cropYear: "Latest harvest",
    packaging: ["5kg, 10kg, 20kg retail", "25kg / 50kg PP & jute bags", "Private label"],
    cooking: "Soak 30 min, cook 18–20 min. Firm, fluffy, non-sticky.",
    longDescription: [
      "Sella (parboiled) rice is processed by soaking, steaming, and drying paddy before milling. The process drives nutrients from the bran into the endosperm and yields a distinctive golden grain.",
      "Extremely popular in the Middle East, Gulf, and African markets for traditional biryani, mandi, and kabsa dishes.",
    ],
    uses: ["Mandi & Kabsa", "Biryani", "Middle Eastern cuisine", "Catering"],
  },
  {
    slug: "long-grain-rice",
    name: "Long Grain Rice",
    desc: "Slender, elongated grains that cook light, dry, and separate.",
    img: bagLongGrain,
    tagline: "Light, Dry, Perfectly Separate",
    origin: "Pakistan",
    grainLength: "6.6 – 7.5 mm",
    moisture: "13% max",
    brokens: "5% max",
    purity: "97% min",
    cropYear: "Latest harvest",
    packaging: ["1kg, 5kg, 10kg retail", "25kg / 50kg PP bags"],
    cooking: "Cook 14–16 min. Fluffy, non-sticky.",
    longDescription: [
      "Our long grain rice offering covers multiple non-Basmati long grain varieties suitable for international retail and foodservice markets demanding consistent, fluffy, non-sticky cooked rice.",
      "Available in white, parboiled, and steamed formats with custom milling specifications.",
    ],
    uses: ["Retail private label", "Foodservice", "Ready meals", "Export blends"],
  },
  {
    slug: "white-rice",
    name: "White Rice",
    desc: "Polished, milled white rice in multiple grades for global distribution.",
    img: bagWhite,
    tagline: "Clean. Polished. Global Standard.",
    origin: "Pakistan",
    grainLength: "Multiple varieties",
    moisture: "13–14% max",
    brokens: "5%, 10%, 15%, 25% grades",
    purity: "96% min",
    cropYear: "Latest harvest",
    packaging: ["25kg / 50kg PP & jute bags", "Bulk container", "Custom packaging"],
    cooking: "Cook 12–15 min. Soft, neutral, versatile.",
    longDescription: [
      "Our polished white rice is offered across multiple varieties and broken-grade specifications to meet every market's price and quality requirements — from premium retail to large-scale government and humanitarian tenders.",
      "Each lot is sortex-cleaned, color-sorted, and quality-verified before bagging at our certified facility.",
    ],
    uses: ["Mass retail", "Government tenders", "Humanitarian aid", "Industrial"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
