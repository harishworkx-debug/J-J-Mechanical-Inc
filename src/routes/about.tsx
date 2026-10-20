import { Link, createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Clock,
  Wrench,
  Gauge,
  ArrowRight,
} from "lucide-react";
import { CallButton, CtaBand, Eyebrow, Reveal, SectionHeading } from "@/components/site/Chrome";
import { PROCESS, SITE, TRUST } from "@/data/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About J&J Mechanical | Licensed Local Contractor in Blackstone, VA" },
      {
        name: "description",
        content:
          "Meet the family-owned, veteran-owned mechanical team serving Blackstone and Southside Virginia since 1998. Virginia Class A licensed in HVAC, plumbing, and gas fitting.",
      },
      { property: "og:title", content: "About J&J Mechanical | Blackstone, VA" },
      {
        property: "og:description",
        content:
          "Family-owned mechanical contractor with 25+ years of local Southside Virginia service. Real technicians, calibrated diagnostics, and accountable standards.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const qualifications = [
    {
      title: "Virginia Class A Contractor",
      detail: "Full Class A mechanical licensure (#2705096538) for unrestricted residential and commercial HVAC, plumbing, and gas projects.",
      icon: ShieldCheck,
    },
    {
      title: "EPA Universal Section 608",
      detail: "Certified for universal refrigerant recovery, leak testing, and low-GWP refrigerant handling (R-410A, R-454B, R-32).",
      icon: Award,
    },
    {
      title: "Master Tradesmen On Every Job",
      detail: "Master mechanical, master gas fitting, and master plumbing credentials ensuring code-compliant execution.",
      icon: Wrench,
    },
    {
      title: "Factory-Trained Specialists",
      detail: "Certified on modern variable-speed inverter systems (Daikin Fit, Trane) and condensing tankless water heaters (Navien).",
      icon: Gauge,
    },
  ];

  return (
    <>
      {/* ----------------- Hero Section ----------------- */}
      <section className="surface-ink py-20 lg:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Company & Heritage</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight font-semibold text-ink-foreground sm:text-6xl">
              Local roots. Technical rigor. Work that lasts.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-foreground/80">
              J&amp;J Mechanical is a family-owned, veteran-owned mechanical contractor operating from our shop at {SITE.street} in {SITE.city}, Virginia since {SITE.founded}. Over 25 years later, our philosophy remains unchanged: careful scientific diagnostics, honest upfront options in writing, and verified mechanical results before we leave.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CallButton label="Call Our Blackstone Shop" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground hover:bg-ink-foreground/10"
              >
                Visit Our Office <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lux)]">
              <img
                src={img("about-team")}
                alt="J&J Mechanical service technicians Jesse and Jonathan with fleet vehicles in Blackstone, VA"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-ink/90 p-5 backdrop-blur-sm border-t border-ink-foreground/10">
                <p className="text-sm font-semibold text-ink-foreground">Shop Headquarters</p>
                <p className="text-xs text-ink-foreground/75 flex items-center gap-1.5 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-copper" /> {SITE.street}, {SITE.city}, VA {SITE.zip}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------- Qualifications & Licenses ----------------- */}
      <section className="border-b border-hairline bg-card py-16">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Credentials that protect you"
            title="Fully licensed, insured, and certified."
            intro="We don't take shortcuts with safety, building codes, or manufacturer standards. Every technician on your property is backed by legitimate trade licensure."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualifications.map((q) => (
              <div key={q.title} className="rounded-xl border border-hairline bg-secondary/30 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper">
                  <q.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{q.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- The Real Team & Local History ----------------- */}
      <section className="py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A neighborhood contractor, not a distant private equity call center."
            />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Across Virginia, many local HVAC and plumbing companies have been acquired by national investment conglomerates — leading to commissioned salespeople, aggressive upsells, and distant call centers who don't know Nottoway County from Prince Edward County.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              At J&amp;J Mechanical, our leadership team — including master technicians Jesse and Jonathan, and our dispatch and customer care coordinators Selena and Kimberly — lives and works right here in Blackstone. When you call, you speak with someone who understands local well water chemistry, railroad-era home crawlspaces, and rural propane deliveries.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 rounded-2xl border border-hairline bg-card p-6">
              <div>
                <p className="font-display text-3xl font-semibold text-copper">25+</p>
                <p className="mt-1 text-xs text-muted-foreground">Years Continuous Local Service</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-copper">100%</p>
                <p className="mt-1 text-xs text-muted-foreground">Family & Veteran-Owned</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-copper">24/7</p>
                <p className="mt-1 text-xs text-muted-foreground">Direct Emergency Dispatch</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-copper">4.9 ★</p>
                <p className="mt-1 text-xs text-muted-foreground">Rated on Google Reviews</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Working Philosophy"
              title="No guesswork. No high-pressure sales."
            />
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-hairline bg-card p-5">
                <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-copper" />
                  Calibrated Measurements on Every Call
                </h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  We don't guess what is broken. We measure static pressure, test run capacitor microfarads, analyze combustion gases, and verify water pressures before recommending any fix.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-card p-5">
                <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-copper" />
                  Written Upfront Pricing
                </h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  You receive clear, flat-rate options in writing before any repair begins. If an inexpensive part will safely restore your system, we say so directly.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-card p-5">
                <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-copper" />
                  Re-Tested Performance Before Departure
                </h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  We never pack up until we run a complete heating, cooling, or pressure cycle, verifying that temperatures, airflow, and safety limits meet factory specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- The 4-Step Standard ----------------- */}
      <section className="bg-secondary/40 py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="The J&J Standard"
            title="The 4-Step Service Protocol"
            intro="How we ensure every residential and commercial call is handled with accountability."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.step} className="rounded-2xl border border-hairline bg-card p-7 shadow-sm">
                <span className="font-display text-3xl font-semibold text-copper">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk directly with your local mechanical team."
        body="Call our Blackstone shop at (434) 206-8795 for routine service, heating/cooling planning, or 24/7 emergencies throughout Southside Virginia."
      />
    </>
  );
}
