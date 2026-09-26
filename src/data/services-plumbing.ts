import type { Service } from "./types";

export const PLUMBING_SERVICES: Service[] = [
  {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    short: "Licensed repairs for leaks, fixtures, valves and supply lines.",
    category: "plumbing",
    image: "svc-plumbing-repair",
    imageAlt: "Licensed plumber repairing a supply line and shutoff valve under a sink",
    tagline: "Fixed properly, tested under pressure, cleaned up behind us.",
    major: true,
    intro: [
      "Plumbing problems escalate quietly. A dripping angle stop becomes a swollen cabinet base. A running toilet flapper adds thousands of gallons to a quarterly bill. A weeping fitting inside a wall becomes a drywall and flooring claim. Our plumbing repair work is built around finding the actual failure point, repairing to code, and then pressure testing so you know the fix held before we pack the truck.",
      "We work on the full range of materials found in Southside Virginia homes — copper, CPVC, PEX, galvanized steel and the polybutylene still hiding in houses built in the late seventies through mid nineties. Each material fails differently and each requires the right transition fittings, which is where amateur repairs typically go wrong.",
    ],
    sections: [
      {
        h: "Repairs We Handle Daily",
        p: "Dripping and seized shutoff valves, leaking supply lines and P-traps, failed toilet fill and flush valves, running or rocking toilets, leaking tub and shower valves and cartridges, garbage disposal replacement, hose bib and frost-free sillcock repairs, pressure-reducing valve replacement, water hammer arrestors, and repiping failing sections of galvanized or polybutylene.",
      },
      {
        h: "Water Pressure Problems",
        p: "Both high and low water pressure damage plumbing systems. Pressure above 80 PSI stresses every fitting, appliance and water heater in the house and voids many appliance warranties. Low pressure usually traces to a failing pressure-reducing valve, mineral-scaled galvanized piping, or a well system issue. We measure static and flowing pressure at multiple points rather than guessing.",
      },
      {
        h: "Well and Rural Systems",
        p: "Much of our service area is on private wells and septic. We service pressure tanks, pressure switches, expansion control, whole-house filtration and water softening, and we understand how well systems interact with tankless water heaters and high-demand fixtures. Rural plumbing is not the same as municipal plumbing, and it should not be treated the same.",
      },
    ],
    benefits: [
      "Licensed and insured Virginia plumbers on every call",
      "Repairs pressure tested before we leave the property",
      "Copper, PEX, CPVC, galvanized and polybutylene experience",
      "Upfront flat-rate pricing quoted before work begins",
      "Well, septic and municipal systems all serviced",
    ],
    signs: [
      "Water stains on ceilings, walls or cabinet floors",
      "A water bill that jumped with no change in usage",
      "Reduced pressure at one or more fixtures",
      "Knocking or banging pipes when a valve closes",
    ],
    faqs: [
      {
        q: "How do I find my main water shutoff?",
        a: "In municipal homes it is usually near the meter at the street or where the line enters the house, often in a crawlspace. On wells, look near the pressure tank. We will locate and label it for you during any service call — worth doing before you need it.",
      },
      {
        q: "Should I repair or repipe polybutylene?",
        a: "Polybutylene fails from the inside out, so a repair at one point does not indicate health elsewhere in the system. If you are seeing repeated failures, whole-home repiping in PEX is typically the sound financial decision.",
      },
      {
        q: "Do you charge for estimates?",
        a: "Repair estimates come with a flat diagnostic fee that is credited if you approve the work. Replacement and repipe estimates are free.",
      },
      {
        q: "Can you work on well systems?",
        a: "Yes. Pressure tanks, switches, filtration and softening are routine work for us throughout rural Nottoway, Amelia and Dinwiddie counties.",
      },
    ],
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Services",
    short: "Restore hot water fast — gas, electric, tank and tankless.",
    category: "plumbing",
    image: "svc-water-heater",
    imageAlt: "Plumber testing the heating element and thermostat on a residential water heater",
    tagline: "Diagnosed correctly before anyone talks about replacement.",
    major: true,
    intro: [
      "Losing hot water is disruptive, but it is not automatically a replacement. Many failures are inexpensive parts: a heating element, thermostat, thermocouple, gas control valve, or an igniter. Our first job is determining whether your heater is repairable and worth repairing, rather than defaulting to selling a new unit.",
      "Tank age and condition drive that decision. A six-year-old tank with a failed element is worth repairing. A twelve-year-old tank with sediment scaling, a spent anode rod and rust at the fittings is on borrowed time regardless of what we replace today, and we will say so directly.",
    ],
    sections: [
      {
        h: "Electric Water Heater Repairs",
        p: "Failed upper or lower heating elements, thermostats out of calibration, tripped high-limit ECO switches, loose or burned wiring at the terminal block, and heavy sediment insulating the lower element from the water. Symptoms map fairly reliably: no hot water at all usually points to the upper element or ECO, while running out quickly usually points to the lower element or sediment.",
      },
      {
        h: "Gas Water Heater Repairs",
        p: "Pilot assemblies and thermocouples, gas control valves, failed igniters on electronic models, blocked flue or draft hood problems, and sediment causing the rumbling and popping sounds most homeowners recognize. We always check draft and combustion on gas units, because a heater that will not stay lit is sometimes telling you the venting is compromised.",
      },
      {
        h: "Tankless Service",
        p: "Tankless units need descaling on a regular schedule, especially on well water. Common issues are scaled heat exchangers reducing output, clogged inlet filters, flame rod fouling, error codes from venting restriction, and undersized gas supply lines that cannot feed the burner at full fire. We descale, clean and correct gas sizing rather than treating error codes as a death sentence.",
      },
    ],
    benefits: [
      "Repair-first approach with honest end-of-life assessment",
      "Gas, electric, tankless and hybrid heat pump units serviced",
      "Same-day availability on most no-hot-water calls",
      "Tank flushing and anode rod service to extend life",
      "Temperature and pressure relief safety verified every visit",
    ],
    signs: [
      "No hot water or hot water that runs out unusually fast",
      "Rumbling, popping or banging from the tank",
      "Rusty or discolored hot water",
      "Water pooling around the base of the heater",
    ],
    faqs: [
      {
        q: "My water heater is leaking. Can it be repaired?",
        a: "It depends where. Leaks at fittings, valves and the T&P line are repairable. A leak from the tank body itself means the inner liner has corroded through and replacement is the only option.",
      },
      {
        q: "How long should a water heater last?",
        a: "Eight to twelve years for a standard tank in our water conditions, and fifteen to twenty for a maintained tankless unit. Annual flushing and anode replacement meaningfully extend tank life.",
      },
      {
        q: "Why does my hot water run out faster than it used to?",
        a: "Usually sediment accumulation reducing effective tank volume, or a failed lower heating element on electric units. Both are diagnosable in one visit.",
      },
      {
        q: "Do you service hybrid heat pump water heaters?",
        a: "Yes, including compressor, evaporator, condensate and control diagnostics as well as the conventional element and thermostat components.",
      },
    ],
  },
  {
    slug: "drain-and-sewer",
    name: "Drain & Sewer Services",
    short: "Cabled, hydro-jetted and camera-verified drain clearing.",
    category: "plumbing",
    image: "svc-drain",
    imageAlt: "Plumber feeding a motorized drain cable into a residential sewer cleanout",
    tagline: "Cleared, then inspected — so you know why it clogged.",
    major: true,
    intro: [
      "Anyone can push a cable down a drain and get water moving again. The question that matters is why it clogged, and whether it will clog again in six weeks. Every drain cleaning we perform ends with an assessment of the cause: grease accumulation, root intrusion, a bellied section holding water, scale buildup in old cast iron, or a foreign object.",
      "We clear kitchen and bathroom drains, tubs and showers, laundry standpipes, floor drains, main sewer lines and commercial grease-laden lines. Where warranted, camera inspection turns guesswork into a documented finding you can act on.",
    ],
    sections: [
      {
        h: "Cabling vs Hydro Jetting",
        p: "Cabling punches a hole through a blockage and is fast, effective and appropriate for most household clogs. Hydro jetting uses high-pressure water to scour the full inside diameter of the pipe, removing grease and scale that a cable passes straight through. Kitchen lines and commercial drains almost always need jetting for a lasting result — cabling a grease line simply drills a temporary channel through it.",
      },
      {
        h: "Root Intrusion",
        p: "Mature trees across our service area send roots toward the moisture and nutrients in sewer lines, entering at joints in older clay and cast iron pipe. We cut roots mechanically, camera the line to assess joint condition, and then discuss options honestly: a maintenance cutting schedule, spot repair at the affected joint, or lining and replacement when the pipe is failing.",
      },
      {
        h: "Preventing the Next Clog",
        p: "Grease belongs in the trash, not the drain, even with hot water chasing it. So-called flushable wipes are the single largest cause of main line blockages we encounter. Enzyme treatments maintain a healthy line; caustic store-bought chemicals damage pipes and create a hazard for the next person to open the drain. We give practical guidance based on what we found in your specific line.",
      },
    ],
    benefits: [
      "Cabling and high-pressure hydro jetting both available",
      "Camera inspection to identify the underlying cause",
      "Main line, kitchen, laundry and commercial drains",
      "Root cutting with a documented condition assessment",
      "Written findings with recommendations, not vague advice",
    ],
    signs: [
      "Multiple fixtures draining slowly at the same time",
      "Gurgling from a toilet when the tub drains",
      "Recurring clogs in the same fixture",
      "Sewage odor near drains or in the yard",
    ],
    faqs: [
      {
        q: "Are chemical drain cleaners safe to use?",
        a: "We advise against them. They can damage older pipe, rarely clear a full blockage, and create a caustic hazard for anyone who opens the line afterward. Mechanical clearing is safer and far more effective.",
      },
      {
        q: "How often should main lines be cleaned?",
        a: "Homes with mature trees or older clay sewer lines often benefit from annual preventative cleaning. Homes with modern PVC and no root pressure generally need it only when a problem appears.",
      },
      {
        q: "Do you camera the line as part of the service?",
        a: "Camera inspection is included on main line and recurring clog calls, and available on request for any drain. You see the footage yourself.",
      },
      {
        q: "Can hydro jetting damage my pipes?",
        a: "Not when properly applied. We camera first on older lines to confirm the pipe is sound and select the correct pressure and nozzle for the material.",
      },
    ],
  },
];
