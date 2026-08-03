import type { Service } from "./types";

export const GAS_SERVICES: Service[] = [
  {
    slug: "gas-line-installation",
    name: "Gas Line Installation",
    short: "Permitted natural gas and propane piping, pressure tested and inspected.",
    category: "gas",
    image: "svc-gas-line",
    imageAlt: "Licensed gas technician installing black iron gas piping beside a meter",
    tagline: "Sized by load calculation. Tested before it ever carries fuel.",
    major: true,
    intro: [
      "Gas line work is the least forgiving trade we perform. There is no acceptable margin of error, no partially correct installation, and no reason to use an unlicensed installer to save a few hundred dollars. Every gas line J&J Mechanical installs is sized by BTU load calculation, assembled from approved materials, pressure tested, permitted and inspected before a single appliance is connected.",
      "We run new lines for gas ranges, dryers, water heaters, furnaces, fireplaces and log sets, outdoor grills and kitchens, pool and spa heaters, generators and shop heaters — for both natural gas and propane systems across Nottoway, Amelia, Dinwiddie and Prince Edward counties.",
    ],
    sections: [
      {
        h: "Load Calculation and Sizing",
        p: "Gas pipe must be sized for the total connected BTU load, the distance from the meter or tank, and the number of fittings in the run. Undersized piping is the most common defect we find on existing systems: the range works fine until the furnace and water heater fire at the same time, and then everything starves. We calculate the full system load including anything you plan to add later.",
      },
      {
        h: "Materials and Installation",
        p: "Black iron pipe with approved joint compound, or CSST correctly bonded and protected per code and manufacturer instruction — improperly bonded CSST is a genuine lightning hazard and one we find in existing homes regularly. Underground runs use approved polyethylene with tracer wire and correct burial depth. Shutoffs are installed at every appliance and at accessible points in the system.",
      },
      {
        h: "Testing, Permits and Inspection",
        p: "Every new line is pressure tested and held for the duration required by code, with the gauge witnessed by the inspector. We pull the permit, coordinate the inspection, and handle the meter or tank-side connection with the utility or propane supplier. You receive the documentation, which matters at resale and for insurance.",
      },
    ],
    benefits: [
      "BTU load calculation including future appliance plans",
      "Black iron, CSST and underground PE installation",
      "Correct CSST bonding — a hazard we frequently find missed",
      "Permits pulled and inspections coordinated for you",
      "Documented pressure test provided on completion",
    ],
    signs: [
      "Adding a gas range, dryer, fireplace or generator",
      "Appliances underperform when several run at once",
      "Building an outdoor kitchen, grill or fire feature",
      "Converting from electric or oil to gas appliances",
    ],
    faqs: [
      {
        q: "How much does a new gas line cost?",
        a: "Cost depends on distance from the source, pipe size required, and whether the run is interior, exterior or underground. A short run to a nearby appliance is modest; a long underground run to a detached structure is a larger project. We quote firm pricing after measuring.",
      },
      {
        q: "Is a permit required for gas line work?",
        a: "Yes, in every jurisdiction we serve. Unpermitted gas work creates insurance and resale problems and, far more importantly, skips the independent inspection that catches errors.",
      },
      {
        q: "Can you run gas to a detached garage or shop?",
        a: "Yes, using approved underground polyethylene with tracer wire at correct burial depth, transitioning to approved above-ground material at each end.",
      },
      {
        q: "Do you work with propane as well as natural gas?",
        a: "Yes. Propane is common throughout our rural service area, and we coordinate with your supplier on tank-side connections and regulator sizing.",
      },
    ],
  },
  {
    slug: "gas-line-repair",
    name: "Gas Line Repair",
    short: "Leak testing, corroded pipe replacement and emergency gas response.",
    category: "gas",
    image: "svc-gas-repair",
    imageAlt: "Technician performing a gas leak pressure test on residential gas piping",
    tagline: "If you smell gas, leave first — then call us.",
    major: true,
    intro: [
      "If you smell gas right now, stop reading. Leave the building immediately, do not operate any switch, phone or garage door, and call your gas utility or propane supplier from outside. Then call us. We respond to gas leak calls 24 hours a day and we treat every one as urgent regardless of how small it sounds on the phone.",
      "Gas leaks develop from corroded exterior piping, failed joint compound at older threaded connections, physical damage from digging or equipment, appliance connectors that have aged past their service life, and valves that no longer seal. Most are repairable quickly once located precisely.",
    ],
    sections: [
      {
        h: "How We Locate a Leak",
        p: "We isolate sections of the system and pressure test each independently, then use combustible gas detectors and bubble solution to pinpoint the exact fitting or run. That method finds the leak without demolition and confirms the rest of the system is sound — because finding one leak does not mean there is only one.",
      },
      {
        h: "Repair and Replacement",
        p: "We replace corroded sections with new approved material rather than patching. Failed connectors and shutoff valves are replaced, never re-taped. Where exterior piping is corroding from ground contact or weather exposure, we address the cause with proper coating, sleeving or rerouting so the same section does not fail again in three years.",
      },
      {
        h: "Whole-System Safety Inspection",
        p: "A gas leak call is a reasonable moment to verify the entire system. We inspect all accessible piping and connections, test appliance connectors, verify shutoff valve operation, check CSST bonding, and perform combustion analysis on gas appliances to confirm they are burning cleanly and venting properly. You receive a written report of everything we checked.",
      },
    ],
    benefits: [
      "24/7 emergency response on any suspected gas leak",
      "Section isolation pressure testing to pinpoint the source",
      "Corroded piping replaced, never patched",
      "CSST bonding and appliance connector inspection included",
      "Written safety report on the full accessible system",
    ],
    signs: [
      "Rotten egg or sulfur smell indoors or near the meter",
      "Hissing sound near a gas line or appliance",
      "Dead vegetation in a line along a buried gas run",
      "Unexplained increase in gas usage",
    ],
    faqs: [
      {
        q: "What should I do the moment I smell gas?",
        a: "Leave the building immediately. Do not flip switches, unplug anything, use a phone indoors or start a vehicle in an attached garage. From a safe distance outside, call your gas utility or propane supplier, then call us.",
      },
      {
        q: "Can a small gas leak wait until morning?",
        a: "No. Gas accumulates in enclosed spaces and there is no safe threshold. We dispatch on gas calls at any hour.",
      },
      {
        q: "How often should gas lines be inspected?",
        a: "Every few years for most homes, and annually for older systems with threaded black iron, exposed exterior runs, or homes with multiple gas appliances.",
      },
      {
        q: "Who is responsible for the line — me or the utility?",
        a: "The utility owns the service line to the meter. Everything downstream of the meter is the property owner's responsibility. Propane responsibility is set by your tank agreement, and we help clarify it.",
      },
    ],
  },
  {
    slug: "gas-appliance-installation",
    name: "Gas Appliance Installation",
    short: "Ranges, dryers, fireplaces, generators and heaters connected safely.",
    category: "gas",
    image: "svc-gas-appliance",
    imageAlt: "Technician connecting a new gas range with a flexible appliance connector and shutoff",
    tagline: "Connected, tested, vented and verified.",
    intro: [
      "Connecting a gas appliance involves more than attaching a flex line. The supply must deliver adequate BTU at correct pressure with everything else running. The connector must be the right type and length, unspliced and undamaged. The shutoff must be accessible. Combustion appliances need proper venting and combustion air. And the whole thing needs leak testing before it is put in service.",
      "We install and connect gas ranges and cooktops, dryers, water heaters, furnaces and boilers, fireplaces and gas log sets, outdoor grills and kitchens, patio heaters, pool and spa heaters, standby generators and unit heaters for shops and garages.",
    ],
    sections: [
      {
        h: "Supply Verification First",
        p: "Before connecting anything we confirm the existing system can support the new load. A common example: a homeowner adds a gas range to a system already feeding a furnace and water heater, and pressure drops at the furnace during winter cooking. We calculate the full connected load and upsize the piping if the numbers require it.",
      },
      {
        h: "Venting and Combustion Air",
        p: "Vented appliances need correctly sized, correctly sloped venting that terminates in the right location. Unvented and direct-vent fireplaces each carry their own clearance and combustion air requirements. Enclosed mechanical spaces need adequate combustion air openings. Getting these wrong produces carbon monoxide, and it is the most common defect we find on prior installations by non-specialists.",
      },
      {
        h: "Commissioning Every Appliance",
        p: "After connection we leak test every joint, verify manifold gas pressure with a manometer, observe the burner flame pattern, perform combustion analysis on vented appliances, test carbon monoxide levels, confirm safety controls operate, and walk you through operation and shutoff location. Then we document it.",
      },
    ],
    benefits: [
      "Total connected BTU load verified before installation",
      "Correct connector type, length and accessible shutoff",
      "Venting and combustion air brought to code",
      "Manometer-verified gas pressure and combustion analysis",
      "Permits and inspections handled where required",
    ],
    signs: [
      "Purchasing a new gas range, dryer or fireplace",
      "Installing a standby generator or pool heater",
      "Converting an appliance between natural gas and propane",
      "An existing appliance with yellow flames or soot",
    ],
    faqs: [
      {
        q: "Can the appliance store handle the gas hookup?",
        a: "Delivery crews frequently connect appliances but are usually not licensed for gas work and do not leak test or verify pressure. For anything burning fuel inside your home, use a licensed installer.",
      },
      {
        q: "Can my propane appliance be converted to natural gas?",
        a: "Most can with the manufacturer's conversion kit, which changes orifices and regulator settings. We verify the appliance is convertible and complete the conversion with a manometer test.",
      },
      {
        q: "Do gas fireplaces need annual service?",
        a: "Yes. Annual service covers the pilot assembly, burner ports, glass gasket seal, venting integrity and carbon monoxide testing.",
      },
      {
        q: "How long does a typical appliance connection take?",
        a: "A straightforward range or dryer connection with an existing correctly sized line takes about an hour including testing. New line runs, venting or conversions take longer and are quoted after we measure.",
      },
    ],
  },
];
