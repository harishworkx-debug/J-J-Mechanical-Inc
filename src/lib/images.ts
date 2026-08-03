import heroHome from "@/assets/hero-home.jpg";
import ctaFleet from "@/assets/cta-fleet.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import locTown from "@/assets/loc-town.jpg";
import blogHero from "@/assets/blog-hero.jpg";
import hvacRepair from "@/assets/svc-hvac-repair.jpg";
import ac from "@/assets/svc-ac.jpg";
import furnace from "@/assets/svc-furnace.jpg";
import ductwork from "@/assets/svc-ductwork.jpg";
import maintenance from "@/assets/svc-maintenance.jpg";
import commercialHvac from "@/assets/svc-commercial-hvac.jpg";
import emergencyPlumbing from "@/assets/svc-emergency-plumbing.jpg";
import leakDetection from "@/assets/svc-leak-detection.jpg";
import waterHeater from "@/assets/svc-water-heater.jpg";
import drain from "@/assets/svc-drain.jpg";
import gasLine from "@/assets/svc-gas-line.jpg";

/**
 * Named image registry. Service data references these keys; keys awaiting a
 * dedicated generated image fall back to the closest related photograph.
 */
export const IMAGES: Record<string, string> = {
  "hero-home": heroHome,
  "cta-fleet": ctaFleet,
  "about-team": aboutTeam,
  "loc-town": locTown,
  "blog-hero": blogHero,
  "svc-hvac-repair": hvacRepair,
  "svc-hvac-install": ductwork,
  "svc-ac": ac,
  "svc-ac-repair": hvacRepair,
  "svc-heatpump": ac,
  "svc-heatpump-repair": hvacRepair,
  "svc-furnace": furnace,
  "svc-furnace-install": furnace,
  "svc-ductwork": ductwork,
  "svc-duct-repair": ductwork,
  "svc-iaq": maintenance,
  "svc-maintenance": maintenance,
  "svc-emergency-hvac": hvacRepair,
  "svc-commercial-hvac": commercialHvac,
  "svc-residential-hvac": heroHome,
  "svc-plumbing-repair": waterHeater,
  "svc-emergency-plumbing": emergencyPlumbing,
  "svc-leak-detection": leakDetection,
  "svc-pipe-repair": emergencyPlumbing,
  "svc-water-heater": waterHeater,
  "svc-water-heater-repair": waterHeater,
  "svc-tankless": waterHeater,
  "svc-drain": drain,
  "svc-sewer": drain,
  "svc-fixture": waterHeater,
  "svc-bathroom": waterHeater,
  "svc-kitchen": drain,
  "svc-commercial-plumbing": commercialHvac,
  "svc-gas-line": gasLine,
  "svc-gas-repair": gasLine,
  "svc-gas-appliance": gasLine,
};

export function img(key: string) {
  return IMAGES[key] ?? heroHome;
}
