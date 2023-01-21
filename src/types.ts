export const StructureTypes = ['metalMine', 'crystalMine', 'solarPowerPlant', 'researchLab', 'shipyard'] as const;
export type Structure = typeof StructureTypes[number];
export type Infrastructure = Partial<Record<Structure, number>>;

export const ShipTypes = ['lightFighter', 'heavyFighter', 'smallTransporter', 'mediumTransporter', 'largeTransporter'] as const;
export type ShipType = typeof ShipTypes[number];
export type Fleet = Partial<Record<ShipType, number>>;

export const Technologies = ['armor', 'shields', 'weapons', 'economics', 'geology'] as const;
export type Technology = typeof Technologies[number];
export type TechLevel = Partial<Record<Technology, number>>;
