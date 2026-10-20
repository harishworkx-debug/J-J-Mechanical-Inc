import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: ReactNode;
};

export const POSTS: BlogPost[] = [
  {
    slug: "heat-pump-not-heating",
    title: "Why Your Heat Pump Is Not Heating Properly",
    excerpt:
      "Common causes of weak heat, auxiliary heat overuse and cold-air complaints in Virginia homes.",
    category: "HVAC",
    date: "2023-11-12",
    author: "J&J Mechanical",
    content: (
      <>
        <p>
          When the winter temperature drops across Southside Virginia, your heat pump is your home's primary defense against the cold. But what happens when it stops blowing warm air, blows lukewarm drafts, or seems to run constantly without satisfying the thermostat? Mechanical problems rarely appear without warning. Catching symptoms early usually means a smaller, affordable repair rather than catastrophic compressor burnout.
        </p>
        <h2>Safe Homeowner Checks Before Calling</h2>
        <p>
          Before scheduling an on-site service call, perform these three basic, non-invasive checks:
        </p>
        <ul>
          <li>
            <strong>Thermostat Settings:</strong> Verify the system is set to "Heat" and the fan is on "Auto." If the fan is set to "On," the blower will continuously circulate room-temperature air between heating cycles, making registers feel cool.
          </li>
          <li>
            <strong>Air Filter Restriction:</strong> A heavily clogged 1-inch or 4-inch media filter chokes return airflow. When airflow is restricted across the indoor coil, the high-pressure safety switch trips, shutting down the compressor.
          </li>
          <li>
            <strong>Outdoor Disconnect &amp; Breakers:</strong> Check your home's breaker panel for a tripped 240V double-pole breaker dedicated to the outdoor condensing unit or indoor air handler.
          </li>
        </ul>
        <h2>Understanding Auxiliary Heat vs. Emergency Heat</h2>
        <p>
          When outside temperatures dip below 35°F, standard air-source heat pumps lose thermodynamic efficiency. Your system relies on electric resistance heating strips—known as <strong>Auxiliary Heat ("AUX")</strong>—to supplement the compressor.
        </p>
        <p>
          If "AUX Heat" remains lit continuously when ambient temperatures are moderate (above 45°F), your heat pump may have a stuck sequencer relay, a broken defrost control board, or an undercharged refrigerant circuit. Switching manually to "Emergency Heat" ("EM Heat") locks out the outdoor compressor entirely and forces your home onto 100% resistance heating, which can triple your monthly electric bill.
        </p>
        <h2>The Defrost Cycle vs. Solid Coil Freezing</h2>
        <p>
          In Virginia, cold winter humidity causes light frost to form on the outdoor heat pump coil. Modern heat pumps feature a demand or timed defrost control board that temporarily reverses the refrigerant cycle to melt outdoor frost while staging auxiliary heat inside so you don't feel a cold blast.
        </p>
        <p>
          A thin sheet of frost during a 30-minute window is normal. However, if your outdoor unit is encased in a thick, solid block of ice from top to bottom, or if the outdoor fan motor is jammed by ice, the defrost cycle has failed. Continuing to run the system in this condition will destroy the compressor fan blades and crack the copper tubing.
        </p>
        <h2>Refrigerant Leaks &amp; Stuck Reversing Valves</h2>
        <p>
          Heat pumps move heat rather than generating it. They rely on a factory-calculated charge of R-410A refrigerant. Pinhole corrosion leaks in Southside Virginia crawlspaces can drop system pressure, starving the indoor expansion valve. Additionally, the reversing valve—the four-way magnetic valve that toggles between heating and cooling—can become mechanically stuck in cooling mode, blowing air-conditioned air during the dead of winter.
        </p>
        <h2>When to Call J&amp;J Mechanical for Professional Diagnostics</h2>
        <p>
          If your filter is clean and your thermostat is set correctly, but the system continues blowing lukewarm air or ice accumulates on the outdoor coil, you need professional instrument diagnosis. At J&amp;J Mechanical, we provide certified{" "}
          <a
            href="/heat-pump-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            heat pump repair in Blackstone
          </a>{" "}
          and throughout Nottoway, Prince Edward, and Brunswick counties. Our technicians measure subcooling/superheat pressures, verify auxiliary sequencer amp draw, and test reversing valve solenoids with upfront, flat-rate pricing.
        </p>
        <p>
          For complete system heating restore, learn more about our 24/7{" "}
          <a
            href="/heating-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            heating repair services in Blackstone, VA
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "ac-repair-or-replace",
    title: "Should You Repair or Replace Your Air Conditioner?",
    excerpt: "A practical framework using age, repair cost, efficiency and refrigerant type.",
    category: "Air Conditioning",
    date: "2023-05-24",
    author: "J&J Mechanical",
    content: (
      <>
        <p>
          Facing a major AC breakdown during a hot Virginia summer is stressful. The immediate
          question is always: should I pay for the{" "}
          <a href="/ac-repair-blackstone-va" className="font-semibold text-copper hover:underline">
            AC repair
          </a>{" "}
          or invest in a new{" "}
          <a
            href="/ac-installation-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            AC replacement
          </a>
          ?
        </p>
        <h2>What Causes an AC to Blow Warm Air?</h2>
        <p>
          One of the most frequent summer complaints we receive across Southside Virginia is an{" "}
          <strong>AC blowing warm air</strong>. When warm air comes from your supply registers while
          the thermostat is set to cool, the cause is usually one of four mechanical issues:
        </p>
        <ul>
          <li>
            <strong>Failed Dual-Run Capacitor:</strong> The outdoor fan or compressor cannot start,
            leaving only the indoor blower moving room-temperature air.
          </li>
          <li>
            <strong>Frozen Evaporator Coil:</strong> Restricted airflow from a plugged filter or
            leaky crawlspace duct causes the coil to drop below 32°F and turn into a solid block of
            ice, blocking cooling.
          </li>
          <li>
            <strong>Refrigerant Leak:</strong> Pinhole leaks reduce operating pressure, starving the
            thermal expansion valve and resulting in lukewarm air.
          </li>
          <li>
            <strong>Tripped Breaker or Contactor Pitting:</strong> Continuous 95°F+ heat can pit
            electrical contacts, preventing 240V power from reaching the outdoor condensing unit.
          </li>
        </ul>
        <p>
          If your air conditioner is running without cooling, shut the system off at the thermostat
          to prevent severe compressor damage and schedule a professional{" "}
          <a
            href="/ac-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            AC repair in Blackstone
          </a>{" "}
          or{" "}
          <a
            href="/ac-repair-crewe-va"
            className="font-semibold text-copper hover:underline"
          >
            AC repair in Crewe, VA
          </a>
          .
        </p>
        <h2>The $5,000 Rule</h2>
        <p>
          A common industry guideline is the $5,000 rule. Multiply the age of your equipment by the
          estimated cost of the repair. If the result is more than $5,000, replacement often makes
          better financial sense. For example, a 12-year-old system needing a $500 repair ($6,000)
          is a strong candidate for replacement.
        </p>
        <h2>Refrigerant Type Matters</h2>
        <p>
          If your older system uses R-22 refrigerant (freon), any repair involving the refrigerant
          circuit will be exceptionally expensive, as R-22 is no longer manufactured or imported.
          Modern systems use R-410A or newer, more environmentally friendly refrigerants.
        </p>
        <h2>Efficiency and Comfort</h2>
        <p>
          A 15-year-old AC unit might have a SEER rating of 10 or 12, while modern base models start
          at 14 or 15 SEER, with variable-speed units reaching 20+ SEER. A new system won't just
          cool better; it will significantly reduce your monthly energy bills. If your home has hot
          and cold spots or high humidity, a new properly sized system can resolve those comfort
          issues.
        </p>
        <h2>Get a Professional Assessment</h2>
        <p>
          At J&amp;J Mechanical, we don't push replacements when a simple repair will do. We'll give
          you a written estimate for the repair and a quote for replacement, explaining the pros and
          cons of both so you can make an informed decision for your home in Blackstone, Crewe, or
          Farmville.
        </p>
      </>
    ),
  },
  {
    slug: "water-heater-warning-signs",
    title: "Seven Warning Signs Your Water Heater Needs Service",
    excerpt:
      "Catch corrosion, scale and failing components before the tank leaves water on the floor.",
    category: "Plumbing",
    date: "2023-09-10",
    author: "J&J Mechanical",
    content: (
      <>
        <p>
          Your water heater works quietly in the background every day. But when it fails, it can
          cause significant water damage. Recognizing the warning signs early can save you from a
          major headache and an emergency{" "}
          <a
            href="/plumbing-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            plumbing repair
          </a>
          .
        </p>
        <h2>1. Fluctuating Temperatures</h2>
        <p>
          If your shower goes from hot to cold unexpectedly, it could be a failing heating element,
          a broken dip tube, or severe sediment buildup at the bottom of the tank.
        </p>
        <h2>2. Rusty or Discolored Water</h2>
        <p>
          If the hot water from your taps looks rusty or brown, the inside of your water heater tank
          is likely rusting. This is often a sign that the sacrificial anode rod has failed and the
          tank itself is corroding. The unit will likely need replacement soon.
        </p>
        <h2>3. Rumbling or Popping Noises</h2>
        <p>
          A healthy water heater should be relatively quiet. Rumbling or popping noises indicate
          that minerals and hard water sediment have formed a thick crust on the bottom of the tank.
          As the burner heats the tank, water gets trapped under the sediment and boils, creating
          the popping sound.
        </p>
        <h2>4. Age of the Unit</h2>
        <p>
          Most traditional tank water heaters last 8 to 12 years. If your unit is in this age range,
          it's time to start planning for a replacement before it springs a leak.
        </p>
        <h2>5. Water Heater Leaking Around the Base</h2>
        <p>
          A <strong>water heater leaking</strong> at the base is an urgent red flag. While a dripping
          drain valve or a leaking temperature and pressure (T&amp;P) relief valve can often be
          repaired with a quick part replacement, water seeping directly through the outer metal
          jacket indicates the internal steel tank has corroded through. In that situation, replacement
          is necessary before catastrophic rupture occurs.
        </p>
        <p>
          If you notice moisture pooling around your tank, turn off the water supply valve immediately
          and call our licensed technicians for emergency{" "}
          <a
            href="/water-heater-services-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            water heater services in Blackstone
          </a>{" "}
          or{" "}
          <a
            href="/water-heater-services-amelia-va"
            className="font-semibold text-copper hover:underline"
          >
            water heater repair in Amelia, VA
          </a>
          .
        </p>
        <h2>Local Service You Can Trust</h2>
        <p>
          Whether you need an element test, anode rod replacement, or an upgrade to an endless
          on-demand Navien tankless system, J&amp;J Mechanical provides honest, flat-rate plumbing
          service across Nottoway, Amelia, and Prince Edward counties.
        </p>
      </>
    ),
  },
  {
    slug: "prevent-frozen-pipes",
    title: "How Southside Virginia Homeowners Can Prevent Frozen Pipes",
    excerpt:
      "Simple protection for crawlspaces, exterior walls and well systems before a hard freeze.",
    category: "Plumbing",
    date: "2023-12-05",
    author: "J&J Mechanical",
    content: (
      <>
        <p>
          While Virginia winters can bring fluctuating weather, sudden hard freezes dipping into the teens are an annual reality across Southside Virginia. Frozen pipes are not just an inconvenience—they are a leading cause of catastrophic structural and crawlspace water damage. A ruptured 1/2-inch copper or PEX pipe can discharge up to 250 gallons of water per hour inside your home.
        </p>
        <h2>1. Insulate Exposed Crawlspace and Attic Plumbing</h2>
        <p>
          Pipes routed through unconditioned areas like ventilated crawlspaces, unheated basements, attached garages, and attics are most vulnerable to freeze-thaw cycles. Wrap all exposed hot and cold supply lines with high-density, closed-cell polyethylene foam pipe insulation. Ensure all mitered elbows and joints are secured with weatherproof sealing tape.
        </p>
        <h2>2. Seal Foundation Vents and Subfloor Drafts</h2>
        <p>
          In Southside Virginia homes built over crawlspaces, sub-freezing winds blowing directly across plumbing lines cause rapid convective freezing. Close crawlspace foundation louvers before December or install temporary foam vent plugs. Seal penetrations where exterior spigots enter siding with outdoor polyurethane caulk.
        </p>
        <h2>3. Protect Exterior Spigots &amp; Well Pump Heads</h2>
        <p>
          Always disconnect garden hoses before the first freeze; trapped water inside an attached hose prevents the frost-free sillcock from draining, fracturing the brass housing inside the wall cavity. If your rural property relies on a well system, ensure your well pump pressure tank enclosure or pump house has functional heat tape and foam casing.
        </p>
        <h2>⚠️ Critical Safety Warning: Dangerous DIY Thawing Methods to Avoid</h2>
        <p>
          If you turn on a faucet during a hard freeze and only a trickle emerges, a section of pipe is frozen. However, attempting to thaw pipes using improper DIY techniques frequently leads to residential structure fires and pipe explosions:
        </p>
        <ul>
          <li>
            <strong>NEVER Use Open-Flame Blowtorches:</strong> Using a propane torch to heat frozen copper pipes inside crawlspaces or wall cavities is one of the top causes of winter house fires in rural Virginia. Combustible wood framing and cobwebs ignite instantly.
          </li>
          <li>
            <strong>Do NOT Use Hair Dryers Unattended or Space Heaters in Wet Crawlspaces:</strong> High-voltage appliances used in damp crawlspace soil create an acute electrocution hazard.
          </li>
          <li>
            <strong>Avoid High Heat on PEX or CPVC:</strong> Excessive concentrated heat will warp, melt, and burst plastic supply lines, turning a frozen pipe into an active flood.
          </li>
        </ul>
        <h2>What to Do if a Pipe Bursts or Drains Back Up</h2>
        <p>
          If a line ruptures or you experience a sewage <strong>drain backing up</strong> into your tubs or crawlspace during a winter freeze, immediately locate and close your home's main water shut-off valve to halt flooding. When you need a certified <strong>emergency plumber near me</strong> in Blackstone, Crewe, or Burkeville, J&amp;J Mechanical operates 24/7 emergency dispatch.
        </p>
        <p>
          Contact our local team for fast, code-compliant{" "}
          <a
            href="/plumbing-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            plumbing repair in Blackstone
          </a>
          ,{" "}
          <a
            href="/plumbing-repair-burkeville-va"
            className="font-semibold text-copper hover:underline"
          >
            plumbing service in Burkeville, VA
          </a>
          , or professional{" "}
          <a
            href="/drain-and-sewer-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            drain and sewer clearing
          </a>
          .
        </p>
      </>
    ),
  },
  {
    slug: "hvac-maintenance-guide",
    title: "The Complete HVAC Maintenance Guide for Virginia Homes",
    excerpt: "What a real tune-up includes and which homeowner tasks make the biggest difference.",
    category: "Maintenance",
    date: "2024-03-15",
    author: "J&J Mechanical",
    content: (
      <>
        <p>
          Your HVAC system is one of the largest mechanical investments in your home. Like an
          automobile, it requires annual maintenance to run efficiently, maintain safe combustion,
          and reach its 15-year operational lifespan.
        </p>
        <h2>Furnace Not Turning On? Common Winter Triggers</h2>
        <p>
          When a winter cold snap hits and you find your <strong>furnace not turning on</strong>, the
          lockout is usually caused by an automated safety control:
        </p>
        <ul>
          <li>
            <strong>Soot-Coated Flame Sensor:</strong> The burner ignites for three seconds and then
            shuts off because the sensor cannot detect the micro-amp flame current.
          </li>
          <li>
            <strong>Tripped High-Limit Switch:</strong> A choked, dust-filled air filter traps
            excess heat in the heat exchanger, opening the high-limit safety circuit.
          </li>
          <li>
            <strong>Blocked Inducer Draft Hose:</strong> Condensation or spider webs in the small
            rubber pressure switch hose prevent the draft motor from proving positive airflow.
          </li>
        </ul>
        <p>
          If power cycling the furnace switch once does not reset the system, schedule a certified{" "}
          <a
            href="/furnace-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            furnace repair in Blackstone
          </a>{" "}
          or{" "}
          <a
            href="/furnace-repair-farmville-va"
            className="font-semibold text-copper hover:underline"
          >
            furnace repair in Farmville, VA
          </a>
          .
        </p>
        <h2>What You Can Do: Monthly Filter Changes</h2>
        <p>
          The single most important homeowner task is replacing your air filter every 30 to 90 days.
          Restricted airflow causes blower motor overheating, high electric consumption, and frozen
          cooling coils in summer.
        </p>
        <h2>Professional 21-Point Tune-Up Checklist</h2>
        <p>
          Our comprehensive seasonal maintenance visits include chemical coil cleaning, nitrogen
          condensate flushes, motor amp draw verification, and combustion draft safety analysis.
        </p>
        <p>
          Learn more about our annual Comfort Guard protection plans for homes in{" "}
          <a
            href="/ac-maintenance-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            Blackstone
          </a>
          ,{" "}
          <a
            href="/heating-maintenance-crewe-va"
            className="font-semibold text-copper hover:underline"
          >
            Crewe
          </a>
          , and Farmville.
        </p>
      </>
    ),
  },
];
