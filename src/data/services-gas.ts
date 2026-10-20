import type { Service } from "./types";

export const GAS_SERVICES: Service[] = [
  {
    slug: "gas-services",
    name: "Gas Services",
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
    diagnosticSteps: [
      {
        tool: "High-Resolution Manometer & Test Gauge",
        check: "Standing Pressure & Drop-Out Test",
        purpose: "Pumps test pressure to code requirement (15–30 PSI) to verify zero drop over the 15-minute test duration.",
      },
      {
        tool: "Digital Combustible Gas Sniffer",
        check: "Fittings, Unions & Valve Joints",
        purpose: "Scans for minute gas leaks at threaded joints, CSST terminations, and appliance connectors.",
      },
      {
        tool: "NFPA 54 / IFGC Sizing Tables",
        check: "Total Connected Appliance BTU Demand",
        purpose: "Calculates pipe diameter required for total length and equivalent fitting resistance, preventing pressure drops.",
      },
      {
        tool: "CSST Direct Bonding Clamp Tester",
        check: "Electrical Grounding Path to Service Panel",
        purpose: "Verifies 6 AWG copper bonding wire provides direct lightning dissipation path to prevent sidewall perforation.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Load Calculation & Route Engineering",
        description: "Calculate total BTU demand across all present and future appliances; determine optimal pipe pathway.",
      },
      {
        step: "02",
        title: "County Permitting & Safe Isolation",
        description: "Pull required mechanical/gas permit with the county and shut off main gas meter or propane tank valve.",
      },
      {
        step: "03",
        title: "Code-Compliant Material Installation",
        description: "Install black iron pipe, bonded CSST, or underground polyethylene with tracer wire at required burial depths.",
      },
      {
        step: "04",
        title: "High-Pressure Witnessed Hold Test",
        description: "Pressurize system with air/nitrogen, verify zero pressure loss on a diaphragm gauge, and meet the municipal inspector.",
      },
      {
        step: "05",
        title: "Appliance Purge & Flame Commissioning",
        description: "Purge air from lines, connect approved shutoffs and flex connectors, test manifold pressure, and verify burner flame.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Fuel Volume Demand",
        repairIf: "Existing pipe diameter supports new appliance without starving existing furnace or water heater.",
        replaceIf: "Total BTU demand exceeds existing line capacity, requiring an upgraded trunk line or 2-PSI high-pressure system.",
      },
      {
        factor: "CSST Safety Standards",
        repairIf: "Modern arc-resistant jacketed CSST properly bonded to building electrical ground.",
        replaceIf: "Legacy yellow-jacket CSST without proper lightning bonding, creating fire risk during summer thunderstorms.",
      },
      {
        factor: "Underground Routing",
        repairIf: "Above-ground interior routing through crawlspaces or basements.",
        replaceIf: "Yard trenching requiring continuous yellow MDPE pipe with brass transition risers and tracer wire.",
      },
      {
        factor: "Propane vs Natural Gas",
        repairIf: "Standard municipal utility meter connection with 7 in.w.c. delivery pressure.",
        replaceIf: "Propane tank connection requiring dual-stage regulators (10 PSI first stage down to 11 in.w.c. second stage).",
      },
    ],
    caseStudy: {
      title: "Victoria Sanctuary High-Capacity Gas Line Upgrade",
      description: "Engineered and installed a 2-inch black iron gas line for a historic Victoria church boiler and kitchen upgrade. Completed full load calculation, pressure testing, and county inspection with zero punch list items.",
      metric: "Delivered 450,000 BTU capacity with zero pressure drop",
    },
  },
];
