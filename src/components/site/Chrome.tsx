import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  MapPin,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { SITE } from "@/data/site";
import { CATEGORY_LABEL, LOCATIONS, MAJOR_SERVICES, pageUrl, servicesByCategory } from "@/data/services";
import { img } from "@/lib/images";

/* ---------------------------------- motion --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="h-[116%] w-full object-cover"
      />
    </div>
  );
}

/* -------------------------------- primitives ------------------------------- */

export function CallButton({ label = "Call Now", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={SITE.phoneHref}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide text-copper-foreground shadow-[var(--shadow-copper)] transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ backgroundImage: "var(--gradient-copper)" }}
    >
      <Phone className="h-4 w-4" />
      {label}
      <span className="hidden font-semibold opacity-80 sm:inline">{SITE.phone}</span>
    </a>
  );
}

export function WhatsAppButton({ label = "WhatsApp Us", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full border border-current/25 px-6 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 hover:bg-current/10 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function Eyebrow({ children, tone = "copper" }: { children: ReactNode; tone?: "copper" | "muted" }) {
  return (
    <span className={`eyebrow ${tone === "copper" ? "text-copper" : "text-muted-foreground"}`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 text-3xl leading-[1.1] font-semibold sm:text-4xl md:text-[2.75rem] ${dark ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-8 ${dark ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ----------------------------------- nav ----------------------------------- */

function DesktopNav() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
      <Link to="/" className="rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
        Home
      </Link>

      <div className="relative" onMouseEnter={() => setOpen("services")}>
        <button className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
          Services <ChevronDown className="h-3.5 w-3.5" />
        </button>
        {open === "services" ? (
          <div className="absolute top-full left-1/2 z-50 w-[52rem] -translate-x-1/2 pt-3">
            <div className="grid grid-cols-3 gap-6 rounded-2xl border border-hairline bg-card p-7 shadow-[var(--shadow-lux)]">
              {(["hvac", "plumbing", "gas"] as const).map((cat) => (
                <div key={cat}>
                  <p className="eyebrow text-copper">{CATEGORY_LABEL[cat]}</p>
                  <ul className="mt-3 space-y-1.5">
                    {servicesByCategory(cat).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/$slug"
                          params={{ slug: `${s.slug}-blackstone-va` }}
                          className="block rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative" onMouseEnter={() => setOpen("areas")}>
        <button className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
          Service Areas <ChevronDown className="h-3.5 w-3.5" />
        </button>
        {open === "areas" ? (
          <div className="absolute top-full right-0 z-50 w-[58rem] pt-3">
            <div className="grid grid-cols-4 gap-5 rounded-2xl border border-hairline bg-card p-7 shadow-[var(--shadow-lux)]">
              {LOCATIONS.map((loc) => (
                <div key={loc.slug}>
                  <p className="text-sm font-semibold text-foreground">{loc.name}</p>
                  <ul className="mt-2 space-y-1">
                    {MAJOR_SERVICES.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/$slug"
                          params={{ slug: `${s.slug}-${loc.slug}` }}
                          className="block text-[13px] text-muted-foreground transition-colors hover:text-copper"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <Link to="/about" className="rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
        About
      </Link>
      <Link to="/reviews" className="rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
        Reviews
      </Link>
      <Link to="/blog" className="rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
        Blog
      </Link>
      <Link to="/contact" className="rounded-full px-4 py-2 text-sm font-semibold text-ink-foreground/80 hover:text-ink-foreground">
        Contact
      </Link>
    </nav>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden w-full items-center justify-center gap-6 bg-ink px-4 py-2 text-xs text-ink-foreground/70 md:flex">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-copper" /> {SITE.street}, {SITE.city}, {SITE.state} {SITE.zip}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-copper" /> {SITE.hours} · {SITE.emergency}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-copper" /> Licensed & Insured
        </span>
      </div>

      <div
        className={`transition-all duration-500 ${scrolled ? "bg-ink/95 shadow-[var(--shadow-lux)] backdrop-blur-xl" : "bg-ink"}`}
      >
        <div className="container-lux flex items-center justify-between py-3.5">
          <Link to="/" className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center rounded-xl text-base font-bold text-copper-foreground"
              style={{ backgroundImage: "var(--gradient-copper)" }}
            >
              J&J
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold text-ink-foreground">
                J&amp;J Mechanical
              </span>
              <span className="block text-[11px] tracking-[0.16em] text-copper uppercase">
                HVAC · Plumbing · Gas
              </span>
            </span>
          </Link>

          <DesktopNav />

          <div className="flex items-center gap-2">
            <CallButton className="hidden md:inline-flex" />
            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Toggle navigation menu"
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink-foreground/20 text-ink-foreground lg:hidden"
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobile ? (
          <div className="max-h-[70vh] overflow-y-auto border-t border-ink-foreground/10 bg-ink px-5 pb-8 lg:hidden">
            {(["hvac", "plumbing", "gas"] as const).map((cat) => (
              <div key={cat} className="mt-5">
                <p className="eyebrow text-copper">{CATEGORY_LABEL[cat]}</p>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                  {servicesByCategory(cat).map((s) => (
                    <Link
                      key={s.slug}
                      to="/$slug"
                      params={{ slug: `${s.slug}-blackstone-va` }}
                      onClick={() => setMobile(false)}
                      className="py-1 text-[13px] text-ink-foreground/70"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-5">
              <p className="eyebrow text-copper">Service Areas</p>
              <div className="mt-2 grid grid-cols-2 gap-1">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to="/$slug"
                    params={{ slug: `hvac-repair-${loc.slug}` }}
                    onClick={() => setMobile(false)}
                    className="py-1 text-[13px] text-ink-foreground/70"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                { to: "/about", label: "About" },
                { to: "/reviews", label: "Reviews" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="rounded-lg border border-ink-foreground/15 px-3 py-2 text-sm font-semibold text-ink-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

/* -------------------------------- CTA blocks ------------------------------- */

export function CtaBand({
  title,
  body,
  image = "cta-fleet",
  imageAlt = "J&J Mechanical service fleet ready for dispatch across Southside Virginia",
}: {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <Parallax src={img(image)} alt={imageAlt} className="absolute inset-0 -z-10 h-full" />
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-sheen)" }} />
      <div className="container-lux text-center">
        <Reveal>
          <Eyebrow>Talk to our team</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-[1.1] font-semibold text-ink-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-foreground/75">{body}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CallButton label="Call Now" />
            <WhatsAppButton className="text-ink-foreground" />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-bold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-xs tracking-[0.18em] text-copper uppercase">
            {SITE.emergency} · Licensed & Insured · Upfront Pricing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function StickyCta() {
  return (
    <>
      <div className="fixed right-5 bottom-24 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={SITE.phoneHref}
          aria-label={`Call ${SITE.name} at ${SITE.phone}`}
          className="animate-lux-pulse grid h-14 w-14 place-items-center rounded-full text-copper-foreground shadow-[var(--shadow-copper)] transition-transform hover:scale-105"
          style={{ backgroundImage: "var(--gradient-copper)" }}
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message J&J Mechanical on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-success text-ink-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink-foreground/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-copper-foreground"
          style={{ backgroundImage: "var(--gradient-copper)" }}
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-success py-3 text-sm font-bold text-ink-foreground"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}

/* ---------------------------------- footer -------------------------------- */

export function Footer() {
  return (
    <footer className="surface-ink hairline-grid pt-20 pb-28 md:pb-16">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-xl font-semibold text-ink-foreground">
              J&amp;J Mechanical
            </span>
            <p className="mt-4 text-sm leading-7 text-ink-foreground/65">
              Residential and commercial mechanical contractor based in Blackstone, Virginia. HVAC,
              plumbing and gas service for Nottoway, Amelia, Dinwiddie, Lunenburg and Prince Edward
              counties since {SITE.founded}.
            </p>
            <div className="mt-6 space-y-2 text-sm text-ink-foreground/75">
              <a href={SITE.phoneHref} className="block font-semibold text-copper">
                {SITE.phone}
              </a>
              <p>
                {SITE.street}, {SITE.city}, {SITE.state} {SITE.zip}
              </p>
              <p>{SITE.hours}</p>
              <p className="text-copper-soft">{SITE.emergency}</p>
            </div>
          </div>

          {(["hvac", "plumbing", "gas"] as const).map((cat) => (
            <div key={cat}>
              <p className="eyebrow text-copper">{CATEGORY_LABEL[cat]}</p>
              <ul className="mt-4 space-y-2">
                {servicesByCategory(cat).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/$slug"
                      params={{ slug: `${s.slug}-blackstone-va` }}
                      className="text-[13px] text-ink-foreground/65 transition-colors hover:text-copper"
                    >
                      {s.name} in Blackstone VA
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ink-foreground/10 pt-8">
          <p className="eyebrow text-copper">Areas We Serve</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to="/$slug"
                params={{ slug: pageUrl("hvac-repair", loc.slug).slice(1) }}
                className="rounded-full border border-ink-foreground/15 px-4 py-1.5 text-[13px] text-ink-foreground/70 transition-colors hover:border-copper hover:text-copper"
              >
                {loc.full}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/45">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-copper">
              Contact
            </Link>
            <Link to="/blog" className="hover:text-copper">
              Blog
            </Link>
            <Link to="/reviews" className="hover:text-copper">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
