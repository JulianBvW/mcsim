import { createStore } from 'vuex'
import resources from '@/data/resources'

export default createStore({
    state: {
        resources: resources,
        inventory: {}
    },
    getters: {
    },
    mutations: {
        addToInventory(state, item) {
            if (!(item in state.inventory)) {
                state.inventory[item] = 0
            }
            state.inventory[item]++
        }
    },
    actions: {
    },
    modules: {
    }
})
