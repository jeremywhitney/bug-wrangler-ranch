import { database } from "./database"

const roundup = (herdSize: number): string[] => {
    const cattle: string[] = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType].breed
        cattle.push(animal)
    }

    return cattle
}

export { roundup }