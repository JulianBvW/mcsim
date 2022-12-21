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
        id: 4,
        name: 'Beacon',
        image: 'beacon',
        requires: {
            'wood': 1,
            'diamond': 10,
            'coal': 2
        }
    },
    {
        id: 5,
        name: 'Haste II',
        image: 'haste',
        requires: {
            'iron': 1476,
            'diamond': 1,
            'xp': 200
        }
    },
    {
        id: 6,
        name: 'Tunnel Bore',
        image: 'tnt',
        requires: {
            'stone': 400,
            'redstone': 240,
            'iron': 1000,
            'xp': 8000
        }
    },
    {
        id: 99,
        name: 'Get Everything',
        image: 'trophy',
        requires: {
            'diamond': 100000
        }
    }
]