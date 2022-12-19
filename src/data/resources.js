import * as v from './goal_aliases'

export default [
    {
        item: 'stone',
        weight: (miningLevel) => {
            if (miningLevel > v.ACCESS_ENCHANTING)     { return 100 }
            if (miningLevel >= v.MINING_LEVEL_DIAMOND) { return 150 }
            return 200
        }
    },
    {
        item: 'coal',
        weight: (miningLevel) => {
            if (miningLevel >= v.ACCESS_ENCHANTING) { return 30 }
            return 20
        }
    },
    {
        item: 'iron',
        weight: (miningLevel) => {
            if (miningLevel >= v.ACCESS_ENCHANTING)  { return 25 }
            if (miningLevel >= v.MINING_LEVEL_STONE) { return 15 }
            return 0
        }
    },
    {
        item: 'redstone',
        weight: (miningLevel) => {
            if (miningLevel >= v.ACCESS_ENCHANTING) { return 15 }
            if (miningLevel >= v.MINING_LEVEL_IRON) { return 5 }
            return 0
        }
    },
    {
        item: 'diamond',
        weight: (miningLevel) => {
            if (miningLevel >= v.ACCESS_ENCHANTING) { return 10 }
            if (miningLevel >= v.MINING_LEVEL_IRON) { return 3 }
            return 0
        }
    }
]