import type { Service } from "./types";

export const HVAC_SERVICES: Service[] = [
  {
    slug: "hvac-repair",
    name: "HVAC Repair",
    short: "Diagnostics and same-day repair for heating and cooling systems.",
    category: "hvac",
    image: "svc-hvac-repair",
    imageAlt:
      "J&J Mechanical HVAC technician using digital manifold gauges to diagnose an indoor air handler",
    tagline: "Diagnosed properly the first visit — not guessed at.",
    major: true,
    intro: [
      "When a heating or cooling system stops performing, the difference between a $180 repair and a $9,000 replacement is usually the quality of the diagnosis. Our technicians do not swap parts hoping something changes. Every HVAC repair call starts with measured data: suction and liquid line pressures, superheat and subcooling, temperature split across the coil, static pressure across the air handler, amp draw on the compressor and blower motor, and a visual inspection of the electrical stack.",
      "That discipline matters even more in Southside Virginia, where systems run hard through humid July afternoons and then swing straight into freezing February nights. A capacitor that is 18% out of tolerance will start a compressor in May and fail to start it in August. We find those marginal components before they strand you, and we show you the readings that justify every recommendation we make.",
    ],
    sections: [
      {
        h: "What a Complete HVAC Repair Diagnosis Includes",
        p: "We begin at the thermostat and work through the entire system: control voltage, safety switches, condensate management, blower performance, refrigerant charge and airflow. Roughly a third of the 'broken' systems we are called to have no failed part at all — they have a clogged coil, a saturated filter, a slipping blower wheel or a duct system so restrictive that the equipment cannot deliver its rated capacity. Fixing the actual cause means the repair holds.",
      },
      {
        h: "Repairs We Perform Every Week",
        p: "Failed run and start capacitors, contactors with burned points, weak condenser fan motors, blower motor modules, failed defrost boards on heat pumps, refrigerant leaks at service valves and evaporator coils, cracked heat exchangers, ignition and flame sensor faults, thermostat wiring damage, clogged condensate lines and float switch trips, TXV and metering device failures, and reversing valve problems on heat pumps.",
      },
      {
        h: "Repair or Replace? An Honest Answer",
        p: "We use a simple, transparent standard rather than a sales script: if the repair costs less than a third of a replacement and the equipment has meaningful life left, we repair it. If the system is on R-22, the compressor is failing, or the cabinet has corrosion through the coil, we tell you plainly and give you the numbers both ways. You decide with real information in front of you — never under pressure while your house is 88 degrees.",
      },
    ],
    benefits: [
      "Same-day and 24/7 emergency HVAC repair availability",
      "Fully stocked trucks — most common repairs finished on the first visit",
      "Flat-rate pricing quoted in writing before any work starts",
      "All makes and models serviced, including older and mixed-brand systems",
      "Performance readings documented and left with you after every repair",
    ],
    signs: [
      "Air coming from the vents is not noticeably hotter or colder than the room",
      "Short cycling — the unit starts and stops every few minutes",
      "Grinding, squealing, hard-start clunking or burning smells",
      "Utility bills climbing while comfort stays the same or gets worse",
    ],
    faqs: [
      {
        q: "How fast can you get to an HVAC repair call?",
        a: "For no-heat and no-cool emergencies we target same-day response, and our emergency line is staffed 24/7 including nights, weekends and holidays. Standard service calls are typically scheduled within one business day.",
      },
      {
        q: "Do you charge a diagnostic fee?",
        a: "Yes, a flat diagnostic fee covers the full system evaluation and a written repair quote. That fee is credited toward the repair if you approve the work the same visit.",
      },
      {
        q: "Will you service a system another company installed?",
        a: "Absolutely. We repair every major brand regardless of who installed it, including builder-grade equipment and mixed-brand systems that have been pieced together over the years.",
      },
      {
        q: "Can a repair be done on a system that still uses R-22?",
        a: "Often yes. R-22 is no longer produced but reclaimed refrigerant is available, though costs are high. We will tell you honestly when continuing to feed a leaking R-22 system stops making financial sense.",
      },
    ],
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    short: "Load-calculated system replacement with commissioning documentation.",
    category: "hvac",
    image: "svc-hvac-install",
    imageAlt: "New high-efficiency HVAC system being installed in a Virginia home by J&J Mechanical",
    tagline: "Sized by calculation. Installed to the manufacturer's spec.",
    major: true,
    intro: [
      "Most HVAC systems underperform not because the equipment is poor, but because the installation was rushed. A correctly selected system installed carelessly will cost you comfort and efficiency for the next eighteen years. Every J&J Mechanical installation begins with a Manual J load calculation on your actual house — square footage, orientation, window area and type, insulation levels, infiltration and duct location — never a rule-of-thumb tonnage guess pulled off the old nameplate.",
      "From there we evaluate the duct system with Manual D principles, because installing a modern variable-speed system onto undersized ductwork is the fastest way to waste a homeowner's money. If the ducts need modification, we tell you before you sign, not after the old unit is in the driveway.",
    ],
    sections: [
      {
        h: "Our Installation Standard",
        p: "New line set or a properly flushed and pressure-tested existing set. Nitrogen purge during brazing to prevent internal scale. A deep vacuum pulled to 500 microns and held with a micron gauge, not a timer. Weighed-in refrigerant charge verified by superheat and subcooling. Sealed supply and return plenums, a new secondary drain pan with float switch, a properly sized filter cabinet, and a level pad with correct service clearance.",
      },
      {
        h: "Equipment That Suits Southside Virginia",
        p: "Our climate rewards high-efficiency heat pumps with proper cold-weather performance and a matched backup heat strategy. We install single-stage, two-stage and fully modulating inverter systems, dual-fuel configurations that pair a heat pump with a gas furnace, and ducted or ductless options for additions, sunrooms and shops. We size backup heat deliberately so you are not paying resistance-heat bills all winter.",
      },
      {
        h: "Commissioning and Documentation",
        p: "Installation day is not finished when the system turns on. We measure delivered airflow, static pressure, temperature split, refrigerant charge and amp draw, then leave you a commissioning sheet with those numbers, the model and serial data, your registered warranty confirmation and a walkthrough of the thermostat and filter schedule.",
      },
    ],
    benefits: [
      "Manual J load calculation on every installation — no guessed tonnage",
      "Deep-vacuum, nitrogen-purge installation practice on every line set",
      "Manufacturer warranty registration handled for you",
      "Flexible financing with approved credit on qualifying systems",
      "Old equipment removed, recycled and hauled away same day",
    ],
    signs: [
      "System is more than 15 years old and repairs are becoming routine",
      "Rooms that never reach the thermostat setpoint no matter the season",
      "Equipment still uses R-22 refrigerant",
      "Energy bills significantly higher than similar homes nearby",
    ],
    faqs: [
      {
        q: "How long does a full system replacement take?",
        a: "A straightforward changeout is typically one day. Installations involving duct modification, new line sets, electrical upgrades or crane-set equipment usually run two to three days. You will have a firm schedule before we begin.",
      },
      {
        q: "Do I have to replace both the indoor and outdoor unit?",
        a: "In nearly all cases, yes. Modern outdoor units are engineered to match a specific indoor coil. Mismatching them voids warranties and typically loses 15 to 25 percent of the rated efficiency you paid for.",
      },
      {
        q: "What efficiency rating should I buy?",
        a: "The right answer depends on how long you plan to stay, your current energy costs and your duct condition. We model the payback for two or three options so you can see the real cost difference rather than chasing a number on a sticker.",
      },
      {
        q: "Do you offer financing?",
        a: "Yes. Financing is available with approved credit, including options with low monthly payments that are frequently less than the energy savings on very old equipment.",
      },
    ],
  },
  {
    slug: "air-conditioning-repair",
    name: "Air Conditioning Repair",
    short: "Fast AC diagnostics and repair when Virginia humidity peaks.",
    category: "hvac",
    image: "svc-ac-repair",
    imageAlt: "Technician repairing a residential air conditioning condenser unit outdoors",
    tagline: "Cool air restored, cause identified, readings documented.",
    major: true,
    intro: [
      "Air conditioning failures in Southside Virginia rarely happen in mild weather. They happen on the first 95-degree afternoon when the system has been running at full capacity for six straight hours and a marginal component finally quits. Our AC repair process is built for exactly that call: fast dispatch, a stocked truck, and a diagnosis that identifies why the part failed instead of simply replacing it.",
      "Humidity is the hidden half of the problem here. A system that is oversized or has a restricted return will cool the air without removing enough moisture, leaving a house that reads 74 degrees on the thermostat and still feels clammy. We measure both temperature and relative humidity performance so the fix addresses comfort, not just the number on the wall.",
    ],
    sections: [
      {
        h: "The Most Common AC Failures We Find",
        p: "Weak or failed run capacitors, pitted contactors, seized condenser fan motors, dirty condenser coils choking heat rejection, low refrigerant charge caused by a real leak rather than 'normal loss', frozen evaporator coils from restricted airflow, clogged condensate drains tripping the float switch, failed blower capacitors or ECM modules, and thermostat or low-voltage wiring faults from rodent damage in crawlspaces.",
      },
      {
        h: "Why We Never Just 'Top Off' Refrigerant",
        p: "A sealed system does not consume refrigerant. If your charge is low, there is a leak, and adding refrigerant without finding it means you will pay for the same visit again next season while the compressor runs hot in the meantime. We perform electronic leak detection, nitrogen pressure testing or dye tracing as needed, then quote the repair and the recharge together.",
      },
      {
        h: "Protecting the Compressor",
        p: "The compressor is the single most expensive component in the system, and it usually dies from something preventable: low charge, high head pressure from a dirty coil, a failing capacitor causing hard starts, or restricted airflow. Every AC repair we complete includes checking the conditions that shorten compressor life so a small repair today prevents a system replacement next summer.",
      },
    ],
    benefits: [
      "Emergency AC repair available 24/7 through peak cooling season",
      "Electronic leak detection instead of repeat refrigerant top-offs",
      "Humidity performance evaluated, not just temperature",
      "Repairs backed by a written parts and labor warranty",
      "Straightforward flat-rate pricing before we begin",
    ],
    signs: [
      "Air from the vents feels cool but the house never reaches setpoint",
      "Ice visible on the refrigerant line or indoor coil",
      "Outdoor unit hums but the fan does not spin",
      "Musty smell or high indoor humidity while the system runs",
    ],
    faqs: [
      {
        q: "My AC is frozen solid. What should I do before you arrive?",
        a: "Switch the system to OFF and set the fan to ON. That thaws the coil in one to three hours and prevents liquid refrigerant from reaching the compressor. Then check your filter — a restricted filter causes a large share of freeze-ups.",
      },
      {
        q: "How much does an AC repair typically cost?",
        a: "Common electrical component repairs generally land in the low hundreds. Refrigerant leak repairs and coil or compressor work cost more. You will always receive the exact number in writing before we start.",
      },
      {
        q: "Is it worth repairing a 14-year-old air conditioner?",
        a: "Sometimes. If the repair is inexpensive and the compressor is healthy, repairing is sensible. If the compressor is failing on R-22 equipment, replacement almost always makes better financial sense, and we will show you both figures.",
      },
      {
        q: "Do you work on ductless mini-split systems?",
        a: "Yes. We service and repair ducted and ductless equipment, including inverter-driven mini-splits that require manufacturer-specific diagnostic procedures.",
      },
    ],
  },
  {
    slug: "air-conditioning-installation",
    name: "Air Conditioning Installation",
    short: "Right-sized AC systems installed and commissioned to spec.",
    category: "hvac",
    image: "svc-ac",
    imageAlt: "New air conditioning condenser installed on a concrete pad beside a Virginia home",
    tagline: "Comfort you can measure, not just a new box outside.",
    intro: [
      "A new air conditioner should lower your bills, dry out the house and run quietly for the better part of two decades. Getting there depends far more on sizing and installation quality than on brand. Oversized systems — still the most common mistake in residential AC installation — cool quickly, shut off before removing moisture, and leave homes cold and clammy while wearing out the compressor with constant short cycling.",
      "We calculate the actual cooling load for your home, verify that the duct system can carry the required airflow, and then select equipment that matches both. In our humid Virginia summers, a properly sized two-stage or variable-speed system often delivers a dramatic comfort improvement even before you account for the efficiency gain.",
    ],
    sections: [
      {
        h: "Choosing the Right System",
        p: "Single-stage systems are budget-friendly and reliable. Two-stage systems run longer at lower capacity, cutting humidity and noise. Variable-speed inverter systems modulate continuously, hold temperature within a degree, and dehumidify remarkably well — a real advantage in older Southside homes with high infiltration. We explain the practical difference in plain language and price each option.",
      },
      {
        h: "What Installation Day Looks Like",
        p: "Floor and doorway protection goes down first. We recover the old refrigerant to EPA standards, remove the old equipment, set the new pad and condenser with proper clearance, install or flush the line set, replace the evaporator coil and drain assembly, seal the plenum connections, pull a deep vacuum, weigh in the charge, and then commission the system with measured airflow and temperature split.",
      },
      {
        h: "The Details Cheap Installs Skip",
        p: "A new secondary drain pan and float switch. A properly sized media filter cabinet instead of a restrictive one-inch grille filter. A surge protector at the disconnect. Insulated and UV-rated line set covers. A programmable or smart thermostat correctly configured for your equipment staging. These are small line items that determine whether your system lasts twelve years or twenty.",
      },
    ],
    benefits: [
      "Manual J sizing so the system dehumidifies as well as it cools",
      "Two-stage and inverter options for consistent temperature and quiet operation",
      "Complete commissioning report with airflow and charge documentation",
      "Manufacturer warranty registered on your behalf",
      "Financing available with approved credit",
    ],
    signs: [
      "Your AC is over 12 years old and needs repair again",
      "The house feels humid even when the thermostat is satisfied",
      "Cooling costs rise every summer without a usage change",
      "The system is noticeably loud inside or outside",
    ],
    faqs: [
      {
        q: "What size air conditioner do I need?",
        a: "Only a load calculation can answer that responsibly. Two houses of identical square footage can differ by a full ton based on windows, insulation and orientation. We perform the calculation as part of every estimate at no extra charge.",
      },
      {
        q: "Can I replace only the outdoor unit to save money?",
        a: "We strongly advise against it. Mismatched coils reduce efficiency, shorten equipment life and typically void the manufacturer warranty on the new component.",
      },
      {
        q: "How disruptive is the installation?",
        a: "Most changeouts are complete in a single day, and your home is cooling again the same evening. We protect flooring, keep the work area contained and clean up completely before we leave.",
      },
      {
        q: "Does a higher SEER2 rating always pay for itself?",
        a: "Not always. The payback depends on your runtime hours and electric rate. We model it honestly, and sometimes we recommend a mid-tier system paired with duct improvements instead of premium equipment on poor ductwork.",
      },
    ],
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump Installation",
    short: "High-efficiency heat pumps sized for Virginia winters and summers.",
    category: "hvac",
    image: "svc-heatpump",
    imageAlt: "High-efficiency heat pump outdoor unit installed at a Virginia residence",
    tagline: "One system, both seasons, engineered for our climate.",
    major: true,
    intro: [
      "Heat pumps are the dominant comfort system across Nottoway, Amelia and Prince Edward counties for a good reason: our winters are cold enough to need real heating capacity, but mild enough that a heat pump delivers it at a fraction of the cost of resistance heat or propane. Modern cold-climate inverter units maintain meaningful capacity well below freezing, which was not true of the equipment many homeowners here are still running.",
      "The engineering challenge is the balance point — the outdoor temperature at which the heat pump can no longer keep up alone. Set backup heat to engage too early and your December power bill doubles. Set it too late and the house drifts cold. We calculate the balance point for your home and configure the controls around it.",
    ],
    sections: [
      {
        h: "Standard, Cold-Climate and Dual-Fuel Options",
        p: "Standard heat pumps handle typical Southside winters well when paired with correctly sized auxiliary heat strips. Cold-climate inverter models hold rated capacity to much lower temperatures and are ideal for all-electric homes. Dual-fuel systems pair a heat pump with a gas or propane furnace and automatically switch to the cheaper fuel at your economic crossover point — an excellent choice for homes that already have gas service.",
      },
      {
        h: "Getting Defrost and Backup Heat Right",
        p: "Every heat pump periodically reverses to melt frost off the outdoor coil. Poorly configured systems trigger electric strips during every defrost cycle, which is where surprise winter bills come from. We verify defrost board operation, set outdoor temperature lockouts on the auxiliary heat, and confirm that emergency heat is reserved for actual emergencies.",
      },
      {
        h: "Installation Details That Determine Efficiency",
        p: "The outdoor unit is elevated on a pad or bracket above expected snow and standing water with clear condensate drainage. Line sets are properly sized and insulated. Airflow is measured and adjusted to the manufacturer's specification for heating and cooling modes separately. The thermostat is configured for the correct equipment type — a surprisingly common installation error that quietly costs homeowners hundreds each winter.",
      },
    ],
    benefits: [
      "Balance-point calculation and auxiliary heat lockout configuration",
      "Cold-climate and dual-fuel options for all-electric or gas homes",
      "Elevated pad installation with proper defrost drainage",
      "Documented heating and cooling mode commissioning",
      "Available utility rebates identified and paperwork prepared",
    ],
    signs: [
      "Auxiliary or emergency heat runs frequently in mild weather",
      "Winter electric bills spike far beyond the rest of the year",
      "Existing heat pump is over 12 years old",
      "Outdoor unit ices over and does not clear itself",
    ],
    faqs: [
      {
        q: "Do heat pumps actually work in Virginia winters?",
        a: "Yes. Our design temperatures are well within the effective range of modern equipment, and cold-climate inverter models maintain strong capacity into the teens. Properly configured backup heat covers the coldest handful of days each year.",
      },
      {
        q: "Why does the air from my heat pump feel cooler than a furnace?",
        a: "Heat pumps deliver a larger volume of air at a lower temperature — typically around 95 to 105 degrees rather than 130. The house heats just as effectively, but the airflow feels different at the register. Correct airflow setup minimizes the sensation.",
      },
      {
        q: "How long do heat pumps last here?",
        a: "Twelve to eighteen years is typical, with maintained systems reaching the top of that range. Because a heat pump runs year-round, annual maintenance matters more than it does for a cooling-only system.",
      },
      {
        q: "Is a dual-fuel system worth the extra cost?",
        a: "If you already have natural gas or a propane tank, frequently yes. The system automatically chooses the cheaper fuel based on outdoor temperature, which typically lowers annual heating cost noticeably.",
      },
    ],
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    short: "Defrost, reversing valve and capacity diagnostics done right.",
    category: "hvac",
    image: "svc-heatpump-repair",
    imageAlt: "Technician repairing a heat pump outdoor unit control board in winter",
    tagline: "The system that runs all year needs the technician who understands both modes.",
    intro: [
      "A heat pump is the hardest-working appliance in most Southside Virginia homes. It cools all summer and heats all winter, which means roughly twice the annual runtime of a cooling-only air conditioner. That workload produces failure patterns a general HVAC technician may not immediately recognize — defrost board faults, reversing valve issues, sensor drift and auxiliary heat problems that hide behind a system that appears to be running.",
      "Many heat pump 'failures' we are called out for are actually control and configuration problems. The system heats, but with electric strips carrying the entire load while the compressor sits idle. The homeowner does not notice until the power bill arrives. We test heating and cooling mode independently and verify what is actually producing the heat.",
    ],
    sections: [
      {
        h: "Heat-Specific Faults We Diagnose",
        p: "Failed defrost control boards and defrost thermostats, reversing valve solenoids that will not shift, outdoor sensors reading out of calibration, auxiliary heat sequencers stuck closed, crankcase heaters that failed and allowed refrigerant migration, low charge that shows up only in heating mode, and outdoor coils packed with leaves and grass clippings that cripple heat absorption.",
      },
      {
        h: "The Ice Question",
        p: "A light coat of frost on the outdoor coil in cold weather is normal — the defrost cycle clears it every 30 to 90 minutes. Solid ice covering the coil, ice on top of the cabinet, or a unit still iced hours later is a real fault. Causes include a failed defrost board, a stuck reversing valve, low refrigerant charge, or blocked condensate drainage under the unit. Running that way damages the compressor.",
      },
      {
        h: "Auxiliary Heat Running Constantly",
        p: "If your thermostat displays AUX or EM heat during mild weather, the heat pump is not carrying its share of the load. We check compressor operation in heating mode, verify the reversing valve energizes, test the outdoor temperature lockout setting and confirm the thermostat is configured for a heat pump rather than a conventional furnace. This single fix has saved our customers hundreds of dollars in a winter.",
      },
    ],
    benefits: [
      "Both heating and cooling modes tested on every visit",
      "Defrost cycle observed and timed, not assumed",
      "Auxiliary heat configuration verified to prevent runaway bills",
      "24/7 emergency response for no-heat calls",
      "All major heat pump brands and inverter systems serviced",
    ],
    signs: [
      "Auxiliary or emergency heat indicator stays on in mild weather",
      "Outdoor unit encased in solid ice",
      "System blows cool air in heating mode",
      "Loud whoosh or clunk followed by loss of heat",
    ],
    faqs: [
      {
        q: "Is steam coming off my heat pump a problem?",
        a: "No — that is a normal defrost cycle. The unit briefly reverses to melt frost, and the vapor you see is that ice evaporating. It should finish within about ten minutes and return to heating.",
      },
      {
        q: "Why is my heat pump running constantly in cold weather?",
        a: "Long runtimes are normal and efficient for heat pumps in cold weather. Continuous running combined with a falling indoor temperature is not — that indicates a capacity or charge problem worth diagnosing.",
      },
      {
        q: "Can you repair the reversing valve, or is that a replacement?",
        a: "The solenoid coil is an inexpensive and common repair. The valve body itself requires brazing into the refrigerant circuit and is a larger job; on older systems we present replacement costs alongside it so you can compare.",
      },
      {
        q: "Do you offer emergency heat pump repair at night?",
        a: "Yes. No-heat calls are dispatched 24 hours a day, seven days a week, including weekends and holidays.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    short: "Safe, code-correct gas and electric furnace repair.",
    category: "hvac",
    image: "svc-furnace",
    imageAlt: "HVAC technician replacing a furnace blower motor in a basement mechanical room",
    tagline: "Combustion tested, not eyeballed.",
    major: true,
    intro: [
      "Furnace repair is safety work before it is comfort work. A gas furnace burns fuel a few feet from the air your family breathes, and the components that keep those two streams separated — the heat exchanger, the venting, the combustion air supply — degrade with age. Every furnace repair we perform includes a combustion safety check, not just a fix for the symptom that prompted your call.",
      "Most no-heat calls trace to a short list of parts: hot surface ignitors, flame sensors, pressure switches, inducer motors, gas valves, limit switches and control boards. We carry these on the trucks so the majority of repairs finish on the first visit, which matters at two in the morning in January.",
    ],
    sections: [
      {
        h: "The Combustion Safety Inspection",
        p: "We inspect the heat exchanger visually and, where warranted, with a camera. We test for carbon monoxide in the supply air stream, verify draft and venting integrity, confirm adequate combustion air, check gas pressure at the manifold, and inspect the flame pattern. If we find a cracked heat exchanger we will red-tag the equipment — that is not a scare tactic, it is the only responsible action.",
      },
      {
        h: "Common Furnace Faults",
        p: "A dirty flame sensor causing the burner to light and drop out after a few seconds. A cracked hot surface ignitor that glows but never reaches temperature. A pressure switch that will not close because the condensate trap or inducer port is blocked. A failing inducer motor bearing. Limit switch trips caused by restricted airflow from a filter nobody changed. Rollout switches tripped by a blocked flue.",
      },
      {
        h: "Electric Furnaces and Air Handlers",
        p: "We also repair electric furnaces and air handlers: failed heat strips, burned sequencers, open limit switches, blower motor and ECM module failures, and control board faults. Electric heat draws heavy current, so we inspect the disconnect, breaker sizing and wire terminations at every visit — loose lugs on heat strip circuits are a genuine fire risk.",
      },
    ],
    benefits: [
      "Combustion analysis and carbon monoxide testing included",
      "Common ignition and control parts stocked on every truck",
      "24/7 emergency no-heat response all winter",
      "Gas, propane, oil-to-gas conversions and electric systems serviced",
      "Written warranty on parts and labor",
    ],
    signs: [
      "Burner lights then shuts off after a few seconds",
      "Yellow or lazy flame instead of a crisp blue one",
      "Burning, sooty or acrid smell when heat starts",
      "Frequent breaker trips or a furnace that will not restart",
    ],
    faqs: [
      {
        q: "My furnace clicks but will not light. What is wrong?",
        a: "Typically an ignition-side fault: a failed hot surface ignitor, a dirty flame sensor, a pressure switch not closing, or a gas valve issue. All four are diagnosable in minutes with the right instruments and most are same-visit repairs.",
      },
      {
        q: "What does a cracked heat exchanger mean for me?",
        a: "It means combustion gases including carbon monoxide can enter your breathing air. The furnace must be shut down. Depending on age and warranty status, either the exchanger is replaced or the furnace is replaced — we present both paths with costs.",
      },
      {
        q: "How often should a furnace be serviced?",
        a: "Once a year before heating season. Annual service catches ignition wear, venting problems and airflow restrictions while they are still inexpensive, and it is a warranty requirement for most manufacturers.",
      },
      {
        q: "Do you service propane furnaces?",
        a: "Yes. Propane is common throughout rural Nottoway and Amelia counties, and our technicians carry the correct orifices and manometers for LP conversions and adjustments.",
      },
    ],
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation",
    short: "High-efficiency furnace replacement with correct venting and sizing.",
    category: "hvac",
    image: "svc-furnace-install",
    imageAlt: "New high-efficiency condensing gas furnace installed in a utility closet",
    tagline: "Right size, right venting, right the first time.",
    intro: [
      "Replacing a furnace is a fifteen-to-twenty year decision. The two variables that determine whether you are satisfied for those two decades are sizing and installation quality. Oversized furnaces — extremely common, because contractors match the old nameplate rather than calculating the load — short cycle, produce uneven temperatures, wear out ignition components early and run noisily.",
      "We calculate your home's actual heating load and select equipment accordingly. Then we address the part most quotes ignore: whether your existing duct system can carry the airflow the new furnace requires. A 96% AFUE furnace connected to undersized returns delivers neither the comfort nor the efficiency it was rated for.",
    ],
    sections: [
      {
        h: "80% vs 96% AFUE — the Honest Comparison",
        p: "An 80% furnace vents through your existing metal flue and costs less to install. A 96% condensing furnace vents through PVC, requires a condensate drain, and converts roughly sixteen percent more of your fuel into heat. For homes with high heating usage, the condensing unit pays back well within its lifespan. For a mild-load home or a rental, the 80% model can be the smarter economic choice. We run the numbers for your actual usage.",
      },
      {
        h: "Venting, Combustion Air and Condensate",
        p: "Condensing furnaces produce acidic condensate that must drain properly, often with a neutralizer and sometimes a condensate pump. Intake and exhaust terminations must be correctly located and separated. Combustion air must be adequate for the space. When we convert a home from a natural-draft furnace to a condensing unit, we also evaluate whether the water heater still vents correctly on the now-oversized flue — a code detail that gets missed constantly.",
      },
      {
        h: "Duct and Filtration Upgrades",
        p: "During installation we measure static pressure and correct restrictions we find: undersized return drops, crushed flex runs, and one-inch filter grilles that starve the blower. We install a four- or five-inch media filter cabinet where space allows, which improves filtration and lowers pressure drop simultaneously.",
      },
    ],
    benefits: [
      "Manual J heating load calculation on every quote",
      "Proper condensate management and code-compliant venting",
      "Static pressure measured and duct restrictions corrected",
      "Permits pulled and inspections coordinated where required",
      "Financing available with approved credit",
    ],
    signs: [
      "Furnace is 15+ years old and needing repeated repairs",
      "Cracked heat exchanger identified during inspection",
      "Rooms far from the furnace never get warm",
      "Rising gas or propane costs with no lifestyle change",
    ],
    faqs: [
      {
        q: "Should I replace my furnace and AC at the same time?",
        a: "If both are near end of life, yes — a matched system is more efficient, the labor overlaps significantly, and you avoid paying twice for the same access work. If only one is failing, we will tell you honestly.",
      },
      {
        q: "Can I convert from oil or propane to natural gas?",
        a: "Where natural gas service is available at the street, yes. We handle the appliance side and coordinate with the utility on the meter and service line.",
      },
      {
        q: "How long does furnace installation take?",
        a: "Most replacements are a single day. Conversions from 80% to condensing equipment can add a day for new venting and condensate routing.",
      },
      {
        q: "Are permits required?",
        a: "Requirements vary by jurisdiction across Nottoway, Amelia, Dinwiddie and Prince Edward counties. We know each locality's rules, pull the permits and meet the inspector.",
      },
    ],
  },
  {
    slug: "ductwork-installation",
    name: "Ductwork Installation",
    short: "Designed duct systems that actually deliver rated airflow.",
    category: "hvac",
    image: "svc-ductwork",
    imageAlt: "Technician installing and sealing insulated ductwork in a clean attic space",
    tagline: "Your equipment is only as good as the ducts feeding it.",
    intro: [
      "Duct systems are the most neglected part of residential HVAC and the most common reason a new system disappoints. Industry field studies consistently find typical homes losing 20 to 30 percent of conditioned air to leakage and restriction before it ever reaches a room. In older Southside Virginia homes with ducts in vented crawlspaces and uninsulated attics, that number can be worse.",
      "We design duct systems using Manual D methodology: calculating required airflow per room from the load calculation, sizing trunks and branches for the target friction rate, and laying out the runs to minimize elbows and length. The result is a system that delivers the airflow your equipment was engineered around.",
    ],
    sections: [
      {
        h: "How We Build Duct Systems",
        p: "Rigid sheet metal trunks where space permits, with sealed and insulated branch runs. Mastic sealant on every joint and seam — never cloth duct tape, which fails within a few years. Properly sized return paths, because most homes are dramatically return-starved. Balancing dampers at each takeoff so the system can actually be tuned. Insulation values appropriate to the space, and full support strapping so flex never sags or kinks.",
      },
      {
        h: "Adding Ductwork for Additions and Bonus Rooms",
        p: "Bonus rooms over garages, converted attics, sunrooms and additions almost never get adequate airflow when tapped off an existing trunk. We evaluate whether the current equipment has capacity to spare, then either extend properly with a dedicated run and return or recommend a ductless mini-split zone, which is frequently the better and less invasive solution.",
      },
      {
        h: "Verification and Balancing",
        p: "We measure total external static pressure and airflow at the equipment, then take room-by-room readings and adjust dampers until delivery matches the design. You receive the before and after numbers. Most homeowners are startled by how much quieter the system becomes when static pressure drops into the correct range.",
      },
    ],
    benefits: [
      "Manual D duct design based on real room-by-room load",
      "Mastic-sealed joints throughout — no failing tape",
      "Return air paths corrected, not just supply runs",
      "System balanced with measured airflow at each register",
      "Before and after static pressure documented for you",
    ],
    signs: [
      "Rooms with dramatically different temperatures",
      "Whistling or roaring noise from vents",
      "Dust accumulating quickly after cleaning",
      "New equipment that never performed as promised",
    ],
    faqs: [
      {
        q: "How do I know if my ducts are the problem?",
        a: "The clearest indicator is high total external static pressure at the air handler. If your system reads well above the manufacturer's rating, the ducts are choking it regardless of how new the equipment is. We measure this on every visit.",
      },
      {
        q: "Is replacing ductwork worth the cost?",
        a: "When ducts are the limiting factor, it is often the single highest-return improvement available — better than upgrading equipment efficiency. We will tell you if targeted repairs will get you most of the benefit for far less money.",
      },
      {
        q: "Can you install ducts in a house with no basement?",
        a: "Yes. Crawlspace, attic and interior chase installations are all routine here. We select insulation and sealing approaches based on where the ducts must run.",
      },
      {
        q: "How long does a duct replacement take?",
        a: "A typical single-story home takes two to four days. We stage the work so you are without conditioning for the shortest possible time.",
      },
    ],
  },
  {
    slug: "duct-repair",
    name: "Duct Repair",
    short: "Sealing, resizing and repairing leaking or collapsed ducts.",
    category: "hvac",
    image: "svc-duct-repair",
    imageAlt: "Repairing and sealing a damaged duct run in a residential crawlspace",
    tagline: "Stop paying to condition your crawlspace.",
    intro: [
      "Every cubic foot of air that escapes a supply duct in a crawlspace or attic is air you paid to heat or cool, dumped into unconditioned space. Worse, leaking return ducts pull in humid crawlspace air, dust, insulation fibers and sometimes combustion byproducts, then distribute them through your home. Duct repair is one of the few home improvements that pays back in comfort, energy cost and air quality simultaneously.",
      "In our service area we most often find disconnected flex runs lying on crawlspace soil, crushed ducts under storage boxes in attics, decades-old cloth tape that has turned to dust at every joint, and unsealed plenum connections where the largest leaks of all hide.",
    ],
    sections: [
      {
        h: "Our Duct Inspection",
        p: "We physically inspect every accessible run, photograph the problems, measure static pressure at the equipment and check temperature loss along the duct path. You see the photos before you approve any work. If we find sections beyond repair, we quote replacement of those sections specifically rather than proposing to replace the whole system by default.",
      },
      {
        h: "Repairs We Perform",
        p: "Reconnecting and properly strapping detached runs. Replacing crushed and torn flex. Sealing joints, boots and plenum connections with mastic. Adding or upgrading insulation on runs in unconditioned space. Sealing register boots to the subfloor or drywall — a leak point almost every home has. Adding return air paths and correcting undersized returns that create pressure imbalance between rooms.",
      },
      {
        h: "What Improvement to Expect",
        p: "Homes with significant duct leakage typically see meaningfully more even room temperatures, quieter operation, lower dust levels and reduced runtime after repair. In crawlspace duct systems we also frequently see summer humidity drop several points because the system stops pulling damp air into the return.",
      },
    ],
    benefits: [
      "Photo-documented inspection before any work is quoted",
      "Mastic sealing that lasts decades, not tape that fails",
      "Register boot and plenum sealing included",
      "Return-side leakage addressed, not just supply",
      "Measured static pressure improvement documented",
    ],
    signs: [
      "Some rooms never match the thermostat",
      "Visible dust streaking around register edges",
      "Excessive dust throughout the home",
      "Crawlspace or attic feels conditioned when the system runs",
    ],
    faqs: [
      {
        q: "Is duct sealing the same as duct cleaning?",
        a: "No. Cleaning removes debris from inside the ducts. Sealing closes the leaks that waste conditioned air and pull contaminants in. Sealing delivers the energy and comfort benefit; cleaning addresses contamination.",
      },
      {
        q: "How much conditioned air am I actually losing?",
        a: "Typical unsealed systems lose 20 to 30 percent. We measure your system rather than quoting an average, and we show you the readings.",
      },
      {
        q: "Can duct repair fix one hot room upstairs?",
        a: "Frequently, yes — that room usually has a crushed, disconnected or undersized run. When ducts are not the cause, we look at insulation, return path and equipment staging before recommending anything expensive.",
      },
      {
        q: "Do you repair ducts in tight crawlspaces?",
        a: "Yes. Our technicians work in crawlspaces throughout Southside Virginia every week and carry the equipment to do it properly.",
      },
    ],
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    short: "Filtration, humidity control and ventilation that measurably works.",
    category: "hvac",
    image: "svc-iaq",
    imageAlt: "Whole-home air purification and filtration equipment installed on an HVAC system",
    tagline: "Cleaner, drier, healthier air — verified with readings.",
    intro: [
      "Indoor air in a typical Virginia home is measurably worse than the air outside it. Rural and semi-rural homes here contend with pollen loads from spring through fall, crawlspace moisture and mold spores, wood smoke, pet dander and dust from unpaved roads. Meanwhile a standard one-inch fiberglass filter captures almost none of the particles small enough to reach the lungs.",
      "Indoor air quality work is only worth doing if it is measurable. We assess relative humidity, filtration efficiency, ventilation rates and the condition of the duct system before recommending equipment — because a purifier bolted onto a leaking duct system in a humid crawlspace is money spent on the wrong problem.",
    ],
    sections: [
      {
        h: "Filtration Done Correctly",
        p: "We install four- and five-inch media filter cabinets rated MERV 11 to 16 that capture far more than a one-inch filter while creating less airflow restriction, because the larger surface area lowers pressure drop. For allergy and asthma households we offer polarized media and electronic air cleaners. Critically, we verify your blower can handle the selected filter — high-MERV filters installed on undersized returns cause more harm than good.",
      },
      {
        h: "Humidity Control for Our Climate",
        p: "Southside Virginia summers run humid, and winters with resistance or gas heat can drop indoor humidity uncomfortably low. Whole-home dehumidifiers integrated into the return duct hold summer humidity near 50 percent independent of cooling demand, which is transformative in homes with oversized air conditioners. Bypass and steam humidifiers address dry winter air, static shock and cracked woodwork.",
      },
      {
        h: "Ventilation, UV and Source Control",
        p: "Tighter homes need controlled fresh air. We install fresh-air intakes with motorized dampers and ERVs where appropriate. UV lamps at the evaporator coil keep biological growth off the coil and drain pan, which is where musty smells usually originate. And we always address the source first — sealing return leaks, correcting bath and dryer venting, and fixing crawlspace moisture beats filtering the symptom.",
      },
    ],
    benefits: [
      "Humidity, filtration and airflow measured before anything is recommended",
      "High-capacity media filtration with lower pressure drop",
      "Whole-home dehumidification for humid Virginia summers",
      "UV coil treatment to eliminate musty odors at the source",
      "Fresh-air ventilation options for tightly built homes",
    ],
    signs: [
      "Persistent musty or stale smell when the system runs",
      "Allergy or asthma symptoms that worsen indoors",
      "Visible dust on surfaces within a day of cleaning",
      "Sticky summer air or static shocks all winter",
    ],
    faqs: [
      {
        q: "Will a higher MERV filter hurt my system?",
        a: "It can, if the return duct and blower were not designed for it. That is why we measure static pressure first and pair high-efficiency filtration with a properly sized filter cabinet rather than cramming a dense filter into an existing one-inch slot.",
      },
      {
        q: "Do UV lights really help?",
        a: "Coil-mounted UV is genuinely effective at preventing biological growth on the evaporator and in the drain pan, which eliminates most musty odors and keeps the coil clean. Claims about sterilizing all the air passing through the duct are overstated, and we will not make them.",
      },
      {
        q: "What humidity level should I target?",
        a: "Between 40 and 55 percent relative humidity year round. Above 60 percent invites mold and dust mites; below 30 percent causes respiratory irritation and wood damage.",
      },
      {
        q: "Can indoor air quality equipment be added to my existing system?",
        a: "In most cases yes. Media cabinets, UV, dehumidifiers and fresh-air intakes all integrate with existing ducted equipment as long as the duct system is in reasonable condition.",
      },
    ],
  },
  {
    slug: "preventative-hvac-maintenance",
    name: "Preventative HVAC Maintenance",
    short: "Documented tune-ups that prevent the calls nobody wants to make.",
    category: "hvac",
    image: "svc-maintenance",
    imageAlt: "Technician completing a preventative HVAC maintenance checklist beside a heat pump",
    tagline: "The cheapest repair is the one that never happens.",
    major: true,
    intro: [
      "Nearly every emergency breakdown we respond to was preventable, and most were visible months earlier as a measurement drifting out of range. A capacitor reading 12 percent below its rated microfarads. A condenser coil losing heat rejection to matted cottonwood. A blower wheel loaded with dust, silently cutting airflow. Preventative maintenance catches these while they are inexpensive and while you are not sitting in an 88-degree house waiting on a truck.",
      "Manufacturer warranties also require documented annual maintenance. When a compressor fails in year seven and the manufacturer asks for service records, our documented reports are what protect your warranty claim.",
    ],
    sections: [
      {
        h: "What a Real Tune-Up Includes",
        p: "Not a filter change and a sticker. We measure refrigerant pressures, superheat and subcooling, temperature split, total external static pressure, capacitor microfarads under load, compressor and blower amp draw, contactor condition, condensate drainage and float switch operation, and — on gas equipment — a full combustion analysis with carbon monoxide testing. Coils are cleaned, drains are flushed, electrical connections are torqued.",
      },
      {
        h: "The Right Schedule",
        p: "Heat pumps need service twice a year because they run in both seasons. Separate AC and furnace systems need cooling service in spring and heating service in fall. Commercial rooftop equipment generally needs quarterly attention due to runtime and filter loading. We schedule these proactively and text you a reminder — you never have to remember.",
      },
      {
        h: "Maintenance Plan Membership",
        p: "Our plan members receive priority scheduling ahead of non-members during peak season, a standing discount on repairs, no overtime surcharge on emergency calls, and a documented performance report after each visit. For most households the repair discount alone covers the annual cost of the plan.",
      },
    ],
    benefits: [
      "Written performance report with measured readings each visit",
      "Priority scheduling ahead of non-members in peak season",
      "Standing discount on any repair we perform",
      "No overtime charges on after-hours emergency calls",
      "Manufacturer warranty documentation maintained for you",
    ],
    signs: [
      "It has been more than a year since a professional tune-up",
      "You are unsure when the system was last serviced",
      "Bills are creeping upward season over season",
      "You want to protect a manufacturer warranty",
    ],
    faqs: [
      {
        q: "How much does a maintenance visit cost?",
        a: "Single visits are priced per system. Plan membership starts at $18 per month and includes two visits per year plus repair discounts, which typically costs less than paying per visit.",
      },
      {
        q: "How long does a tune-up take?",
        a: "Between 60 and 90 minutes for a residential system done properly. Anyone in and out in twenty minutes did not measure anything.",
      },
      {
        q: "Does maintenance really lower energy bills?",
        a: "Yes — a dirty condenser coil alone can add 15 to 20 percent to cooling cost, and correcting a low refrigerant charge or restricted airflow produces immediate measurable savings.",
      },
      {
        q: "Can you service more than one system at my property?",
        a: "Yes. We service multi-system homes and multi-unit commercial properties, with per-system pricing and consolidated reporting.",
      },
    ],
  },
  {
    slug: "emergency-hvac-service",
    name: "Emergency HVAC Service",
    short: "24/7 no-heat and no-cool response across Southside Virginia.",
    category: "hvac",
    image: "svc-emergency-hvac",
    imageAlt: "Emergency HVAC technician arriving at a home at night with service equipment",
    tagline: "A real technician, dispatched now — any hour.",
    major: true,
    intro: [
      "Heating and cooling systems fail at the worst possible moment because that is exactly when they are working hardest. J&J Mechanical maintains genuine 24-hour emergency service across Blackstone, Crewe, Farmville, Victoria, Burkeville, Amelia, Dinwiddie and all of Nottoway County — not an answering service that takes a message for Monday morning.",
      "When you call after hours you reach a person who can triage the problem, walk you through immediate safety steps if needed, and dispatch a technician with the parts most likely to solve it. Loss of heat in freezing weather and loss of cooling during a heat advisory are health emergencies for infants, elderly residents and anyone with respiratory conditions, and we treat them that way.",
    ],
    sections: [
      {
        h: "What Qualifies as an Emergency",
        p: "No heat when outdoor temperatures are near or below freezing. No cooling during extreme heat, especially with vulnerable occupants. Any smell of gas — leave the building and call the gas utility first, then us. Burning or electrical odors from equipment. Water actively leaking from an air handler onto ceilings or flooring. Ice-encased outdoor units. Repeated breaker trips on HVAC circuits.",
      },
      {
        h: "Steps to Take Before We Arrive",
        p: "Check the thermostat batteries and mode setting, and confirm the breaker and the service switch by the equipment are on. Replace an obviously clogged filter. If the indoor coil is frozen, switch the system off and the fan on to thaw it. If you smell gas, do not operate switches — leave and call from outside. Our dispatcher will walk you through anything that might restore operation before a truck rolls.",
      },
      {
        h: "Emergency Pricing You Can Trust",
        p: "Emergency response carries an after-hours rate, and we tell you what it is on the phone before dispatching. Maintenance plan members pay no overtime surcharge at all. There are no surprise multipliers on your invoice and no charge for a technician arriving to find a tripped breaker.",
      },
    ],
    benefits: [
      "Live dispatch 24 hours a day, seven days a week, holidays included",
      "Trucks stocked with the parts that cause most emergency failures",
      "After-hours rate disclosed on the phone before dispatch",
      "No overtime surcharge for maintenance plan members",
      "Temporary heating or cooling arranged when a part must be ordered",
    ],
    signs: [
      "No heat with outdoor temperatures below freezing",
      "No cooling during a heat advisory",
      "Burning smell or smoke from the equipment",
      "Water leaking from the air handler into the ceiling",
    ],
    faqs: [
      {
        q: "How quickly can someone get to me at night?",
        a: "Response times depend on distance and call volume, but our service area is compact and we typically reach customers within one to two hours of dispatch.",
      },
      {
        q: "Do you actually answer the phone at 2 AM?",
        a: "Yes. Our emergency line reaches a live person, not a voicemail box, every hour of every day.",
      },
      {
        q: "What if the part I need is not on the truck?",
        a: "We stabilize the situation — temporary heat or cooling where possible — source the part first thing, and prioritize your return visit. You are never left waiting without a plan.",
      },
      {
        q: "Is emergency service available for commercial buildings?",
        a: "Yes. Restaurants, offices, retail and light industrial customers receive the same 24/7 dispatch, and contract customers get guaranteed response windows.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial HVAC",
    short: "Rooftop units, split systems and service contracts for local business.",
    category: "hvac",
    image: "svc-commercial-hvac",
    imageAlt: "Two technicians servicing rooftop commercial HVAC packaged units at sunset",
    tagline: "Uptime protected. Comfort your customers notice.",
    major: true,
    intro: [
      "For a restaurant, a retail storefront, a medical office or a church, an HVAC failure is a revenue event. Customers leave, product spoils, staff cannot work and services get cancelled. Commercial mechanical work demands different planning than residential: scheduling around business hours, understanding ventilation and makeup air requirements, and maintaining equipment with three to four times the annual runtime of a home system.",
      "J&J Mechanical services commercial properties throughout Nottoway, Amelia, Dinwiddie and Prince Edward counties — packaged rooftop units, split systems, mini-split banks, makeup air units and light commercial refrigeration-adjacent equipment. We work nights and weekends when necessary so your operation never closes for our convenience.",
    ],
    sections: [
      {
        h: "Rooftop Unit Service and Replacement",
        p: "Packaged RTUs are the backbone of small commercial buildings here. We service belts and bearings, economizer operation and linkage, filter programs, condenser and evaporator coil cleaning, refrigerant circuits, compressor contactors and control boards. When replacement is required we handle crane coordination, curb adapters, electrical and controls, scheduling the lift outside your operating hours.",
      },
      {
        h: "Restaurants, Kitchens and Makeup Air",
        p: "Commercial kitchens live and die by pressure balance. An exhaust hood pulling far more air than the makeup air unit supplies creates negative pressure that pulls doors shut, backdrafts water heaters and makes the dining room miserable. We measure and correct hood and makeup air balance, service the units and keep the kitchen operating within code.",
      },
      {
        h: "Planned Maintenance Contracts",
        p: "Commercial Care contract customers receive quarterly service, guaranteed response windows, documented compliance reporting suitable for landlords and insurers, and a dedicated technician who knows the building. Budget certainty and fewer emergencies are the point — reactive commercial HVAC is always the most expensive way to operate.",
      },
    ],
    benefits: [
      "Night and weekend scheduling so business hours are not disrupted",
      "Quarterly planned maintenance with documented reporting",
      "Crane-set rooftop replacements coordinated end to end",
      "Kitchen hood and makeup air balancing",
      "Guaranteed response windows for contract customers",
    ],
    signs: [
      "Rooftop units are over 12 years old with rising repair frequency",
      "Uneven temperatures between zones or dining areas",
      "Doors that are hard to open due to pressure imbalance",
      "No documented maintenance program in place",
    ],
    faqs: [
      {
        q: "Can you work outside our business hours?",
        a: "Yes, and for most commercial customers we prefer it. Nights, early mornings and weekend work are standard for us on replacements and major service.",
      },
      {
        q: "Do you service equipment you did not install?",
        a: "Yes. We take over service on existing rooftop and split equipment of every major commercial brand and will provide a condition assessment on the first visit.",
      },
      {
        q: "How often should commercial equipment be serviced?",
        a: "Quarterly for most rooftop units, and monthly filter service for kitchens and high-dust environments. Runtime, not the calendar, drives the schedule.",
      },
      {
        q: "Can you provide documentation for our landlord or insurer?",
        a: "Yes. Contract customers receive written service reports for every visit, suitable for lease compliance and insurance requirements.",
      },
    ],
  },
  {
    slug: "residential-hvac",
    name: "Residential HVAC",
    short: "Complete home comfort service, repair, replacement and maintenance.",
    category: "hvac",
    image: "svc-residential-hvac",
    imageAlt: "Comfortable Virginia family home with a properly maintained HVAC system",
    tagline: "One local team for everything that heats and cools your home.",
    intro: [
      "Residential HVAC is what we do most, and it is more than equipment. It is a whole system: the load your house imposes, the ducts that distribute the air, the filtration that cleans it, the controls that manage it and the maintenance that keeps it honest. Treating any of those in isolation is why so many homeowners replace equipment and remain uncomfortable.",
      "Our residential team serves single-family homes, farmhouses, manufactured homes, additions and rental properties across Southside Virginia. Whether you need a Saturday-night repair, a spring tune-up or a full system design, you get the same technicians, the same documentation standard and the same upfront pricing.",
    ],
    sections: [
      {
        h: "Whole-Home Comfort Assessment",
        p: "We walk the house and evaluate equipment condition and age, duct layout and leakage, insulation levels, window and door infiltration, return air adequacy, thermostat placement, and room-by-room temperature complaints. Then we prioritize improvements by cost and impact, so you can address the highest-return items first rather than paying for everything at once.",
      },
      {
        h: "Older Homes and Additions",
        p: "Southside Virginia has beautiful older housing stock that was never designed around forced-air systems. We are experienced with retrofit challenges: routing ducts through tight chases, adding zoning, using ductless mini-splits for additions and sunrooms, and improving comfort in balloon-framed houses without gutting finishes.",
      },
      {
        h: "Zoning and Smart Controls",
        p: "Two-story homes with a single system almost always suffer a temperature split between floors. Damper zoning with a bypass-free design, or a dedicated system per floor, solves it correctly. We also install and properly configure smart thermostats — including heat pump staging setup, which is misconfigured more often than not on self-installed units.",
      },
    ],
    benefits: [
      "One contractor for repair, replacement, ducts and air quality",
      "Room-by-room comfort problems diagnosed with measurements",
      "Ductless and zoning solutions for additions and problem rooms",
      "Upfront flat-rate pricing on every residential job",
      "Same technicians serving the same communities for decades",
    ],
    signs: [
      "Upstairs and downstairs never feel the same",
      "Equipment runs constantly without satisfying the thermostat",
      "You have never had the system professionally evaluated",
      "You are planning an addition or renovation",
    ],
    faqs: [
      {
        q: "Do you work on manufactured and mobile homes?",
        a: "Yes. Manufactured homes use specific equipment and duct configurations, and we stock and service the correct components rather than improvising with site-built parts.",
      },
      {
        q: "Can you help with just one uncomfortable room?",
        a: "That is one of our most common calls. We diagnose the cause — duct restriction, insulation, return path or load — before recommending anything, and the fix is often inexpensive.",
      },
      {
        q: "Do you service rental and investment properties?",
        a: "Yes, including multi-property maintenance programs with consolidated invoicing and direct tenant scheduling.",
      },
      {
        q: "Will you give a second opinion on another contractor's quote?",
        a: "Gladly. We will evaluate the system independently and tell you honestly whether the recommendation was appropriate.",
      },
    ],
  },
];
