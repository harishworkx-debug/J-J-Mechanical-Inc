export const SITE = {
  name: "J&J Mechanical",
  legalName: "J&J Mechanical LLC",
  domain: "https://www.jjmechanicalservice.com",
  phone: "(434) 206-8795",
  phoneRaw: "4342068795",
  phoneHref: "tel:+14342068795",
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
    name: "Tracey Levens",
    city: "Blackstone Area",
    rating: 5,
    text: "J&J Mechanical is a family run, veteran owned business which is something we value and respect. Our old nordyne hvac system was freezing up and we were freezing in our home this winter. We decided to replace our hvac with 2 Daikin fits.",
    service: "HVAC Replacement",
  },
  {
    name: "Evy E",
    city: "Blackstone Area",
    rating: 5,
    text: "Very happy with Jesse and Jonah's service. They fixed a water leak in our Rv, they were very professional, fast and trustworthy. Best service in Blackstone Area! Highly recommend!",
    service: "Plumbing Leak Repair",
  },
  {
    name: "jeannette cohen-parker",
    city: "Local",
    rating: 5,
    text: "My experience from beginning to end was Excellent. I called at 12:30 a.m. and was met with kindness, professionalism and a real urgency for my situation. Ms. Kimberly took care of my emotional needs along with the plumbing issues that needed to be done. She stayed on top of everything. Ms. Selena called my tenant and myself with continual updates. Thank you ladies so much. You made this a Great experience!!! And as for your plumber he is top-notch!!!",
    service: "Emergency Plumbing",
  },
  {
    name: "German Padilla",
    city: "Local",
    rating: 5,
    text: "Great service! The technician (Jessie) is knowledgeable and professional. He informed me of the findings and the steps to correct them... Overall, my experience with J&J Mechanical has been excellent, and I will recommend their service.",
    service: "HVAC Service",
  },
  {
    name: "mary gattermeir",
    city: "Local",
    rating: 5,
    text: "Johnathan and Jesse installed a new Daikin fit ac/heating unit in our home and a new navien tankless hot water heater. The did a great job listening to what we wanted and recommended energy efficient systems. Our new systems are quiet and efficient... I highly recommend these guys.",
    service: "HVAC & Tankless Install",
  },
  {
    name: "William Bacon",
    city: "Local",
    rating: 5,
    text: "Very good with coming out quick to emergency situations. Not cheap but you get what you pay for these days and they stand by their work with good warranties. I’m done dealing with uninsured jack legs.",
    service: "Emergency Service",
  },
  {
    name: "Kathlin Longest",
    city: "Local",
    rating: 5,
    text: "Even on a holiday weekend, they were able to meet and assist me last minute! Definitely went above and beyond and it was appreciated on a hot weekend with no AC!",
    service: "Emergency AC Repair",
  },
  {
    name: "Greg Wood",
    city: "Local",
    rating: 5,
    text: "Very good experience. Knowledgeable and professional. Did a great job repairing duckwork and servicing heat pump.",
    service: "A/C System Maintenance",
  },
  {
    name: "Jewell Papillion",
    city: "Local",
    rating: 5,
    text: "My Air conditioner was not working correctly. I called J&J out and the same day the issue was fixed. The two techs were awesome, fast and clean highly recommend!",
    service: "AC Repair",
  },
  {
    name: "Noah Cheeks",
    city: "Local",
    rating: 5,
    text: "Great company and awesome staff! I had a blockage, called and they came out and fixed issue same day. Very satisfied.",
    service: "Plumbing Repair",
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
