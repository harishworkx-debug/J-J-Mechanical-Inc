import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { CallButton, Eyebrow } from "@/components/site/Chrome";
import { SITE } from "@/data/site";
import { LOCATIONS } from "@/data/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Dispatch | J&J Mechanical | Call (434) 206-8795" },
      {
        name: "description",
        content:
          "Contact J&J Mechanical for fast HVAC, plumbing, and gas dispatch in Blackstone, Farmville, Crewe, and Southside Virginia. 24/7 emergency service available.",
      },
      { property: "og:title", content: "Contact & Dispatch | J&J Mechanical" },
      {
        property: "og:description",
        content:
          "Need emergency heating, AC, or plumbing service? Call our Blackstone dispatch or submit an online request for fast local response.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    town: "Blackstone",
    service: "hvac-repair",
    urgency: "standard",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const details = [
    {
      icon: Phone,
      label: "Direct Dispatch Line",
      value: SITE.phone,
      subtext: "24/7 live local answer",
      href: SITE.phoneHref,
    },
    {
      icon: Mail,
      label: "Service Email",
      value: SITE.email,
      subtext: "Non-urgent inquiries & estimates",
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <>
      <section className="surface-ink py-20">
        <div className="container-lux max-w-4xl">
          <Eyebrow>Direct Dispatch & Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink-foreground sm:text-6xl">
            Fast Response From Technicians Who Know Southside Virginia.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/80">
            Based right at 111 N Main St in Blackstone. Whether you are dealing with a frozen
            heat pump, a burst pipe, or planning a replacement, we respond promptly with
            fully equipped service trucks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CallButton label="Call Dispatch: (434) 206-8795" />
            <a
              href="#request-form"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Request Service Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-20" id="request-form">
        <div className="container-lux grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Service Request Form */}
          <div className="lux-card p-8 sm:p-10">
            <div className="border-b border-hairline pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-copper">
                Dispatch Request
              </span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Schedule Service or Request an Estimate
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submit this form and our Blackstone office coordinator will contact you to confirm
                your appointment window and dispatch details.
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Service Request Received!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you, <span className="font-semibold text-foreground">{formData.name}</span>.
                  A Blackstone dispatch coordinator will call you at{" "}
                  <span className="font-semibold text-foreground">{formData.phone}</span> shortly
                  to confirm your service window in {formData.town}.
                </p>
                <div className="mt-6 border-t border-hairline pt-4 text-xs text-muted-foreground">
                  Need immediate 24/7 emergency dispatch? Call{" "}
                  <a href={SITE.phoneHref} className="font-bold text-copper underline">
                    {SITE.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      town: "Blackstone",
                      service: "hvac-repair",
                      urgency: "standard",
                      message: "",
                    });
                  }}
                  className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>Please provide at least your full name and contact phone number.</span>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm focus:border-copper focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(434) 555-0192"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Town / Location *
                    </label>
                    <select
                      value={formData.town}
                      onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm focus:border-copper focus:outline-none"
                    >
                      {LOCATIONS.map((town) => (
                        <option key={town.slug} value={town.name}>
                          {town.name}, VA ({town.county})
                        </option>
                      ))}
                      <option value="Other Southside VA">Other Southside VA Community</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm focus:border-copper focus:outline-none"
                    >
                      <option value="hvac-repair">HVAC / Heating / AC Repair</option>
                      <option value="heat-pump">Heat Pump Replacement / Install</option>
                      <option value="ac-service">A/C Diagnostic & Tune-up</option>
                      <option value="furnace-heating">Furnace / Boiler Heating Repair</option>
                      <option value="plumbing-repair">Plumbing Leak / Pipe Repair</option>
                      <option value="water-heater">Water Heater (Tank or Tankless)</option>
                      <option value="drain-sewer">Drain Clearing & Sewer Line</option>
                      <option value="gas-piping">Gas Line Piping & Appliance Hookup</option>
                      <option value="commercial">Commercial Mechanical Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Urgency Level
                  </label>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {[
                      { id: "emergency", label: "Urgent (Today / ASAP)" },
                      { id: "standard", label: "Standard (Next 1-2 Days)" },
                      { id: "estimate", label: "Planning / Quote" },
                    ].map((level) => (
                      <button
                        key={level.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: level.id })}
                        className={`rounded-xl border p-3 text-center text-xs font-semibold transition ${
                          formData.urgency === level.id
                            ? "border-copper bg-copper/10 text-foreground"
                            : "border-hairline bg-background text-muted-foreground hover:border-hairline-strong"
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Issue Description or Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue (e.g., heat pump blowing lukewarm air, water heater leaking at base, smelling gas, strange noises)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-sm focus:border-copper focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-copper px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-copper-glow disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {status === "submitting" ? "Transmitting to Dispatch..." : "Send Dispatch Request"}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  🔒 We respect your privacy. Your information is never sold or shared.
                </p>
              </form>
            )}
          </div>

          {/* Contact Details & Office Location */}
          <div className="space-y-8">
            <div className="grid gap-4">
              {details.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="lux-card flex items-center gap-5 p-6 transition hover:border-copper/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-copper">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-muted-foreground uppercase">
                      {item.label}
                    </span>
                    <span className="text-lg font-bold text-foreground">{item.value}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{item.subtext}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="lux-card p-6 space-y-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-copper" />
                Physical Shop & Dispatch Hub
              </h3>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-copper" />
                  <span>
                    <strong className="text-foreground">J&J Mechanical LLC</strong>
                    <br />
                    {SITE.street}
                    <br />
                    {SITE.city}, {SITE.state} {SITE.zip}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-copper" />
                  <span>
                    <strong className="text-foreground">Standard Hours:</strong> {SITE.hours}
                    <br />
                    <strong className="text-foreground">Emergency Service:</strong> 24 Hours / 7 Days a Week
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-background/50 p-4 text-xs text-muted-foreground">
                <strong className="text-foreground">Virginia License:</strong> Class A Contractor #2705096538
                <br />
                Classifications: Master HVAC (HVA), Master Plumbing (PLB), Master Gas Fitting (GFC)
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-hairline shadow-sm">
              <iframe
                src={SITE.mapEmbed}
                title="J&J Mechanical location in Blackstone Virginia"
                loading="lazy"
                className="h-[320px] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

