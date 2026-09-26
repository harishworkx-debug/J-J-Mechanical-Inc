import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Gauge, ShieldCheck, Star, Wrench } from "lucide-react";
import { CallButton, CtaBand, Eyebrow, Reveal, SectionHeading } from "@/components/site/Chrome";
import { LOCATIONS, MAJOR_SERVICES } from "@/data/services";
import { PROCESS, REVIEWS, SITE, TRUST } from "@/data/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone VA" },
      {
        name: "description",
        content:
          "J&J Mechanical provides HVAC, AC, heating, furnace, heat pump, plumbing, water heater, drain, sewer and gas services in Blackstone, VA and surrounding Southside Virginia. Call (434) 206-8795.",
      },
      {
        property: "og:title",
        content: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone VA",
      },
      {
        property: "og:description",
        content:
          "J&J Mechanical provides HVAC, AC, heating, furnace, heat pump, plumbing, water heater, drain, sewer and gas services in Blackstone, VA and surrounding Southside Virginia. Call (434) 206-8795.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[82vh] overflow-hidden surface-ink">
        <img
          src={img("hero-home")}
          alt="J&J Mechanical technician servicing an HVAC system in Southside Virginia"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/75" />
        <div className="container-lux flex min-h-[82vh] items-center py-20">
          <div className="max-w-4xl animate-lux-rise">
            <Eyebrow>Blackstone's local mechanical experts since 1998</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.04] font-semibold text-ink-foreground sm:text-6xl lg:text-7xl">
              HVAC, Plumbing & Gas Services{" "}
              <span className="text-gradient-copper">in Blackstone, VA</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-foreground/78 sm:text-xl">
              Fast, measured HVAC, plumbing and gas service for homes and businesses across
              Blackstone and Southside Virginia — 24 hours a day.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CallButton label="Call for Service" />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-foreground/75">
              {TRUST.slice(0, 3).map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-copper" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-card py-7">
        <div className="container-lux grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((item, i) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="mt-1 text-copper">
                {i === 0 ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : i === 1 ? (
                  <Gauge className="h-5 w-5" />
                ) : (
                  <Wrench className="h-5 w-5" />
                )}
              </span>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Complete mechanical service"
            title="One trusted team for every system in your property."
            intro="From a no-cool emergency to a full system replacement, our technicians diagnose with real measurements, explain the options clearly and verify the result before leaving."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MAJOR_SERVICES.slice(0, 9).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/$slug"
                  params={{ slug: `${service.slug}-blackstone-va` }}
                  className="group block overflow-hidden lux-card"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={img(service.image)}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-copper uppercase">{service.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{service.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground">
                      {service.name}{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink hairline-grid py-24">
        <div className="container-lux">
          <SectionHeading
            dark
            eyebrow="The J&J standard"
            title="No guesswork. No pressure. No mystery invoice."
            intro="A disciplined process makes service faster, recommendations clearer and repairs more reliable."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink-foreground/10 md:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-ink/85 p-7">
                <span className="font-display text-3xl font-semibold text-copper">{step.step}</span>
                <h3 className="mt-5 text-lg font-semibold text-ink-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-foreground/65">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={img("about-team")}
              alt="J&J Mechanical professional service team in Blackstone Virginia"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-lux)]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Built here. Accountable here.</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">
              Your neighborhood contractor, not a distant call center.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Our shop is at {SITE.street} in {SITE.city}. That means faster dispatch, technicians
              who understand local homes and water systems, and a company whose reputation lives on
              the same streets as its customers.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-5">
              <div>
                <p className="font-display text-3xl font-semibold text-copper">25+</p>
                <p className="text-sm text-muted-foreground">Years serving the region</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-copper">24/7</p>
                <p className="text-sm text-muted-foreground">Emergency response</p>
              </div>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold">
              Meet J&amp;J Mechanical <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Customer stories"
            title="The call people are glad they made."
            intro={`Rated ${SITE.rating} from ${SITE.reviewCount}+ local customers.`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((review) => (
              <article key={review.name} className="lux-card p-7">
                <div className="flex gap-1 text-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">“{review.text}”</p>
                <p className="mt-5 font-semibold">{review.name}</p>
                <p className="text-xs text-muted-foreground">
                  {review.city} · {review.service}
                </p>
              </article>
            ))}
          </div>
          <Link to="/reviews" className="mt-8 inline-flex items-center gap-2 font-bold">
            Read more customer reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Local coverage"
            title="Serving Southside Virginia from the heart of Blackstone."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to="/$slug"
                params={{ slug: `hvac-repair-${loc.slug}` }}
                className="group border-b border-hairline py-5"
              >
                <p className="font-display text-xl font-semibold group-hover:text-copper">
                  {loc.full}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{loc.drive}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Your system should work. Let's make sure it does."
        body="Call our Blackstone team now for prompt HVAC, plumbing or gas service anywhere in our Southside Virginia coverage area."
      />
    </>
  );
}
