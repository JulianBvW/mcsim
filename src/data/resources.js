import * as v from './goal_aliases'

export default [
    {
        item: 'stone',
        weight: (goalLevel) => {
            if (goalLevel >= v.ACCESS_HASTE)         { return 50 }
            if (goalLevel >= v.ACCESS_BEACON)        { return 100 }
            if (goalLevel >= v.MINING_LEVEL_DIAMOND) { return 150 }
            return 200
        },
        amount: (goalLevel) => {
            if (goalLevel >= v.ACCESS_HASTE)  { return 2 }
            if (goalLevel >= v.ACCESS_BEACON) { return Math.round(Math.random())+1 }
            return 1
        }
    },
    {
        item: 'coal',
        weight: (goalLevel) => {
            return 20
        },
        amount: (goalLevel) => {
            if (goalLevel >= v.ACCESS_ENCHANTING) { return Math.round(Math.random()*3)+1 }
            return 1
        }
    },
    {
        item: 'iron',
        weight: (goalLevel) => {
            if (goalLevel >= v.MINING_LEVEL_STONE) { return 15 }
            return 0
        },
        amount: (goalLevel) => {
            if (goalLevel >= v.ACCESS_ENCHANTING) { return Math.round(Math.random()*3)+1 }
            return 1
        }
    },
    {
        item: 'redstone',
        weight: (goalLevel) => {
            if (goalLevel >= v.MINING_LEVEL_IRON) { return 5 }
            return 0
        },
        amount: (goalLevel) => {
            if (goalLevel >= v.ACCESS_ENCHANTING) { return Math.round(Math.random()*3)+1 }
            return 1
        }
    },
    {
        item: 'diamond',
        weight: (goalLevel) => {
            if (goalLevel >= v.MINING_LEVEL_IRON) { return 3 }
            return 0
        },
        amount: (goalLevel) => {
            if (goalLevel >= v.ACCESS_ENCHANTING) { return Math.round(Math.random()*3)+1 }
            return 1
        }
    }
]