export interface CattleType {
    id: number;
    breed: string;
}

export interface Drover {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
}

export interface Database {
    cattleTypes: CattleType[];
    drovers: Drover[];
}

export type TerrainType = "river" | "forest" | "mountain" | "plain";

export interface TerrainAreas {
    rivers: number;
    forests: number;
    mountains: number;
    plains: number;
}