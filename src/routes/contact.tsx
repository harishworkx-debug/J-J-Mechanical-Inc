import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CallButton, Eyebrow } from "@/components/site/Chrome";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact J&J Mechanical | Call 24/7" },
    { name: "description", content: "Call J&J Mechanical for HVAC, plumbing and gas service in Blackstone and Southside Virginia." },
    { property: "og:title", content: "Contact J&J Mechanical" },
    { property: "og:description", content: "Request HVAC, plumbing or gas service from our local Blackstone team." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() { const details = [{icon: Phone,label:"Phone",value:SITE.phone,href:SITE.phoneHref},{icon:Mail,label:"Email",value:SITE.email,href:`mailto:${SITE.email}`}]; return <><section className="surface-ink py-24"><div className="container-lux max-w-4xl"><Eyebrow>Contact & dispatch</Eyebrow><h1 className="mt-4 text-4xl font-semibold text-ink-foreground sm:text-6xl">Tell us what is not working. We will take it from here.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/70">For the fastest response, call our Blackstone dispatch team. Emergency service is available around the clock.</p><div className="mt-9 flex flex-wrap gap-3"><CallButton label="Call Dispatch" /></div></div></section><section className="py-24"><div className="container-lux grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><div className="grid gap-4">{details.map((item)=><a key={item.label} href={item.href} className="lux-card flex items-center gap-4 p-5"><span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-copper"><item.icon className="h-5 w-5" /></span><span><span className="block text-xs font-bold text-muted-foreground uppercase">{item.label}</span><span className="font-semibold">{item.value}</span></span></a>)}</div><div className="mt-8 space-y-4 border-t border-hairline pt-7 text-sm text-muted-foreground"><p className="flex gap-3"><MapPin className="h-5 w-5 text-copper" />{SITE.street}, {SITE.city}, {SITE.state} {SITE.zip}</p><p className="flex gap-3"><Clock className="h-5 w-5 text-copper" />{SITE.hours}<br />{SITE.emergency}</p></div></div><div className="overflow-hidden rounded-2xl border border-hairline"><iframe src={SITE.mapEmbed} title="J&J Mechanical location in Blackstone Virginia" loading="lazy" className="h-[500px] w-full" referrerPolicy="no-referrer-when-downgrade" /></div></div></section></>; }