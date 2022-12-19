export default [
    {
        id: 0,
        name: 'Stone Pickaxe',
        image: 'pickaxe-stone',
        requires: {
            'wood': 1,
            'stone': 3
        }
    },
    {
        id: 1,
        name: 'Iron Pickaxe',
        image: 'pickaxe-iron',
        requires: {
            'wood': 1,
            'iron': 3,
            'coal': 1
        }
    },
    {
        id: 2,
        name: 'Diamond Pickaxe',
        image: 'pickaxe-diamond',
        requires: {
            'wood': 1,
            'diamond': 3
        }
    },
    {
        id: 3,
        name: 'Enchanting Table',
        image: 'enchanting-table',
        requires: {
            'diamond': 2,
            'xp': 30
        }
    },
    {
        id: 99,
        name: 'Get Everything',
        image: 'trophy',
        requires: {
            'diamond': 10000
        }
    }
]