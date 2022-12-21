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
            'diamond': 8,
            'coal': 2
        }
    },
    {
        id: 5,
        name: 'Make a Friend',
        image: 'friend',
        requires: {
            'diamond': 15,
            'xp': 64
        }
    },
    {
        id: 6,
        name: 'Haste II',
        image: 'haste',
        requires: {
            'iron': 1476,
            'diamond': 1,
            'xp': 200
        }
    },
    {
        id: 7,
        name: 'Friend Group',
        image: 'group',
        requires: {
            'diamond': 100,
            'xp': 640
        }
    },
    {
        id: 8,
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
        id: 9,
        name: 'Start a Raid',
        image: 'raid',
        requires: {
            'diamond': 400,
            'redstone': 1400,
            'iron': 3000,
            'stone': 6000
        }
    },
    {
        id: 10,
        name: 'Community',
        image: 'community',
        requires: {
            'diamond': 1000,
            'xp': 6400
        }
    },
    {
        id: 11,
        name: 'Build a House',
        image: 'build-house',
        requires: {
            'stone': 50000,
            'wood': 50000,
            'diamond': 1500,
            'xp': 100000
        }
    },
    {
        id: 12,
        name: 'Build a Castle',
        image: 'build-castle',
        requires: {
            'stone': 100000,
            'wood': 100000,
            'diamond': 2500,
            'xp': 200000
        }
    },
    {
        id: 13,
        name: 'Build your World',
        image: 'build-world',
        requires: {
            'stone': 200000,
            'wood': 200000,
            'diamond': 5000,
            'xp': 300000
        }
    },
    {
        id: 99,
        name: 'Rule Everything',
        image: 'trophy',
        requires: {
            'diamond': 100000
        }
    }
]