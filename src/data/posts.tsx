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
          When the temperature drops in Blackstone, your heat pump is your home's primary defense
          against the cold. But what happens when it stops blowing warm air or seems to run
          constantly without raising the indoor temperature? Mechanical problems rarely appear
          without warning. Paying attention early usually means a smaller repair and less
          disruption.
        </p>
        <h2>Check the Thermostat First</h2>
        <p>
          Before calling for an{" "}
          <a
            href="/heating-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            HVAC repair in Blackstone
          </a>
          , verify your thermostat is set to "Heat" and the fan is on "Auto." Sometimes a simple
          setting adjustment or a low battery in the thermostat can mimic a system failure.
        </p>
        <h2>The Defrost Cycle</h2>
        <p>
          In Virginia, winters can bring frost to the outdoor unit. Heat pumps have a built-in
          defrost cycle where the system temporarily switches to cooling mode to melt the ice, while
          auxiliary heat warms your home. If your unit stays in defrost mode too long, or if the
          outdoor coil looks like a block of ice, you may have a failed defrost control board or
          sensor.
        </p>
        <h2>Refrigerant Leaks</h2>
        <p>
          Heat pumps move heat rather than generating it. They rely on a precise charge of
          refrigerant to absorb heat from the outside air and release it indoors. If you have a
          refrigerant leak, the system cannot absorb enough heat, leading to lukewarm air from your
          vents. This requires professional diagnosis and repair.
        </p>
        <h2>When to Call J&amp;J Mechanical</h2>
        <p>
          If you've checked your filter and thermostat and your heat pump is still struggling, it's
          time to call the experts. At J&amp;J Mechanical, we provide{" "}
          <a
            href="/heat-pump-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            heat pump repair
          </a>{" "}
          throughout Southside Virginia. Our technicians will test pressures, electrical components,
          and airflow to find the exact cause and give you clear repair options.
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
        <h2>The 5,000 Rule</h2>
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
        <h2>5. Pooling Water</h2>
        <p>
          Any moisture or pooling water around the base of the tank is an immediate red flag. It
          could be a loose connection, a failing T&amp;P valve, or a crack in the tank itself. Call
          for{" "}
          <a
            href="/water-heater-services-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            water heater services
          </a>{" "}
          immediately to prevent a flood.
        </p>
        <h2>Local Service You Can Trust</h2>
        <p>
          Whether you need a quick repair or an upgrade to a high-efficiency tankless system,
          J&amp;J Mechanical provides expert plumbing and water heater services throughout
          Blackstone and Nottoway County.
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
          While Virginia winters can be unpredictable, hard freezes are a guarantee. Frozen pipes
          are not just an inconvenience—they are a leading cause of catastrophic water damage in
          homes. Taking proactive steps can protect your property.
        </p>
        <h2>Insulate Exposed Pipes</h2>
        <p>
          Pipes in unheated areas like crawlspaces, garages, and attics are the most vulnerable. Use
          foam pipe insulation to wrap all exposed plumbing lines. Ensure there are no gaps in the
          insulation, particularly at joints and elbows.
        </p>
        <h2>Seal Leaks and Drafts</h2>
        <p>
          Cold air blowing directly on a pipe will freeze it much faster than still cold air.
          Inspect your crawlspace vents and foundation walls for cracks or openings and seal them
          before winter arrives.
        </p>
        <h2>Let Faucets Drip</h2>
        <p>
          During extreme cold snaps, let a slow drip run from faucets on exterior walls. Moving
          water is much less likely to freeze. The slight increase in your water bill is negligible
          compared to the cost of a burst pipe repair.
        </p>
        <h2>Open Cabinet Doors</h2>
        <p>
          Pipes under kitchen and bathroom sinks, particularly those against exterior walls, can
          freeze. Open the cabinet doors to allow warm air from your home to circulate around the
          plumbing.
        </p>
        <h2>Know Where Your Shut-Off Valve Is</h2>
        <p>
          If a pipe does freeze and burst, you need to turn off the main water supply immediately to
          minimize damage. Ensure every adult in the house knows where the valve is and how to turn
          it. If you have a plumbing emergency, call J&amp;J Mechanical for 24/7{" "}
          <a
            href="/plumbing-repair-blackstone-va"
            className="font-semibold text-copper hover:underline"
          >
            plumbing services in Blackstone, VA
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
          Your HVAC system is a significant investment. Like any complex machine, it requires
          regular maintenance to run efficiently, prevent breakdowns, and reach its maximum
          lifespan. But what exactly does proper maintenance involve?
        </p>
        <h2>What You Can Do: Filter Changes</h2>
        <p>
          The single most important maintenance task for homeowners is changing the air filter. A
          dirty filter restricts airflow, forcing your system to work harder, consume more energy,
          and potentially freeze the coil or damage the compressor. Check your filter monthly and
          replace it at least every 90 days.
        </p>
        <h2>Keep the Outdoor Unit Clear</h2>
        <p>
          Your outdoor condenser needs unrestricted airflow to dissipate heat. Keep bushes, weeds,
          and debris at least two feet away from the unit on all sides. Gently wash away grass
          clippings or dirt from the outside of the fins with a garden hose (never a pressure
          washer).
        </p>
        <h2>What a Professional Tune-Up Includes</h2>
        <p>
          A professional tune-up is far more than a quick visual inspection. At J&amp;J Mechanical,
          our comprehensive maintenance visits include:
        </p>
        <ul>
          <li>Checking refrigerant levels and testing for leaks.</li>
          <li>Measuring voltage and amperage on motors.</li>
          <li>Testing the run capacitor (a common failure point in summer).</li>
          <li>Cleaning the indoor and outdoor coils.</li>
          <li>Clearing and testing the condensate drain line to prevent water backups.</li>
          <li>Inspecting electrical connections and tightening as needed.</li>
          <li>Checking heat exchanger for cracks (in furnaces).</li>
        </ul>
        <h2>The Value of a Maintenance Plan</h2>
        <p>
          Routine maintenance easily pays for itself through lower energy bills and fewer repair
          calls. Contact J&amp;J Mechanical to ask about our Comfort Guard maintenance plans for
          your home in{" "}
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
          , or Farmville.
        </p>
      </>
    ),
  },
];
