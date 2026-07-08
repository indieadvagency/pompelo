import {
  Heart,
  Sparkles,
  Baby,
  Ruler,
  Palette,
  ShieldCheck,
  Leaf,
  Recycle,
  Award,
  HandHeart,
  type LucideIcon,
} from "lucide-react";

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Partners", href: "/retail-partners" },
  { label: "Media", href: "/media" },
];

export const CONTACT = {
  email: "hello@pompelo.com",
  partnerships: "partners@pompelo.com",
  phone: "+39 02 8765 4321",
  address: "Via della Moda 24, 20121 Milano, Italy",
  instagram: "https://instagram.com",
  pinterest: "https://pinterest.com",
  linkedin: "https://linkedin.com",
};

export type Philosophy = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export const PHILOSOPHY: Philosophy[] = [
  {
    icon: Heart,
    title: "Comfort First",
    copy: "Every seam, cuff and waistband is designed to move the way children do — freely, joyfully, without a single restriction.",
  },
  {
    icon: Sparkles,
    title: "Premium Fabrics",
    copy: "We source soft, breathable, long-wearing textiles that feel gentle on the smallest skin and last through every wash.",
  },
  {
    icon: Baby,
    title: "Designed for Childhood",
    copy: "Clothes that celebrate play, discovery and imagination — made to be lived in, not just looked at.",
  },
  {
    icon: Ruler,
    title: "Attention to Detail",
    copy: "Rounded finishes, hidden reinforcements and thoughtful closures. The details you never see are the ones you feel.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    copy: "A refined, European colour language — timeless silhouettes with a playful, contemporary spirit.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Materials",
    copy: "Certified, skin-friendly and free of harmful substances. Peace of mind woven into everything we make.",
  },
];

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  season: string;
  ageRange: string;
  intro: string;
  story: string;
  highlights: string[];
  fabrics: { name: string; detail: string }[];
  palette: [string, string];
  gallery: number;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "newborn",
    name: "Newborn",
    tagline: "The softest first chapter",
    season: "Essentials",
    ageRange: "0 – 3 months",
    intro:
      "A gentle welcome to the world, wrapped in cloud-soft cotton and the quiet luxury of simplicity.",
    story:
      "The first days deserve the softest things. Our Newborn collection is built around uninterrupted comfort — envelope necklines, flat seams and fabrics washed to a whisper. Neutral tones and rounded details create a serene, timeless wardrobe for a brand-new life.",
    highlights: [
      "Envelope necklines for easy dressing",
      "Flat, skin-friendly seams",
      "Fold-over mittens & footed hems",
      "OEKO-TEX® certified cottons",
    ],
    fabrics: [
      { name: "Organic Interlock", detail: "Double-knit cotton, breathable and stretch-soft" },
      { name: "Brushed Fleece", detail: "Featherweight warmth without the bulk" },
    ],
    palette: ["#FFE0DD", "#FF9E93"],
    gallery: 6,
  },
  {
    slug: "baby",
    name: "Baby",
    tagline: "Room to grow, freedom to play",
    season: "Everyday",
    ageRange: "3 – 24 months",
    intro:
      "Playful essentials engineered for crawling, cruising and those first wobbly steps.",
    story:
      "Babies are explorers. This collection follows them — stretchy waistbands, easy snaps and reinforced knees that keep up with every adventure. Warm, cheerful colours meet grown-up tailoring for a wardrobe as capable as it is charming.",
    highlights: [
      "Snap-through changing access",
      "Reinforced knees for crawlers",
      "Adjustable, gentle waistbands",
      "Rounded, non-scratch labels",
    ],
    fabrics: [
      { name: "Terry Loopback", detail: "Cosy, absorbent and endlessly forgiving" },
      { name: "Ribbed Jersey", detail: "Four-way stretch that grows with movement" },
    ],
    palette: ["#FFC9C4", "#FF6656"],
    gallery: 6,
  },
  {
    slug: "girls",
    name: "Girls",
    tagline: "Effortless, expressive, ever-changing",
    season: "Signature",
    ageRange: "2 – 10 years",
    intro:
      "Confident silhouettes and joyful details for girls who dress for their own adventures.",
    story:
      "From playground to celebration, our Girls collection balances refined tailoring with room to twirl. Considered prints, soft volumes and easy layering pieces let personality lead — always comfortable, always beautifully made.",
    highlights: [
      "Twirl-ready volumes & soft pleats",
      "Hidden adjusters for a perfect fit",
      "Mix-and-match layering pieces",
      "Signature Pompelo prints",
    ],
    fabrics: [
      { name: "Poplin Cotton", detail: "Crisp, cool and beautifully structured" },
      { name: "Cotton Modal", detail: "A liquid-soft drape with natural sheen" },
    ],
    palette: ["#FF9E93", "#FA0000"],
    gallery: 8,
  },
  {
    slug: "boys",
    name: "Boys",
    tagline: "Built for the next expedition",
    season: "Signature",
    ageRange: "2 – 10 years",
    intro:
      "Hard-wearing, easy-moving staples with a quietly modern edge.",
    story:
      "Boys don't slow down, so neither do we. Durable weaves, articulated seams and thoughtful pockets meet a restrained, contemporary palette. Everyday heroes that survive the mud, the climb and the wash — and still look sharp.",
    highlights: [
      "Articulated knees for full motion",
      "Durable, abrasion-tested weaves",
      "Easy elastic & drawcord waists",
      "Deep, secure pockets",
    ],
    fabrics: [
      { name: "Brushed Twill", detail: "Rugged structure with a soft hand-feel" },
      { name: "French Terry", detail: "Warm, flexible and endlessly wearable" },
    ],
    palette: ["#FF6656", "#C40000"],
    gallery: 8,
  },
  {
    slug: "seasonal",
    name: "Seasonal Collection",
    tagline: "A story told once a year",
    season: "Limited Edition",
    ageRange: "0 – 10 years",
    intro:
      "Our capsule of the moment — inspired by a place, a mood and a season worth remembering.",
    story:
      "Each season we design a limited capsule around a single inspiration. This edition draws on warm Mediterranean afternoons: sun-washed tones, breezy silhouettes and hand-drawn motifs. Made in small runs, kept close to the heart.",
    highlights: [
      "Limited, small-batch production",
      "Exclusive hand-drawn artwork",
      "Coordinated family looks",
      "Seasonal keepsake packaging",
    ],
    fabrics: [
      { name: "Linen Blend", detail: "Breathable, textured and effortlessly relaxed" },
      { name: "Gauze Cotton", detail: "Airy double-layer softness for warm days" },
    ],
    palette: ["#FF4130", "#FA0000"],
    gallery: 8,
  },
];

export type Value = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export const SUSTAINABILITY_VALUES: Value[] = [
  {
    icon: Leaf,
    title: "Safe Materials",
    copy: "Certified organic and low-impact fibres, free from harmful chemicals and tested for the most sensitive skin.",
  },
  {
    icon: HandHeart,
    title: "Ethical Production",
    copy: "Long-standing partner ateliers with fair wages, safe conditions and full traceability.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    copy: "Garments engineered to be handed down — durability testing on every seam, snap and stitch.",
  },
  {
    icon: Recycle,
    title: "Environmental Care",
    copy: "Reduced-water dyeing, recyclable packaging and a growing circular take-back programme.",
  },
];

export const STATS = [
  { value: "92%", label: "Certified organic & low-impact fibres" },
  { value: "40%", label: "Less water in our dyeing process" },
  { value: "100%", label: "Recyclable, plastic-free packaging" },
  { value: "3×", label: "Longer average garment lifespan" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Pompelo pieces sell themselves. The quality is immediately obvious in the hand — our customers keep coming back for the next collection.",
    name: "Camille Laurent",
    role: "Buyer, Les Petits · Paris",
  },
  {
    quote:
      "A rare brand that parents trust and children actually want to wear. The storytelling around each collection is beautifully done.",
    name: "Sofia Marchetti",
    role: "Owner, Bimbo Boutique · Milano",
  },
  {
    quote:
      "The most reliable kidswear partner we've worked with. Considered design, dependable delivery and a team that genuinely cares.",
    name: "Lars Andersen",
    role: "Head of Kids, Nord Department Store · Copenhagen",
  },
];

export const PRESS = [
  "VOGUE BAMBINI",
  "MILK MAGAZINE",
  "KINFOLK",
  "ELLE KIDS",
  "MARIE CLAIRE ENFANTS",
];

export type Region = {
  region: string;
  countries: string[];
  partners: number;
};

export const REGIONS: Region[] = [
  { region: "Western Europe", countries: ["France", "Italy", "Spain", "Portugal"], partners: 84 },
  { region: "Northern Europe", countries: ["Denmark", "Sweden", "Netherlands", "Belgium"], partners: 57 },
  { region: "Central Europe", countries: ["Germany", "Austria", "Switzerland"], partners: 46 },
  { region: "Middle East", countries: ["UAE", "Qatar", "Saudi Arabia"], partners: 23 },
  { region: "Asia Pacific", countries: ["Japan", "South Korea", "Singapore"], partners: 31 },
];

export type MediaAsset = {
  title: string;
  description: string;
  meta: string;
};

export const MEDIA_ASSETS: MediaAsset[] = [
  { title: "Company Profile", description: "Who we are, our story and the vision behind Pompelo.", meta: "PDF · 4.2 MB" },
  { title: "Brand Guidelines", description: "Logo usage, colour, typography and tone of voice.", meta: "PDF · 8.7 MB" },
  { title: "Logo Package", description: "Primary and secondary marks in vector and raster formats.", meta: "ZIP · 3.1 MB" },
  { title: "Wholesale Catalog", description: "The complete current-season line sheet and specifications.", meta: "PDF · 22 MB" },
  { title: "Press Kit", description: "High-resolution imagery, fact sheet and press releases.", meta: "ZIP · 46 MB" },
  { title: "Lookbook", description: "The full editorial lookbook for the season.", meta: "PDF · 18 MB" },
];

export const CRAFT_STEPS = [
  {
    step: "01",
    title: "Fabric Selection",
    copy: "We begin at the source — hand-selecting certified mills and testing every fibre for softness, breathability and integrity before a single garment is cut.",
  },
  {
    step: "02",
    title: "Design & Pattern",
    copy: "Our Milan atelier develops each silhouette around real movement, refining patterns across dozens of fittings on real children.",
  },
  {
    step: "03",
    title: "Considered Construction",
    copy: "Flat seams, reinforced stress points and rounded finishes are engineered in — comfort you feel and durability you can pass on.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    copy: "Every style is wash-tested, wear-tested and inspected by hand. Nothing carries our name until it has earned it.",
  },
];

export const FAQ = [
  {
    q: "Where can I buy Pompelo?",
    a: "Pompelo is available through our curated network of retail partners across Europe, the Middle East and Asia Pacific. Visit our Retail Partners page to find a stockist near you.",
  },
  {
    q: "Do you sell directly to customers online?",
    a: "Pompelo is a brand portfolio and wholesale house. We partner with carefully chosen boutiques and department stores rather than selling directly, so you can experience our garments in person.",
  },
  {
    q: "How can my store become a stockist?",
    a: "We're always looking for like-minded partners. Reach out via our Contact page or email partners@pompelo.com and our wholesale team will share the current line sheet and terms.",
  },
  {
    q: "What sizes do you offer?",
    a: "Our collections span newborn through 10 years, with considered grading to ensure a comfortable, lasting fit at every age and stage.",
  },
  {
    q: "Are your materials safe and certified?",
    a: "Yes. We work with OEKO-TEX® and organic-certified fabrics, free from harmful substances and tested for the most sensitive skin.",
  },
];
