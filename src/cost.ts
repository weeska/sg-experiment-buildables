import { Structure, TechLevel } from "./types";

export type Resources = {
    metal: number;
    crystal: number;
    tritium: number;
};

export type LevelScaler = (cost: Resources, level: number) => Resources;
export type TechnologyScaler = (cost: Resources, techLevel: TechLevel) => Resources;

export type CostProvider = (structure: Structure, level: number, techLevel: TechLevel) => Resources;

export type StructureCostMap = Record<Structure, Resources>;

export function buildCostProvider(techScaler: TechnologyScaler, levelScaler: LevelScaler, structureCostMap: StructureCostMap): CostProvider {
    return (structure: Structure, level: number, techLevel: TechLevel) => levelScaler(
        techScaler(structureCostMap[structure], techLevel),
        level,
    );
}
