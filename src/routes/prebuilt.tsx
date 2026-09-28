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

      {/* Why Choose Prebuilt */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-10 text-center sm:px-8 lg:px-12 lg:py-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-xs font-semibold text-grocery">
            <Sparkles className="size-3.5" /> Why Choose Prebuilt
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.05]">
            Launch Faster. <span className="text-grocery">Grow Smarter.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px]">
            Everything you need to start your digital business — without the wait, the risk, or the heavy price tag.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map(({ icon: Icon, title, copy }, i) => (
              <div
                key={title}
                className={`solution-shadow rounded-lg border border-border bg-canvas p-6 text-left ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="grid size-11 place-items-center rounded-lg bg-mint text-grocery">
                  <Icon className="size-5" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-base font-bold sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-5 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-y-6 rounded-lg border border-border bg-canvas px-4 py-6 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-grocery sm:text-4xl">{value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-xs font-semibold text-grocery">
              <Quote className="size-3.5" /> Client Stories
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.05]">
              Trusted by <span className="text-grocery">Growing Businesses</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map(({ name, role, avatar, quote }) => (
              <figure key={name} className="solution-shadow flex flex-col rounded-lg border border-border bg-background p-6">
                <div className="flex gap-0.5 text-grocery">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-[13px] leading-6 text-muted-foreground">“{quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <img src={avatar} alt={name} className="size-11 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-bold">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-3 pb-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-xl bg-grocery px-6 py-12 text-center text-primary-foreground sm:py-16">
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_15%_25%,var(--color-background)_0_2px,transparent_3px)] [background-size:36px_36px]" />
          <div className="relative">
            <TrendingUp className="mx-auto mb-4 size-8" />
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Let’s Build Your Success Together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-primary-foreground/85 sm:text-[15px]">
              Tell us your idea — we’ll match you with the right prebuilt solution and get you live in days.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="ink" asChild><a href="mailto:hello@anni.example"><MessageCircle /> Get a Free Quote</a></Button>
              <Button variant="heroOutline" asChild><a href="tel:+919999999999"><Phone /> Call Our Team</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          <div>
            <div className="text-lg font-extrabold">Anni <span className="text-grocery">Web Solutions</span></div>
            <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
              Ready-to-launch SaaS products that help businesses start faster and grow smarter.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold">Solutions</h4>
            <ul className="mt-3 space-y-2 text-[13px] text-muted-foreground">
              <li>Grocery Delivery</li>
              <li>Food Delivery</li>
              <li>On-Demand Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="mt-3 space-y-2 text-[13px] text-muted-foreground">
              <li>About Us</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Get in Touch</h4>
            <ul className="mt-3 space-y-2 text-[13px] text-muted-foreground">
              <li>hello@anni.example</li>
              <li>+91 99999 99999</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © 2026 Anni Web Solutions. All rights reserved.
        </div>
      </footer>
    </main>
  );
}