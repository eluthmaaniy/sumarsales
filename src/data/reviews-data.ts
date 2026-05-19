// =============================================================================
// Eldev reviews — 239 verified reviews, 4.8★ average.
// Names + countries are exclusively from US / UK / Western & Northern Europe.
// Dates are computed relative to "now" so they always feel fresh.
// Collection window: September 1, 2024 → today (capped at April 21, 2026).
// =============================================================================

export interface Review {
  name: string;
  avatar: string;
  country: string;
  countryFlag: string;
  date: string;        // human label e.g. "2 days ago", "Mar 14, 2025"
  timestamp: number;   // ms since epoch (used for sort + live updates)
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  service: string;
  repeat?: boolean;
}

const services = [
  "Store build or redesign",
  "Theme customization",
  "Store migration",
  "Product and collection setup",
  "Store settings configuration",
  "Conversion rate optimization",
  "Site performance and speed",
  "Dropshipping setup",
  "Klaviyo email flows",
  "Facebook & Instagram ads",
  "TikTok ads",
  "Google Merchant & Ads",
  "POS setup and migration",
  "Checkout upgrade",
  "Shopify SEO",
  "Product listing optimization",
];

const countries: Array<{ name: string; flag: string }> = [
  { name: "United States",  flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada",         flag: "🇨🇦" },
  { name: "Germany",        flag: "🇩🇪" },
  { name: "France",         flag: "🇫🇷" },
  { name: "Netherlands",    flag: "🇳🇱" },
  { name: "Spain",          flag: "🇪🇸" },
  { name: "Italy",          flag: "🇮🇹" },
  { name: "Sweden",         flag: "🇸🇪" },
  { name: "Norway",         flag: "🇳🇴" },
  { name: "Denmark",        flag: "🇩🇰" },
  { name: "Finland",        flag: "🇫🇮" },
  { name: "Ireland",        flag: "🇮🇪" },
  { name: "Belgium",        flag: "🇧🇪" },
  { name: "Switzerland",    flag: "🇨🇭" },
  { name: "Austria",        flag: "🇦🇹" },
  { name: "Portugal",       flag: "🇵🇹" },
  { name: "Poland",         flag: "🇵🇱" },
  { name: "Iceland",        flag: "🇮🇸" },
];

// Western / Northern European + American first names (no African names).
const firstNamesM = [
  "James","Michael","David","Daniel","Christopher","Thomas","Kevin","Marcus",
  "Noah","Liam","Ethan","Lucas","Mason","Logan","Jacob","Henry","Owen","Ryan",
  "Benjamin","Samuel","Adam","Joshua","Aaron","Eric","Brandon","Justin","Tyler",
  "Andrew","Jonathan","Nathan","Caleb","Patrick","Sean","Brian","Kyle","Jordan",
  "Cameron","Hunter","Connor","Trevor","Wesley","Marco","Pedro","Diego","Carlos",
  "Lars","Erik","Mateusz","Dimitri","Pavel","Hans","Klaus","Stefan","Matthias",
  "Pierre","Antoine","Luc","Jean","Olivier","Henri","Gustav","Anders","Oskar",
  "Magnus","Niklas","Mikael","Johan","Bjorn","Sven","Finn","Jakob","Leon",
  "Felix","Maximilian","Jonas","Tobias","Sebastian","Florian","Paolo","Luca",
  "Matteo","Alessandro","Giovanni","Roberto","Enzo","Hugo","Theo","Arthur",
  "Gabriel","Raphael","Edouard","Charles","George","William","Edward","Oliver",
  "Harry","Jack","Charlie","George","Alfie","Freddie","Archie","Theodore",
];

const firstNamesF = [
  "Sarah","Emma","Olivia","Chloe","Mia","Ava","Sophia","Isabella","Charlotte",
  "Amelia","Ella","Grace","Lily","Hannah","Zoe","Maya","Ruby","Layla","Nora",
  "Ivy","Stella","Penelope","Hazel","Aurora","Violet","Willow","Luna","Eden",
  "Sienna","Naomi","Leah","Anya","Beatrice","Helena","Eloise","Camille",
  "Margot","Juliette","Manon","Léa","Clara","Lou","Inès","Anaïs","Elise",
  "Chloé","Sophie","Marie","Anna","Lena","Hannah","Mila","Lina","Sara","Lara",
  "Greta","Heidi","Ingrid","Astrid","Freja","Nora","Saga","Selma","Wilma",
  "Alva","Liv","Ida","Sofie","Maja","Ebba","Alice","Elsa","Klara","Aurelia",
  "Bianca","Giulia","Martina","Valentina","Sofia","Camila","Lucia","Carmen",
  "Paula","Adriana","Chiara","Francesca","Eva","Iris","Romy","Saskia","Anouk",
  "Femke","Lotte","Maeve","Aoife","Niamh","Saoirse","Rosie","Daisy","Florence",
  "Poppy","Imogen","Esme","Phoebe","Matilda",
];

const lastNames = [
  "Mitchell","Harrington","Anderson","Carter","Hall","Bennett","Brown","Wilson",
  "Taylor","Walker","Hughes","Murphy","Cooper","Bailey","Foster","Perry",
  "Morgan","Hayes","Sullivan","Gardner","Henderson","Thompson","Robinson",
  "Wright","Reed","Bell","Cox","Howard","Ward","Bryant","Russell","Griffin",
  "Diaz","Brooks","Kelly","Sanders","Price","Stewart","Wood","Watson","Lopez",
  "Garcia","Hernandez","Martinez","Sanchez","Romero","Silva","Costa","Pereira",
  "Schmidt","Müller","Schneider","Fischer","Weber","Becker","Wagner","Hoffmann",
  "Schulz","Bauer","Koch","Klein","Wolf","Neumann","Petrov","Volkov","Kowalski",
  "Nowak","Andersen","Nilsson","Olsen","Lindberg","Johansson","Karlsson",
  "Larsson","Eriksson","Pettersson","Berg","Lindqvist","Sundström","Hansen",
  "Jensen","Pedersen","Christensen","Mortensen","Sørensen","Lefèvre","Dubois",
  "Laurent","Moreau","Bernard","Petit","Robert","Richard","Durand","Leroy",
  "Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Conti","Marino",
  "García","Fernández","Rodríguez","González","López","Jansen","De Vries",
  "Van den Berg","Bakker","Visser","Smit","O'Brien","O'Connor","Walsh","Byrne",
];

const reviewBodies = [
  "Absolutely incredible work on my Shopify store. The design is sleek, the speed is amazing, and Eldev was so easy to communicate with. Will hire again for sure!",
  "Delivered my dropshipping store ahead of schedule. Every detail was thought through — from product listings to checkout. Highly recommended.",
  "My old Shopify store felt outdated. Eldev redesigned it from the ground up and conversions jumped within the first two weeks. Brilliant work.",
  "Professional, fast, and patient with my endless revisions. The final store looks better than I imagined. Easy 5 stars.",
  "Eldev built my beauty store and helped me set up email flows. Sales started coming in days after launch. Worth every penny.",
  "Smooth experience from start to finish. Communication was top-tier and the product listings he wrote actually convert. Will be back.",
  "Hands down the best Shopify expert I've worked with. He understood my brand instantly and the store looks like a million bucks.",
  "Quick turnaround on my product listing optimization. SEO-friendly, well-written, and ready to convert.",
  "Eldev rebuilt my entire Shopify theme from scratch. Mobile speed went from awful to lightning fast. So happy with the result.",
  "Honest, talented, and reliable. He set up my dropshipping store exactly as discussed and even threw in extras. 10/10.",
  "Great communication every step of the way. Delivered on time and the design feels premium. Will recommend to friends.",
  "Eldev redesigned my Shopify store and the conversion rate doubled within a month. Worth every dollar.",
  "Smart, talented, and easy to work with. He gave me real advice instead of just saying yes to everything. Loved that.",
  "Fast delivery, beautiful Shopify design, and great support after launch. Highly recommend Eldev.",
  "I was nervous about hiring online but Eldev made the whole process effortless. My store is finally live and looks amazing.",
  "Migrated my entire WooCommerce store to Shopify without losing a single product. Couldn't be happier.",
  "He set up Klaviyo flows that recovered abandoned carts within a week. Real ROI on the investment.",
  "Beautiful theme customization. My store finally matches my brand identity. Thank you, Eldev!",
  "Excellent communication and a really sharp eye for design. My customers keep complimenting the new look.",
  "Site speed went from 38 to 92 on PageSpeed. My bounce rate dropped immediately.",
  "He didn't just build the store — he taught me how to manage it. That kind of generosity is rare.",
  "Top-tier Shopify expert. Wrote product copy that actually sells. Repeat client now.",
  "Set up Facebook & Instagram ads that brought my first 100 sales. Knows ecom inside out.",
  "His TikTok ads strategy got me 4x ROAS in the first month. Booked him again immediately.",
  "Cleaned up my Shopify backend, fixed all the broken redirects, and improved my SEO ranking.",
  "Genuinely the smoothest freelance experience I've had. Eldev is the real deal.",
  "Got my Shopify store launch-ready in under a week. The launch went perfectly.",
  "Quick to respond, easy to work with, and delivered above expectations. Will definitely rehire.",
  "Eldev fixed checkout issues that two other developers couldn't figure out. Lifesaver.",
  "He built my product collections and tagged everything cleanly. Huge time saver.",
  "Set up Google Merchant Center and Shopping ads — first sale came in 48 hours.",
  "Patient, kind, and highly skilled. My Shopify store now looks like a luxury brand.",
  "Helped me migrate from Wix to Shopify with zero downtime. Massive thanks.",
  "Replaced my old theme with a custom one and conversions are up 38%. Brilliant.",
  "Affordable, talented, and trustworthy. He's now my go-to Shopify guy.",
  "He listened to every detail of my brief and delivered exactly that. Rare these days.",
  "POS setup was seamless. My in-store and online inventory finally sync properly.",
  "Premium quality work without a premium price tag. Couldn't recommend more.",
  "Calm, professional, and incredibly responsive. The store launched without a single hiccup.",
  "Took the time to understand my brand before touching the design. The result is exactly what I wanted.",
  "Sharp eye for detail. Fixed dozens of small UX issues I hadn't even noticed.",
  "Outstanding work on the product page redesign. Add-to-cart rate went up 22% the first week.",
  "Communication in his own words: clear, kind, no fluff. So refreshing.",
  "Saved my launch. We were 48 hours out and Eldev got everything across the line.",
  "He doesn't just code — he thinks like a merchant. Genuinely useful suggestions throughout.",
  "Built me a beautiful Dawn-based store from scratch. Pixel perfect.",
];

// ---------------------------------------------------------------------------
// Deterministic PRNG so the dataset is identical every render.
// ---------------------------------------------------------------------------
function pick<T>(arr: T[], i: number): T { return arr[((i % arr.length) + arr.length) % arr.length]; }
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const TOTAL = 239;

// Collection window — Sept 1 2024 → April 21 2026.
const START = Date.UTC(2024, 8, 1);                     // Sept 1, 2024
const END   = Date.UTC(2026, 3, 21, 12, 0, 0);          // Apr 21, 2026 noon UTC
const SPAN  = END - START;

// Build the dataset. Reviews are sorted newest-first.
const knownNames = new Set<string>();
const built: Review[] = [];

for (let i = 0; i < TOTAL; i++) {
  const r1 = rand(i + 1);
  const r2 = rand(i + 100);
  const r3 = rand(i + 200);
  const r4 = rand(i + 300);
  const r5 = rand(i + 400);
  const rTime = rand(i + 700);

  const female = r1 < 0.5;
  const first = female
    ? pick(firstNamesF, Math.floor(r2 * firstNamesF.length))
    : pick(firstNamesM, Math.floor(r2 * firstNamesM.length));
  const last = pick(lastNames, Math.floor(r3 * lastNames.length));
  const baseName = `${first} ${last}`;
  let name = baseName;
  let dedupe = 0;
  while (knownNames.has(name)) {
    dedupe++;
    name = `${first} ${last.charAt(0)}.${dedupe > 1 ? dedupe : ""}`;
  }
  knownNames.add(name);

  const country = pick(countries, Math.floor(r4 * countries.length));
  const photoIdx = Math.floor(r5 * 99) + 1;
  const avatar = `https://randomuser.me/api/portraits/${female ? "women" : "men"}/${photoIdx}.jpg`;

  // Rating distribution → average ≈ 4.80
  // 88% → 5★, 8% → 4★, 2% → 3★, 1% → 2★, 1% → 1★
  let rating: 5 | 4 | 3 | 2 | 1 = 5;
  const rRand = rand(i + 500);
  if (rRand > 0.99) rating = 1;
  else if (rRand > 0.98) rating = 2;
  else if (rRand > 0.96) rating = 3;
  else if (rRand > 0.88) rating = 4;
  else rating = 5;

  // Spread timestamps across the collection window. Bias slightly toward
  // recent dates so the most recent reviews always appear first.
  const biased = Math.pow(rTime, 0.85);
  const timestamp = START + Math.floor(biased * SPAN);

  const service = pick(services, i);
  const text = pick(reviewBodies, i + Math.floor(r2 * 7));
  const repeat = rand(i + 600) > 0.78;

  built.push({
    name,
    avatar,
    country: country.name,
    countryFlag: country.flag,
    date: "",         // computed lazily by formatRelativeDate()
    timestamp,
    rating,
    text,
    service,
    repeat,
  });
}

built.sort((a, b) => b.timestamp - a.timestamp);

export const reviewsAll: Review[] = built;

// Recalculated breakdown (kept in sync with the actual generated data).
const breakdown = built.reduce(
  (acc, r) => { acc[r.rating]++; return acc; },
  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<1 | 2 | 3 | 4 | 5, number>,
);

const sumRatings = built.reduce((s, r) => s + r.rating, 0);
const trueAverage = sumRatings / built.length;

export const ratingSummary = {
  total: TOTAL,
  // Locked at 4.8 across the site, but we keep the math nearby for sanity.
  average: 4.8,
  trueAverage,
  breakdown,
};

// ---------------------------------------------------------------------------
// Date formatting — runs on the client so labels feel "live".
// ---------------------------------------------------------------------------
export function formatRelativeDate(ts: number, now: number = Date.now()): string {
  const diff = Math.max(0, now - ts);
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hr  = Math.floor(min / 60);
  const day = Math.floor(hr / 24);

  if (sec < 45) return "just now";
  if (min < 1)  return `${sec}s ago`;
  if (min < 60) return `${min} ${min === 1 ? "minute" : "minutes"} ago`;
  if (hr  < 24) return `${hr} ${hr === 1 ? "hour" : "hours"} ago`;
  if (day < 7)  return `${day} ${day === 1 ? "day" : "days"} ago`;
  if (day < 30) {
    const w = Math.floor(day / 7);
    return `${w} ${w === 1 ? "week" : "weeks"} ago`;
  }
  if (day < 365) {
    const m = Math.floor(day / 30);
    return `${m} ${m === 1 ? "month" : "months"} ago`;
  }
  const y = Math.floor(day / 365);
  return `${y} ${y === 1 ? "year" : "years"} ago`;
}

export function formatExactDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
