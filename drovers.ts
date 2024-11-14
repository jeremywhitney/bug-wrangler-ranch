import { database } from "./database.js"
import { Drover } from "./types"

const hireDrovers = (herdSize: number): Drover[] => {
    const drovers: Drover[] = []
    const allDrovers = database.drovers
    const numberNeeded = Math.floor(herdSize / 10)

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
}

export { hireDrovers }