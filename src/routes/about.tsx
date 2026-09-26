import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CtaBand, Eyebrow, Reveal, SectionHeading } from "@/components/site/Chrome";
import { PROCESS, SITE, TRUST } from "@/data/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About J&J Mechanical | Blackstone VA" },
      {
        name: "description",
        content:
          "Meet the local HVAC, plumbing and gas team serving Blackstone and Southside Virginia since 1998.",
      },
      { property: "og:title", content: "About J&J Mechanical" },
      {
        property: "og:description",
        content:
          "Local mechanical expertise, honest recommendations and accountable service since 1998.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="surface-ink py-24">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our company</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight font-semibold text-ink-foreground sm:text-6xl">
              Local roots. Technical standards. Work that lasts.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-foreground/70">
              J&amp;J Mechanical has served Southside Virginia from Blackstone since {SITE.founded}.
              We built the company around careful diagnosis, clear options and complete
              verification.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={img("about-team")}
              alt="J&J Mechanical team and service vehicles"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>
      <section className="py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why J&J" title="A better standard for home service." />
            <p className="mt-7 leading-8 text-muted-foreground">
              Our technicians measure before recommending. HVAC calls include airflow and electrical
              readings; plumbing calls trace the source before opening a wall; gas work is
              pressure-tested and documented. You receive written options before work begins and a
              clean, verified result when it ends.
            </p>
            <div className="mt-8 grid gap-4">
              {TRUST.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-copper" />
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-2">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-card p-7">
                <p className="font-display text-3xl font-semibold text-copper">{step.step}</p>
                <h2 className="mt-4 text-lg font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Talk directly with your local mechanical team."
        body="We are ready for routine service, system planning and 24/7 emergencies throughout Southside Virginia."
      />
    </>
  );
}
