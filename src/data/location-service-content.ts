import type { Service, Location, Faq, DecisionCriterion } from "./types";
import { REVIEWS } from "./site";

export interface LocationServiceData {
  customIntro: string[];
  localChallenges: { title: string; description: string }[];
  localBenefits: string[];
  localCaseStudy: { title: string; description: string; metric: string };
  localFaqs: Faq[];
  reviews: typeof REVIEWS;
}

// Map each location to town-specific proof and case studies
const TOWN_CASE_STUDIES: Record<string, { title: string; description: string; metric: string }> = {
  "blackstone-va": {
    title: "1920s Historic Downtown Blackstone Heat Pump Conversion",
    description:
      "Replaced an inefficient fuel-oil system with a 17 SEER2 variable-capacity heat pump, sealed legacy crawlspace return plenums, and rebalanced airflow across two stories near Main Street.",
    metric: "31% reduction in winter electricity expense",
  },
  "crewe-va": {
    title: "Crewe Railroad District Packaged Unit & Duct Retrofit",
    description:
      "Upgraded a high-static crawlspace duct system and installed a quiet heat pump for a 1930s railroad cottage along Tyler Ave, eliminating airflow whistling and lowering indoor summer humidity to 48%.",
    metric: "Airflow increased by 28% with zero duct noise",
  },
  "farmville-va": {
    title: "Farmville Historic Corridor Whole-Home Repipe & HVAC Overhaul",
    description:
      "Replaced failing polybutylene supply lines with expansion PEX-A throughout a 2,400 sq ft student rental home near Longwood, completing all work and passing town inspection in four days.",
    metric: "Zero tenant downtime; passed inspection on first attempt",
  },
  "victoria-va": {
    title: "Victoria Sanctuary High-Efficiency Condensing Boiler & Propane Line",
    description:
      "Engineered and installed a 94% AFUE condensing boiler and ran 2-inch black iron gas piping with full county inspection for a historic Victoria church facility.",
    metric: "94% AFUE efficiency with zero gas pressure drop",
  },
  "burkeville-va": {
    title: "Burkeville Rural Homestead Dual-Fuel Heat Pump Installation",
    description:
      "Installed a high-efficiency inverter heat pump paired with an existing LP gas furnace for a rural property near the 360/460 junction, protecting crawlspace lines against freezing.",
    metric: "Cut winter propane deliveries from 4 down to 2 fills/year",
  },
  "nottoway-county-va": {
    title: "Nottoway County Farmhouse Well Filtration & Water Heater Overhaul",
    description:
      "Installed a commercial-grade sediment filter, heavy-duty pressure tank, and high-recovery water heater for an agricultural property struggling with sediment scaling and low pressure.",
    metric: "Restored steady 60 PSI water pressure across all outbuildings",
  },
  "amelia-va": {
    title: "Amelia County Multi-System Estate HVAC Synchronization",
    description:
      "Diagnosed chronic cooling imbalance on a 3,800 sq ft rural estate with three separate air handlers. Replaced failing blower motors, balanced static pressure, and labeled all circuits.",
    metric: "Balanced temperatures to within 1.5°F across all wings",
  },
  "dinwiddie-va": {
    title: "Dinwiddie Subdivision Builder-Grade Heat Pump Replacement",
    description:
      "Replaced an undersized 10 SEER builder-grade cooling unit in western Dinwiddie with a variable-speed inverter system, modifying return ductwork to eliminate static pressure choking.",
    metric: "Cut peak July electric cooling bill by $145/month",
  },
};

export function getLocationServiceData(service: Service, location: Location): LocationServiceData {
  const locSlug = location.slug;
  const isAcRepair = service.slug === "ac-repair" || service.slug === "hvac-repair";
  const isAcMaintenance = service.slug === "ac-maintenance" || service.slug === "hvac-maintenance";
  const isAcInstallation = service.slug === "ac-installation" || service.slug === "heat-pump-installation";
  const isHeatingOrFurnace =
    service.slug.includes("heating") ||
    service.slug.includes("furnace") ||
    service.slug.includes("heat-pump");
  const isPlumbing = service.category === "plumbing";
  const isGas = service.category === "gas";

  // 1. Generate Highly Specific, Town-Specific Narrative Intro
  let p1 = "";
  let p2 = "";

  if (locSlug === "blackstone-va") {
    if (isAcRepair) {
      p1 = `In Blackstone, summer heat cycles regularly exceed 90°F with intense Southside humidity. When an air conditioner fails on College Avenue, 6th Street, or near Fort Barfoot, the most frequent culprits are failed dual run capacitors from prolonged thermal load, clogged condensate float switches causing unexpected lockouts, or iced evaporator coils stemming from crawlspace return leaks.`;
      p2 = `Because our shop is located right at 111 N Main Street in Blackstone, our technicians dispatch with immediate proximity. Our service trucks are stocked with calibrated digital manifold gauges, megohmmeters, universal fan motors, and heavy-duty 45/5 MFD capacitors. We measure compressor running amperage and test temperature splits (18°F–22°F delta-T) before we declare any repair complete.`;
    } else if (isAcMaintenance) {
      p1 = `Southside Virginia's pollen and cottonwood quickly coat outdoor condenser fins across Blackstone, driving up head pressure and forcing compressors to consume up to 20% more electricity. Our precision 21-point AC tune-up is engineered specifically to prevent sudden July and August breakdowns across Blackstone's historic and mid-century homes.`;
      p2 = `Dispatched directly from our 111 N Main Street headquarters, our technicians chemically wash outdoor coils, clear condensate drain lines with dry nitrogen, treat drain pans against algae, and test capacitor microfarads to replace weak parts before they leave you without cooling.`;
    } else if (isAcInstallation) {
      p1 = `Replacing an air conditioner in Blackstone requires precise matching to the home's architecture — from early 1900s historic homes with narrow duct chases to 1970s crawlspace ranches. Oversized equipment cycles rapidly without removing humidity, while undersized units run constantly. We perform exact Manual J load calculations to size cooling capacity accurately.`;
      p2 = `We install elevated composite pads, replace deteriorated line set insulation, seal duct plenums with mastic, and pull deep vacuums below 500 microns before charging. Every installation is backed by Virginia Class A mechanical contractor licensing and 10-year manufacturer warranties.`;
    } else if (isHeatingOrFurnace) {
      p1 = `Blackstone winters regularly bring nighttime temperatures into the teens. For homes relying on heat pumps with electric backup or dual-fuel systems paired with LP gas furnaces, a stuck reversing valve or failed emergency heat sequencer can cause immediate indoor chill or dramatic electric bill spikes.`;
      p2 = `Our Blackstone shop carries OEM heating sequencers, dual-fuel control boards, igniters, and calibrated combustion analyzers. We diagnose the true electrical or mechanical fault and provide written options before any repair proceeds.`;
    } else if (isPlumbing) {
      p1 = `Plumbing service in Blackstone benefits from our direct downtown shop base on N Main Street. From older historic homes with legacy cast iron and galvanized piping to 1980s homes containing deteriorating polybutylene, our licensed plumbers understand the exact water pressure dynamics and municipal infrastructure serving Blackstone and Fort Barfoot.`;
      p2 = `We treat every Blackstone plumbing call with diagnostic rigor: measuring static water pressure, inspecting supply shutoffs, and performing camera inspections on clogged sewer cleanouts. All repairs are pressure tested before we leave your home to ensure lasting reliability.`;
    } else {
      p1 = `Gas and propane line work in Blackstone demands licensed precision. Whether running black iron gas piping for a historic home remodel downtown or connecting high-capacity propane tanks on outlying properties, J&J Mechanical holds master Virginia gas licenses to size, permit, and pressure test every line to local code.`;
      p2 = `We calculate connected BTU demand across all appliances to guarantee that your furnace, range, and tankless water heater never starve when firing simultaneously, backing every installation with a documented county inspection test.`;
    }
  } else if (locSlug === "crewe-va") {
    if (isAcRepair) {
      p1 = `Crewe was built as a vital Norfolk and Western railroad town, and its distinct housing stock along Tyler, Carolina, Maryland, and Tennessee avenues features tall ceilings and retrofitted ductwork squeezed into tight crawlspaces. High static pressure from undersized return grills is the single most common cause of frozen evaporator coils, choked airflow, and premature capacitor burnout in Crewe cooling systems.`;
      p2 = `Located just 10 miles east along Route 460, our Blackstone shop provides rapid, same-day dispatch to Crewe. When we arrive for AC repair, our technicians use digital manometers to measure total external static pressure, test compressor windings under load, and replace pitted contactor relays with heavy-duty components — solving the underlying root cause rather than swapping parts.`;
    } else if (isAcMaintenance) {
      p1 = `Crewe's older crawlspace duct networks frequently suffer from uninsulated joints and damp crawlspace humidity. Our 21-point AC maintenance inspects both indoor airflow CFM and outdoor heat exchange, clearing debris and inspecting electrical components to protect Crewe homeowners against mid-summer cooling failures.`;
      p2 = `Dispatched straight down US-460 from Blackstone, our technicians back-flush condenser coils, test capacitor microfarads, and blow out condensate lines with pressurized nitrogen to ensure uninterrupted summer comfort.`;
    } else if (isPlumbing) {
      p1 = `Crewe's older homes frequently feature aging galvanized steel water lines and original cast iron drains that are prone to mineral scaling, interior corrosion, and root intrusion. In outlying subdivisions, polybutylene piping from the late 20th century presents sudden leak risks that can compromise crawlspaces.`;
      p2 = `J&J Mechanical provides Crewe homeowners with honest pipe health assessments. We clear main line clogs with commercial motorized cables, locate hidden leaks with non-invasive acoustic sensors, and perform durable PEX-A repiping backed by written warranties.`;
    } else {
      p1 = `Whether you are adding a gas fireplace in a historic Crewe railroad home or connecting a propane generator for winter power resilience, J&J Mechanical provides permitted, code-compliant gas piping throughout Crewe and Nottoway County.`;
      p2 = `We handle everything from BTU calculations and county permits to pressure testing and final appliance connection with zero travel surcharges.`;
    }
  } else if (locSlug === "farmville-va") {
    if (isAcRepair) {
      p1 = `Farmville's cooling demands are shaped by high latent summer humidity along the Appomattox River corridor, combined with continuous equipment runtime across student rental properties near Longwood University and Hampden-Sydney College. During prolonged 90°F+ heat waves, heavy cooling loads push capacitors, fan motors, and thermal expansion valves (TXVs) to their limits.`;
      p2 = `J&J Mechanical runs daily scheduled routes into Farmville along US-460 West (approx. 35 minutes from our shop). Our technicians arrive with fully equipped vans carrying universal fan motors, contactors, digital manifold gauges, and electronic leak detectors. We deliver transparent written diagnostic findings and upfront pricing for homeowners, landlords, and local business operators.`;
    } else if (isAcMaintenance) {
      p1 = `High humidity in Farmville causes rapid algae accumulation in air handler condensate drain pans, triggering safety float switches and shutting down cooling systems unexpectedly. Our professional AC tune-up cleans condensate traps, flushes lines, and treats pans to prevent water overflow into ceilings and floors.`;
      p2 = `We back-flush condenser coils, test capacitor tolerances, and verify subcooling levels across Farmville residences and rental properties, ensuring systems run at peak efficiency with lower monthly electric consumption.`;
    } else if (isPlumbing) {
      p1 = `With a dense rental market serving Longwood University alongside historic residences with original heart pine floors, plumbing failures in Farmville demand fast, clean, and accountable solutions. A single leaking angle stop or blocked sewer main can quickly become an expensive property damage claim if not resolved immediately.`;
      p2 = `Our Farmville plumbing routes handle everything from emergency water heater replacements and hidden leak detection in historic plaster walls to commercial drain cabling and hydro-jetting for local restaurants. We arrive in fully equipped vans with upfront flat-rate pricing.`;
    } else {
      p1 = `Gas service in Farmville requires expertise across both municipal utility connections in-town and propane configurations on rural outskirts. J&J Mechanical pulls permits with the local building department, performs certified load calculations, and installs code-compliant black iron and bonded CSST piping for restaurants, student housing, and private residences.`;
      p2 = `Every gas line installation in Farmville is held under a witnessed pressure test to guarantee 100% airtight safety before fuel is introduced.`;
    }
  } else if (locSlug === "victoria-va") {
    if (isAcRepair || isAcMaintenance || isHeatingOrFurnace) {
      p1 = `Victoria's rural setting in Lunenburg County means equipment is subjected to open-terrain summer heat, wind-driven winter cold, and frequent rural thunderstorm power fluctuations that damage sensitive electronics in standard heat pumps and furnaces. In addition, propane heating systems and dual-fuel configurations dominate Victoria residences outside the immediate town center.`;
      p2 = `J&J Mechanical schedules regular service into Victoria and Lunenburg County, dispatching from our Blackstone shop just a short drive north. We carry heavy-duty surge-protected contactors, universal capacitors, and calibrated combustion analyzers for Victoria's propane heating systems, ensuring your family stays comfortable in every season.`;
    } else if (isPlumbing) {
      p1 = `A large share of Victoria and Lunenburg County properties depend on private wells and septic systems. Well water in this area frequently carries mineral hardness, iron, and sediment that scale up water heater elements, foul tankless heat exchangers, and cause premature toilet valve failure.`;
      p2 = `Our plumbers test water chemistry, service pressure tanks and switches, and install sediment filtration alongside water heater repairs. We understand rural Lunenburg County plumbing systems inside and out.`;
    } else {
      p1 = `Propane is the primary heating and cooking fuel across Victoria. Proper propane piping requires specific pipe sizing, approved regulator staging, and gas pressure calibration to prevent appliance starvation and sooting.`;
      p2 = `J&J Mechanical coordinates with your local propane supplier, runs underground polyethylene or black iron lines, and provides documented pressure testing that satisfies Lunenburg County building inspectors.`;
    }
  } else if (locSlug === "amelia-va") {
    if (isAcRepair || isAcMaintenance || isHeatingOrFurnace) {
      p1 = `Amelia County is defined by rolling farmland, large rural acreage, and spacious custom homes that frequently utilize multiple separate HVAC systems — such as separate heat pumps for first-floor living areas, second-floor bedrooms, and detached garages or workshops. When a system malfunctions on a multi-unit property, identifying the failing circuit and balancing multi-zone airflow requires systematic technical documentation.`;
      p2 = `J&J Mechanical travels northeast into Amelia County regularly. We record model and serial data, document filter sizes, and perform calibrated diagnostic testing on every separate unit on your property, providing upfront flat-rate pricing with no hidden rural travel surcharges.`;
    } else if (isPlumbing) {
      p1 = `Amelia's rural estates and farmhouses rely on private wells, long underground supply runs, and exterior frost-free hydrants. Freezing winter winds can quickly freeze uninsulated crawlspace pipes or well pump supply lines.`;
      p2 = `J&J Mechanical repairs well pressure switches, replaces failed pressure tanks, fixes frozen or burst pipes, and installs whole-home water treatment systems designed for Amelia County's local soil and water conditions.`;
    } else {
      p1 = `From underground gas lines powering standby backup generators during rural power outages to propane heating lines for workshops and barns, J&J Mechanical delivers certified gas piping across Amelia County.`;
      p2 = `All underground runs use approved MDPE polyethylene with tracer wire at required burial depths, backed by municipal permit filing and inspection coordination.`;
    }
  } else if (locSlug === "dinwiddie-va") {
    if (isAcRepair || isAcMaintenance || isHeatingOrFurnace) {
      p1 = `In western and central Dinwiddie County, many homes built during the residential expansion of the 1990s and 2000s were equipped with builder-grade heat pumps installed on minimum-dimension ductwork. As these systems reach their 15- to 20-year lifespan, homeowners face chronic refrigerant leaks, failing compressors, and high summer electric bills.`;
      p2 = `J&J Mechanical travels east along Route 460 into Dinwiddie to deliver precision mechanical diagnostics. We measure total external static pressure to verify whether your existing ductwork can support a modern high-efficiency variable-speed heat pump, ensuring you don't inherit the same airflow choking on replacement equipment.`;
    } else if (isPlumbing) {
      p1 = `Dinwiddie County features a mix of county water and private well systems, many with challenging water chemistry — including iron and sulfur that can erode water heater tank linings and clog plumbing fixtures.`;
      p2 = `Our plumbers test water hardness, replace leaking water heaters with high-efficiency tank or tankless units, clear main drain lines, and repipe older homes with durable expansion PEX-A.`;
    } else {
      p1 = `We install and repair gas lines for Dinwiddie County homes and businesses, including connections for high-capacity generators, gas ranges, outdoor fire features, and high-efficiency gas furnaces.`;
      p2 = `Every Dinwiddie gas installation is pressure tested to code and certified with local county building inspectors.`;
    }
  } else if (locSlug === "burkeville-va") {
    if (isAcRepair || isAcMaintenance || isHeatingOrFurnace) {
      p1 = `Burkeville sits right at the junction of Routes 360 and 460, just minutes west of our Blackstone shop. Burkeville properties enjoy some of our fastest response times for ${service.name.toLowerCase()}. Homes in this area range from in-town residences to open-country homesteads with unshaded outdoor condensing units exposed to intense sun heat loads.`;
      p2 = `When you call J&J Mechanical from Burkeville, our technicians arrive in fully stocked vans ready to test electrical windings, measure refrigerant subcooling, and restore dual-season comfort with transparent, upfront pricing.`;
    } else if (isPlumbing) {
      p1 = `Burkeville's mix of town-water homes and surrounding well-and-septic farm properties means plumbing issues can range from municipal sewer cleanouts to well pressure switch failures and frozen crawlspace water lines.`;
      p2 = `We provide rapid emergency plumbing dispatch to Burkeville, testing line pressure, repairing leaks, clearing stubborn sewer blockages, and installing code-compliant water heaters.`;
    } else {
      p1 = `From black iron gas lines inside town homes to underground propane piping run out to detached shops and barns in rural Burkeville, J&J Mechanical provides certified, permitted gas fitting.`;
      p2 = `We perform precise load calculations to prevent pressure drop and guarantee safe, leak-free operation.`;
    }
  } else {
    // nottoway-county-va
    if (isAcRepair || isAcMaintenance || isHeatingOrFurnace) {
      p1 = `Nottoway County has been our home since 1998. From Blackstone and Crewe through Burkeville, Wellville, and the surrounding farmland, we understand the specific heating and cooling demands of rural Southside Virginia homes — including manufactured homes requiring specialized high-static furnaces and historic farmhouses with uninsulated attics.`;
      p2 = `We dispatch directly from our 111 N Main Street shop in Blackstone, providing Nottoway County residents with same-day appointments, 24/7 emergency response, and zero travel surcharges across the entire county.`;
    } else if (isPlumbing) {
      p1 = `Serving Nottoway County means being equally prepared for municipal water and sewer lines in town centers as well as rural well pressure tanks, water filtration, and septic connections on country roads.`;
      p2 = `J&J Mechanical stocks parts for both systems on our service trucks, providing fast leak repairs, water heater replacements, and drain clearing throughout Nottoway County.`;
    } else {
      p1 = `We handle natural gas and propane piping across Nottoway County, from new appliance hookups and backup generator gas lines to whole-home gas conversions.`;
      p2 = `All work is sized per national fuel gas codes and inspected in coordination with Nottoway County building officials.`;
    }
  }

  // 2. Location-Specific Engineering Challenges
  const localChallenges = [
    {
      title: `${location.name} Housing Architecture`,
      description: location.housing,
    },
    {
      title: `${location.name} Climate & Seasonal Load`,
      description: location.climate,
    },
    {
      title: `Shop Proximity & Dispatch Speed`,
      description: `${location.drive} Emergency calls are dispatched directly from our Blackstone shop at 111 N Main St.`,
    },
  ];

  // 3. Location-Specific Benefits
  const localBenefits = [
    `Direct local dispatch from 111 N Main St, Blackstone (${location.drive})`,
    `Familiar with ${location.county} building codes and inspection procedures`,
    `Zero travel surcharge for standard or emergency service in ${location.name}`,
    `Specialized experience with ${location.name}'s architectural and water conditions`,
    `Virginia Class A Contractor with written flat-rate quotes on every call`,
  ];

  // 4. Town-Specific Case Study
  const localCaseStudy = TOWN_CASE_STUDIES[locSlug] || {
    title: `${location.name} Mechanical Performance Upgrade`,
    description: `Diagnosed and resolved complex airflow and mechanical balance issues for a residential property in ${location.full}, restoring efficient operation and lowering utility consumption.`,
    metric: "Documented performance restoration & lower operating costs",
  };

  // 5. Town-Specific FAQs Tailored to Service Category
  let localFaqs: Faq[] = [];

  if (isAcRepair) {
    if (locSlug === "blackstone-va") {
      localFaqs = [
        {
          q: "Why did my AC stop blowing cold air in Blackstone?",
          a: "In Blackstone homes, the most common cooling failures are failed dual run capacitors from extreme summer heat, a tripped condensate float switch from clogged drain lines, or an iced evaporator coil due to dirty filters or leaky crawlspace return ducts.",
        },
        {
          q: "How fast is AC repair dispatch in Blackstone?",
          a: "Because our shop is at 111 N Main St in Blackstone, our technicians dispatch with immediate local proximity. In-town calls are prioritized directly from our downtown shop.",
        },
        {
          q: "Should I repair or replace my aging air conditioner in Blackstone?",
          a: "We follow the industry-standard $5,000 rule: multiply the age of the unit by the repair quote. If the result exceeds $5,000, or if your system uses phased-out R-22 Freon, replacement is generally the more cost-effective choice.",
        },
        {
          q: "Do you service properties near Fort Barfoot?",
          a: "Yes. We frequently service residential housing and commercial facilities around Fort Barfoot and all Blackstone neighborhoods.",
        },
      ];
    } else if (locSlug === "crewe-va") {
      localFaqs = [
        {
          q: "Why is ice forming on my AC unit in Crewe?",
          a: "Crewe railroad-era homes frequently have retrofitted flex ducts squeezed into tight crawlspaces, creating high static pressure and choked return airflow. When airflow drops, the evaporator coil drops below 32°F and freezes solid.",
        },
        {
          q: "How quickly can a technician reach Crewe from your shop?",
          a: "Our shop is on Route 460 in Blackstone, just 10 miles east of Crewe. Travel time is typically 10 to 12 minutes, allowing us to provide rapid same-day response.",
        },
        {
          q: "Do you carry universal replacement parts for Crewe service calls?",
          a: "Yes. Our service vans are stocked with universal capacitors, contactors, fan motors, and refrigerant leak detection gear to resolve most breakdowns in a single trip.",
        },
        {
          q: "Do you work on historic homes along Tyler or Carolina Avenue?",
          a: "Yes. We have decades of experience diagnosing and servicing mechanical systems retrofitted into Crewe's historic turn-of-the-century residences.",
        },
      ];
    } else if (locSlug === "farmville-va") {
      localFaqs = [
        {
          q: "Do you service student rental properties near Longwood and Hampden-Sydney?",
          a: "Yes. We work directly with Farmville homeowners, landlords, and property management companies to restore cooling quickly and provide itemized documentation for maintenance records.",
        },
        {
          q: "Why does my Farmville AC run constantly without lowering the temperature?",
          a: "High summer humidity along the Appomattox River creates heavy latent cooling loads. If your system has a slight refrigerant leak, a dirty coil, or an undersized return duct, it will run continuously without satisfying the thermostat.",
        },
        {
          q: "How quickly do you dispatch to Farmville via Route 460?",
          a: "We run daily routes westward along US-460 into Farmville (approximately 35 minutes from our Blackstone shop), providing scheduled appointments and prompt emergency dispatch.",
        },
        {
          q: "Do you charge mileage or travel fees to come to Farmville?",
          a: "No. Farmville and Prince Edward County are in our core service territory. You pay our standard upfront flat-rate diagnostic fee with zero travel surcharges.",
        },
      ];
    }
  } else if (isAcMaintenance) {
    if (locSlug === "blackstone-va") {
      localFaqs = [
        {
          q: "What does an AC tune-up in Blackstone include?",
          a: "Our 21-point precision tune-up includes chemical cleaning of the outdoor condenser coil, testing capacitor microfarads under load, flushing the condensate drain line with dry nitrogen, testing the safety float switch, and verifying refrigerant subcooling.",
        },
        {
          q: "When is the best time for Blackstone residents to schedule cooling maintenance?",
          a: "Spring (March through May) is the ideal window. Tuning the system before peak summer heat arrives prevents mid-season breakdowns and ensures maximum energy efficiency.",
        },
        {
          q: "Does regular maintenance keep my manufacturer warranty valid?",
          a: "Yes. Major manufacturers like Daikin, Trane, and Carrier require documented annual professional maintenance to honor 10-year parts warranties on compressors and coils.",
        },
      ];
    }
  }

  // Fallback to standard local FAQs if specific ones were not set above
  if (localFaqs.length === 0) {
    localFaqs = [
      {
        q: `How quickly can J&J Mechanical reach my home in ${location.name} for ${service.name.toLowerCase()}?`,
        a: `Our shop is located at 111 N Main St in Blackstone. ${location.drive} For emergency calls, our on-call technician dispatches promptly 24 hours a day, 7 days a week.`,
      },
      {
        q: `Do you charge a travel surcharge to come to ${location.name}?`,
        a: `No. ${location.name} is within our core Southside Virginia service area, so you pay our standard upfront flat-rate diagnostic fee with zero hidden travel or mileage surcharges.`,
      },
      {
        q: `Do you pull permits with ${location.county} Building Inspections?`,
        a: `Yes. J&J Mechanical holds a Virginia Class A Contractor license. We pull all required mechanical, plumbing, and gas permits with ${location.county} and coordinate final inspections for you.`,
      },
      {
        q: `How does ${location.name}'s housing and climate affect my ${service.name.toLowerCase()}?`,
        a: `${location.housing} In addition, ${location.climate.toLowerCase()} Our technicians factor these exact local realities into our diagnostic testing and equipment recommendations.`,
      },
    ];
  }

  // 6. Select Service-Relevant and Location-Relevant Customer Reviews
  let targetReviewNames: string[] = [];

  if (isAcRepair || isAcMaintenance) {
    if (locSlug === "blackstone-va") {
      targetReviewNames = ["Jewell Papillion", "Tracey Levens", "Kathlin Longest"];
    } else if (locSlug === "crewe-va") {
      targetReviewNames = ["Greg Wood", "William Bacon", "Jewell Papillion"];
    } else if (locSlug === "farmville-va") {
      targetReviewNames = ["mary gattermeir", "Kathlin Longest", "German Padilla"];
    } else {
      targetReviewNames = ["Kathlin Longest", "Jewell Papillion", "Greg Wood"];
    }
  } else if (isPlumbing) {
    if (locSlug === "blackstone-va") {
      targetReviewNames = ["Evy E", "Noah Cheeks", "jeannette cohen-parker"];
    } else {
      targetReviewNames = ["jeannette cohen-parker", "Noah Cheeks", "Evy E"];
    }
  } else {
    // HVAC replacement / Heat Pump / Gas
    targetReviewNames = ["Tracey Levens", "mary gattermeir", "German Padilla"];
  }

  const filteredReviews = REVIEWS.filter((r) => targetReviewNames.includes(r.name));
  const finalReviews = filteredReviews.length >= 2 ? filteredReviews : REVIEWS.slice(0, 3);

  return {
    customIntro: [p1, p2],
    localChallenges,
    localBenefits,
    localCaseStudy,
    localFaqs,
    reviews: finalReviews,
  };
}
