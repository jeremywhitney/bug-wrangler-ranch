import { TerrainAreas, TerrainType } from "./types"
import { randomize } from "./utils.js"

const createRivers = (): number => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

const createMountains = (): number => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}

const createForests = (): number => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

const createPlains = (): number => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

const journeyMaker = (): TerrainType[] => {
    const journey: TerrainType[] = []

    const areas: TerrainAreas = {
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {
        journey.push("mountain")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    return randomize(journey)
}

export {
    createRivers, 
    createForests,
    createMountains, 
    createPlains, 
    journeyMaker
}