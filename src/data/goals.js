export default [
    {
        id: 0,
        name: 'Stone Pickaxe',
        image: 'pickaxe-stone',
        requires: {
            'stone': 3
        }
    },
    {
        id: 1,
        name: 'Iron Pickaxe',
        image: 'pickaxe-iron',
        requires: {
            'iron': 3,
            'coal': 1
        }
    },
    {
        id: 2,
        name: 'Diamond Pickaxe',
        image: 'pickaxe-diamond',
        requires: {
            'diamond': 3
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