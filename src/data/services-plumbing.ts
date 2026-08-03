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
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    short: "Burst pipes, major leaks and sewage backups — answered 24/7.",
    category: "plumbing",
    image: "svc-emergency-plumbing",
    imageAlt: "Emergency plumber repairing a burst pipe under a sink at night with a headlamp",
    tagline: "Water damage compounds by the minute. So do we.",
    major: true,
    intro: [
      "A burst supply line can release hundreds of gallons an hour. In the time it takes to find a phone number, water reaches subfloor, insulation and drywall, and remediation costs begin to dwarf the plumbing repair itself. Our emergency plumbing line is answered by a person 24 hours a day, and the first thing they will do is help you stop the water.",
      "We respond to burst and frozen pipes, water heater ruptures, sewage backups, overflowing toilets, failed sump pumps, and supply line failures behind washing machines and dishwashers throughout Blackstone, Crewe, Farmville, Victoria, Burkeville, Amelia and Dinwiddie.",
    ],
    sections: [
      {
        h: "Before We Arrive: Stop the Water",
        p: "Shut the main valve — usually at the meter, in the crawlspace where the line enters, or near the pressure tank on a well. Then open the lowest faucet in the house to drain remaining pressure. For a water heater leak, close the cold inlet valve above the tank and shut off gas or the electrical breaker. For a sewage backup, stop using every drain and fixture in the building immediately.",
      },
      {
        h: "Frozen and Burst Pipes",
        p: "Southside Virginia cold snaps regularly freeze uninsulated crawlspace runs, exterior wall piping and hose bibs left connected in fall. We thaw safely without open flame, repair or replace the failed section, then address the cause: insulation, heat tape, rerouting the run or correcting the crawlspace ventilation that let it freeze. Repairing the pipe without fixing the exposure means you call us again next January.",
      },
      {
        h: "Sewage Backups",
        p: "Sewage entering a home is a health hazard, not a convenience issue. We clear the blockage, camera the line to identify whether it was grease, roots, a collapse or a bellied section, and give you a written finding. If a septic system is at fault we tell you plainly rather than repeatedly clearing a line that will back up again next month.",
      },
    ],
    benefits: [
      "Live 24/7 emergency dispatch, holidays included",
      "Phone guidance to shut off water before we arrive",
      "Water heater, supply line and sewer emergencies all covered",
      "Camera inspection included on backup calls",
      "After-hours rate quoted before dispatch — no surprises",
    ],
    signs: [
      "Water actively running where it should not be",
      "No water at any fixture in the house",
      "Sewage backing up into tubs, showers or floor drains",
      "Water heater leaking from the tank body",
    ],
    faqs: [
      {
        q: "What counts as a plumbing emergency?",
        a: "Anything actively causing water damage, any loss of water service to the whole home, any sewage entering living space, and any gas smell near a gas water heater. When in doubt, call — we will help you triage it on the phone.",
      },
      {
        q: "How fast can you get here?",
        a: "Our service area is compact and we typically arrive within one to two hours of dispatch, often faster within Blackstone and the immediate surrounding towns.",
      },
      {
        q: "Will my homeowners insurance cover this?",
        a: "Sudden and accidental water damage is frequently covered while long-term seepage usually is not. We document the failure with photos and provide a written cause-of-loss description to support your claim.",
      },
      {
        q: "Can you help with cleanup?",
        a: "We stop the source and remove standing water at the work area, and we coordinate with reputable local restoration companies for drying and remediation.",
      },
    ],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    short: "Electronic and acoustic leak location without tearing out your home.",
    category: "plumbing",
    image: "svc-leak-detection",
    imageAlt: "Plumber using electronic acoustic leak detection equipment on a residential floor",
    tagline: "Find it precisely. Open one small area, not the whole wall.",
    major: true,
    intro: [
      "The expensive part of a hidden leak is almost never the pipe repair — it is the demolition required to reach it. Guesswork costs homeowners thousands in unnecessary drywall, tile and flooring removal. Electronic leak detection reverses that equation: we locate the failure precisely, then open one targeted area and repair it.",
      "We are called for unexplained water bills, damp spots on slabs, warm floor areas that suggest a hot line leak, ceiling stains below bathrooms, mildew smells inside walls, and meters that keep spinning with every fixture closed. Each of those has a different detection approach.",
    ],
    sections: [
      {
        h: "The Technology We Use",
        p: "Acoustic listening equipment amplifies the sound of pressurized water escaping a pipe, which we trace through slab, soil and wall cavity. Thermal imaging reveals temperature anomalies from hot-line leaks and saturated building materials. Tracer gas testing pinpoints leaks in lines that cannot be heard. Pressure isolation testing tells us which zone the leak is in before we start listening, cutting search time dramatically.",
      },
      {
        h: "Slab Leaks",
        p: "Homes on slab foundations here occasionally develop leaks in supply lines running through or beneath the concrete. Warning signs are a warm spot on the floor, unexplained water usage, the sound of running water with everything off, or hairline cracking. Once located, options include a targeted slab break and repair, or rerouting the line overhead to abandon the failed run — we quote both.",
      },
      {
        h: "Documentation for Insurance",
        p: "We photograph findings, log meter readings before and after isolation testing, and provide a written report describing the failure and its cause. Insurers frequently require that documentation to distinguish a covered sudden failure from excluded long-term seepage, and having it prepared properly makes a real difference to claims.",
      },
    ],
    benefits: [
      "Non-invasive acoustic, thermal and tracer gas detection",
      "Slab, wall, ceiling and underground leaks located",
      "Repair performed by the same licensed team that found it",
      "Written report with photos for insurance claims",
      "Minimal demolition — one targeted opening, not exploratory holes",
    ],
    signs: [
      "Water bill increased sharply without a usage change",
      "Sound of running water when everything is off",
      "Warm or damp spot on a floor slab",
      "Musty smell or peeling paint with no visible source",
    ],
    faqs: [
      {
        q: "How can I confirm I have a hidden leak?",
        a: "Turn off every fixture and appliance, then watch the water meter's low-flow indicator for fifteen minutes. Any movement means water is escaping somewhere in the system.",
      },
      {
        q: "How long does leak detection take?",
        a: "Most residential detections take one to three hours depending on home size and access. We isolate zones first to narrow the search area before detailed listening.",
      },
      {
        q: "Do you repair the leak once you find it?",
        a: "Yes. We are a full plumbing contractor, not a detection-only service, so the same visit typically covers location and repair.",
      },
      {
        q: "Can you detect leaks in an irrigation or underground service line?",
        a: "Yes. Underground supply and irrigation leaks are located with acoustic equipment and correlators, and we can repair or replace the failed run.",
      },
    ],
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    short: "Repairs and repiping for copper, PEX, CPVC, galvanized and poly.",
    category: "plumbing",
    image: "svc-pipe-repair",
    imageAlt: "Plumber soldering a copper pipe repair in a crawlspace",
    tagline: "Repair the section, or replace the system — with straight advice on which.",
    intro: [
      "Pipes fail for predictable reasons: copper thins from acidic water or erosion at fittings, galvanized steel scales shut from the inside, CPVC becomes brittle with age and UV exposure, and polybutylene degrades from chlorinated water regardless of installation quality. Knowing which failure mode you are dealing with determines whether a spot repair is sound or a false economy.",
      "We repair the immediate failure and then give you an honest assessment of the rest of the system. If your copper is pitting throughout, we say so. If a single fitting failed on an otherwise healthy system, we say that too and charge you for a repair rather than selling a repipe.",
    ],
    sections: [
      {
        h: "Spot Repairs",
        p: "Pinhole leaks, split sections from freezing, failed solder joints, cracked fittings, corroded transitions between dissimilar metals, and damaged crawlspace runs. We cut back to sound material, use proper dielectric transitions where metals meet, support the repair correctly, and pressure test before closing anything up.",
      },
      {
        h: "Whole-Home Repiping",
        p: "When failures become recurring, repiping in PEX-A or copper ends the cycle. A typical Southside home takes three to five days. We plan runs to minimize wall openings, install a manifold or trunk-and-branch layout with accessible shutoffs, replace angle stops and supply lines at every fixture, and coordinate drywall repair. Water pressure and flow are usually noticeably better afterward.",
      },
      {
        h: "Freeze Protection",
        p: "After any freeze-related repair we address the exposure that caused it: insulating crawlspace runs, sealing foundation vents and access doors in winter, installing heat tape where routing cannot change, replacing hose bibs with frost-free sillcocks, and relocating vulnerable lines out of exterior walls where practical.",
      },
    ],
    benefits: [
      "Honest repair-versus-repipe assessment with both prices",
      "Proper dielectric transitions between dissimilar metals",
      "PEX-A and copper repiping with accessible shutoffs",
      "Freeze exposure corrected, not just the split pipe",
      "Every repair pressure tested before closing walls",
    ],
    signs: [
      "Repeated pinhole leaks in the same area",
      "Discolored or rusty water at multiple fixtures",
      "Steadily declining water pressure over years",
      "Home built between 1978 and 1995 with polybutylene",
    ],
    faqs: [
      {
        q: "How do I know if I have polybutylene?",
        a: "It is usually gray, sometimes blue or black, flexible, and stamped PB2110. It was installed widely from the late seventies into the mid nineties. We can identify it in minutes during any service visit.",
      },
      {
        q: "Is PEX as good as copper?",
        a: "For residential water distribution, PEX-A performs excellently: it resists freeze damage far better than rigid pipe, has fewer joints, and is not vulnerable to the pitting corrosion that affects copper in acidic water.",
      },
      {
        q: "How much wall damage does repiping cause?",
        a: "Less than most people expect. We plan routes through attics, crawlspaces and closets, and typical openings are small and strategically placed. We coordinate patching and finishing.",
      },
      {
        q: "Can you repair a pipe inside a concrete slab?",
        a: "Yes, either by breaking and repairing at the located point or by rerouting the line overhead to abandon the slab run. We quote both approaches so you can weigh cost against disruption.",
      },
    ],
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    short: "Restore hot water fast — gas, electric, tank and tankless.",
    category: "plumbing",
    image: "svc-water-heater-repair",
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
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    short: "Code-correct tank water heater replacement, usually same day.",
    category: "plumbing",
    image: "svc-water-heater",
    imageAlt: "Plumber installing a new water heater with copper connections in a garage",
    tagline: "Sized to your household, installed to current code.",
    major: true,
    intro: [
      "Water heater replacement is one of the most common jobs we do, and one where cutting corners is easiest to hide. A code-correct installation includes proper T&P discharge piping, an expansion tank where the system is closed, correct venting and combustion air on gas units, a drain pan with a routed discharge where a leak could cause damage, dielectric unions, isolation valves and correct seismic or structural support.",
      "We also size the unit to your household rather than replacing like for like out of habit. A family of five with two teenagers is poorly served by the same 40-gallon tank the original builder installed for a couple.",
    ],
    sections: [
      {
        h: "Choosing Capacity and Fuel",
        p: "First-hour rating matters more than raw tank size. A 50-gallon gas unit with a high recovery rate serves a busy household better than a 50-gallon electric with slow recovery. Where natural gas or propane is available, gas usually costs less to operate. Hybrid heat pump water heaters cut electric operating cost dramatically but need adequate air volume and produce cool exhaust air, which suits a garage or basement better than a small closet.",
      },
      {
        h: "The Code Details That Matter",
        p: "Expansion tanks are required where a check valve or pressure-reducing valve creates a closed system — without one, thermal expansion drives pressure spikes that shorten the life of every fixture in the house. T&P relief lines must terminate correctly. Gas units require proper draft and combustion air. Pans and drains protect finished spaces. We do all of it as standard, not as add-ons.",
      },
      {
        h: "Installation Day",
        p: "We protect the path from door to installation location, drain and remove the old unit, correct any code deficiencies we find, set and connect the new heater, fill and purge the lines, verify temperature at fixtures, test T&P and draft, and haul the old tank away. Most standard replacements are complete in two to four hours.",
      },
    ],
    benefits: [
      "Same-day replacement available on most standard installations",
      "Expansion tank, pan, T&P and venting done to current code",
      "Right-sized by first-hour rating, not by habit",
      "Old unit removed and recycled at no extra charge",
      "Manufacturer warranty registered on your behalf",
    ],
    signs: [
      "Heater is more than 10 years old",
      "Rust colored hot water or corrosion at the fittings",
      "Water pooling under the tank",
      "Household has grown and hot water runs short",
    ],
    faqs: [
      {
        q: "How quickly can you replace a failed water heater?",
        a: "Usually the same day. We stock common sizes in gas and electric so most households have hot water back within hours of calling.",
      },
      {
        q: "Do I need an expansion tank?",
        a: "If your system has a pressure-reducing valve or backflow preventer, yes — it is code-required and it protects your entire plumbing system from thermal pressure spikes.",
      },
      {
        q: "Should I switch from electric to gas?",
        a: "If gas service or propane is already at the house, gas typically lowers operating cost and improves recovery. If not, running new gas service rarely pays back on a water heater alone — a hybrid heat pump unit is usually the better move.",
      },
      {
        q: "Is a permit required?",
        a: "In most jurisdictions in our area, yes. We pull permits and meet inspectors as part of the job.",
      },
    ],
  },
  {
    slug: "tankless-water-heater",
    name: "Tankless Water Heater",
    short: "Endless hot water, properly sized, gas-line verified.",
    category: "plumbing",
    image: "svc-tankless",
    imageAlt: "Modern stainless tankless water heater installed on a wall with copper piping",
    tagline: "Endless hot water — when it is engineered correctly.",
    intro: [
      "Tankless water heaters heat water on demand, eliminating standby losses and the finite tank that leaves the last person in line with a cold shower. Done properly they last fifteen to twenty years, twice the life of a typical tank. Done improperly — undersized gas line, wrong venting, no scale management — they underdeliver and error out, which is why they have a mixed reputation.",
      "The single most common failure in tankless installation is the gas supply. A tankless unit can demand 150,000 to 199,000 BTU at full fire, several times what the old tank used. If the existing gas line and meter cannot deliver that volume, the unit will never perform to spec no matter how good the equipment is. We calculate and verify gas capacity before we quote.",
    ],
    sections: [
      {
        h: "Correct Sizing for Our Groundwater",
        p: "Tankless capacity is measured in temperature rise at a given flow rate. Virginia groundwater arrives around 55 degrees in winter, so producing 120-degree water requires a 65-degree rise. We calculate your peak simultaneous demand — how many showers and fixtures actually run at once — and size for the winter case, not a manufacturer's optimistic summer rating.",
      },
      {
        h: "Installation Requirements",
        p: "Properly sized gas piping with verified pressure under load. Stainless or PVC venting per the manufacturer for condensing models. Condensate drainage with neutralization on condensing units. Isolation valves with service ports so descaling is straightforward. Adequate combustion air. On well water, we strongly recommend a scale filter or softener to protect the heat exchanger.",
      },
      {
        h: "Maintenance and Real Payback",
        p: "Tankless units need annual descaling — more often on hard well water. Skipping it is the number one cause of premature failure. Payback comes from eliminated standby losses and doubled equipment lifespan; for a high-usage household the economics are strong, while for a low-usage household the comfort benefit may matter more than the savings. We tell you which case you are in.",
      },
    ],
    benefits: [
      "Gas supply capacity calculated and verified before quoting",
      "Sized for winter groundwater temperature, not summer ratings",
      "Isolation valves installed for easy annual descaling",
      "Scale protection recommended for well-water homes",
      "Annual descaling service available on a scheduled plan",
    ],
    signs: [
      "Household regularly runs out of hot water",
      "You want to reclaim the floor space a tank occupies",
      "Existing tank is at end of life and you are considering an upgrade",
      "High hot water usage makes standby loss expensive",
    ],
    faqs: [
      {
        q: "Will a tankless unit work on my existing gas line?",
        a: "Sometimes, but frequently not without upsizing. We measure line size, length, and meter capacity and calculate available BTU before quoting. If an upgrade is needed, it is in the estimate rather than a surprise on install day.",
      },
      {
        q: "Is there really a cold water sandwich?",
        a: "There is a brief lag when hot water restarts after a short pause. Modern units with buffer tanks and recirculation options largely eliminate it, and we can configure a recirculation loop for instant hot water at distant fixtures.",
      },
      {
        q: "Do electric tankless units work well?",
        a: "For whole-home use in our climate, rarely — the electrical service required is substantial and often not present. They work well for point-of-use applications like a remote bathroom or shop sink.",
      },
      {
        q: "How often does a tankless heater need descaling?",
        a: "Annually on municipal water, and every six to nine months on hard well water. We offer scheduled descaling as part of our maintenance plans.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
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
  {
    slug: "sewer-line-repair",
    name: "Sewer Line Repair",
    short: "Camera-diagnosed sewer repair, replacement and root remediation.",
    category: "plumbing",
    image: "svc-sewer",
    imageAlt: "Sewer line excavation and repair in a residential yard with camera equipment",
    tagline: "See the pipe before you pay to dig it up.",
    intro: [
      "Sewer line failures are the most disruptive plumbing problem a property can have, and the most frequently misdiagnosed. Before anyone recommends excavation, the line should be camera inspected and the defect located and depth-marked. We will not quote a sewer replacement we have not seen on video, and neither should anyone else.",
      "Common failures in our area include root intrusion at clay pipe joints, cast iron that has scaled and channeled, bellied sections holding standing water and solids, offset joints from ground movement, and crushed sections under driveways and heavy equipment traffic.",
    ],
    sections: [
      {
        h: "Camera Inspection and Locating",
        p: "A self-leveling camera travels the line while a transmitting sonde lets us mark the exact surface location and depth of the defect. You see the footage. That precision is what allows a targeted four-foot excavation instead of trenching an entire yard, and it is what prevents paying for a full replacement when only one joint has failed.",
      },
      {
        h: "Repair Options",
        p: "Spot repair replaces the failed section — the least expensive option when the rest of the line is sound. Full replacement is appropriate when the pipe is failing along its length. Where conditions allow, trenchless methods such as pipe bursting replace the line with minimal surface disruption, protecting driveways, mature landscaping and hardscape. We explain the cost and disruption of each honestly.",
      },
      {
        h: "Septic Systems",
        p: "Many properties across Nottoway, Amelia and Dinwiddie counties are on septic. Repeated backups on a septic property are frequently a tank or drain field issue rather than a line defect. We camera the line to confirm before recommending any excavation, and we coordinate with licensed septic contractors when the system itself is the problem.",
      },
    ],
    benefits: [
      "Video inspection and surface locating before any digging",
      "Spot repair recommended when the rest of the line is sound",
      "Trenchless options where site conditions allow",
      "Excavation, backfill and site restoration handled",
      "Footage and written findings provided to you",
    ],
    signs: [
      "Repeated main line backups despite clearing",
      "Sewage smell in the yard or a persistently soggy patch",
      "Multiple drains slow at once across the house",
      "Unusually lush strip of grass along the sewer path",
    ],
    faqs: [
      {
        q: "How much does sewer line repair cost?",
        a: "Spot repairs are dramatically less expensive than full replacements. The camera inspection determines which you actually need, which is exactly why we never quote a replacement without seeing the line.",
      },
      {
        q: "Who owns the sewer line — me or the town?",
        a: "In most municipalities the property owner is responsible from the building to the connection at the main. We identify the boundary and coordinate with the utility when the defect is on their side.",
      },
      {
        q: "Can roots be removed without replacing the pipe?",
        a: "Yes, mechanical root cutting restores flow. Whether that is a lasting fix depends on joint condition, which the camera shows us. Sometimes annual cutting is the sensible economic choice for years.",
      },
      {
        q: "Will you restore my yard afterward?",
        a: "Yes. Excavation work includes proper backfill, compaction and surface restoration, and we discuss landscaping and hardscape restoration in the estimate up front.",
      },
    ],
  },
  {
    slug: "fixture-installation",
    name: "Fixture Installation",
    short: "Faucets, toilets, sinks, disposals and shower valves installed right.",
    category: "plumbing",
    image: "svc-fixture",
    imageAlt: "Plumber installing a new bathroom faucet and supply lines",
    tagline: "New fixtures, correct valves, no callbacks.",
    intro: [
      "Fixture installation looks simple until a corroded angle stop breaks off in your hand, the rough-in spacing does not match, or a supply line fitting weeps behind a cabinet for six months. Professional installation means the shutoffs are replaced while access is open, the connections are torqued correctly, and every joint is tested under pressure before we leave.",
      "We install fixtures customers buy themselves and fixtures we supply. Either way we check compatibility first — flow rates, rough-in dimensions, drain alignment and valve type — because the wrong purchase discovered mid-install costs everyone a trip.",
    ],
    sections: [
      {
        h: "What We Install",
        p: "Kitchen and bar faucets, bathroom lavatory faucets and vessel sinks, toilets and bidet seats, tub and shower valves and trim, rain heads and body sprays, garbage disposals, instant hot water dispensers, laundry sinks and boxes, water filtration and reverse osmosis systems, outdoor hose bibs and frost-free sillcocks.",
      },
      {
        h: "Valves and Shutoffs",
        p: "We replace old multi-turn angle stops with quarter-turn ball valves during any fixture installation. It is a small cost while access is already open, and it means the next repair — or the next emergency — starts with a valve that actually closes instead of one that snaps off in your hand.",
      },
      {
        h: "Accessibility and ADA Fixtures",
        p: "We install comfort-height toilets, grab bars anchored into solid blocking, handheld shower systems, lever-handle faucets and roll-under sink configurations. For homeowners planning to age in place or caring for a family member, small fixture changes made properly deliver a great deal of independence.",
      },
    ],
    benefits: [
      "Shutoff valves replaced with quarter-turn ball valves as standard",
      "Customer-supplied or contractor-supplied fixtures both welcome",
      "Compatibility verified before installation begins",
      "Every connection pressure tested before we leave",
      "Old fixtures removed and disposed of",
    ],
    signs: [
      "Fixtures that drip constantly despite repairs",
      "Corroded, stuck or leaking shutoff valves",
      "A remodel or accessibility upgrade in progress",
      "Mineral-clogged aerators and low flow at one fixture",
    ],
    faqs: [
      {
        q: "Can I supply my own fixtures?",
        a: "Absolutely. Send us the model numbers ahead of time and we will confirm rough-in compatibility before the appointment so nothing derails install day.",
      },
      {
        q: "How long does a faucet or toilet installation take?",
        a: "Typically 45 to 90 minutes each, longer if corroded valves or damaged flanges need replacement — which we will confirm and price before proceeding.",
      },
      {
        q: "Do you warranty fixtures you install?",
        a: "We warranty our labor. Fixtures we supply carry the manufacturer's warranty and we handle those claims for you. Customer-supplied fixtures carry whatever warranty came with them.",
      },
      {
        q: "Can you replace a shower valve without opening the wall?",
        a: "Sometimes, if the existing valve body accepts a compatible cartridge and trim. If the body must be replaced, access is required — and we work with your contractor or arrange the patch.",
      },
    ],
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    short: "Remodel rough-in, relocations and full bathroom plumbing service.",
    category: "plumbing",
    image: "svc-bathroom",
    imageAlt: "Newly renovated bathroom with professionally installed plumbing fixtures",
    tagline: "The plumbing behind a beautiful bathroom.",
    intro: [
      "Bathroom plumbing is the part of a renovation nobody sees and everybody feels. Drain slope, vent configuration, valve depth, blocking for grab bars and fixture placement all get locked in at rough-in, and correcting them after tile is set is expensive and ugly. We work alongside homeowners and remodelers to get the rough-in right the first time.",
      "We handle full bathroom plumbing from a single fixture swap to a complete gut renovation or an added bathroom, including permits and inspections in every jurisdiction we serve.",
    ],
    sections: [
      {
        h: "Rough-In and Layout",
        p: "Relocating a toilet, tub or vanity requires correct drain slope, proper venting and structural coordination with floor joists. We plan the layout with your finish selections in hand — freestanding tub filler locations, shower valve heights, niche drain considerations and vanity center lines — so the finished bathroom works exactly as designed.",
      },
      {
        h: "Showers and Tubs",
        p: "Pressure-balancing and thermostatic valves prevent scalding when another fixture runs. Multi-head and body-spray systems require verified supply capacity — many older homes cannot feed them without upsizing supply lines. Curbless and linear drain showers need drain and framing coordination well before the tile setter arrives.",
      },
      {
        h: "Common Bathroom Problems We Solve",
        p: "Toilets that rock or leak at the flange, showers with poor pressure, tubs that drain slowly from hair and soap accumulation, exhaust and moisture problems creating mildew, and the persistent smell that usually indicates a dry or improperly configured vent rather than a cleaning problem.",
      },
    ],
    benefits: [
      "Full remodel rough-in coordinated with your contractor",
      "Fixture relocation with correct slope and venting",
      "Pressure-balancing and thermostatic valve installation",
      "Permits pulled and inspections met",
      "Accessible and aging-in-place configurations",
    ],
    signs: [
      "Planning a bathroom remodel or addition",
      "A toilet that rocks or leaks at the base",
      "Chronically slow tub or shower drains",
      "Persistent sewer odor in the bathroom",
    ],
    faqs: [
      {
        q: "Can a toilet be moved to a different wall?",
        a: "Usually yes, though it depends on joist direction and available drain slope. We assess the framing and existing drain before committing to a layout.",
      },
      {
        q: "Do you work with my remodeling contractor?",
        a: "Regularly. We coordinate rough-in and trim-out scheduling around tile, drywall and cabinetry so nobody waits on anybody.",
      },
      {
        q: "How long does bathroom plumbing take on a remodel?",
        a: "Rough-in is typically one to two days, then trim-out is another day after finishes are complete. Inspection timing depends on the county.",
      },
      {
        q: "Why does my bathroom smell like sewer?",
        a: "Most often a dry trap in an unused fixture, a failed toilet wax ring, or a blocked vent stack. All three are quick to diagnose and inexpensive to correct.",
      },
    ],
  },
  {
    slug: "kitchen-plumbing",
    name: "Kitchen Plumbing",
    short: "Sinks, disposals, ice makers, filtration and grease-line service.",
    category: "plumbing",
    image: "svc-kitchen",
    imageAlt: "Plumber installing a kitchen sink drain and garbage disposal under a counter",
    tagline: "The hardest-working plumbing in the house.",
    intro: [
      "The kitchen sink drain handles more grease, food solids and hot water than any other line in a house, and it is the drain we are called to most. Kitchen plumbing also involves the most appliance connections — dishwasher, disposal, refrigerator ice maker, instant hot, filtration — and each one is a potential leak point hidden inside a cabinet.",
      "Whether you are remodeling, replacing a sink, or fighting a drain that clogs every few months, we address the kitchen as a system rather than one fitting at a time.",
    ],
    sections: [
      {
        h: "Kitchen Drain Lines",
        p: "Grease congeals as it cools and coats the inside of the drain line, gradually narrowing it until solids catch. Cabling drills a hole through that coating; hydro jetting removes it entirely. For a kitchen line that clogs repeatedly, jetting plus a change in habits is the fix. We also correct improper trap and vent configurations that trap debris by design.",
      },
      {
        h: "Sink, Disposal and Appliance Connections",
        p: "Undermount and farmhouse sink installations require correct drain alignment and support. Disposals need proper electrical and drain configuration and correct dishwasher knockout removal — a detail missed constantly, causing dishwashers not to drain. Ice maker lines should be run in braided or copper with an accessible quarter-turn valve, never a self-piercing saddle valve, which fails reliably.",
      },
      {
        h: "Water Filtration",
        p: "Under-sink carbon filtration, reverse osmosis systems and whole-house filtration all improve kitchen water. On well water, testing first matters — sediment, iron, hardness and pH each require different treatment, and installing the wrong system solves nothing. We advise based on your actual water report.",
      },
    ],
    benefits: [
      "Hydro jetting for grease-laden kitchen lines",
      "Proper appliance connections with accessible shutoffs",
      "Undermount and farmhouse sink installation",
      "Filtration matched to your actual water test results",
      "Remodel rough-in coordinated with cabinetry install",
    ],
    signs: [
      "Kitchen sink drains slowly or clogs repeatedly",
      "Dishwasher not draining properly",
      "Leak or water damage inside the sink cabinet",
      "Planning a kitchen remodel or new appliances",
    ],
    faqs: [
      {
        q: "Why does my kitchen sink keep clogging?",
        a: "Almost always grease buildup coating the pipe walls. Cabling opens a channel but leaves the coating; hydro jetting removes it and typically ends the cycle.",
      },
      {
        q: "Is a garbage disposal bad for a septic system?",
        a: "It increases solids load meaningfully. Septic homes can use one with more frequent tank pumping, but composting food waste is easier on the system.",
      },
      {
        q: "Can you install a pot filler over the range?",
        a: "Yes, where a supply line can be routed to that wall. We coordinate with the remodel schedule and install a proper accessible shutoff.",
      },
      {
        q: "Do I need a plumber to hook up a new dishwasher?",
        a: "Not legally, but the majority of dishwasher leaks and drain failures we see come from DIY connections — particularly a missing high loop or an unremoved disposal knockout.",
      },
    ],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    short: "Restaurants, offices, retail and municipal plumbing service.",
    category: "plumbing",
    image: "svc-commercial-plumbing",
    imageAlt: "Commercial plumber servicing pipe systems in a business mechanical room",
    tagline: "Code compliance, uptime and documented service.",
    intro: [
      "Commercial plumbing carries requirements residential work does not: backflow prevention and annual testing, grease interception, ADA fixture compliance, water heater capacity for peak service, and documentation your health inspector, landlord and insurer all want to see. A shutdown is a revenue event, so preventative service is far cheaper than reactive repair.",
      "We serve restaurants, offices, retail spaces, churches, schools and light industrial facilities across Southside Virginia, scheduling major work outside operating hours whenever possible.",
    ],
    sections: [
      {
        h: "Restaurant and Food Service",
        p: "Grease interceptor sizing, installation and service scheduling. Hydro jetting of grease-laden kitchen waste lines on a preventative cycle. Floor drain and trap primer maintenance. Three-compartment sink and dish machine connections. High-recovery commercial water heaters sized for peak dish load. We know what health inspectors look for and we help you stay ahead of it.",
      },
      {
        h: "Backflow Prevention",
        p: "Commercial properties with irrigation, boilers, fire suppression or process water require backflow prevention assemblies with annual certified testing. We install, test, repair and file the required documentation with the local authority so nothing lapses.",
      },
      {
        h: "Preventative Programs",
        p: "Scheduled commercial plumbing service covers drain line jetting, water heater inspection and flushing, fixture and flush valve service, leak surveys, backflow testing and documented reporting. For property managers running multiple locations, that documentation is what turns unpredictable emergency spend into a planned budget line.",
      },
    ],
    benefits: [
      "After-hours and weekend scheduling to protect operating hours",
      "Grease interceptor service and preventative jetting programs",
      "Certified backflow testing with filed documentation",
      "Commercial water heater sizing, service and replacement",
      "Written service reports for compliance and insurance",
    ],
    signs: [
      "Kitchen drains slowing during peak service",
      "Backflow test certification approaching expiration",
      "Hot water running short during busy periods",
      "No documented preventative plumbing program",
    ],
    faqs: [
      {
        q: "Can you service our property after closing?",
        a: "Yes. Most commercial work we perform is scheduled at night, early morning or on weekends specifically to avoid disrupting your operation.",
      },
      {
        q: "How often should a grease interceptor be serviced?",
        a: "It depends on volume and local ordinance, but most food service operations need service monthly to quarterly. We help you set the correct interval and keep the records.",
      },
      {
        q: "Do you handle backflow testing and filing?",
        a: "Yes — certified testing, any needed repairs, and submission of the paperwork to the local authority.",
      },
      {
        q: "Can you serve multiple locations under one account?",
        a: "Yes. Property managers and multi-site operators get consolidated scheduling, reporting and invoicing.",
      },
    ],
  },
];
