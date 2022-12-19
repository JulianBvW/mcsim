import * as v from './goal_aliases'

export default [
    {
        item: 'stone',
        weight: (miningLevel) => {
            if (miningLevel > v.MINING_LEVEL_DIAMOND) { return 100 }
            return 200
        }
    },
    {
        item: 'coal',
        weight: (miningLevel) => {
            return 20
        }
    },
    {
        item: 'iron',
        weight: (miningLevel) => {
            if (miningLevel >= v.MINING_LEVEL_STONE) { return 15 }
            return 0
        }
    },
    {
        item: 'redstone',
        weight: (miningLevel) => {
            if (miningLevel >= v.MINING_LEVEL_IRON) { return 2 }
            return 0
        }
    },
    {
        item: 'diamond',
        weight: (miningLevel) => {
            if (miningLevel >= v.MINING_LEVEL_IRON) { return 1 }
            return 0
        }
    }
]