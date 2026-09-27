import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronRight,
  Headset,
  Layers3,
  Menu,
  MessageCircle,
  PackageOpen,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Anni home">
      <span className="relative grid h-9 w-9 place-items-center" aria-hidden="true">
        <span className="absolute h-8 w-2 -rotate-[21deg] rounded-sm bg-primary" />
        <span className="absolute ml-5 h-8 w-2 rotate-[21deg] rounded-sm bg-primary" />
        <span className="absolute ml-2 mt-2 h-2.5 w-2.5 rounded-full bg-grocery" />
      </span>
      <span className="leading-none">
        <span className="block text-[22px] font-extrabold text-foreground">Anni</span>
        <span className="block text-[7px] font-semibold text-muted-foreground">WEB SOLUTIONS PVT. LTD.</span>
      </span>
    </a>
  );
}

function DeviceArtwork({ tone = "grocery", compact = false }: { tone?: "grocery" | "food" | "services"; compact?: boolean }) {
  const bg = tone === "grocery" ? "bg-grocery" : tone === "food" ? "bg-food" : "bg-services";
  const accent = tone === "food" ? "bg-signal" : "bg-primary";
  return (
    <div className={`relative ${compact ? "h-44 sm:h-full" : "h-[240px] lg:h-[280px]"}`} aria-hidden="true">
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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top" className="min-h-screen bg-canvas text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid h-[74px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:px-12">
          <Brand />
          <nav className="hidden min-w-0 items-center justify-center gap-7 text-sm font-medium lg:flex" aria-label="Main navigation">
            <a className="border-b-2 border-primary py-[27px] font-semibold" href="#products">Prebuilt</a>
            <a className="hover:text-primary" href="#products">Customized</a>
            <a className="hover:text-primary" href="#products">AI Automation</a>
            <a className="hover:text-primary" href="#products">Digital Growth</a>
            <a className="hover:text-primary" href="#products">Pricing</a>
            <a className="hover:text-primary" href="mailto:hello@anni.example">Contact Us</a>
          </nav>
          <Button className="hidden lg:inline-flex" variant="hero" asChild><a href="mailto:hello@anni.example">Get a Free Quote <ArrowRight /></a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-border bg-background px-5 py-3 text-sm font-semibold lg:hidden" aria-label="Mobile navigation">
            {['Prebuilt', 'Customized', 'AI Automation', 'Digital Growth', 'Pricing'].map((item) => <a key={item} href="#products" className="border-b border-border py-3" onClick={() => setMenuOpen(false)}>{item}</a>)}
            <a href="mailto:hello@anni.example" className="py-3 text-primary">Contact Us</a>
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,var(--mint),transparent_37%)]" />
        <div className="rise-in relative mx-auto grid max-w-[1440px] items-center gap-2 px-5 pb-0 pt-8 sm:px-8 lg:grid-cols-[44%_56%] lg:px-12 lg:pt-10">
          <div className="z-10 pb-2 lg:pb-12">
            <span className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-grocery"><Sparkles className="size-3" /> Prebuilt Solutions</span>
            <h1 className="mt-4 max-w-[620px] text-[40px] font-extrabold leading-[0.94] sm:text-6xl lg:text-[66px]">
              Ready-to-Launch<br /><span className="text-grocery">SaaS</span> Products
            </h1>
            <p className="mt-5 max-w-[570px] text-[15px] leading-6 text-muted-foreground sm:text-lg">Powerful, industry-ready software solutions to help you start faster, reduce development time, and grow your business with confidence.</p>
            <div className="mt-5 flex gap-2 sm:gap-3">
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
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-4 gap-2 border-t border-border px-5 py-4 sm:px-8 lg:px-12">
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