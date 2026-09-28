import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Headset,
  Layers3,
  MessageCircle,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarRahul from "@/assets/avatar-rahul.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarAmit from "@/assets/avatar-amit.jpg";

export const Route = createFileRoute("/prebuilt")({
  head: () => ({
    meta: [
      { title: "Prebuilt SaaS Solutions | Anni Web Solutions" },
      { name: "description", content: "Launch faster with ready-made, customizable SaaS products for commerce, delivery, and on-demand services." },
      { property: "og:title", content: "Prebuilt SaaS Solutions | Anni Web Solutions" },
      { property: "og:description", content: "Industry-ready software products built to help your business launch and grow faster." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrebuiltPage,
});

const benefits = [
  { icon: Zap, top: "Faster", bottom: "Launch" },
  { icon: Layers3, top: "Cost", bottom: "Effective" },
  { icon: ShieldCheck, top: "Fully", bottom: "Customizable" },
  { icon: Headset, top: "Ongoing", bottom: "Support" },
];

const products = [
  {
    number: "01",
    tone: "grocery",
    flag: "Popular",
    title: "Single Vendor Grocery Solution",
    subtitle: "App + Web + Admin Panel",
    copy: "Launch your branded grocery store with a complete package including Customer App, Website, and Admin Panel.",
    points: ["Customer App (Android & iOS)", "Website with seamless ordering", "Powerful Admin Panel", "Real-time inventory & order management", "Delivery partner app (optional)"],
  },
  {
    number: "02",
    tone: "food",
    flag: "High Demand",
    title: "Food Delivery System",
    subtitle: "Order, track & deliver",
    copy: "Complete food delivery ecosystem including a Customer App, Restaurant App, Delivery Partner App, Website, and Admin Panel.",
    points: ["Customer App (Android & iOS)", "Restaurant Panel", "Delivery Partner App with live tracking", "Website with restaurant listings", "Admin dashboard with full control"],
  },
  {
    number: "03",
    tone: "services",
    flag: "Trending",
    title: "On-Demand Services System",
    subtitle: "Book trusted local experts",
    copy: "Connect customers with verified professionals through a polished booking and service-management experience.",
    points: ["Customer and provider apps", "Easy service scheduling", "Secure online payments", "Live job status updates", "Complete admin control"],
  },
] as const;

const whyCards = [
  { icon: Rocket, title: "Launch in Days, Not Months", copy: "Skip the long development cycle. Our ready-made products go live in days with your branding." },
  { icon: Wallet, title: "Save Up to 70% Cost", copy: "No need to build from scratch. Get enterprise-grade software at a fraction of custom development cost." },
  { icon: BadgeCheck, title: "Battle-Tested Products", copy: "Every solution is refined through real-world deployments, so you start with a proven foundation." },
  { icon: Layers3, title: "Fully Customizable", copy: "Your brand, your rules. White-label everything — colors, logo, features, and workflows." },
  { icon: Headset, title: "Dedicated Support", copy: "From setup to scaling, our team stays with you at every step of your growth journey." },
];

const stats = [
  { value: "10+", label: "Ready Products" },
  { value: "500+", label: "Happy Clients" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "3x", label: "Faster Launch" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, FreshKart Grocery",
    avatar: avatarRahul,
    quote: "We launched our grocery app in just 12 days. The prebuilt solution saved us months of development and the support team was incredible throughout.",
  },
  {
    name: "Priya Mehta",
    role: "CEO, QuickBites Delivery",
    avatar: avatarPriya,
    quote: "The food delivery system came with everything we needed — customer app, restaurant panel, and delivery tracking. Our orders grew 3x in the first quarter.",
  },
  {
    name: "Amit Verma",
    role: "Director, UrbanServe",
    avatar: avatarAmit,
    quote: "Fully white-labeled and customized to our brand. It felt like a product built just for us, at a fraction of the cost of custom development.",
  },
];

function DeviceArtwork({ tone = "grocery", compact = false }: { tone?: "grocery" | "food" | "services"; compact?: boolean }) {
  const bg = tone === "grocery" ? "bg-grocery" : tone === "food" ? "bg-food" : "bg-services";
  const accent = tone === "food" ? "bg-signal" : "bg-primary";
  return (
    <div className={`relative ${compact ? "h-44 sm:h-full" : "h-[224px] sm:h-[245px] lg:h-[258px]"}`} aria-hidden="true">
      <div className={`absolute inset-x-[8%] bottom-1 top-4 overflow-hidden rounded-md ${bg}`}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,var(--color-background)_0_2px,transparent_3px)] [background-size:34px_34px]" />
      </div>
      <div className="device-shadow absolute bottom-2 left-[19%] h-[67%] w-[57%] overflow-hidden rounded-t-lg border-[5px] border-foreground bg-canvas">
        <div className="flex h-5 items-center gap-1.5 border-b border-border bg-background px-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accent}`} /><span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="grid h-[calc(100%-20px)] grid-cols-[25%_1fr]">
          <div className="bg-primary p-2"><div className="h-2 w-8 rounded bg-primary-foreground/70" /></div>
          <div className="p-2 sm:p-3">
            <div className="mb-2 h-2 w-14 rounded bg-foreground/70" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1,2,3].map((n) => <div key={n} className="h-7 rounded bg-background shadow-sm" />)}
            </div>
            <div className="mt-2 flex h-12 items-end gap-1 border-b border-l border-border px-1">
              {[30,55,42,75,62,88,72].map((h) => <span key={h} className="flex-1 rounded-t-sm bg-services/45" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="device-shadow absolute bottom-0 right-[10%] h-[66%] w-[24%] overflow-hidden rounded-[16px] border-[5px] border-foreground bg-background">
        <div className="mx-auto mt-1 h-1.5 w-8 rounded-full bg-foreground" />
        <div className="px-2 pt-3">
          <div className={`mb-2 h-8 rounded ${bg}`} />
          <div className="grid grid-cols-2 gap-1.5">{[1,2,3,4].map((n) => <div key={n} className="h-8 rounded bg-muted" />)}</div>
        </div>
      </div>
      {tone === "grocery" && <div className="absolute bottom-0 left-[8%] text-5xl drop-shadow-lg">🧺</div>}
      {tone === "food" && <div className="absolute bottom-4 left-[8%] text-5xl drop-shadow-lg">🍔</div>}
      {tone === "services" && <div className="absolute bottom-4 left-[8%] text-5xl drop-shadow-lg">🧰</div>}
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="solution-shadow overflow-hidden rounded-lg border border-border bg-background lg:grid lg:grid-cols-2">
      <div className={`relative min-h-0 p-2 sm:p-3 lg:p-2 ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute left-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-md bg-background text-sm font-extrabold text-foreground shadow-md">{product.number}</div>
        <div className="absolute inset-x-16 top-5 z-10 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
          <span className="rounded-md bg-primary/90 px-4 py-2">{product.title}</span>
          <p className="mt-3">{product.subtitle}</p>
        </div>
        <DeviceArtwork tone={product.tone} compact />
      </div>
      <div className={`flex flex-col justify-center px-5 pb-5 pt-3 sm:px-7 sm:py-6 ${reverse ? "lg:order-1" : ""}`}>
        <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-signal/10 px-2 py-1 text-[11px] font-bold text-signal">
          <Sparkles className="size-3" /> {product.flag}
        </span>
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">{product.title}</h2>
        <p className="mt-2 max-w-xl text-sm leading-5 text-muted-foreground">{product.copy}</p>
        <ul className="mt-3 space-y-1.5">
          {product.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-xs text-foreground sm:text-sm">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-grocery text-primary-foreground"><Check className="size-3" /></span>
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-2">
          <Button variant={product.tone === "food" ? "danger" : "hero"} size="sm">View Details <ArrowRight /></Button>
          <Button variant="ink" size="sm"><MessageCircle /> Get This Solution</Button>
        </div>
      </div>
    </article>
  );
}

function PrebuiltPage() {
  return (
    <main id="top" className="min-h-screen bg-canvas text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,var(--mint),transparent_37%)]" />
        <div className="rise-in relative mx-auto grid max-w-[1440px] items-center gap-2 px-5 pb-0 pt-6 sm:px-8 lg:grid-cols-[43%_57%] lg:px-12 lg:pt-7">
          <div className="z-10 pb-2 lg:pb-7">
            <span className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-grocery"><Sparkles className="size-3" /> Prebuilt Solutions</span>
            <h1 className="mt-3 max-w-[620px] text-[40px] font-extrabold leading-[0.96] sm:text-[52px] lg:text-[54px]">
              Ready-to-Launch<br /><span className="text-grocery">SaaS</span> Products
            </h1>
            <p className="mt-3 max-w-[570px] text-[14px] leading-[1.42] text-muted-foreground sm:text-[15px]">Powerful, industry-ready software solutions to help you start faster, reduce development time, and grow your business with confidence.</p>
            <div className="mt-4 flex gap-2 sm:gap-3">
              <Button variant="hero" asChild><a href="#products">Explore Products <ArrowRight /></a></Button>
              <Button variant="ink" asChild><a href="mailto:hello@anni.example"><MessageCircle /> Talk to Our Team</a></Button>
            </div>
          </div>
          <div className="relative -mx-2 mt-2 lg:mt-0">
            <div className="absolute right-2 top-1 hidden -rotate-6 font-medium lg:block">Launch<br />Your Business<br />Faster</div>
            <DeviceArtwork />
            <div className="absolute bottom-8 right-0 hidden max-w-36 -rotate-6 rounded-lg bg-background p-3 text-sm font-semibold shadow-lg sm:block"><Sparkles className="mb-1 text-grocery" /> Ideas into Ready-Made Solutions</div>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-4 gap-2 border-t border-border px-5 py-3 sm:px-8 lg:px-12">
          {benefits.map(({ icon: Icon, top, bottom }) => (
            <div key={top} className="flex min-w-0 items-center justify-center gap-2 text-center sm:text-left">
              <Icon className="size-6 shrink-0" strokeWidth={2.2} />
              <span className="text-[10px] leading-[1.05] text-muted-foreground sm:text-xs"><span className="sm:inline">{top}</span><br className="sm:hidden" /> {bottom}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1440px] space-y-4 px-3 py-5 sm:px-8 lg:px-12">
        {products.map((product, index) => <ProductCard key={product.number} product={product} index={index} />)}
      </section>

      <footer className="border-t border-border bg-background py-8 text-center text-sm text-muted-foreground">
        <PackageOpen className="mx-auto mb-2 size-5 text-grocery" /> Ready to launch your next product?
      </footer>
    </main>
  );
}