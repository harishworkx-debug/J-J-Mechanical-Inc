import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { CtaBand } from "@/components/site/Chrome";

const TITLES: Record<string,string> = {
  "heat-pump-not-heating": "Why Your Heat Pump Is Not Heating Properly",
  "ac-repair-or-replace": "Should You Repair or Replace Your Air Conditioner?",
  "water-heater-warning-signs": "Seven Warning Signs Your Water Heater Needs Service",
  "prevent-frozen-pipes": "How Southside Virginia Homeowners Can Prevent Frozen Pipes",
  "hvac-maintenance-guide": "The Complete HVAC Maintenance Guide for Virginia Homes",
};

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ params }) => { const title = TITLES[params.postSlug] ?? "Home Comfort Advice"; return { meta: [
    { title: `${title} | J&J Mechanical` }, { name: "description", content: `${title}: practical guidance from J&J Mechanical in Blackstone, Virginia.` },
    { property: "og:title", content: title }, { property: "og:description", content: "Practical HVAC and plumbing guidance from local professionals." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ]}; }, component: BlogPostPage,
});

function BlogPostPage() { const { postSlug } = Route.useParams(); const title = TITLES[postSlug] ?? "Home Comfort Advice"; return <><article className="py-20"><div className="container-lux max-w-3xl"><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-copper"><ArrowLeft className="h-4 w-4" />All articles</Link><p className="mt-12 eyebrow text-copper">Expert advice</p><h1 className="mt-4 text-4xl leading-tight font-semibold sm:text-6xl">{title}</h1><p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" />8 minute read</p><div className="prose-lux mt-12"><p>Mechanical problems rarely appear without warning. Changes in sound, runtime, temperature, pressure or utility cost are your system's way of showing that performance has shifted. Paying attention early usually means a smaller repair and less disruption.</p><h2>Start with the basics</h2><p>Check thermostat settings, filters, breakers and visible shutoff valves before scheduling service. Never bypass a safety switch, open sealed refrigerant components or attempt gas work yourself. If you smell gas, leave the property, call the utility emergency line and then contact a licensed professional.</p><h2>Why measured diagnosis matters</h2><p>A symptom can have several causes. Low airflow may come from a filter, coil, blower or duct restriction. Lukewarm water may involve an element, thermostat, mixing valve or scale buildup. A professional should test the complete system before recommending parts.</p><h2>When to call J&amp;J Mechanical</h2><p>Call promptly when equipment repeatedly trips a breaker, produces burning odors, leaks water, short cycles or cannot maintain a safe indoor temperature. Our technicians document readings, explain repair-versus-replace choices and quote the work before beginning.</p></div></div></article><CtaBand title="Need help with a problem in your home?" body="Call our local team for a complete diagnosis and clear options." /></>; }