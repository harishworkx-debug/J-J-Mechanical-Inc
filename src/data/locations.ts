import type { Location } from "./types";

export const LOCATIONS: Location[] = [
  {
    slug: "blackstone-va",
    name: "Blackstone",
    full: "Blackstone, VA",
    county: "Nottoway County",
    zips: ["23824"],
    drive: "Our shop is on N Main St — most Blackstone calls are minutes away.",
    intro: [
      "Blackstone is home for J&J Mechanical. Our shop sits at 111 N Main Street, which means when a Blackstone homeowner calls with no heat in February or no cooling in July, we are not driving in from another county — we are already here. That proximity is the single biggest reason our Blackstone response times are the fastest in our service area.",
      "The town's housing stock ranges from turn-of-the-century homes near the historic downtown to mid-century ranches and newer construction toward the edges of town, plus the commercial corridor and properties tied to Fort Barfoot. Each of those categories brings different mechanical realities, and we have worked on all of them for decades.",
    ],
    landmarks: [
      "Historic downtown Main Street district",
      "Fort Barfoot (formerly Fort Pickett)",
      "Nottoway County Courthouse",
      "Schwartz Tavern",
      "Blackstone Municipal Airport",
    ],
    housing:
      "Blackstone properties include early 1900s homes with retrofitted duct systems, 1960s and 70s ranches on crawlspaces, and newer slab construction. Many older homes here still have original ductwork in vented crawlspaces and undersized returns.",
    climate:
      "Blackstone sees humid summers frequently in the low to mid 90s and winters that dip into the teens. Systems here need genuine dual-season capability, which is why heat pumps with correctly configured backup heat dominate.",
    faqs: [
      {
        q: "How fast can you reach my home in Blackstone?",
        a: "Our shop is on N Main St in Blackstone, so most in-town calls are reached within minutes of dispatch, and emergency response is typically under an hour any time of day.",
      },
      {
        q: "Do you work on older homes in the historic district?",
        a: "Yes. Retrofitting comfort systems into early 1900s homes without damaging finishes is routine work for us, including ductless options where duct routing is impractical.",
      },
      {
        q: "Do you serve Fort Barfoot area properties?",
        a: "Yes, we service residential and commercial properties throughout the Blackstone area including housing and facilities near Fort Barfoot.",
      },
    ],
  },
  {
    slug: "crewe-va",
    name: "Crewe",
    full: "Crewe, VA",
    county: "Nottoway County",
    zips: ["23930"],
    drive: "Crewe is a short run west on Route 460 — same-day service is standard.",
    intro: [
      "Crewe sits just west of Blackstone along Route 460, and it is one of our busiest service towns outside of our home base. The town grew around the railroad, and much of the housing dates to that era — solid homes with plaster walls, tall ceilings and mechanical systems that were added long after the house was built.",
      "That history creates a specific set of comfort challenges: retrofitted duct systems squeezed into closets and crawlspaces, uninsulated attic runs, undersized returns and older galvanized or copper plumbing nearing the end of its service life. We have worked on Crewe homes long enough to know what we will find before we open the crawlspace door.",
    ],
    landmarks: [
      "Crewe Railroad Museum",
      "Downtown Crewe business district",
      "Crewe Town Park",
      "Nottoway High School",
    ],
    housing:
      "Predominantly early-to-mid 20th century railroad-era homes with retrofit HVAC, plus mid-century ranches and manufactured homes on the outskirts. Polybutylene and galvanized plumbing are both common finds here.",
    climate:
      "Crewe shares Nottoway County's humid continental pattern: sticky summers that push cooling equipment hard and cold snaps that expose uninsulated crawlspace plumbing to freezing.",
    faqs: [
      {
        q: "Do you charge extra to come to Crewe?",
        a: "No. Crewe is inside our core service area and there is no travel surcharge for standard or emergency service.",
      },
      {
        q: "Can you handle HVAC retrofits in older Crewe homes?",
        a: "Yes, and it is some of our most frequent work here — including duct redesign, zoning and ductless systems for homes where full ductwork is impractical.",
      },
      {
        q: "Do you offer emergency service in Crewe overnight?",
        a: "Yes, 24 hours a day. Crewe is a short drive from our Blackstone shop, so after-hours response is fast.",
      },
    ],
  },
  {
    slug: "farmville-va",
    name: "Farmville",
    full: "Farmville, VA",
    county: "Prince Edward County",
    zips: ["23901", "23909"],
    drive: "Farmville is roughly 30 minutes west — we schedule Farmville routes daily.",
    intro: [
      "Farmville is the largest town we serve and the most mixed in building type. Between Longwood University, Hampden-Sydney nearby, the downtown commercial district and a substantial rental market, Farmville properties range from student housing and historic homes to modern commercial spaces and restaurants with rooftop mechanical equipment.",
      "That mix means we do everything here: emergency plumbing in rental properties, commercial HVAC maintenance for downtown businesses, residential system replacement in established neighborhoods, and leak detection in historic homes where a hidden leak threatens original plaster and heart pine flooring.",
    ],
    landmarks: [
      "Longwood University",
      "High Bridge Trail State Park",
      "Downtown Farmville shopping district",
      "Appomattox River",
      "Hampden-Sydney College (nearby)",
    ],
    housing:
      "Historic in-town homes, established mid-century neighborhoods, a large student rental market and a downtown commercial core with rooftop packaged HVAC equipment and food service plumbing requirements.",
    climate:
      "Farmville's summer humidity is amplified by the Appomattox River corridor, making dehumidification performance as important as raw cooling capacity in older homes with high infiltration.",
    faqs: [
      {
        q: "Do you serve rental and student properties in Farmville?",
        a: "Yes. We work with landlords and property managers on maintenance programs, direct tenant scheduling and consolidated invoicing across multiple units.",
      },
      {
        q: "Can you service Farmville restaurants and commercial buildings?",
        a: "Yes — rooftop HVAC, makeup air balancing, grease line jetting and backflow testing are all services we provide to Farmville businesses.",
      },
      {
        q: "How long does it take you to reach Farmville?",
        a: "Roughly half an hour from our Blackstone shop. We run scheduled routes through Farmville regularly and dispatch emergency calls immediately.",
      },
    ],
  },
  {
    slug: "victoria-va",
    name: "Victoria",
    full: "Victoria, VA",
    county: "Lunenburg County",
    zips: ["23974"],
    drive: "Victoria is a short drive south — same-day appointments are typical.",
    intro: [
      "Victoria was built as a railroad town and retains that compact, walkable character with a mix of early 20th century homes, mid-century construction and rural properties on the surrounding roads. Many Victoria homes rely on propane rather than natural gas, and a large share are on private wells and septic systems.",
      "Those two facts shape almost everything we do here. Propane appliances need correct orifice sizing and regulator setup. Well systems mean pressure tanks, filtration and water chemistry that affects water heaters and tankless equipment far more than municipal water does. We service all of it.",
    ],
    landmarks: [
      "Victoria Railroad Park",
      "Lunenburg County Courthouse area",
      "Downtown Victoria business district",
      "Lunenburg Health Services",
    ],
    housing:
      "Railroad-era in-town homes, mid-century ranches, manufactured homes and rural properties on well and septic systems. Propane is the dominant fuel for heating and cooking appliances.",
    climate:
      "Victoria's warm humid summers and freezing winter nights make dual-season heat pump performance and freeze protection for well lines and crawlspace plumbing both essential.",
    faqs: [
      {
        q: "Do you service propane systems in Victoria?",
        a: "Yes. Propane appliance installation, conversion, gas line work and combustion setup are all routine for us, and we coordinate with local propane suppliers on tank-side work.",
      },
      {
        q: "Can you work on well water systems?",
        a: "Yes — pressure tanks, pressure switches, filtration, softening and the water heater implications of hard well water are all part of our regular work in Lunenburg County.",
      },
      {
        q: "Is emergency service available in Victoria?",
        a: "Yes, 24 hours a day, seven days a week, including holidays.",
      },
    ],
  },
  {
    slug: "burkeville-va",
    name: "Burkeville",
    full: "Burkeville, VA",
    county: "Nottoway County",
    zips: ["23922"],
    drive: "Burkeville is minutes from Blackstone — one of our fastest response areas.",
    intro: [
      "Burkeville is a small Nottoway County town at the junction of Routes 360 and 460, close enough to our Blackstone shop that we often reach customers here faster than in our own town's outlying areas. Properties are a mix of in-town homes, farm and rural residences and small commercial buildings.",
      "Rural Burkeville properties bring the challenges we know well: long crawlspace duct runs, propane heating, private wells, outbuildings and shops that owners want conditioned, and plumbing exposed to freezing along uninsulated foundation walls.",
    ],
    landmarks: [
      "Route 360 and 460 junction",
      "Burkeville Volunteer Fire Department",
      "Nottoway County farmland corridor",
      "Twin Lakes State Park (nearby)",
    ],
    housing:
      "In-town homes, farmhouses, manufactured homes and shops or outbuildings frequently added to existing mechanical systems. Well and septic service is the norm outside the town center.",
    climate:
      "Open rural exposure means wind-driven winter cold on crawlspace plumbing and full summer sun load on outdoor condensing units, both of which affect equipment sizing and freeze protection.",
    faqs: [
      {
        q: "Do you service rural properties outside Burkeville town limits?",
        a: "Yes, throughout Nottoway County including farms, outbuildings and shops. We regularly add heating and cooling to detached structures.",
      },
      {
        q: "Can you run a gas line to a shop or barn?",
        a: "Yes, using approved underground polyethylene with tracer wire at correct burial depth, permitted and pressure tested.",
      },
      {
        q: "How quickly can you reach Burkeville?",
        a: "Burkeville is only minutes from our Blackstone shop, so it is one of our fastest response areas for both scheduled and emergency work.",
      },
    ],
  },
  {
    slug: "nottoway-county-va",
    name: "Nottoway County",
    full: "Nottoway County, VA",
    county: "Nottoway County",
    zips: ["23824", "23930", "23922", "23955"],
    drive: "Nottoway County is our home county — full coverage, fastest response.",
    intro: [
      "Nottoway County is our home county, and we have served it continuously since 1998. From Blackstone and Crewe through Burkeville, Crewe Junction, Blackstone's rural outskirts and the farmland between them, we know the roads, the housing stock, the utility territories and the county inspection process.",
      "Serving a rural county well requires more than a truck and a phone number. It means carrying propane parts and municipal gas parts, understanding well and septic systems as thoroughly as city water and sewer, and stocking components for manufactured homes alongside site-built equipment. That is how we are set up.",
    ],
    landmarks: [
      "Nottoway County Courthouse in Nottoway",
      "Fort Barfoot",
      "Nottoway River",
      "Twin Lakes State Park",
      "Blackstone and Crewe town centers",
    ],
    housing:
      "A full rural mix: historic town homes, mid-century ranches, farmhouses, manufactured homes and small commercial properties. Propane and electric heat dominate outside of town centers.",
    climate:
      "Nottoway County's inland location produces the full range — humid mid-90s summer afternoons and single-digit winter mornings — demanding equipment that genuinely performs in both extremes.",
    faqs: [
      {
        q: "Do you cover the entire county?",
        a: "Yes, all of Nottoway County including Blackstone, Crewe, Burkeville, Nottoway and the surrounding rural areas, with no travel surcharge.",
      },
      {
        q: "Do you pull Nottoway County permits?",
        a: "Yes. We are familiar with the county's permitting and inspection process for HVAC, plumbing and gas work and handle it as part of the job.",
      },
      {
        q: "Do you service manufactured homes?",
        a: "Yes, with the correct manufactured-home-specific equipment and duct components rather than improvised site-built parts.",
      },
    ],
  },
  {
    slug: "amelia-va",
    name: "Amelia",
    full: "Amelia, VA",
    county: "Amelia County",
    zips: ["23002"],
    drive: "Amelia Court House is an easy run northeast — we schedule routes weekly.",
    intro: [
      "Amelia County is largely rural, with Amelia Court House as its center and a great deal of farm and estate property spread along the county roads. Homes here tend to be larger and more spread out, frequently with multiple HVAC systems, detached structures, wells and propane service.",
      "Multi-system properties need a contractor who documents what is where. We label equipment, record model and serial data, track filter sizes and schedule maintenance across every system on the property so nothing gets missed on a house with three air handlers in three different spaces.",
    ],
    landmarks: [
      "Amelia Court House historic district",
      "Amelia Wildlife Management Area",
      "Amelia County Courthouse",
      "Appomattox River corridor",
    ],
    housing:
      "Rural estates, farmhouses, newer custom construction and manufactured homes. Multi-system homes, detached garages and shops, wells and propane tanks are all common.",
    climate:
      "Amelia's open rural terrain and tree cover create high summer humidity loads and significant winter wind exposure on outdoor equipment and crawlspace plumbing.",
    faqs: [
      {
        q: "Do you service homes with multiple HVAC systems?",
        a: "Yes, and we document each system separately with its own readings, filter sizes and maintenance schedule so nothing is overlooked.",
      },
      {
        q: "Do you serve rural Amelia County addresses?",
        a: "Yes, throughout the county including farm and estate properties well off the main routes.",
      },
      {
        q: "Can you heat and cool a detached shop or garage?",
        a: "Yes. Ductless mini-splits and unit heaters are both excellent options for detached structures, and we can run gas lines where propane is preferred.",
      },
    ],
  },
  {
    slug: "dinwiddie-va",
    name: "Dinwiddie",
    full: "Dinwiddie, VA",
    county: "Dinwiddie County",
    zips: ["23841", "23803"],
    drive: "Dinwiddie County is east of us along Route 460 — regular scheduled coverage.",
    intro: [
      "Dinwiddie County stretches east from our service area toward Petersburg, mixing rural farmland with growing residential development and commercial corridors. That growth means we work on both twenty-year-old builder-grade systems reaching end of life and brand-new construction where we are correcting installation shortcuts left by production contractors.",
      "Dinwiddie also has a significant number of homes on wells with challenging water chemistry — iron, hardness and sediment that destroy water heaters and tankless heat exchangers when untreated. Testing water before recommending equipment is not optional here.",
    ],
    landmarks: [
      "Dinwiddie County Courthouse",
      "Virginia Motorsports Park",
      "Route 460 commercial corridor",
      "Lake Chesdin (nearby)",
    ],
    housing:
      "A mix of rural farmland properties, 1990s and 2000s subdivision construction with builder-grade equipment now aging out, and newer development along the growth corridors.",
    climate:
      "Slightly warmer and equally humid summers than our western towns, with the same freezing winter nights — and well water chemistry that materially affects water heating equipment selection.",
    faqs: [
      {
        q: "Do you serve all of Dinwiddie County?",
        a: "We cover the western and central portions of Dinwiddie County regularly, including scheduled maintenance routes and 24/7 emergency dispatch.",
      },
      {
        q: "My builder-grade system is failing early. Is that normal?",
        a: "Unfortunately yes. Production-built homes often received minimum-efficiency equipment on undersized ductwork. We measure static pressure and airflow before recommending replacement so the new system does not inherit the same limitation.",
      },
      {
        q: "Can you test my well water before installing a water heater?",
        a: "Yes. Water chemistry drives equipment choice and filtration needs, particularly for tankless units, and we test before we recommend.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
