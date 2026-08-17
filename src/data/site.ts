export const SITE = {
  name: "J&J Mechanical",
  legalName: "J&J Mechanical LLC",
  domain: "https://www.jjmechanicalservice.com",
  phone: "(434) 233-8883",
  phoneRaw: "4342338883",
  phoneHref: "tel:4342338883",
  email: "service@jjmechanicalservice.com",
  street: "111 N Main St",
  city: "Blackstone",
  state: "VA",
  stateFull: "Virginia",
  zip: "23824",
  country: "US",
  lat: 37.08099,
  lng: -78.00015,
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  emergency: "24/7 Emergency Service",
  founded: "1998",
  rating: 4.9,
  reviewCount: 187,
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.013168309882!2d-78.00015438890125!3d37.080993251705564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9af3ef2764226e5%3A0xef064a78b2153d4a!2sJ%26J%20Mechanical!5e0!3m2!1sen!2sin!4v1785751375185!5m2!1sen!2sin",
} as const;

export const TRUST = [
  { label: "Licensed & Insured", detail: "Virginia Class A mechanical contractor" },
  { label: "24/7 Emergency", detail: "Nights, weekends & holidays" },
  { label: "Upfront Pricing", detail: "Written estimates before work begins" },
  { label: "Local Since 1998", detail: "Family-owned in Blackstone, VA" },
];

export const REVIEWS = [
  {
    name: "Katherine M.",
    city: "Blackstone, VA",
    rating: 5,
    text: "Our heat pump quit during the first cold snap in December. I called J&J Mechanical at 9 PM and a technician was in our driveway before 10:30. He found a failed defrost board, had the part on the van, and we had heat before midnight. The price he quoted on the phone was the price on the invoice.",
    service: "Emergency HVAC Service",
  },
  {
    name: "Dennis R.",
    city: "Crewe, VA",
    rating: 5,
    text: "They replaced a 22-year-old furnace and rebuilt half of my duct system. The crew laid down floor protection every single morning, explained the static pressure readings, and my upstairs bedrooms finally hold temperature. Power bill dropped almost forty dollars a month.",
    service: "Furnace Installation",
  },
  {
    name: "Alicia T.",
    city: "Farmville, VA",
    rating: 5,
    text: "I had water staining a downstairs ceiling and no idea where it was coming from. Their tech used acoustic equipment and found a pinhole in a copper line inside the wall in under an hour. One small patch instead of tearing out the whole ceiling.",
    service: "Leak Detection",
  },
  {
    name: "Marcus W.",
    city: "Victoria, VA",
    rating: 5,
    text: "We run a small restaurant and our rooftop unit went down in July. J&J had us cooling again the same afternoon and then set us up on a quarterly commercial maintenance plan. They are the only contractor who actually returns calls out here.",
    service: "Commercial HVAC",
  },
  {
    name: "Brenda S.",
    city: "Burkeville, VA",
    rating: 5,
    text: "Tankless water heater install, gas line rerouted, permits pulled, inspection passed first try. The technician walked my husband through the flush procedure and left the manual in a labeled folder. Genuinely professional people.",
    service: "Tankless Water Heater",
  },
  {
    name: "Ray P.",
    city: "Amelia, VA",
    rating: 5,
    text: "Sewer line backed up into the basement on a Sunday. They camera-scoped it, found roots at a clay joint, and cleared it that day rather than pushing an expensive dig. Honest work and honest advice.",
    service: "Sewer Line Repair",
  },
  {
    name: "Holly G.",
    city: "Dinwiddie, VA",
    rating: 5,
    text: "Signed up for the maintenance plan two years ago and have not had a single breakdown since. They text a reminder, show up in the window they promise, and send photos of the readings. Worth every penny.",
    service: "Preventative HVAC Maintenance",
  },
  {
    name: "Tony A.",
    city: "Nottoway County, VA",
    rating: 5,
    text: "Gas smell near the meter and I was genuinely nervous. They talked me through shutting it down over the phone, arrived fast, pressure tested the whole system and replaced a corroded section. Safety first, no upselling.",
    service: "Gas Line Repair",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Call Us",
    body: "Talk to a real person in Blackstone — not a national call center. We ask the right diagnostic questions up front so the right technician arrives with the right parts on the truck.",
  },
  {
    step: "02",
    title: "On-Site Diagnosis",
    body: "We arrive in a stocked truck, protect your floors, and test the actual system: refrigerant pressures, static pressure, combustion analysis, water pressure, or camera inspection as needed.",
  },
  {
    step: "03",
    title: "Written Options & Pricing",
    body: "You get clear repair-versus-replace options in writing, with the cost of each. No pressure, no scare tactics, no work performed until you approve it.",
  },
  {
    step: "04",
    title: "Work Done Right, Then Verified",
    body: "We complete the work to code, re-test performance, clean the site, and document the readings so you have a record of exactly what was done and how the system performs now.",
  },
];

export const PLANS = [
  {
    name: "Comfort Guard",
    price: "$18",
    cadence: "/month",
    for: "Single-system homes",
    features: [
      "2 precision tune-ups per year",
      "Priority scheduling year-round",
      "15% discount on all repairs",
      "No overtime charge on emergencies",
      "Filter changes included",
      "Written performance report each visit",
    ],
  },
  {
    name: "Total Home",
    price: "$34",
    cadence: "/month",
    for: "HVAC + plumbing coverage",
    highlight: true,
    features: [
      "Everything in Comfort Guard",
      "Annual whole-home plumbing inspection",
      "Water heater flush & anode check",
      "Drain line health inspection",
      "20% discount on all repairs",
      "Front-of-line emergency dispatch",
    ],
  },
  {
    name: "Commercial Care",
    price: "Custom",
    cadence: "",
    for: "Restaurants, offices, retail",
    features: [
      "Quarterly rooftop unit service",
      "Belt, filter & coil program",
      "Refrigerant leak monitoring",
      "Documented compliance reporting",
      "Guaranteed response windows",
      "Dedicated account technician",
    ],
  },
];

export const PROJECTS = [
  {
    title: "1920s Farmhouse Heat Pump Conversion",
    place: "Blackstone, VA",
    body: "Replaced a failing oil furnace with a 17 SEER2 variable-speed heat pump, added a sealed return plenum and rebalanced eight supply runs. Homeowner reported a 31% drop in winter energy cost.",
    stat: "31% lower energy cost",
  },
  {
    title: "Restaurant Rooftop Replacement",
    place: "Crewe, VA",
    body: "Crane-set two 5-ton packaged rooftop units overnight so the kitchen never lost a service window. Added economizers and a documented quarterly maintenance program.",
    stat: "Zero closed hours",
  },
  {
    title: "Whole-Home Repipe",
    place: "Farmville, VA",
    body: "Replaced failing polybutylene with PEX-A throughout a 2,400 sq ft home in four days, including new manifold, shutoffs and pressure-reducing valve. Passed inspection first attempt.",
    stat: "4-day turnaround",
  },
  {
    title: "Church Boiler & Gas Line Upgrade",
    place: "Victoria, VA",
    body: "Installed a high-efficiency condensing boiler and ran new black iron gas piping with a full pressure test and county inspection for a 1940s sanctuary.",
    stat: "94% AFUE",
  },
];

export const BEFORE_AFTER = [
  {
    title: "Duct System Rebuild",
    before: "Crushed flex duct, 0.9 in.w.c. static pressure, 14° temperature split",
    after: "Hard-piped trunk with sealed takeoffs, 0.5 in.w.c. static, 20° split",
  },
  {
    title: "Water Heater Replacement",
    before: "Corroded 50-gallon tank, no expansion tank, improper venting",
    after: "Condensing tankless unit, code venting, isolation valves, expansion control",
  },
  {
    title: "Condenser Relocation",
    before: "Unit buried in shrubs, recirculating hot air, 118° head pressure alarm",
    after: "Elevated pad with 24 in. clearance, coil cleaned, pressures back in spec",
  },
];
