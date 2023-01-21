import { buildCostProvider, Resources, StructureCostMap } from "./cost";
import { TechLevel } from "./types";

const identity = (cost: Resources, _tech: TechLevel) => cost;
const exponentialScaler = (factor: number) => (cost: Resources, level: number) => ({
    metal: Math.ceil(cost.metal * Math.pow(factor, level)),
    crystal: Math.ceil(cost.crystal * Math.pow(factor, level)),
    tritium: Math.ceil(cost.tritium * Math.pow(factor, level)),
});

const baseStructureCost: StructureCostMap = {
    metalMine: { metal: 1, crystal: 1, tritium: 0 },
    crystalMine: { metal: 1, crystal: 1, tritium: 0 },
    researchLab: { metal: 1, crystal: 1, tritium: 0 },
    shipyard: { metal: 1, crystal: 1, tritium: 0 },
    solarPowerPlant: { metal: 150, crystal: 120, tritium: 0 },
} as const;

const structureCostProvider = buildCostProvider(identity, exponentialScaler(1.5), baseStructureCost);
const techLevel: TechLevel = {};

Array.from(Array(35).keys()).forEach((level) => {
    console.log(structureCostProvider('metalMine', level, techLevel));
});

Array.from(Array(35).keys()).forEach((level) => {
    console.log(structureCostProvider('solarPowerPlant', level, techLevel));
});
