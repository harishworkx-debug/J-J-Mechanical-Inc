import type { Service } from "./types";

export const HVAC_SERVICES: Service[] = [
  {
    slug: "hvac-repair",
    name: "HVAC Repair & Diagnostics",
    short: "Complete heating and cooling diagnostics with verified measurements and upfront options.",
    category: "hvac",
    image: "svc-hvac-repair",
    imageAlt: "Technician taking static pressure and electrical measurements on a residential HVAC system",
    tagline: "We diagnose the underlying cause with calibrated instruments before touching a wrench.",
    major: true,
    intro: [
      "When heating or cooling fails in Southside Virginia, you need more than an educated guess. J&J Mechanical approaches every HVAC repair through systematic mechanical diagnostics — measuring total external static pressure, electrical draw, refrigerant pressures, and temperature splits rather than swapping parts at your expense.",
      "From turn-of-the-century homes with retrofitted crawlspace ducts in Blackstone to rural properties across Nottoway and Prince Edward counties, we service heat pumps, air conditioners, gas furnaces, and dual-fuel configurations with fully equipped service trucks.",
    ],
    sections: [
      {
        h: "Measured Scientific Diagnostics",
        p: "We don't guess what is broken. Our technicians measure blower motor amp draw against nameplate ratings, test dual-run capacitor capacitance in microfarads, evaluate refrigerant charge via subcooling and superheat, and check temperature differential across the evaporator coil. Every diagnosis is supported by verifiable numbers shown to you directly.",
      },
      {
        h: "Dual-Fuel & Heat Pump Specialization",
        p: "The vast majority of Southside Virginia residences utilize heat pumps with electric resistance backup or dual-fuel systems paired with propane furnaces. We troubleshoot defrost control logic, reversing valve solenoids, emergency heat sequencers, and staging thermostats so your auxiliary heat does not run unnecessarily and spike your utility bill.",
      },
      {
        h: "Airflow & Static Pressure Verification",
        p: "Over 70% of chronic HVAC component failures — such as premature compressor burnout or cracked heat exchangers — stem from restricted airflow. We evaluate total external static pressure (TESP) using digital manometers to confirm whether dirty filters, undersized returns, or collapsed flex duct in your crawlspace are causing the breakdown.",
      },
    ],
    benefits: [
      "Virginia Class A mechanical contractor with licensed technicians",
      "Calibrated digital instrument testing on every service call",
      "Upfront flat-rate pricing with written repair-versus-replace options",
      "Fast local dispatch from our N. Main St. shop in Blackstone",
      "Same-day emergency response for severe weather no-heat and no-cool calls",
    ],
    signs: [
      "System runs constantly without reaching thermostat setpoint",
      "Unusual squealing, buzzing, clanking, or electrical humming noises",
      "Short-cycling: unit turns on and off every few minutes",
      "Significant temperature variances between rooms or floors",
      "Sudden, unexplained increase on electric or fuel utility bills",
    ],
    faqs: [
      {
        q: "How quickly can you dispatch a technician for an HVAC repair?",
        a: "Our shop is on N. Main St in Blackstone. In-town calls are often reached within 30 to 60 minutes. For surrounding areas like Crewe, Farmville, and Victoria, we dispatch immediately, with 24/7 coverage for emergency weather conditions.",
      },
      {
        q: "What is included in your diagnostic fee?",
        a: "Our diagnostic fee covers travel and a comprehensive system evaluation: electrical testing, refrigerant operating pressures, static pressure, safety controls, and thermal split. You receive a written diagnosis and guaranteed pricing before any repair begins.",
      },
      {
        q: "Do you repair all brands of HVAC equipment?",
        a: "Yes. We service all major manufacturers including Daikin, Trane, Carrier, Lennox, Goodman, Rheem, York, American Standard, and Amana, carrying common universal contactors, capacitors, transformers, and fan motors on our trucks.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Digital Manifold Gauges & Thermocouples",
        check: "Subcooling & Superheat Readings",
        purpose: "Identifies whether low cooling is due to refrigerant leak, dirty coils, or a stuck thermal expansion valve (TXV).",
      },
      {
        tool: "True-RMS Multimeter",
        check: "Capacitor MFD & Motor Amp Draw",
        purpose: "Tests run capacitors under load and ensures blower/condenser fan motors are not overheating or pulling excessive amperage.",
      },
      {
        tool: "Dual-Port Digital Manometer",
        check: "Total External Static Pressure (TESP)",
        purpose: "Measures return and supply duct resistance to confirm equipment is receiving the 400 CFM/ton required for longevity.",
      },
      {
        tool: "Calibrated Infrared & Probe Thermometers",
        check: "Temperature Split (Delta-T)",
        purpose: "Verifies standard 18°F–22°F temperature drop across evaporator coil during cooling or 30°F–60°F rise during heating.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Home Arrival & Initial Assessment",
        description: "Technician arrives in a stocked service vehicle, wears protective boot covers, and reviews symptom history with the homeowner.",
      },
      {
        step: "02",
        title: "Comprehensive Multi-Point Testing",
        description: "We inspect safety controls, measure electrical draws, test refrigerant operating parameters, and inspect crawlspace/attic air handlers.",
      },
      {
        step: "03",
        title: "Transparent Written Options",
        description: "We provide an itemized repair estimate alongside an honest assessment of remaining system life. No work proceeds without your written sign-off.",
      },
      {
        step: "04",
        title: "Precision Mechanical Execution",
        description: "Repairs are performed using OEM or heavy-duty components, electrical wiring is dressed, and refrigerant lines are nitrogen-purged if opened.",
      },
      {
        step: "05",
        title: "Post-Repair Operational Verification",
        description: "The system is cycled through complete heating and cooling modes, verified against factory performance specifications, and documented on your invoice.",
      },
    ],
    decisionCriteria: [
      {
        factor: "System Age",
        repairIf: "Under 10–12 years old with a sound compressor and heat exchanger.",
        replaceIf: "Over 12–15 years old with repeated failures or obsolete R-22 refrigerant.",
      },
      {
        factor: "The $5,000 Rule",
        repairIf: "System age multiplied by repair cost is under $5,000 (e.g., 6 years × $400 = $2,400).",
        replaceIf: "System age multiplied by repair cost exceeds $5,000 (e.g., 12 years × $600 = $7,200).",
      },
      {
        factor: "Refrigerant Type",
        repairIf: "R-410A system with an isolated, repairable leak at a service valve or flare.",
        replaceIf: "R-22 phased-out system with a leaking evaporator coil or failing compressor.",
      },
      {
        factor: "Comfort & Efficiency",
        repairIf: "Home heats and cools evenly with reasonable electric bills when running.",
        replaceIf: "Chronic high humidity, uneven room temperatures, and energy costs 30%+ higher than modern SEER2 units.",
      },
    ],
    caseStudy: {
      title: "Dual-Fuel Heat Pump Reversing Valve Diagnostics",
      description: "Diagnosed a heat pump stuck in cooling during a cold snap in Blackstone. Found failed defrost board logic rather than an expensive reversing valve replacement, restoring heat same-day.",
      metric: "Saved homeowner $1,400 in unneeded component replacement",
    },
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    short: "Fast, accurate cooling repairs for central air conditioners and heat pumps.",
    category: "hvac",
    image: "svc-ac-repair",
    imageAlt: "Technician servicing an air conditioning outdoor condensing unit",
    tagline: "Cooling restored fast with root-cause diagnostics, not temporary band-aids.",
    major: true,
    intro: [
      "Summer in Southside Virginia brings sustained 90-degree heat and oppressive humidity. When your air conditioner blows lukewarm air, freezes over, or trips the breaker, you need a contractor who understands both the mechanical and environmental stressors placed on cooling equipment.",
      "J&J Mechanical repairs central air conditioning systems and heat pumps across Blackstone, Crewe, Farmville, Victoria, and neighboring communities. We identify the true root cause — from failed capacitors and contactors to metering restrictions and airflow deficiencies.",
    ],
    sections: [
      {
        h: "Electrical & Component Diagnostics",
        p: "Most AC breakdowns occur on the hottest afternoons when run capacitors and contactor relays are stressed by continuous duty and heat. We test capacitor microfarads, contactor contact pitting, and compressor start windings under load before recommending replacements, preventing unnecessary motor failures.",
      },
      {
        h: "Frozen Coils & Refrigerant Leaks",
        p: "Ice on your refrigerant line or indoor evaporator coil is always a symptom, never the root cause. It indicates either severe airflow restriction (plugged filter, failing blower motor, collapsed ductwork) or a low refrigerant charge caused by a leak. We locate leaks using electronic sniffers and nitrogen pressure testing rather than merely topping off refrigerant.",
      },
      {
        h: "Condensate Drain & Float Switch Protection",
        p: "High humidity generates gallons of condensate daily. Clogged drain traps cause water backups that trigger safety float switches, shutting down your cooling system to prevent ceiling and floor water damage. We clear condensate lines, test drain pitch, and install safety float switches to safeguard your home.",
      },
    ],
    benefits: [
      "Rapid dispatch from Blackstone with fully stocked service vans",
      "Accurate refrigerant leak detection with electronic sensors",
      "Factory-spec replacement capacitors, contactors, and fan motors on hand",
      "Upfront flat-rate pricing with zero hidden after-hours surprises",
      "Complete post-repair cooling verification and delta-T measurement",
    ],
    signs: [
      "Warm or lukewarm air blowing from supply vents",
      "Ice or frost forming on outdoor copper lines or indoor coil",
      "Condenser fan motor humming but blades not spinning",
      "Water pooling in the drain pan or around the indoor air handler",
      "AC frequently tripping the electrical panel breaker",
    ],
    faqs: [
      {
        q: "Why is ice forming on my air conditioner during summer?",
        a: "Ice forms when the evaporator coil temperature drops below freezing (32°F). This is almost always caused by restricted airflow (dirty filter or failed blower) or low refrigerant pressure. Turn the system off immediately to prevent compressor damage and call for service.",
      },
      {
        q: "Can you just add refrigerant without finding the leak?",
        a: "Refrigerant is never consumed during normal operation; it runs in a closed hermetic loop. Adding refrigerant without repairing the leak violates EPA regulations and leaves you with the same breakdown weeks later. We find and fix the leak so your fix lasts.",
      },
      {
        q: "How long does a typical AC repair take?",
        a: "Most common electrical and airflow repairs (capacitors, fan motors, contactors, condensate clearing) are completed within 1 to 2 hours because our trucks are stocked with universal parts.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Capacitance Meter & Megohmmeter",
        check: "Motor & Compressor Windings",
        purpose: "Measures winding insulation resistance to ensure the compressor has not suffered electrical ground or short.",
      },
      {
        tool: "Digital Refrigerant Gauges",
        check: "Target Subcooling vs Measured Subcooling",
        purpose: "Precisely verifies correct charge amount for TXV systems without guessing on ambient temperature.",
      },
      {
        tool: "Electronic Halogen Leak Detector",
        check: "Service Valves, Evaporator & Condenser Coils",
        purpose: "Pins down microscopic pinhole leaks in copper coils and braze joints with sensitivity down to 0.1 oz/year.",
      },
      {
        tool: "Anemometer & Static Probe",
        check: "Airflow Velocity & Supply Register CFM",
        purpose: "Confirms whether air distribution is delivering adequate cooling CFM across all living areas.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Rapid Dispatch & Safety Disconnect",
        description: "We arrive promptly, disconnect high-voltage electrical disconnects, and verify electrical safety before opening access panels.",
      },
      {
        step: "02",
        title: "Electrical & Refrigeration Inspection",
        description: "We test voltage drops, check contactor point resistance, test dual capacitors, and connect low-loss digital gauges.",
      },
      {
        step: "03",
        title: "Clear Explanation & Quotation",
        description: "We show you the diagnostic readings, explain the necessary fix, and provide a firm written price before starting work.",
      },
      {
        step: "04",
        title: "Component Replacement & Line Flushing",
        description: "Components are replaced to factory torque specifications; if refrigerant lines are serviced, acid testing and nitrogen purges are executed.",
      },
      {
        step: "05",
        title: "Cooling Verification Cycle",
        description: "The system runs under load for 15 minutes to measure temperature differential, confirming 18°F–22°F temperature split before departure.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Compressor Condition",
        repairIf: "Compressor mechanically sound with normal running amp draw and clean oil.",
        replaceIf: "Grounded compressor with acid burnout in an older system approaching 15 years.",
      },
      {
        factor: "Coil Condition",
        repairIf: "Minor leak in accessible copper braze joint with sound aluminum fins.",
        replaceIf: "Extensive formicary corrosion on aluminum coils in aging outdoor units.",
      },
      {
        factor: "Energy Efficiency",
        repairIf: "Modern 14–16+ SEER system operating with reasonable summer power bills.",
        replaceIf: "Old 10 SEER builder-grade system causing $400+ monthly electric bills in peak summer.",
      },
      {
        factor: "Repair Cost",
        repairIf: "Repair cost is minor compared to replacement value and system is under 10 years old.",
        replaceIf: "Major repair exceeding 40% of the cost of a new high-efficiency heat pump or AC.",
      },
    ],
    caseStudy: {
      title: "Emergency AC Condenser Fan & Contactor Overhaul",
      description: "Restored cooling in Farmville on a 96°F afternoon for an elderly resident whose condenser fan motor stalled, causing thermal overload shutdown. Replaced motor and dual capacitor within 90 minutes of dispatch.",
      metric: "Restored indoor comfort from 86°F to 72°F same afternoon",
    },
  },
  {
    slug: "ac-installation",
    name: "AC Installation & Replacement",
    short: "Engineered AC and heat pump installations with proper Manual J sizing and static pressure balance.",
    category: "hvac",
    image: "svc-hvac-install",
    imageAlt: "Technicians installing an energy-efficient central air conditioning condensing unit on an elevated pad",
    tagline: "Correct sizing, balanced ductwork, and clean craftsmanship from day one.",
    major: true,
    intro: [
      "A brand-new air conditioning system is only as good as the installation behind it. Studies show that over half of newly installed cooling systems underperform because of improper sizing, unsealed duct transitions, and incorrect refrigerant charging.",
      "At J&J Mechanical, we perform Manual J load calculations to determine the exact cooling tonnage your home requires. We balance ductwork, upgrade pads, install code-compliant disconnects, and commission every system according to stringent manufacturer specs across Southside Virginia.",
    ],
    sections: [
      {
        h: "Accurate Manual J Cooling Load Sizing",
        p: "Oversized air conditioners cycle on and off too quickly, cooling the air before removing humidity — leaving your home feeling clammy and encouraging mold growth. Undersized units run continuously without reaching setpoint. We calculate heat gain based on square footage, insulation levels, window exposure, and regional climate data.",
      },
      {
        h: "Duct Inspection & Static Pressure Matching",
        p: "Connecting a high-efficiency 16+ SEER2 cooling unit to restrictive, leaky, or crushed ductwork will choke airflow and void manufacturer warranties. We test static pressure, seal plenum connections with mastic and foil tape, and verify return air sizing before setting new equipment.",
      },
      {
        h: "The R-454B / Low-GWP Refrigerant Era",
        p: "As the industry transitions to next-generation A2L low-GWP refrigerants like R-454B and R-32, proper evacuation, flare fittings, and leak sensors are mandatory. Our technicians are factory-trained and equipped with specialized recovery and charging equipment for all modern refrigerants.",
      },
    ],
    benefits: [
      "Engineered Manual J calculations ensure exact equipment sizing",
      "Top-tier brands including Daikin, Goodman, and Trane with 10-year warranties",
      "Elevated equipment pads and composite vibration isolators included",
      "Complete permit filing and municipal inspection coordination",
      "Clean installation with floor protection and site debris removal",
    ],
    signs: [
      "Current AC system is over 12–15 years old and experiencing frequent breakdowns",
      "System uses phased-out R-22 refrigerant requiring expensive top-offs",
      "Compressor has failed or seized, requiring major capital repair",
      "Cooling bills have climbed 25%+ despite identical thermostat settings",
      "Uneven cooling between rooms and excessive indoor summer humidity",
    ],
    faqs: [
      {
        q: "What SEER2 rating should I choose for my Virginia home?",
        a: "In Southside Virginia, 15.2 to 18 SEER2 provides the sweet spot between upfront investment and energy savings. Inverter variable-capacity systems (like Daikin Fit) excel because they modulate down during moderate heat, keeping indoor humidity below 50%.",
      },
      {
        q: "How long does a complete AC installation take?",
        a: "A standard residential changeout typically takes 1 to 2 days. If ductwork modifications or new electrical circuits are required, we communicate the timeline up front and ensure your home is protected throughout.",
      },
      {
        q: "Do you offer financing on new HVAC systems?",
        a: "Yes, we offer flexible financing options with approved credit, including low monthly payment plans, allowing you to invest in high-efficiency comfort without strain.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Manual J & D Load Calculation Software",
        check: "Sensible and Latent Heat Gain",
        purpose: "Sizes exact tonnage to guarantee humidity removal and prevent short-cycling.",
      },
      {
        tool: "Digital Micromanometer",
        check: "External Duct Static Pressure",
        purpose: "Validates that existing ductwork can support the required CFM without excessive blower motor static stress.",
      },
      {
        tool: "Micron Gauge & Vacuum Pump",
        check: "Deep Vacuum Evacuation (< 500 microns)",
        purpose: "Ensures moisture and non-condensables are completely removed from refrigerant lines prior to charging.",
      },
      {
        tool: "Digital Refrigerant Scales",
        check: "Factory Subcooling Charge Adjustment",
        purpose: "Weights in exact refrigerant ounces tailored to line set length and elevation differential.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "On-Site Evaluation & Load Calculation",
        description: "We measure your home, inspect electrical panels and ductwork, and perform heat load calculations to recommend the right equipment options.",
      },
      {
        step: "02",
        title: "Safe Decommissioning & Eco-Recovery",
        description: "Old equipment is carefully disconnected, and existing refrigerant is recovered in compliance with EPA Section 608 guidelines.",
      },
      {
        step: "03",
        title: "Pad, Line Set & Transition Fitting",
        description: "We install an elevated composite pad, run or flush refrigerant lines with dry nitrogen, and fabricate custom sheet metal plenum transitions.",
      },
      {
        step: "04",
        title: "Deep Vacuum & Commissioning",
        description: "Lines are pulled down below 500 microns and held for leak testing, followed by precise refrigerant charging and electrical verification.",
      },
      {
        step: "05",
        title: "Thermostat Setup & Homeowner Walkthrough",
        description: "We configure your digital or smart thermostat, demonstrate filter changes, and provide all warranty documentation.",
      },
    ],
    decisionCriteria: [
      {
        factor: "System Age",
        repairIf: "AC is under 10 years old with a minor, isolated electrical or motor issue.",
        replaceIf: "AC is older than 12–15 years and facing an expensive coil or compressor repair.",
      },
      {
        factor: "Efficiency Savings",
        repairIf: "Existing unit maintains comfortable 50% relative humidity and low energy bills.",
        replaceIf: "Existing unit is a 10 SEER relic where a 17 SEER2 replacement saves 30%–45% on cooling bills.",
      },
      {
        factor: "Refrigerant Obsolescence",
        repairIf: "System uses R-410A and needs a standard electrical switch or contactor.",
        replaceIf: "System uses banned R-22 Freon where recharging costs are prohibitively expensive.",
      },
      {
        factor: "Home Living Plans",
        repairIf: "Planning to sell the home in the very near future with functioning baseline equipment.",
        replaceIf: "Planning to live in the home long-term and wanting 10-year parts and labor warranty peace of mind.",
      },
    ],
    caseStudy: {
      title: "Farmville Historic Home AC & Duct Modernization",
      description: "Replaced an inefficient 20-year-old AC system with a high-efficiency Daikin Fit inverter unit in Farmville, sealing crawlspace duct returns and reducing summer humidity from 68% down to 48%.",
      metric: "Saved 34% on monthly summer cooling electricity costs",
    },
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance & Tune-Up",
    short: "Comprehensive 21-point summer cooling tune-up to prevent breakdowns and extend system life.",
    category: "hvac",
    image: "svc-maintenance",
    imageAlt: "Technician washing outdoor condenser coils and taking electrical readings during an AC tune-up",
    tagline: "Prevent mid-summer breakdowns with thorough, measurement-backed maintenance.",
    major: true,
    intro: [
      "An air conditioner operating in Virginia summer heat loses roughly 5% of its operating efficiency each year without regular maintenance. Dirt buildup on condenser coils, weak capacitors, and sluggish blower wheels force the compressor to work harder, shortening equipment life and raising power bills.",
      "J&J Mechanical's precision cooling tune-ups go far beyond a simple filter change. We perform a comprehensive 21-point inspection: chemically washing coils, testing electrical values under load, checking subcooling, and verifying safety controls across Blackstone and Southside Virginia.",
    ],
    sections: [
      {
        h: "Chemical Condenser Coil Cleaning",
        p: "Outdoor coils collect cottonwood, pollen, grass clippings, and road dust. This insulating layer prevents heat rejection, driving head pressure up and forcing the compressor to consume excess electricity. We chemically rinse and back-flush coils to restore full heat exchange capacity.",
      },
      {
        h: "Electrical & Capacitor Health Check",
        p: "Capacitors degrade over time due to high ambient temperatures. A capacitor rated at 45 microfarads that has dropped to 38 microfarads will cause the compressor to run hotter and draw higher amps. We test capacitors under load to replace weak components before they leave you without cooling on a holiday weekend.",
      },
      {
        h: "Condensate Line Clearing & Pan Treatment",
        p: "Southside Virginia's humidity causes algae and slime to accumulate in the condensate drain line. During maintenance, we blow out lines with nitrogen, treat pans with anti-microbial tabs, and verify the operation of emergency float switches to safeguard your ceilings.",
      },
    ],
    benefits: [
      "Extends system operational lifespan by up to 5 to 7 years",
      "Reduces summer electricity consumption by up to 15%–20%",
      "Maintains active manufacturer warranty compliance",
      "Identifies failing components before they cause emergency shutdowns",
      "Priority scheduling and repair discounts for Comfort Guard plan members",
    ],
    signs: [
      "System has not been professionally serviced in over 12 months",
      "Airflow from registers feels weak or temperatures fluctuate",
      "Electric bills are creeping higher than the same month last year",
      "Outdoor condensing unit is coated with dust, lawn debris, or cottonwood",
      "Indoor air feels humid or stale despite the AC running",
    ],
    faqs: [
      {
        q: "When is the best time to schedule an AC tune-up in Virginia?",
        a: "Spring (March through May) is the ideal window. Tuning the system before hot weather arrives ensures peak capacity and allows any required repairs to be handled before peak heat waves.",
      },
      {
        q: "Does regular maintenance really prevent breakdowns?",
        a: "Yes. Industry data confirms that over 80% of emergency cooling failures could have been prevented with regular maintenance, primarily catching weak capacitors, dirty coils, and clogged drain lines.",
      },
      {
        q: "What is the difference between homeowner maintenance and professional maintenance?",
        a: "Homeowners should change air filters monthly and keep vegetation 2 feet away from outdoor units. Our technicians test electrical capacitance, motor amp draws, refrigerant pressures, subcooling, and clean internal coil surfaces with specialized tools.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "True-RMS Clamp Meter",
        check: "Compressor Running Load Amps (RLA)",
        purpose: "Verifies compressor is operating within factory amp limits and not straining under excessive head pressure.",
      },
      {
        tool: "Capacitance Tester",
        check: "Microfarad Deviation (MFD)",
        purpose: "Identifies capacitors that have drifted more than ±6% from rated capacity before motor failure occurs.",
      },
      {
        tool: "Digital Temperature Probes",
        check: "Indoor Evaporator Temperature Split",
        purpose: "Calculates real-time sensible cooling performance and airflow across the coil.",
      },
      {
        tool: "Nitrogen Purge Kit",
        check: "Condensate Drain Line Backpressure",
        purpose: "Blows out slime, sediment, and bio-growth from the primary condensate drain line.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "System Inspection & Electrical Safety",
        description: "Disconnect power, inspect cabinet wiring, check contactor surfaces for pitting, and verify breaker ratings.",
      },
      {
        step: "02",
        title: "Condenser Coil Wash & Debris Removal",
        description: "Rinse and wash outdoor coils with non-acidic coil cleaner; clean leaves and debris from the interior base pan.",
      },
      {
        step: "03",
        title: "Blower Assembly & Filter Verification",
        description: "Inspect indoor blower wheel, check motor run capacitor, and inspect or replace standard homeowner filters.",
      },
      {
        step: "04",
        title: "Refrigerant & Temperature Verification",
        description: "Check operating pressures and line temperatures to verify proper superheat/subcooling and temperature drop.",
      },
      {
        step: "05",
        title: "Comprehensive Written Health Report",
        description: "Provide the homeowner with an itemized report of all measured values, component health, and recommendations.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Frequency",
        repairIf: "Tune-up performed annually in spring keeps equipment running smoothly.",
        replaceIf: "Skipped for multiple seasons leads to baked-on coil scale and motor burnout.",
      },
      {
        factor: "Component Health",
        repairIf: "All electrical values within 5% of manufacturer spec.",
        replaceIf: "Multiple degraded components in a 14-year-old system signal end-of-life.",
      },
      {
        factor: "Warranty Status",
        repairIf: "Maintaining annual professional service records keeps factory parts warranty valid.",
        replaceIf: "Lapsed maintenance can cause warranty claims on compressors to be rejected by the maker.",
      },
      {
        factor: "Energy Efficiency",
        repairIf: "Clean coils and balanced charge keep energy consumption at baseline.",
        replaceIf: "Unmaintained unit draws 25% higher amperage, justifying cleanout or upgrade.",
      },
    ],
    caseStudy: {
      title: "Pre-Season Blackstone Precision Tune-Up",
      description: "During a routine tune-up in Blackstone, identified a blower motor capacitor reading 3.2 MFD against a 10 MFD rating. Replaced the capacitor on-site, preventing a blower motor burnout during the impending 95°F weekend.",
      metric: "Saved homeowner an estimated $650 in emergency motor replacement",
    },
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    short: "Specialized heat pump troubleshooting: defrost controls, reversing valves, and auxiliary heat sequencers.",
    category: "hvac",
    image: "svc-heatpump",
    imageAlt: "Technician testing the defrost control board and reversing valve on a heat pump",
    tagline: "Virginia's dominant heating and cooling system repaired by true dual-season experts.",
    major: true,
    intro: [
      "Heat pumps are the backbone of Southside Virginia climate control, delivering both air conditioning in the humid summer and efficient heating through the winter. Because a heat pump runs year-round, its mechanical components experience double the operating hours of a conventional furnace-and-AC combination.",
      "When a heat pump blows cold air in winter, runs constantly in emergency heat mode, or freezes into a solid block of ice, J&J Mechanical delivers precise diagnostics. We understand reversing valves, electronic expansion valves, defrost thermistors, and dual-fuel integration.",
    ],
    sections: [
      {
        h: "Defrost Cycle & Solid Ice Diagnostics",
        p: "In winter, frost naturally builds on the outdoor coil. The heat pump must periodically reverse into cooling mode to melt this frost, while engaging indoor electric heat strips so cold air does not enter your home. When defrost sensors, control boards, or reversing valves fail, the unit becomes encased in ice. We troubleshoot the defrost cycle logic rather than just chipping ice away.",
      },
      {
        h: "Auxiliary & Emergency Heat Sequencer Failures",
        p: "If your electric bill suddenly triples in winter, your auxiliary heat strips may be stuck on due to a failed sequencer or incorrectly wired thermostat. Conversely, if your home cannot maintain 68°F during a cold snap, your heat strips may have burned out. We test heating elements and staging controls with true-RMS amp meters.",
      },
      {
        h: "Reversing Valve & Refrigerant Staging",
        p: "The reversing valve changes the direction of refrigerant flow between heating and cooling. A valve that sticks in the middle bleeds hot gas directly back to the suction line, destroying heating and cooling capacity. We test solenoid coil magnetism, temperature differential across valve ports, and refrigerant pressures.",
      },
    ],
    benefits: [
      "Southside Virginia heat pump specialists with decades of dual-season experience",
      "Defrost control boards, sensors, contactors, and sequencers in stock",
      "Auxiliary electric heat strip load testing to stop runaway electric bills",
      "Inverter and variable-capacity diagnostics (including Daikin Fit and multi-stage units)",
      "24/7 winter emergency response across Nottoway, Prince Edward, and Lunenburg counties",
    ],
    signs: [
      "Heat pump is blowing lukewarm or cold air when outdoor temperatures drop below 40°F",
      "Outdoor condensing unit is covered in thick, solid sheets of ice",
      "Thermostat display continuously shows 'AUX Heat' or 'Emergency Heat'",
      "Electric utility bill doubled or tripled without severe temperature changes",
      "Outdoor unit makes loud swooshing or grinding noises when shifting modes",
    ],
    faqs: [
      {
        q: "Why is my heat pump covered in ice in the winter?",
        a: "Light frost is normal, but solid ice covering the entire coil indicates a failure in the defrost system — usually a bad defrost thermistor, failed defrost control board, low refrigerant, or a bad outdoor fan motor. Turn the thermostat to 'Emergency Heat' and call us immediately.",
      },
      {
        q: "What does 'Auxiliary Heat' mean on my thermostat?",
        a: "Auxiliary heat activates when the outdoor temperature drops below your heat pump's balance point (typically around 30°F–35°F) or when you raise the thermostat by 2+ degrees. If it stays on during mild 45°F+ weather, your heat pump has a mechanical fault requiring service.",
      },
      {
        q: "Can you repair inverter-driven variable speed heat pumps?",
        a: "Yes. Our technicians are trained on modern inverter boards, electronic expansion valves (EEVs), and DC inverter compressors, carrying the diagnostic tools needed to read manufacturer error codes.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Digital Thermistor Meter",
        check: "Defrost Sensor Resistance vs Temperature Curve",
        purpose: "Validates that the defrost thermistor accurately reports coil temperature to the defrost control board.",
      },
      {
        tool: "Current Clamp Multimeter",
        check: "Auxiliary Electric Heat Strip Amperage",
        purpose: "Confirms each 5kW heat strip pulls the required ~21 amps at 240V and disengages when not needed.",
      },
      {
        tool: "Dual-Temperature Laser Probes",
        check: "Reversing Valve 4-Way Temperature Differential",
        purpose: "Detects internal valve bypass by checking for temperature leakage across the high and low-pressure ports.",
      },
      {
        tool: "Digital Manifold Gauges (Heating Mode)",
        check: "True Discharge Head Pressure & Heat Pump Suction",
        purpose: "Verifies correct heating mode compression ratio and prevents high-pressure lockout during mild weather.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Prompt Arrival & Mode Verification",
        description: "We verify the thermostat call, check emergency heat staging, and inspect outdoor coil icing conditions.",
      },
      {
        step: "02",
        title: "Electrical & Defrost Testing",
        description: "Force a test defrost cycle, measure sensor resistance, and check reversing valve solenoid voltage.",
      },
      {
        step: "03",
        title: "Clear Diagnosis & Upfront Quote",
        description: "We explain the underlying mechanical or electrical fault and present a clear, flat-rate quote before repairs start.",
      },
      {
        step: "04",
        title: "Component Replacement & Wire Dressing",
        description: "Install factory-grade defrost boards, contactors, or reversing valve solenoids; test heat sequencers.",
      },
      {
        step: "05",
        title: "Heating Mode Verification",
        description: "Run the system through both heat pump heating and auxiliary strip heating, verifying a 30°F–40°F supply air temperature rise.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Compressor Health",
        repairIf: "Compressor runs smoothly with normal subcooling and proper heating output.",
        replaceIf: "Compressor has mechanical bearing seizure or grounded windings in an older system.",
      },
      {
        factor: "Defrost vs Major Coil Leak",
        repairIf: "Failure is an electrical sensor, defrost board, or contactor.",
        replaceIf: "Multiple subterranean refrigerant leaks in outdoor coil requiring complete replacement.",
      },
      {
        factor: "Heating Efficiency",
        repairIf: "Heat pump maintains comfortable 70°F heating down to freezing temps.",
        replaceIf: "Old 10 HSPF unit relying almost completely on expensive electric resistance heat.",
      },
      {
        factor: "Equipment Age",
        repairIf: "Heat pump is under 10 years old with clean maintenance history.",
        replaceIf: "Heat pump is over 12–14 years old and running on obsolete refrigerant.",
      },
    ],
    caseStudy: {
      title: "Crewe Heat Pump Auxiliary Sequencer Repair",
      description: "Homeowner in Crewe received an $850 monthly electric bill. Diagnosed a stuck electric heat sequencer that kept 15kW of backup heat energized 24/7 even when the thermostat was satisfied. Replaced sequencer and verified staging.",
      metric: "Lowered subsequent monthly electric bill by over $480",
    },
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump Installation & Replacement",
    short: "Cold-climate inverter heat pumps and dual-fuel systems engineered for Southside Virginia.",
    category: "hvac",
    image: "svc-heatpump",
    imageAlt: "Technician commissioning a cold-climate variable-speed inverter heat pump",
    tagline: "Year-round comfort and dramatically lower heating bills with modern inverter technology.",
    major: true,
    intro: [
      "Traditional heat pumps used to struggle when winter temperatures dipped into the twenties, blowing lukewarm air and leaning heavily on expensive electric resistance heat strips. Modern inverter-driven heat pumps have changed everything.",
      "J&J Mechanical specializes in cold-climate inverter heat pumps (such as the Daikin Fit) and dual-fuel systems across Blackstone, Crewe, Farmville, and Victoria. These systems modulate capacity dynamically, delivering quiet, consistent 100°F+ supply air even when outdoor temperatures plunge into single digits.",
    ],
    sections: [
      {
        h: "Cold-Climate Inverter Technology",
        p: "Variable-speed inverter heat pumps ramp up and down in 1% increments rather than slamming on and off at 100% capacity. In summer, they run at low speeds to wring out humidity; in winter, they maintain full heating capacity down to 5°F or below, drastically reducing auxiliary heat strip usage.",
      },
      {
        h: "Dual-Fuel Hybrid Heating Options",
        p: "For rural properties in Nottoway, Amelia, and Dinwiddie counties with existing propane tanks, dual-fuel heating provides the best of both worlds. The electric heat pump handles mild heating down to around 35°F at peak efficiency, and the propane furnace takes over automatically during freezing snaps.",
      },
      {
        h: "Elevated Pads & Snow Leg Mounting",
        p: "In Southside Virginia, heat pumps must be elevated above the winter snow line to allow melted frost to drain freely away from the coil during defrost cycles. We mount outdoor units on durable composite pads with vibration-isolating riser legs, preventing freeze-ups and ice damage to the base pan.",
      },
    ],
    benefits: [
      "High-efficiency inverter heat pumps qualifying for federal tax credits & utility rebates",
      "Quiet operation — outdoor sound levels as low as 55 dB(A)",
      "Superior summer dehumidification compared to single-stage units",
      "Dual-fuel propane integration available for rural estates and farmhouses",
      "10-year equipment warranty backed by local J&J Mechanical service",
    ],
    signs: [
      "Current heat pump is 12–15+ years old and struggles during both winter cold and summer heat",
      "Winter electric bills are astronomical due to constant auxiliary heat strip reliance",
      "Outdoor unit is noisy, vibrates against the foundation, or has a leaking coil",
      "You want to eliminate expensive propane or heating oil consumption with clean electric heat",
      "Rooms feel drafty, clammy in summer, and unevenly conditioned year-round",
    ],
    faqs: [
      {
        q: "Do heat pumps really work in Virginia winters without backup heat?",
        a: "Yes! Modern cold-climate heat pumps maintain 100% heating capacity down to 5°F and continue producing heat down to -13°F. While we still install supplemental heat strips for extreme emergencies, the system rarely needs them, saving hundreds on winter electric bills.",
      },
      {
        q: "What is a dual-fuel system, and does it make sense for me?",
        a: "A dual-fuel system combines an electric heat pump with a gas or propane furnace. The system automatically switches between electric heat pump operation in mild weather and gas heat in deep freezes, optimizing comfort and fuel costs.",
      },
      {
        q: "Are there rebates or tax credits available for new heat pumps?",
        a: "Yes. Qualifying high-efficiency heat pumps can be eligible for the federal Section 25C Energy Efficient Home Improvement tax credit (up to $2,000) plus local utility rebates. We help you choose qualifying models and supply documentation.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Manual J Heating & Cooling Calculation",
        check: "Building Envelope Heat Loss & Gain",
        purpose: "Calculates the exact balance point where auxiliary heat is needed, sizing equipment accurately.",
      },
      {
        tool: "Static Pressure Manometer",
        check: "Return Air CFM & Static Resistance",
        purpose: "Confirms existing ductwork can flow adequate air for variable-speed blower operation.",
      },
      {
        tool: "Digital Refrigerant Recovery Station",
        check: "Environmental Refrigerant Recovery",
        purpose: "Safely removes legacy refrigerant from decommissioned equipment in compliance with EPA rules.",
      },
      {
        tool: "Electronic Torque Wrench",
        check: "Flare Fitting Torque Specifications",
        purpose: "Prevents refrigerant micro-leaks on inverter mini-split and central heat pump line set connections.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Site Survey & Engineering Calculation",
        description: "We inspect your electrical panel, measure duct dimensions, calculate heat loss, and review inverter vs dual-fuel options.",
      },
      {
        step: "02",
        title: "Removal & Structural Preparation",
        description: "Old equipment is cleanly disconnected and removed; we install a level composite pad with snow legs and anti-vibration pads.",
      },
      {
        step: "03",
        title: "Indoor Coil & Line Set Installation",
        description: "Install the new indoor air handler, connect transition ductwork with airtight seals, and braze or flare line sets under nitrogen flow.",
      },
      {
        step: "04",
        title: "Deep Evacuation & Electronic Commissioning",
        description: "Evacuate lines to under 500 microns, verify holding pressure, release factory charge, and program communicating thermostats.",
      },
      {
        step: "05",
        title: "Dual-Mode Testing & Documentation",
        description: "We test complete cooling, heat pump heating, and emergency strip heating, explaining thermostat operation and warranty coverage.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Heating Efficiency",
        repairIf: "Older heat pump only needs a simple sensor or capacitor and still produces adequate heat.",
        replaceIf: "Old low-efficiency system forces auxiliary heat strips to run during mild 40°F weather.",
      },
      {
        factor: "Winter Operating Cost",
        repairIf: "Winter heating bills align with expectations and system is well maintained.",
        replaceIf: "Winter electric bills exceed $500/month; inverter heat pump will pay for itself in fuel savings.",
      },
      {
        factor: "Tax Credit Eligibility",
        repairIf: "Repair cost is minor and equipment has years of serviceable life.",
        replaceIf: "Upgrading to a CEE Tier 1 / Energy Star heat pump unlocks up to $2,000 in federal tax credits.",
      },
      {
        factor: "Sound & Comfort",
        repairIf: "Existing unit operates quietly without disturbing bedrooms or outdoor patios.",
        replaceIf: "Outdoor unit sounds like a jet engine when starting; modern inverters operate at conversation volume.",
      },
    ],
    caseStudy: {
      title: "Victoria Farmhouse Oil-to-Inverter Heat Pump Conversion",
      description: "Converted a 1930s farmhouse in Victoria from an aging, expensive fuel oil furnace to a 17 SEER2 Daikin Fit inverter heat pump system with sealed crawlspace returns.",
      metric: "Reduced annual heating & cooling utility expense by 38%",
    },
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    short: "Emergency heating diagnostics and repairs for furnaces, heat pumps, and boilers.",
    category: "hvac",
    image: "svc-furnace",
    imageAlt: "Technician inspecting a gas valve and electronic ignition system on a residential heating unit",
    tagline: "Restoring safe, reliable heat with complete combustion and electrical testing.",
    major: true,
    intro: [
      "A heating breakdown on a freezing winter night in Southside Virginia is more than an inconvenience — it is a safety emergency that threatens your family's comfort and puts plumbing pipes at risk of freezing. When your heating system fails, you need rapid local dispatch and skilled mechanical troubleshooting.",
      "J&J Mechanical repairs gas furnaces, propane heating systems, heat pumps, and boilers across Blackstone, Crewe, Farmville, Victoria, and surrounding counties. We carry factory igniters, pressure switches, gas valves, and draft blowers to restore heat in one visit.",
    ],
    sections: [
      {
        h: "Safety-First Heating Diagnostics",
        p: "Combustion systems must operate safely. A furnace that refuses to ignite is often reacting to a safety switch — such as a tripped rollout sensor, pressure switch flutter, or high-limit switch. We never bypass safety controls; we identify why the safety tripped and correct the underlying fault.",
      },
      {
        h: "Carbon Monoxide & Heat Exchanger Integrity",
        p: "A cracked heat exchanger allows deadly carbon monoxide (CO) to bleed into living spaces. During heating repair visits, we visually inspect heat exchangers with high-definition borescope cameras and test flue gases with calibrated combustion analyzers to ensure your family's safety.",
      },
      {
        h: "Ignition Systems & Flame Rectification",
        p: "Modern furnaces use electronic hot surface igniters (HSI) or direct spark ignition rather than standing pilots. Dirt on the flame rectification sensor prevents the control board from sensing the flame, causing the furnace to light for 3 seconds and shut down. We test microamp current and clean or replace components.",
      },
    ],
    benefits: [
      "24/7 emergency response for no-heat situations across Southside Virginia",
      "Certified gas, propane, and electric heating technicians",
      "Combustion analysis and carbon monoxide safety verification included",
      "Fully stocked trucks carrying igniters, switches, motors, and transformers",
      "Written diagnostic reports and guaranteed upfront repair pricing",
    ],
    signs: [
      "Furnace blows cool or lukewarm air instead of warm heat",
      "Furnace ignites for a few seconds, then clicks and shuts down",
      "Loud banging or booming sound when the burner lights",
      "Yellow or flickering burner flame instead of a crisp blue flame",
      "Carbon monoxide detector activates or alarm beeps",
    ],
    faqs: [
      {
        q: "What should I check before calling for emergency heating repair?",
        a: "Check your thermostat settings (set to 'HEAT' and temperature raised 3 degrees above room temp), verify the furnace emergency power switch is ON, check your air filter, and inspect your electrical panel for a tripped breaker.",
      },
      {
        q: "Why does my furnace short cycle on and off?",
        a: "Short cycling is most commonly caused by a clogged air filter trapping heat inside the cabinet, which trips the high-limit switch. It can also stem from a faulty flame sensor, oversized furnace, or restricted flue vent.",
      },
      {
        q: "Is emergency heating repair available on weekends and holidays?",
        a: "Yes. Our Blackstone shop provides 24-hour emergency response 365 days a year across Nottoway, Amelia, Dinwiddie, and Prince Edward counties.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Combustion Gas Analyzer",
        check: "Flue Carbon Monoxide (PPM) & O2 %",
        purpose: "Measures combustion efficiency and ensures carbon monoxide levels in the flue are well within safety thresholds.",
      },
      {
        tool: "Digital Microamp Meter",
        check: "Flame Sensor Rectification Signal",
        purpose: "Measures flame rectification current to confirm signal exceeds the 1.0–2.0 microamp threshold required by the board.",
      },
      {
        tool: "Dual-Port Manometer",
        check: "Gas Manifold & Flue Draft Pressure",
        purpose: "Verifies manifold pressure matches rating plate (typically 3.5 in.w.c. for natural gas, 10.0 in.w.c. for propane).",
      },
      {
        tool: "Optical Video Borescope",
        check: "Heat Exchanger Cell Walls",
        purpose: "Inspects internal combustion chambers for micro-fractures, rust perforation, or cracked seams.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Emergency Dispatch & Safety Check",
        description: "Arrive on-site, test ambient carbon monoxide levels, inspect fuel shutoff valves, and listen to symptom history.",
      },
      {
        step: "02",
        title: "Sequence of Operation Testing",
        description: "Observe furnace startup sequence: draft inducer motor start, pressure switch prove, igniter warm-up, gas valve open, flame sense.",
      },
      {
        step: "03",
        title: "Accurate Diagnosis & Written Options",
        description: "Show the customer the exact failed component with measured readings and provide upfront pricing before work begins.",
      },
      {
        step: "04",
        title: "Professional Component Repair",
        description: "Replace faulty igniters, flame sensors, gas valves, or draft motors using factory-specified replacement parts.",
      },
      {
        step: "05",
        title: "Full Cycle & Safety Verification",
        description: "Cycle the furnace through a complete heating sequence, verify temperature rise across the plenum, and confirm zero CO emission.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Heat Exchanger Condition",
        repairIf: "Heat exchanger is intact, free of cracks, and passing combustion inspection.",
        replaceIf: "Cracked or rusted-through heat exchanger represents an immediate carbon monoxide hazard; replacement is mandatory.",
      },
      {
        factor: "Furnace Age",
        repairIf: "Furnace is under 12 years old and the repair is an isolated electrical or sensor issue.",
        replaceIf: "Furnace is 18–25 years old with repeated component failures.",
      },
      {
        factor: "Efficiency Difference",
        repairIf: "Existing high-efficiency 90%+ condensing furnace with minor blower or switch issue.",
        replaceIf: "Old 60%–70% standing-pilot furnace wasting 35 cents of every fuel dollar up the chimney.",
      },
      {
        factor: "Repair Cost Threshold",
        repairIf: "Repair cost is under 30% of total replacement cost.",
        replaceIf: "Repair cost approaches 50% of new furnace cost on a system past its warranty.",
      },
    ],
    caseStudy: {
      title: "Blackstone Emergency Flame Sensor & Limit Switch Repair",
      description: "Dispatched to a Blackstone home at 9:00 PM during a 17°F freeze. Diagnosed a severely oxidized flame sensor causing 3-second burner lockout. Cleaned sensor, replaced restricted air filter, and restored heat within 45 minutes.",
      metric: "Prevented frozen water pipes during a sub-20°F freeze",
    },
  },
  {
    slug: "heating-installation",
    name: "Heating Installation & Replacement",
    short: "Engineered heating system replacements: high-efficiency gas furnaces and dual-fuel configurations.",
    category: "hvac",
    image: "svc-furnace-install",
    imageAlt: "Technicians leveling and venting a high-efficiency 96% AFUE two-stage gas furnace",
    tagline: "Precision heating installation engineered for Southside Virginia winters.",
    major: true,
    intro: [
      "Heating systems in Southside Virginia must handle sudden temperature swings — from mild 55-degree afternoons to biting single-digit winter cold fronts. An improperly sized or vented heating system will waste fuel, struggle with temperature swings, and suffer premature heat exchanger failure.",
      "J&J Mechanical installs high-efficiency gas furnaces, propane systems, and advanced heat pumps throughout Blackstone, Crewe, Farmville, and Victoria. Every installation is engineered with Manual J heat load calculations, code-compliant venting, and balanced duct transitions.",
    ],
    sections: [
      {
        h: "AFUE Efficiency Selection (80% vs 96%+)",
        p: "Standard 80% AFUE furnaces vent through metal chimney flues and lose 20% of heat energy. Modern 96%+ condensing furnaces use secondary stainless steel heat exchangers to extract latent heat, venting safely through PVC pipe out the side of your home. We help you choose the right efficiency rating for your fuel source and budget.",
      },
      {
        h: "Two-Stage & Modulating Gas Valves",
        p: "Single-stage furnaces run at 100% full blast whenever they turn on, creating temperature swings and noisy operation. Two-stage and modulating furnaces run on low speed 80% of the time, delivering whisper-quiet, even warmth, ramping up to high fire only during the coldest nights.",
      },
      {
        h: "Direct Sidewall Venting & Combustion Air",
        p: "High-efficiency condensing furnaces require dedicated outside combustion air rather than drawing oxygen from your home or crawlspace. We install dual-pipe PVC venting with correct slope and condensate drainage to ensure long-term reliability and zero draft issues.",
      },
    ],
    benefits: [
      "Engineered Manual J calculations ensure exact heating BTU sizing",
      "96%+ AFUE condensing technology lowers gas and propane heating bills",
      "Two-stage gas valves and variable-speed ECM blower motors for quiet comfort",
      "Safe direct-vent PVC installation with dedicated outside combustion air",
      "10-year parts warranty and lifetime heat exchanger warranty on select models",
    ],
    signs: [
      "Heating system is over 15–20 years old and nearing the end of its reliable lifespan",
      "Cracked heat exchanger discovered during safety inspection",
      "Winter gas or propane fuel bills have risen dramatically",
      "Heating equipment is noisy, rattles, or requires annual emergency service calls",
      "Furnace has a standing pilot light rather than electronic ignition",
    ],
    faqs: [
      {
        q: "What does AFUE mean for my heating bills?",
        a: "AFUE (Annual Fuel Utilization Efficiency) measures how efficiently a furnace converts fuel to heat. An 80% AFUE furnace delivers 80 cents of heat for every dollar spent on gas; a 96% AFUE unit delivers 96 cents, saving 16%–20% on heating fuel every winter.",
      },
      {
        q: "Can I convert my electric furnace to propane or natural gas?",
        a: "Yes. J&J Mechanical holds master plumbing, gas, and mechanical licenses. We can install the furnace, run permitted gas piping from your tank or meter, and complete the installation from start to finish.",
      },
      {
        q: "How long does a new furnace installation take?",
        a: "A typical changeout is completed in a single day (6 to 8 hours), so you are never left without heat overnight. Complex dual-pipe venting or duct rebuilds may extend into a second day.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Manual J Heating Load Software",
        check: "BTU Heat Loss Analysis",
        purpose: "Determines the precise heating capacity needed, preventing oversized furnace short-cycling.",
      },
      {
        tool: "Digital Gas Manometer",
        check: "Inlet & Manifold Gas Pressure",
        purpose: "Tunes the gas valve pressure precisely to factory specifications for clean, efficient combustion.",
      },
      {
        tool: "Combustion Flue Gas Analyzer",
        check: "Excess Air, O2 %, Flue Temp & Carbon Monoxide",
        purpose: "Validates safe and optimal combustion before signing off on the commissioning checklist.",
      },
      {
        tool: "Static Pressure Probe Kit",
        check: "Total External Static Pressure (TESP)",
        purpose: "Ensures the new ECM variable-speed blower motor will not overheat on existing ductwork.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "In-Home Heat Loss Calculation",
        description: "Inspect building envelope, windows, insulation, existing ductwork, and gas supply line sizing.",
      },
      {
        step: "02",
        title: "Removal of Legacy Equipment",
        description: "Disconnect gas lines, flue venting, and high-voltage wiring; remove old furnace cleanly from the home.",
      },
      {
        step: "03",
        title: "Precision Furnace Setting & Duct Transitions",
        description: "Set the new furnace on isolation pads, fabricate custom sheet metal plenum transitions, and seal with mastic.",
      },
      {
        step: "04",
        title: "Gas Piping, Venting & Condensate Plumbing",
        description: "Install black iron gas piping with sediment trap, run pitched dual-pipe PVC venting, and plumb acid-resistant condensate drains.",
      },
      {
        step: "05",
        title: "Combustion Commissioning & Walkthrough",
        description: "Calibrate gas manifold pressure, run full combustion analysis, test safety shutoffs, and demonstrate thermostat settings.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Heat Exchanger Safety",
        repairIf: "Heat exchanger passed borescope and combustion tests with zero defects.",
        replaceIf: "Any crack, rust hole, or weld separation discovered — replacement is legally and ethically required.",
      },
      {
        factor: "Equipment Age",
        repairIf: "Furnace is under 12 years old with common minor electrical switch or motor issues.",
        replaceIf: "Furnace is 18+ years old, obsolete, and operating at low 65% AFUE efficiency.",
      },
      {
        factor: "Fuel Savings",
        repairIf: "Fuel costs are reasonable and system runs reliably.",
        replaceIf: "Upgrading from 70% to 96% AFUE saves substantial money on high-cost propane.",
      },
      {
        factor: "Home Renovations",
        repairIf: "Existing heating meets the heating load of the current footprint.",
        replaceIf: "Adding room additions or finishing attics requiring re-engineered heating BTU capacity.",
      },
    ],
    caseStudy: {
      title: "Amelia County 96% AFUE Propane Furnace Upgrade",
      description: "Replaced a noisy 25-year-old 80% furnace in Amelia with a high-efficiency 96% two-stage variable-speed gas furnace, running new dual-pipe PVC sidewall venting and reducing winter propane fill frequency.",
      metric: "Reduced annual propane heating fuel consumption by 22%",
    },
  },
  {
    slug: "heating-maintenance",
    name: "Heating Maintenance & Safety Tune-Up",
    short: "Pre-winter safety tune-up: combustion analysis, heat exchanger testing, and carbon monoxide verification.",
    category: "hvac",
    image: "svc-maintenance",
    imageAlt: "Technician performing a heating safety tune-up and checking burner combustion",
    tagline: "Essential pre-winter safety inspection to protect your home and family.",
    major: true,
    intro: [
      "Heating systems sit idle throughout the hot Virginia summer, accumulating dust, spider webs in burner orifices, and moisture in the flue. Firing up a furnace or heat pump in late autumn without a safety inspection invites combustion hazards, gas leaks, and unexpected breakdowns on the coldest night of the year.",
      "J&J Mechanical's pre-winter heating tune-up inspects every safety control, cleans burners, checks flame sensors, inspects heat exchangers, and analyzes flue gases across Blackstone, Crewe, Farmville, and Victoria.",
    ],
    sections: [
      {
        h: "Flue Gas Combustion Analysis",
        p: "We insert calibrated combustion analyzer probes into the exhaust flue to measure oxygen, carbon monoxide, carbon dioxide, and stack temperature. These numbers reveal whether fuel is burning cleanly or creating soot and dangerous CO levels inside the cabinet.",
      },
      {
        h: "Burner Assembly Cleaning & Flame Sensor Service",
        p: "Oxidation on the flame sensor is the #1 reason furnaces fail to stay running in late fall. We clean the flame sensor, vacuum burner compartments, clear burner crossover ports, and verify smooth, quiet ignition across all burners.",
      },
      {
        h: "Blower Motor & Electrical Safety",
        p: "Restricted airflow causes furnaces to overheat and trip high-limit switches. We test blower motor capacitor microfarads, check motor amp draw, verify belt tension where applicable, and inspect electrical wiring terminals for heat discoloration.",
      },
    ],
    benefits: [
      "Ensures zero carbon monoxide leakage into your living areas",
      "Reduces winter heating fuel consumption by optimizing combustion",
      "Prevents no-heat emergency service calls during severe cold snaps",
      "Maintains active manufacturer warranty compliance",
      "Complimentary priority scheduling for Comfort Guard plan members",
    ],
    signs: [
      "Heating system has not been inspected by a professional in the past 12 months",
      "Burners ignite with an audible bang or delayed puff of gas",
      "Slight burning odor persists after the first day of winter operation",
      "Soot visible around the burner compartment or chimney connection",
      "Furnace runs for 5 minutes, shuts down, and restarts repeatedly",
    ],
    faqs: [
      {
        q: "When is the best time for a heating tune-up in Southside Virginia?",
        a: "September through November, before freezing weather arrives. Servicing the system before you depend on it daily ensures you are not caught in an emergency rush when the first frost hits.",
      },
      {
        q: "Why does my furnace smell like it is burning when first turned on?",
        a: "A brief burning dust smell on the first chilly morning is normal as dust that settled on the heat exchanger burns off. However, if the smell lingers, smells like burning wire, or smells like sulfur/gas, shut it off and call us immediately.",
      },
      {
        q: "Does a heat pump require different maintenance than a gas furnace?",
        a: "Yes. Heat pumps require inspection of the reversing valve, defrost cycle controls, auxiliary electric heat strips, and refrigerant charge, whereas gas furnaces require combustion analysis, gas valve pressure checks, and heat exchanger crack testing.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Electronic Flue Gas Combustion Analyzer",
        check: "Carbon Monoxide PPM & Combustion Efficiency",
        purpose: "Ensures carbon monoxide is under safe manufacturer limits and burning at peak AFUE efficiency.",
      },
      {
        tool: "Digital Gas Leak Detector",
        check: "Gas Supply Lines & Shutoff Valves",
        purpose: "Scans fittings, union joints, and the gas valve body for minute fuel leaks with audible alarm.",
      },
      {
        tool: "High-Resolution Optical Borescope",
        check: "Heat Exchanger Surface & Seams",
        purpose: "Inspects internal heat exchanger passages that are invisible to the naked eye.",
      },
      {
        tool: "Static Pressure Gauge",
        check: "Plenum Temperature Rise & Airflow CFM",
        purpose: "Verifies supply and return temperature rise matches rating plate (typically 30°F–60°F rise).",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Gas & Electrical Safety Inspection",
        description: "Check for gas leaks at valves, verify electrical grounding, and test emergency shutoff switches.",
      },
      {
        step: "02",
        title: "Burner & Igniter Cleaning",
        description: "Remove and clean the flame rectification sensor, inspect hot surface igniter resistance, and clear burner ports.",
      },
      {
        step: "03",
        title: "Combustion Analysis & Draft Verification",
        description: "Measure flue draft vacuum, inspect exhaust venting for obstructions or animal nests, and run combustion analysis.",
      },
      {
        step: "04",
        title: "Blower Assembly & Filter Inspection",
        description: "Inspect blower wheel for dust accumulation, check capacitor capacitance, and inspect air filter condition.",
      },
      {
        step: "05",
        title: "Written Safety Report & Certification",
        description: "Review test findings, gas pressure readings, and combustion safety metrics with the homeowner.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Safety Verification",
        repairIf: "Combustion numbers and safety limit switches test within factory parameters.",
        replaceIf: "Unsafe CO levels detected or structural heat exchanger failure discovered.",
      },
      {
        factor: "Preventative Value",
        repairIf: "Annual tune-up cleans soot and replaces aging igniters before they fail.",
        replaceIf: "Neglected equipment with severe corrosion and compromised draft motors.",
      },
      {
        factor: "Warranty Protection",
        repairIf: "Documented annual tune-up preserves manufacturer 10-year parts coverage.",
        replaceIf: "Lack of service records causes manufacturer warranty claim denial.",
      },
      {
        factor: "Energy Bill Stability",
        repairIf: "Tuned combustion and balanced blower keep heating bills predictable.",
        replaceIf: "Untuned system burns 15%+ more fuel due to incomplete combustion.",
      },
    ],
    caseStudy: {
      title: "Farmville Pre-Winter Heating Safety Inspection",
      description: "During a routine pre-winter tune-up on a rental property in Farmville, discovered a bird nest blocking the flue chimney, causing carbon monoxide spillage. Cleared the obstruction and installed a protective flue cap.",
      metric: "Eliminated serious carbon monoxide hazard before winter heating season",
    },
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    short: "Specialized repairs for natural gas and propane furnaces by licensed gas contractors.",
    category: "hvac",
    image: "svc-furnace",
    imageAlt: "Technician diagnosing a gas furnace control board and testing pressure switches",
    tagline: "Pinpoint diagnostics for gas and propane furnaces — safe, certified, and fast.",
    major: true,
    intro: [
      "A malfunctioning gas furnace is a serious issue that demands certified technicians who understand gas pressure, electrical sequence controls, and combustion dynamics. Attempting amateur repairs or ignoring warning signs can lead to fuel leaks, carbon monoxide exposure, or sudden complete heat loss.",
      "J&J Mechanical holds master mechanical and gas licenses in Virginia. We service both natural gas and propane furnaces across Blackstone, Crewe, Farmville, Victoria, and Burkeville, arriving with fully stocked trucks to diagnose and fix furnace breakdowns quickly.",
    ],
    sections: [
      {
        h: "Pressure Switch & Inducer Motor Issues",
        p: "The draft inducer motor must pull a vacuum through the heat exchanger before the control board permits the gas valve to open. If the inducer motor fails, the chimney flue is restricted, or the condensate trap in a condensing furnace is clogged, the pressure switch will stay open and shut down the cycle. We test vacuum levels with digital manometers to identify the exact restriction.",
      },
      {
        h: "Gas Valve & Manifold Pressure Calibration",
        p: "Gas valves must supply exact fuel pressure to the burners — typically 3.5 inches of water column for natural gas and 10.0 inches for propane. Improper pressure causes soot, delayed ignition, or incomplete combustion. We test line and manifold pressure, replacing stuck or failing gas valves to factory tolerances.",
      },
      {
        h: "Control Board & Fault Code Interpretation",
        p: "Modern furnaces communicate through LED diagnostic flash codes on the integrated control module. We decode these signals, test high-voltage relays, check 24V transformer output, and verify that the board is executing the correct safety sequence without intermittent faults.",
      },
    ],
    benefits: [
      "Licensed Virginia gas fitting and mechanical contractor",
      "Factory replacement igniters, gas valves, and control boards on truck",
      "Natural gas and propane system experience across Southside Virginia",
      "Combustion testing and carbon monoxide check on every furnace repair",
      "24/7 emergency response for no-heat situations in freezing weather",
    ],
    signs: [
      "Furnace LED flashes error codes and unit refuses to ignite",
      "Inducer fan runs continuously but burners never light",
      "Clicking sounds without ignition, followed by system lockout",
      "Blower motor runs constantly blowing cool air while burners are off",
      "Faint smell of gas or burning odor near the furnace cabinet",
    ],
    faqs: [
      {
        q: "What does it mean when my furnace clicks three times and stops?",
        a: "That indicates the furnace attempted ignition three times, failed to sense a flame, and entered a safety lockout mode (typically lasting 1 to 3 hours). The cause is usually a cracked igniter, oxidized flame sensor, or closed gas valve.",
      },
      {
        q: "Can I convert my furnace from natural gas to propane?",
        a: "Yes. Propane operates at much higher pressure and BTU content than natural gas, requiring specific burner orifices, a propane gas valve spring, and burner adjustments. We perform certified LP conversions throughout rural counties.",
      },
      {
        q: "How do I know if my furnace heat exchanger is cracked?",
        a: "Signs include a flickering or floating flame when the indoor blower turns on, soot deposits inside the cabinet, carbon monoxide alarm activation, or eye/throat irritation. We confirm cracks with video borescopes and combustion analyzers.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Dual-Port Digital Manometer",
        check: "Draft Inducer Negative Pressure (in.w.c.)",
        purpose: "Verifies the inducer motor generates the exact vacuum required to close the pressure switch.",
      },
      {
        tool: "Hot Surface Igniter Ohmmeter",
        check: "Silicon Nitride / Carbide Resistance",
        purpose: "Measures electrical resistance (typically 45–90 ohms for carbide) to identify hairline ceramic fractures.",
      },
      {
        tool: "Digital Gas Sniffer",
        check: "Gas Valve & Manifold Union Seal",
        purpose: "Pinpoints minute gas leaks at threaded joints, flex connectors, and the gas valve body.",
      },
      {
        tool: "True-RMS Multimeter",
        check: "24VAC Control Circuit & Limit Switches",
        purpose: "Traces safety loop continuity across rollout switches, high-limits, and auxiliary safety interlocks.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Initial Safety & Error Code Reading",
        description: "Inspect the furnace sight glass for blinking diagnostic codes, check gas supply valve, and verify power.",
      },
      {
        step: "02",
        title: "Sequential Electrical & Draft Testing",
        description: "Test inducer motor amp draw, pressure switch vacuum, hot surface igniter resistance, and 24V control circuit.",
      },
      {
        step: "03",
        title: "Diagnosis & Guaranteed Pricing",
        description: "Explain the diagnosis clearly to the homeowner and provide a firm, upfront repair quote before turning a screw.",
      },
      {
        step: "04",
        title: "Component Replacement & Gas Calibration",
        description: "Install factory-grade components, set gas manifold pressure with a manometer, and secure electrical wiring.",
      },
      {
        step: "05",
        title: "Full Ignition & Safety Cycle",
        description: "Cycle the furnace through three complete ignition sequences, test limit switches, and verify zero carbon monoxide.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Heat Exchanger Safety",
        repairIf: "Heat exchanger has zero cracks, holes, or carbon monoxide leakage.",
        replaceIf: "Heat exchanger is cracked or rusted through; equipment must be shut down and replaced.",
      },
      {
        factor: "Age & Parts Availability",
        repairIf: "Furnace is under 15 years old with readily available OEM replacement parts.",
        replaceIf: "Obsolete furnace where replacement control boards or draft motors are discontinued.",
      },
      {
        factor: "Repair Cost Threshold",
        repairIf: "Repair cost is minor compared to system value.",
        replaceIf: "Repair exceeds $800–$1,000 on a unit over 15 years old.",
      },
      {
        factor: "Fuel Efficiency",
        repairIf: "Unit is a high-efficiency 90%+ condensing model.",
        replaceIf: "Unit is an old 70% atmospheric model with draft diverter wasting expensive propane.",
      },
    ],
    caseStudy: {
      title: "Burkeville Propane Furnace Pressure Switch Troubleshooting",
      description: "Dispatched to a rural Burkeville property where the furnace failed to ignite on a 22°F night. Found a clogged condensate drain trap backing water into the draft inducer housing, tripping the pressure switch. Cleared trap, flushed line, and restored heat.",
      metric: "Fixed root cause without unneeded parts replacement",
    },
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation",
    short: "Professional installation of high-efficiency gas and propane furnaces.",
    category: "hvac",
    image: "svc-furnace-install",
    imageAlt: "Technician installing black iron gas piping on a new condensing furnace",
    tagline: "Whisper-quiet, high-efficiency gas heating installed with code-compliant precision.",
    major: true,
    intro: [
      "Replacing your home's gas or propane furnace is one of the most critical mechanical investments you will make. A high-efficiency furnace not only keeps your home warm through freezing weather, but it also controls winter humidity, filters indoor air, and significantly lowers monthly utility bills.",
      "J&J Mechanical installs top-tier 80% and 96%+ AFUE gas and propane furnaces throughout Blackstone, Crewe, Farmville, and Victoria. We perform Manual J load sizing, custom sheet metal plenum fabrication, and complete gas pressure testing on every installation.",
    ],
    sections: [
      {
        h: "Modulating & Variable-Speed Comfort",
        p: "Standard furnaces operate in all-or-nothing bursts. Our high-efficiency installations feature modulating gas valves and variable-speed ECM blowers that adjust output in tiny increments, matching heat loss in real time. The result is continuous, whisper-quiet warmth without cold drafts or hot spots.",
      },
      {
        h: "Clean Direct-Vent PVC Exhaust Systems",
        p: "Older furnaces exhaust hot gases through chimneys, losing heat and risking draft back-spillage. Modern condensing furnaces extract so much heat that exhaust gases can be vented safely through sealed PVC pipes out the side wall. We install dedicated intake and exhaust piping to protect indoor air quality.",
      },
      {
        h: "Gas Line Sizing & Pressure Testing",
        p: "A new furnace requires adequate gas volume to fire safely at full capacity. We calculate BTU load requirements across all gas appliances, verify black iron pipe sizing, install sediment traps, and perform code-required pressure tests before firing the burners.",
      },
    ],
    benefits: [
      "Engineered Manual J calculations ensure exact equipment sizing",
      "Up to 97% AFUE efficiency reduces gas and propane heating costs",
      "Whisper-quiet variable-speed ECM blower motors save electrical power",
      "Permits pulled and county municipal inspections coordinated for you",
      "10-year parts warranty and lifetime heat exchanger warranty on select models",
    ],
    signs: [
      "Current furnace is over 15–20 years old and breaking down repeatedly",
      "Safety inspection revealed a cracked or deteriorated heat exchanger",
      "Heating bills continue climbing despite unchanged thermostat settings",
      "Furnace runs loudly, rattles, or creates cold spots across your home",
      "System uses obsolete standing pilot technology rather than electronic ignition",
    ],
    faqs: [
      {
        q: "What is the difference between an 80% and 96% AFUE furnace?",
        a: "An 80% furnace loses 20 cents of every fuel dollar up the chimney. A 96% condensing furnace captures that lost heat with a secondary stainless steel heat exchanger, saving 16%–20% on heating fuel every single winter.",
      },
      {
        q: "Can you install a gas furnace if my home currently has electric heat?",
        a: "Yes! If you have natural gas available on your street or a propane tank on your property, we can run new permitted gas piping, install the furnace, and transition your ductwork.",
      },
      {
        q: "How long does a furnace installation take?",
        a: "A typical furnace replacement takes one day (6 to 8 hours). We ensure your home is clean, tested, and warm before our crew leaves your property.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Manual J Load Sizing Software",
        check: "Exact Heat Loss Calculation",
        purpose: "Guarantees furnace BTU output matches home heat loss without short-cycling.",
      },
      {
        tool: "Digital Manometer",
        check: "Gas Manifold & Inlet Pressure",
        purpose: "Calibrates fuel pressure precisely to manufacturer specifications.",
      },
      {
        tool: "Electronic Flue Gas Combustion Analyzer",
        check: "Combustion Efficiency & CO PPM",
        purpose: "Verifies safe and clean combustion before customer handover.",
      },
      {
        tool: "Static Pressure Probe",
        check: "External Static Pressure Across Coil & Filter",
        purpose: "Validates that duct static pressure is within the 0.5 in.w.c. rating for ECM blower motor longevity.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Heat Loss Calculation & Sizing",
        description: "Measure the property, inspect gas supply piping and duct sizing, and calculate exact BTU heating requirements.",
      },
      {
        step: "02",
        title: "Clean Removal of Old Furnace",
        description: "Shut off gas and electric, disconnect existing venting, and haul away old equipment and scrap metal.",
      },
      {
        step: "03",
        title: "Furnace Placement & Custom Sheet Metal",
        description: "Position new furnace on anti-vibration pads, fabricate custom supply/return plenums, and seal joints with mastic.",
      },
      {
        step: "04",
        title: "Gas Piping, Venting & Condensate Drain",
        description: "Install black iron pipe with sediment trap, run dual-pipe PVC venting, and plumb acid-resistant condensate drains.",
      },
      {
        step: "05",
        title: "Combustion Commissioning & Walkthrough",
        description: "Perform flue gas analysis, calibrate gas pressure, test safety controls, and guide the homeowner through thermostat operation.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Heat Exchanger Safety",
        repairIf: "Heat exchanger is intact with zero cracks or leaks.",
        replaceIf: "Cracked or rusted heat exchanger discovered; replacement is required.",
      },
      {
        factor: "Furnace Age",
        repairIf: "Furnace is under 12 years old with minor switch or igniter issue.",
        replaceIf: "Furnace is over 15–20 years old and facing an expensive major repair.",
      },
      {
        factor: "Fuel Efficiency",
        repairIf: "Existing high-efficiency unit operating properly.",
        replaceIf: "Upgrading from an old 65%–70% furnace saves substantial money on expensive fuel.",
      },
      {
        factor: "Warranty Protection",
        repairIf: "Existing unit still covered by manufacturer warranty.",
        replaceIf: "New furnace includes 10-year parts warranty and lifetime heat exchanger coverage.",
      },
    ],
    caseStudy: {
      title: "Crewe High-Efficiency Condensing Furnace Replacement",
      description: "Replaced a 22-year-old cracked 80% furnace in Crewe with a high-efficiency 96% two-stage gas furnace, installing dedicated outside combustion air venting and sealing return plenum connections.",
      metric: "Restored safe heat and cut monthly gas bills by 19%",
    },
  },
  {
    slug: "furnace-maintenance",
    name: "Furnace Maintenance",
    short: "Annual furnace tune-up: burner cleaning, heat exchanger inspection, and safety checks.",
    category: "hvac",
    image: "svc-furnace",
    imageAlt: "Technician cleaning burners and checking gas pressure on a residential furnace",
    tagline: "Keep your furnace safe, clean, and efficient all winter long.",
    major: true,
    intro: [
      "Natural gas and propane furnaces require annual professional maintenance to operate safely and reliably. Dust accumulation on burners, corrosion on flame sensors, and improper gas pressure reduce heating efficiency and can lead to dangerous carbon monoxide leaks.",
      "J&J Mechanical provides detailed annual furnace tune-ups across Blackstone, Crewe, Farmville, and Victoria. Our licensed technicians inspect every component, clean burners, check heat exchangers, and verify combustion safety to keep your home warm and protected.",
    ],
    sections: [
      {
        h: "Burner & Flame Sensor Cleaning",
        p: "Dust, pet hair, and oxidation coat burner ports and flame sensors over time. A dirty flame sensor will fail to detect the flame, causing the furnace to shut down repeatedly. We remove, clean, and inspect burner assemblies to ensure smooth, quiet ignition.",
      },
      {
        h: "Heat Exchanger Camera Inspection",
        p: "The heat exchanger keeps deadly exhaust gases separate from the air your family breathes. During maintenance, we inspect heat exchanger cells with high-definition borescopes to check for microscopic cracks, rust pitting, or flame impingement before they become dangerous.",
      },
      {
        h: "Gas Pressure & Safety Control Testing",
        p: "We test gas supply and manifold pressure using digital manometers, adjust pressure to factory specifications, and test safety limit switches, rollout sensors, and draft pressure switches to ensure fail-safe operation.",
      },
    ],
    benefits: [
      "Ensures safe combustion with zero carbon monoxide leakage",
      "Reduces winter heating fuel consumption by optimizing burner efficiency",
      "Catches failing parts before they cause mid-winter emergency breakdowns",
      "Preserves active manufacturer equipment warranties",
      "Includes comprehensive written safety inspection report",
    ],
    signs: [
      "Furnace has not received professional service in the last 12 months",
      "Burners ignite with an audible bang or delay",
      "Flames appear yellow or orange instead of a steady blue",
      "Soot or rust flakes visible inside the burner compartment",
      "Furnace cycles on and off more frequently than normal",
    ],
    faqs: [
      {
        q: "Why is an annual furnace tune-up necessary if my furnace is working fine?",
        a: "Many dangerous furnace issues — such as hairline heat exchanger cracks or carbon monoxide spillage — produce no obvious symptoms until it is too late. Regular tune-ups identify safety hazards and keep fuel efficiency at peak levels.",
      },
      {
        q: "What is included in a J&J Mechanical furnace tune-up?",
        a: "We clean burners and flame sensors, inspect the heat exchanger, test gas manifold pressure, analyze flue combustion gases, test safety limit controls, check the blower motor and capacitor, and verify thermostat calibration.",
      },
      {
        q: "How does furnace maintenance affect my manufacturer warranty?",
        a: "Virtually all major furnace manufacturers (Daikin, Trane, Carrier, Lennox, Goodman) require annual professional maintenance in their warranty terms. Failing to maintain service records can lead to denied warranty claims on expensive parts.",
      },
    ],
    diagnosticSteps: [
      {
        tool: "Combustion Gas Analyzer",
        check: "Flue Carbon Monoxide (CO) & Efficiency",
        purpose: "Confirms safe, clean combustion within manufacturer specifications.",
      },
      {
        tool: "Digital Gas Manometer",
        check: "Manifold Gas Pressure (in.w.c.)",
        purpose: "Verifies correct fuel delivery for natural gas or propane.",
      },
      {
        tool: "Optical Video Borescope",
        check: "Internal Heat Exchanger Surfaces",
        purpose: "Scans for hairline cracks, rust pitting, or seam separation.",
      },
      {
        tool: "True-RMS Multimeter",
        check: "Blower Motor Amperage & Capacitor Health",
        purpose: "Ensures electrical components operate within nameplate ratings.",
      },
    ],
    workSteps: [
      {
        step: "01",
        title: "Gas & Electrical Safety Check",
        description: "Test for gas leaks at valves, verify electrical ground, and inspect emergency disconnect switches.",
      },
      {
        step: "02",
        title: "Burner & Flame Sensor Service",
        description: "Remove and clean the flame sensor, inspect the hot surface igniter, and vacuum burner ports.",
      },
      {
        step: "03",
        title: "Combustion Analysis & Flue Inspection",
        description: "Measure flue gas draft, check exhaust piping for blockages, and analyze combustion efficiency.",
      },
      {
        step: "04",
        title: "Blower & Electrical Inspection",
        description: "Inspect the blower wheel for debris, test capacitor microfarads, and inspect wiring terminals.",
      },
      {
        step: "05",
        title: "Written Safety Certification",
        description: "Document all measured readings, confirm carbon monoxide safety, and review recommendations with the homeowner.",
      },
    ],
    decisionCriteria: [
      {
        factor: "Safety Verification",
        repairIf: "Combustion and safety limit switches test within factory parameters.",
        replaceIf: "Unsafe CO levels detected or structural heat exchanger failure discovered.",
      },
      {
        factor: "Preventative Value",
        repairIf: "Annual tune-up cleans soot and replaces aging igniters before they fail.",
        replaceIf: "Neglected equipment with severe corrosion and compromised draft motors.",
      },
      {
        factor: "Warranty Protection",
        repairIf: "Documented annual tune-up preserves manufacturer 10-year parts coverage.",
        replaceIf: "Lack of service records causes manufacturer warranty claim denial.",
      },
      {
        factor: "Energy Bill Stability",
        repairIf: "Tuned combustion and balanced blower keep heating bills predictable.",
        replaceIf: "Untuned system burns 15%+ more fuel due to incomplete combustion.",
      },
    ],
    caseStudy: {
      title: "Victoria Gas Furnace Pre-Winter Tune-Up",
      description: "During an annual tune-up on a propane furnace in Victoria, found manifold pressure set 2.0 in.w.c. too high from a previous amateur repair, causing sooting and incomplete combustion. Recalibrated gas valve to factory spec.",
      metric: "Eliminated soot buildup and restored 96% combustion efficiency",
    },
  },
];
