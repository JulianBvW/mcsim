import { createStore } from 'vuex'
import resources from '@/data/resources'
import goals from '@/data/goals'

export default createStore({
    state: {
        resources: resources,
        goals: goals,
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
