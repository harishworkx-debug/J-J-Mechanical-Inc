import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Gauge,
  ShieldCheck,
  Star,
  Wrench,
  FileCheck2,
  Sliders,
  Sparkles,
  Flame,
  Activity,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { CallButton, CtaBand, Eyebrow, Reveal, SectionHeading } from "@/components/site/Chrome";
import { LOCATIONS, MAJOR_SERVICES } from "@/data/services";
import { BEFORE_AFTER, PLANS, PROCESS, PROJECTS, REVIEWS, SITE, TRUST } from "@/data/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone, VA" },
      {
        name: "description",
        content:
          "J&J Mechanical provides measured HVAC diagnostics, emergency AC/heating repair, licensed plumbing, water heaters, and permitted gas piping across Blackstone, Farmville, Crewe, and Southside Virginia. Call (434) 206-8795.",
      },
      {
        property: "og:title",
        content: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone, VA",
      },
      {
        property: "og:description",
        content:
          "J&J Mechanical provides measured HVAC diagnostics, emergency AC/heating repair, licensed plumbing, water heaters, and permitted gas piping across Blackstone, Farmville, Crewe, and Southside Virginia. Call (434) 206-8795.",
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
      {/* ----------------- Hero Section ----------------- */}
      <section className="relative isolate min-h-[84vh] overflow-hidden surface-ink">
        <img
          src={img("hero-home")}
          alt="J&J Mechanical technician servicing an HVAC system in Southside Virginia"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/78 backdrop-blur-[2px]" />
        <div className="container-lux flex min-h-[84vh] items-center py-20">
          <div className="max-w-4xl animate-lux-rise">
            <Eyebrow>Blackstone's local mechanical experts since 1998</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.04] font-semibold text-ink-foreground sm:text-6xl lg:text-7xl">
              HVAC, Plumbing & Gas Services{" "}
              <span className="text-gradient-copper">in Blackstone, VA</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-foreground/80 sm:text-xl">
              Measured instrument diagnostics, upfront flat-rate pricing, and prompt dispatch from
              our N. Main St shop for homes and businesses across Southside Virginia — 24 hours a day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CallButton label="Call for Service" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Schedule Service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-foreground/75">
              {TRUST.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-copper" />
                  <span className="font-semibold text-ink-foreground">{item.label}</span>
                  <span className="hidden opacity-75 sm:inline">({item.detail})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Trust & Capabilities Bar ----------------- */}
      <section className="border-b border-hairline bg-card py-7">
        <div className="container-lux grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="font-semibold">Licensed & Insured</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Virginia Class A Contractor (#2705096538)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Gauge className="mt-1 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="font-semibold">Instrument Diagnostics</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Subcooling, static pressure & combustion testing
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="font-semibold">Upfront Pricing</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Written quotes with zero hidden trip or overtime fees
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Wrench className="mt-1 h-5 w-5 shrink-0 text-copper" />
            <div>
              <p className="font-semibold">All Systems Serviced</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Heat pumps, AC, furnaces, plumbing, water heaters & gas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 8 Dedicated Service Sections ----------------- */}
      <section className="py-24 bg-card/40">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Complete mechanical trades"
            title="Dedicated Mechanical Services Across Southside Virginia."
            intro="We don't outsource or guess. J&J Mechanical provides licensed, master-level craftsmanship across heating, cooling, plumbing, and gas — all backed by upfront written pricing."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* 1. Air Conditioning Services */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-ac")}
                    alt="Technician testing AC refrigerant pressures and capacitor"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Cooling</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Air Conditioning</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Fast emergency AC diagnosis, dual-run capacitor replacement, refrigerant leak repair, and high-efficiency SEER2 replacements.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "ac-repair-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>AC Repair in Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "ac-installation-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>AC Installation & Sizing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "ac-maintenance-blackstone-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>21-Point Summer Tune-Up</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Heating & Climate Control */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-hvac-repair")}
                    alt="Heating system diagnostic inspection in Southside Virginia"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Heating</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Heating Repair</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Complete winter heating diagnostics for dual-fuel systems, auxiliary strip sequencers, reversing valves, and staging thermostats.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "heating-repair-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Heating Repair Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "heating-maintenance-crewe-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Winter Heating Tune-Up</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Furnace & Boiler Repair */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-furnace")}
                    alt="Gas furnace burner ignition and heat exchanger testing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Combustion</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Furnace & Boiler</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Electronic flue gas combustion analysis, flame sensor cleaning, inducer draft pressure switch repairs, and cracked heat exchanger safety checks.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "furnace-repair-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Furnace Repair Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "furnace-repair-farmville-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Furnace Service in Farmville</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Heat Pump Services */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-commercial-hvac")}
                    alt="High efficiency variable capacity heat pump installation"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Inverter Heat Pumps</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Heat Pump Systems</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Engineered variable-capacity inverter systems (Daikin Fit) with cold-climate operation down to 0°F and low winter operating costs.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "heat-pump-installation-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Heat Pump Replacement</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "heat-pump-repair-blackstone-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Heat Pump Diagnostics</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 5. Plumbing Leak & Pipe Repair */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-plumbing-repair")}
                    alt="Licensed plumber testing water line pressure and repairing supply valves"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Plumbing</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Plumbing Repair</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Master plumbing repairs for burst pipes, leaking shutoff valves, failing polybutylene, pressure reducing valves, and well pressure switches.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "plumbing-repair-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Plumbing Repair Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "plumbing-repair-burkeville-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Plumbing in Burkeville, VA</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 6. Water Heater Services */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-water-heater")}
                    alt="Water heater element replacement and tankless installation"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Hot Water</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Water Heaters</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Fast diagnosis for no-hot-water calls: heating elements, thermostats, T&P safety valves, sediment flushing, and Navien tankless upgrades.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "water-heater-services-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Water Heater Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "water-heater-services-amelia-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Water Heater in Amelia, VA</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 7. Drain Cleaning & Sewer Line */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-drain")}
                    alt="Motorized drain auger cabling a sewer main line cleanout"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Drains & Sewer</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Drain & Sewer</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Commercial motorized drain cabling, high-pressure hydro jetting for grease and scale, and 1080p color in-line camera scope verification.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "drain-and-sewer-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Drain Cleaning Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "drain-and-sewer-farmville-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Sewer Scoping in Farmville</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 8. Gas Line & Propane Piping */}
            <div className="lux-card flex flex-col justify-between p-7 transition hover:border-copper/50">
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-secondary mb-5">
                  <img
                    src={img("svc-gas-line")}
                    alt="Master gas fitter assembling black iron gas piping with pressure testing"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold text-copper uppercase tracking-wider">Gas & Propane</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Gas Piping</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  Permitted black iron, CSST bonding, and underground polyethylene gas lines for standby generators, ranges, fire features, and furnaces.
                </p>
              </div>
              <div className="mt-6 space-y-2 border-t border-hairline pt-4 text-xs">
                <Link
                  to="/$slug"
                  params={{ slug: "gas-services-blackstone-va" }}
                  className="flex items-center justify-between font-semibold text-foreground hover:text-copper"
                >
                  <span>Gas Line Service Blackstone</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/$slug"
                  params={{ slug: "gas-services-victoria-va" }}
                  className="flex items-center justify-between text-muted-foreground hover:text-copper"
                >
                  <span>Propane Lines in Victoria, VA</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Scientific Diagnostics Section ----------------- */}
      <section className="surface-ink hairline-grid py-24 text-ink-foreground">
        <div className="container-lux">
          <SectionHeading
            dark
            eyebrow="The Diagnostic Difference"
            title="Calibrated measurements. Never guessed parts."
            intro="Most repeat breakdowns happen because the symptom was treated instead of the underlying mechanical cause. J&J Mechanical technicians test with calibrated instruments to find what actually failed."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-ink-foreground/15 bg-ink/80 p-6 backdrop-blur-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/20 text-copper">
                <Gauge className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">
                Airflow & Static Pressure
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-foreground/70">
                We measure Total External Static Pressure (TESP) with digital manometers. High static pressure strangles airflow, spikes utility bills, and burns out blower motors prematurely.
              </p>
              <div className="mt-4 text-xs font-mono text-copper">Target: ≤ 0.5 in.w.c.</div>
            </div>

            <div className="rounded-2xl border border-ink-foreground/15 bg-ink/80 p-6 backdrop-blur-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/20 text-copper">
                <Activity className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">
                Refrigerant Dynamics
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-foreground/70">
                Instead of topping off refrigerant blindly, we calculate exact subcooling and superheat to pinpoint metering valve (TXV) restrictions, coil freeze-ups, or micro-leaks.
              </p>
              <div className="mt-4 text-xs font-mono text-copper">Subcooling ± 1°F Factory Spec</div>
            </div>

            <div className="rounded-2xl border border-ink-foreground/15 bg-ink/80 p-6 backdrop-blur-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/20 text-copper">
                <Flame className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">
                Combustion & CO Safety
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-foreground/70">
                Gas and propane furnaces undergo electronic flue gas analysis to measure excess air, stack temperature, and carbon monoxide PPM, plus borescope camera inspections of heat exchangers.
              </p>
              <div className="mt-4 text-xs font-mono text-copper">Zero CO Spillage Guarantee</div>
            </div>

            <div className="rounded-2xl border border-ink-foreground/15 bg-ink/80 p-6 backdrop-blur-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/20 text-copper">
                <Wrench className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">
                Hydrostatic & Video Scope
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-foreground/70">
                Plumbing supply lines are pressure tested before walls are closed. Sewer blockages are cleared with commercial cables or hydro-jetting, followed by 1080p camera inspection.
              </p>
              <div className="mt-4 text-xs font-mono text-copper">Documented Video Finding</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- The Actual Work Process ----------------- */}
      <section className="py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="The J&J standard"
            title="What to expect when you schedule service."
            intro="A disciplined, transparent process makes service faster, recommendations clearer, and repairs more dependable."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.step} className="rounded-2xl border border-hairline bg-card p-7 shadow-sm">
                <span className="font-display text-3xl font-semibold text-copper">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Proof & Case Studies ----------------- */}
      <section className="bg-secondary/60 py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Regional proof"
            title="Real projects. Measurable performance results."
            intro="We document system measurements before and after our work across Southside Virginia."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="flex flex-col justify-between rounded-2xl border border-hairline bg-card p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-copper">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" /> Case Study
                    </span>
                    <span className="text-muted-foreground">{proj.place}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{proj.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{proj.body}</p>
                </div>
                <div className="mt-5 rounded-xl bg-secondary p-3">
                  <p className="text-xs font-semibold text-copper">Verified Result:</p>
                  <p className="text-sm font-bold text-foreground">{proj.stat}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Before & After Technical Benchmarks */}
          <div className="mt-12 rounded-2xl border border-hairline bg-card p-7 lg:p-8">
            <p className="eyebrow text-copper">Measured Benchmarks</p>
            <h3 className="mt-2 text-2xl font-semibold">
              Before & After Mechanical Verification
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every major repair or installation ends with documented performance readings.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {BEFORE_AFTER.map((ba) => (
                <div key={ba.title} className="rounded-xl border border-hairline bg-secondary/40 p-5">
                  <h4 className="font-semibold text-foreground">{ba.title}</h4>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="rounded-lg bg-red-500/10 p-2.5 text-red-700 dark:text-red-400">
                      <span className="font-bold">Before:</span> {ba.before}
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-700 dark:text-emerald-400">
                      <span className="font-bold">After:</span> {ba.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Customer Decision Guide: Repair vs. Replace ----------------- */}
      <section className="py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Homeowner Decision Framework"
            title="Repair or Replace? How to make the right call."
            intro="We don't pressure you into buying equipment you don't need. Here is the straightforward mechanical and financial framework we use to guide property owners."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-hairline bg-card p-7">
              <span className="font-display text-2xl font-bold text-copper">01</span>
              <h3 className="mt-3 text-xl font-semibold">The $5,000 Rule</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Multiply your equipment's age in years by the estimated repair cost. If the result is under $5,000 (e.g., a 6-year-old system needing a $400 repair = $2,400), repair is almost always the smart choice. If it exceeds $5,000 (e.g., 13 years × $750 = $9,750), replacement offers far better long-term ROI.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-card p-7">
              <span className="font-display text-2xl font-bold text-copper">02</span>
              <h3 className="mt-3 text-xl font-semibold">Refrigerant Phaseouts</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Older R-22 Freon systems are now illegal to manufacture and cost hundreds per pound to recharge. Even legacy R-410A is being phased down under the AIM Act in favor of low-GWP refrigerants (R-454B/R-32). If an older unit has a leaking coil, replacing it avoids pouring money into obsolete chemistry.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-card p-7">
              <span className="font-display text-2xl font-bold text-copper">03</span>
              <h3 className="mt-3 text-xl font-semibold">Efficiency & Tax Credits</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Upgrading from a 10 SEER AC or 70% AFUE furnace to a modern 17 SEER2 inverter heat pump or 96% condensing furnace cuts monthly fuel and power bills by 25%–40%. Qualifying high-efficiency systems unlock up to $2,000 in federal Section 25C tax credits plus local utility rebates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Maintenance & Protection Plans ----------------- */}
      <section className="bg-secondary/40 py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Ongoing Protection"
            title="Prevent breakdowns with transparent maintenance plans."
            intro="Regular precision tune-ups extend equipment lifespan by 5+ years, keep manufacturer warranties valid, and ensure priority emergency dispatch."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-2xl border bg-card p-8 shadow-sm ${
                  plan.highlight ? "border-copper shadow-[var(--shadow-copper)]" : "border-hairline"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-[11px] font-bold text-copper-foreground uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.for}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-copper">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.cadence}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <CallButton
                    label="Enroll by Phone"
                    className="w-full justify-center text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Real Team, Fleet & Proven Experience ----------------- */}
      <section className="py-24 border-t border-hairline">
        <div className="container-lux space-y-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lux)]">
                <img
                  src={img("about-team")}
                  alt="J&J Mechanical team and stocked service vehicles at 111 N Main St in Blackstone Virginia"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-ink/80 p-4 text-xs text-white backdrop-blur-md">
                  <span className="font-bold text-copper uppercase tracking-wider block">Shop & Fleet Base</span>
                  111 N Main St, Blackstone, VA 23824 · Fully stocked vans dispatched 24/7
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Real Team · Verified Credentials</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">
                Real Technicians Accountable to Southside Virginia.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                We are a local family-owned mechanical contractor headquartered at 111 N Main St in Blackstone since 1998. When you call for help, you speak directly with our local office — not an outsourced national call center.
              </p>

              {/* Team Highlights */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-hairline bg-card p-4">
                  <p className="font-bold text-foreground">Jesse & Jonathan</p>
                  <p className="text-xs text-copper font-medium mt-0.5">Master Tradesmen & Installation Leads</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Direct on-site diagnosis for complex heat pumps, boilers, duct retrofits, and high-capacity gas lines.
                  </p>
                </div>
                <div className="rounded-xl border border-hairline bg-card p-4">
                  <p className="font-bold text-foreground">Selena & Kimberly</p>
                  <p className="text-xs text-copper font-medium mt-0.5">Blackstone Dispatch & Customer Care</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Live phone answer, emergency call routing, parts coordination, and continuous homeowner updates.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-copper" />
                  <span className="font-semibold text-foreground">Virginia Class A License #2705096538</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-copper" />
                  <span className="font-semibold text-foreground">24/7 Emergency Dispatch</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center gap-2 font-bold text-copper hover:underline">
                  Read our full company story and qualifications <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------- Customer Reviews ----------------- */}
      <section className="bg-secondary py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Customer stories"
            title="The call people are glad they made."
            intro={`Rated ${SITE.rating} from ${SITE.reviewCount}+ local customers across Blackstone, Farmville, Crewe, and Victoria.`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {REVIEWS.slice(0, 3).map((review) => (
              <article key={review.name} className="lux-card flex flex-col justify-between p-7">
                <div>
                  <div className="flex gap-1 text-copper">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">“{review.text}”</p>
                </div>
                <div className="mt-6 border-t border-hairline pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.city} · {review.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/reviews" className="inline-flex items-center gap-2 font-bold text-copper hover:underline">
              Read more verified customer reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- Structured Service-Area Navigation ----------------- */}
      <section className="py-24 border-t border-hairline">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Logical service area navigation"
            title="Serving Southside Virginia From 111 N Main St in Blackstone."
            intro="Explore our active service coverage across Nottoway, Prince Edward, Lunenburg, Amelia, and Dinwiddie counties. Every town receives direct dispatch with zero travel surcharges."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="lux-card flex flex-col justify-between p-6 transition-all hover:border-copper/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {loc.name}, VA
                    </h3>
                    <span className="text-[11px] font-semibold text-copper uppercase tracking-wider">
                      {loc.county.replace(" County", "")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{loc.drive}</p>

                  {/* High-Intent Service Shortcuts for Crawlers & Users */}
                  <div className="mt-5 space-y-2 border-t border-hairline pt-4 text-xs font-medium">
                    <Link
                      to="/$slug"
                      params={{ slug: `ac-repair-${loc.slug}` }}
                      className="block text-muted-foreground hover:text-copper transition-colors"
                    >
                      • AC Repair in {loc.name}
                    </Link>
                    <Link
                      to="/$slug"
                      params={{ slug: `heat-pump-installation-${loc.slug}` }}
                      className="block text-muted-foreground hover:text-copper transition-colors"
                    >
                      • Heat Pump Service in {loc.name}
                    </Link>
                    <Link
                      to="/$slug"
                      params={{ slug: `plumbing-repair-${loc.slug}` }}
                      className="block text-muted-foreground hover:text-copper transition-colors"
                    >
                      • Plumbing Repair in {loc.name}
                    </Link>
                    <Link
                      to="/$slug"
                      params={{ slug: `water-heater-services-${loc.slug}` }}
                      className="block text-muted-foreground hover:text-copper transition-colors"
                    >
                      • Water Heaters in {loc.name}
                    </Link>
                  </div>
                </div>

                <div className="mt-6 border-t border-hairline pt-4">
                  <Link
                    to="/$slug"
                    params={{ slug: `hvac-repair-${loc.slug}` }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-copper hover:underline"
                  >
                    All {loc.name} Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Bottom CTA Band ----------------- */}
      <CtaBand
        title="Your system should work. Let's make sure it does."
        body="Call our Blackstone team now at (434) 206-8795 for prompt HVAC, plumbing, or gas service anywhere in our Southside Virginia coverage area."
      />
    </>
  );
}
