import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Gauge,
  ShieldCheck,
  Wrench,
  HelpCircle,
  FileCheck2,
  Clock,
  Sparkles,
  Sliders,
  Check,
  Building,
} from "lucide-react";
import { CallButton, CtaBand, Eyebrow, Reveal, SectionHeading } from "@/components/site/Chrome";
import { MAJOR_SERVICES, parsePageSlug } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { SITE } from "@/data/site";
import { getLocationServiceData } from "@/data/location-service-content";
import { img } from "@/lib/images";

export const Route = createFileRoute("/$slug")({
  head: ({ params }) => {
    const page = parsePageSlug(params.slug);
    const title = page
      ? `${page.service.name} in ${page.location.name}, VA | J&J Mechanical`
      : "Local HVAC & Plumbing | J&J Mechanical";
    const description = page
      ? `Expert ${page.service.name.toLowerCase()} in ${page.location.full}. Calibrated mechanical diagnosis, upfront written pricing, and 24/7 response from local Blackstone technicians.`
      : "Local HVAC, plumbing and gas service across Southside Virginia.";

    const schema = page
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `${page.service.name} in ${page.location.name}, VA`,
              serviceType: page.service.name,
              provider: {
                "@type": "HVACBusiness",
                name: "J&J Mechanical",
                telephone: "+14342068795",
                url: "https://www.jjmechanicalservice.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "111 N Main St",
                  addressLocality: "Blackstone",
                  addressRegion: "VA",
                  postalCode: "23824",
                  addressCountry: "US",
                },
              },
              areaServed: {
                "@type": "City",
                name: page.location.name,
              },
              description,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.jjmechanicalservice.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: `${page.service.name} in ${page.location.name}, VA`,
                  item: `https://www.jjmechanicalservice.com/${page.service.slug}-${page.location.slug}`,
                },
              ],
            },
          ],
        }
      : null;

    const canonicalUrl = `${SITE.domain}/${page ? `${page.service.slug}-${page.location.slug}` : params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonicalUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: canonicalUrl },
      ],
      scripts: schema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(schema),
            },
          ]
        : [],
    };
  },
  component: ServiceLocationPage,
});

function ServiceLocationPage() {
  const { slug } = Route.useParams();
  const page = parsePageSlug(slug);

  if (!page)
    return (
      <section className="py-28 text-center">
        <div className="container-lux">
          <h1 className="text-4xl font-semibold">Service page not found</h1>
          <p className="mt-4 text-muted-foreground">
            This service or location combination is not currently listed.
          </p>
          <Link to="/" className="mt-7 inline-flex items-center gap-2 font-bold text-copper">
            Return home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );

  const { service, location } = page;
  const localData = getLocationServiceData(service, location);

  return (
    <>
      {/* ----------------- Hero Section ----------------- */}
      <section className="relative isolate overflow-hidden surface-ink py-20 lg:py-28">
        <img
          src={img(service.image)}
          alt={service.imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/85 backdrop-blur-[2px]" />
        <div className="container-lux">
          <div className="max-w-4xl animate-lux-rise">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-foreground/70">
              <Link to="/" className="transition hover:text-copper">Home</Link>
              <span>/</span>
              <span className="capitalize">{service.category}</span>
              <span>/</span>
              <span className="text-ink-foreground font-semibold">{service.name} in {location.name}, VA</span>
            </nav>

            <Eyebrow>
              {service.category.toUpperCase()} SERVICE · {location.full}
            </Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-ink-foreground sm:text-5xl lg:text-6xl">
              {service.name} in{" "}
              <span className="text-gradient-copper">{location.name}, Virginia</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/85 sm:text-xl">
              {localData.customIntro[0].split(".")[0]}. Calibrated diagnostic testing, upfront flat-rate
              pricing, and local dispatch from our Blackstone shop.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CallButton label="Call for Service" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Schedule Diagnostic Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-foreground/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-copper" />
                {location.drive}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-copper" />
                24/7 Emergency Dispatch
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-copper" />
                Virginia Class A Contractor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Quick Assurance Strip ----------------- */}
      <section className="border-b border-hairline bg-card py-6">
        <div className="container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-semibold">Instrument Diagnostics</p>
              <p className="text-xs text-muted-foreground">Measured values, never guessed parts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-semibold">Upfront Written Pricing</p>
              <p className="text-xs text-muted-foreground">Firm quote before any wrench turns</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-semibold">Blackstone Shop Base</p>
              <p className="text-xs text-muted-foreground">Direct local dispatch, no distant call center</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-semibold">Verified Performance</p>
              <p className="text-xs text-muted-foreground">Re-tested and documented before departure</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Main Technical Content & Aside ----------------- */}
      <section className="py-20 lg:py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-[1fr_21rem]">
          <div className="space-y-14">
            {/* Overview with Genuine Location-Specific Narrative */}
            <article className="prose-lux">
              <h2 className="!mt-0 text-3xl font-semibold">
                Expert {service.name} for {location.name} Properties
              </h2>
              <p className="text-lg leading-8">{localData.customIntro[0]}</p>
              <p className="leading-8">{localData.customIntro[1]}</p>

              {/* Technical Service Realities */}
              <div className="mt-10 space-y-8">
                {service.sections.map((section) => (
                  <div key={section.h} className="rounded-xl border border-hairline bg-card p-6">
                    <h3 className="!mt-0 text-xl font-semibold">{section.h}</h3>
                    <p className="mt-3 text-muted-foreground leading-7">{section.p}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Location-Specific Engineering Challenges */}
            <div className="rounded-2xl border border-hairline bg-card p-7 lg:p-8">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-copper" />
                <p className="eyebrow text-copper">Local Mechanical Factors</p>
              </div>
              <h3 className="mt-2 text-2xl font-semibold">
                {location.name} Property & Climate Realities
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                How local construction age, humidity corridors, and utilities impact {service.name.toLowerCase()} in {location.name}.
              </p>

              <div className="mt-6 grid gap-4">
                {localData.localChallenges.map((ch) => (
                  <div key={ch.title} className="rounded-xl bg-secondary/50 p-5">
                    <h4 className="text-base font-semibold text-foreground">{ch.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{ch.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Protocol Section */}
            {service.diagnosticSteps && service.diagnosticSteps.length > 0 && (
              <div className="rounded-2xl border border-copper/30 bg-secondary/40 p-7 lg:p-8">
                <div className="flex items-center gap-2.5">
                  <Gauge className="h-5 w-5 text-copper" />
                  <p className="eyebrow text-copper">How We Diagnose It</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">
                  Diagnostic Measurements for {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We verify root causes with calibrated testing instruments rather than replacing parts on trial-and-error.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.diagnosticSteps.map((step, idx) => (
                    <div
                      key={step.tool}
                      className="rounded-xl border border-hairline bg-card p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-copper">
                        <span>Test #{idx + 1}</span>
                        <span className="font-mono text-muted-foreground">{step.tool}</span>
                      </div>
                      <h4 className="mt-2 text-base font-semibold text-foreground">{step.check}</h4>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actual Work Process */}
            {service.workSteps && service.workSteps.length > 0 && (
              <div>
                <SectionHeading
                  eyebrow="Transparent Execution"
                  title={`Our 5-Step ${service.name} Process`}
                  intro={`Every service call in ${location.name} follows a rigorous quality protocol from initial dispatch to final verification.`}
                />
                <div className="mt-8 space-y-4">
                  {service.workSteps.map((ws) => (
                    <div
                      key={ws.step}
                      className="flex items-start gap-5 rounded-xl border border-hairline bg-card p-6 transition-all hover:border-copper/40"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper/10 font-display text-lg font-bold text-copper">
                        {ws.step}
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{ws.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                          {ws.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Decision Guide: Repair vs Replace */}
            {service.decisionCriteria && service.decisionCriteria.length > 0 && (
              <div className="rounded-2xl border border-hairline bg-card p-7 lg:p-8">
                <div className="flex items-center gap-2">
                  <Sliders className="h-5 w-5 text-copper" />
                  <p className="eyebrow text-copper">Decision Framework</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">
                  Should You Repair or Replace?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Clear, honest numbers to help {location.name} homeowners decide what makes financial sense.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-hairline text-xs uppercase text-muted-foreground">
                        <th className="pb-3 font-semibold">Factor</th>
                        <th className="pb-3 font-semibold text-emerald-600">Consider Repair If</th>
                        <th className="pb-3 font-semibold text-amber-600">Consider Replacement If</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-hairline">
                      {service.decisionCriteria.map((crit) => (
                        <tr key={crit.factor} className="hover:bg-secondary/40">
                          <td className="py-4 pr-4 font-semibold text-foreground align-top">
                            {crit.factor}
                          </td>
                          <td className="py-4 pr-4 text-xs leading-5 text-muted-foreground align-top">
                            {crit.repairIf}
                          </td>
                          <td className="py-4 text-xs leading-5 text-muted-foreground align-top">
                            {crit.replaceIf}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Town-Specific Case Study & Proof */}
            <div className="relative overflow-hidden rounded-2xl surface-ink p-7 text-ink-foreground lg:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-copper uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                Verified Local Project Proof
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-ink-foreground">
                {localData.localCaseStudy.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-foreground/75">
                {localData.localCaseStudy.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-copper/20 px-4 py-2 text-sm font-semibold text-copper">
                <Check className="h-4 w-4" />
                {localData.localCaseStudy.metric}
              </div>
            </div>

            {/* Town-Specific Benefits */}
            <div className="rounded-2xl border border-hairline bg-card p-7 lg:p-8">
              <p className="eyebrow text-copper">Local Advantage</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Why Property Owners in {location.name} Choose J&J Mechanical
              </h3>
              <ul className="mt-6 space-y-3.5">
                {localData.localBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signs You Need Service */}
            <div>
              <p className="eyebrow text-copper">Warning Signs</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Signs You Need {service.name}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 rounded-xl border border-hairline bg-card p-4 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl surface-ink p-7 text-ink-foreground shadow-lg">
                <p className="eyebrow text-copper">Fast Local Dispatch</p>
                <h2 className="mt-3 text-2xl font-semibold">
                  Need {service.name.toLowerCase()}?
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-foreground/75">
                  Talk to a local expert at our Blackstone shop. Direct technician dispatch to {location.name}.
                </p>

                <div className="mt-6">
                  <CallButton label="Call (434) 206-8795" className="w-full justify-center" />
                </div>

                <div className="mt-6 space-y-3 border-t border-ink-foreground/15 pt-5 text-sm">
                  {[
                    "Licensed Virginia Class A Mechanical",
                    "Written upfront estimates before work",
                    "24/7 emergency response availability",
                    `Zero travel surcharge in ${location.name}`,
                  ].map((x) => (
                    <p key={x} className="flex items-center gap-2 text-xs text-ink-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-copper" />
                      {x}
                    </p>
                  ))}
                </div>
              </div>

              {/* Maintenance Plan Quick Card */}
              <div className="rounded-2xl border border-hairline bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold text-copper uppercase">Peace of Mind</p>
                <h4 className="mt-1 text-base font-semibold">Comfort Guard Plan</h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Get 2 annual tune-ups, priority emergency dispatch, and 15% discount on all repairs starting at $18/month.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-copper hover:underline"
                >
                  Ask about protection plans <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ----------------- Frequently Asked Questions (Town-Specific) ----------------- */}
      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Helpful Information"
            title={`${service.name} Questions in ${location.name}`}
            intro={`Clear answers to the most common questions from ${location.name} property owners about dispatch, permits, and repair options.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[...service.faqs.slice(0, 2), ...localData.localFaqs].map((faq) => (
              <div key={faq.q} className="lux-card p-7">
                <h3 className="flex items-start gap-2.5 text-base font-semibold">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Location-Relevant Customer Reviews ----------------- */}
      <section className="py-20">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Local Proof"
            title={`Trusted across ${location.name} and Southside Virginia.`}
            intro="Real feedback from property owners we've helped across the region."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {localData.reviews.map((review) => (
              <article key={review.name} className="lux-card flex flex-col justify-between p-7">
                <div>
                  <div className="flex gap-1 text-copper">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">“{review.text}”</p>
                </div>
                <div className="mt-6 border-t border-hairline pt-4">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.city} · {review.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Comprehensive Internal Linking Hub ----------------- */}
      <section className="border-t border-hairline bg-muted/20 py-16">
        <div className="container-lux space-y-12">
          {/* 1. Other Services in This Town */}
          <div>
            <p className="eyebrow text-copper">Trade Coverage in {location.name}</p>
            <h3 className="mt-2 text-2xl font-bold">
              Other Mechanical Services Available in {location.name}, VA
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Direct dispatch from our Blackstone shop across all residential and commercial trades.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {MAJOR_SERVICES.filter((x) => x.slug !== service.slug).map((related) => (
                <Link
                  key={related.slug}
                  to="/$slug"
                  params={{ slug: `${related.slug}-${location.slug}` }}
                  className="flex items-center justify-between rounded-xl border border-hairline bg-card p-4 text-sm font-semibold transition hover:border-copper hover:text-copper"
                >
                  <span>{related.name}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Same Service Across Regional Southside Towns */}
          <div className="border-t border-hairline pt-10">
            <p className="eyebrow text-copper">Regional Southside VA Coverage</p>
            <h3 className="mt-2 text-2xl font-bold">
              {service.name} in Nearby Southside Virginia Communities
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We never charge travel or mileage surcharges across any of these core towns.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {LOCATIONS.filter((l) => l.slug !== location.slug).map((loc) => (
                <Link
                  key={loc.slug}
                  to="/$slug"
                  params={{ slug: `${service.slug}-${loc.slug}` }}
                  className="flex items-center justify-between rounded-xl border border-hairline bg-card p-4 text-sm font-semibold transition hover:border-copper hover:text-copper"
                >
                  <span>
                    {service.name} in {loc.name}, VA
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Global Navigation Shortcuts */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/" className="font-semibold text-foreground hover:text-copper">
                ← J&J Mechanical Home
              </Link>
              <span>·</span>
              <Link to="/about" className="hover:text-foreground">
                About Our Blackstone Team & Shop
              </Link>
              <span>·</span>
              <Link to="/reviews" className="hover:text-foreground">
                Read 187+ Verified Google Reviews
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-foreground">
                24/7 Dispatch Request
              </Link>
            </div>
            <span>VA Class A Mechanical Contractor #2705096538</span>
          </div>
        </div>
      </section>

      {/* ----------------- Bottom CTA ----------------- */}
      <CtaBand
        title={`${service.name} in ${location.name} begins with one call.`}
        body="Get prompt local dispatch, a verified instrument diagnosis, and clear upfront pricing before any work starts."
        image={service.image}
        imageAlt={service.imageAlt}
      />
    </>
  );
}
