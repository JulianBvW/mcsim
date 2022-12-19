import { createStore } from 'vuex'
import resources from '@/data/resources'
import goals from '@/data/goals'

export default createStore({
    state: {
        resources: resources,
        goals: goals,
        currentGoalId: 0,
        inventory: {}
    },
    getters: {
        currentGoal(state) {
            // TODO: Last Goal
            return state.goals[state.currentGoalId]
        }
    },
    mutations: {
        addToInventory(state, item) {
            if (!(item in state.inventory)) {
                state.inventory[item] = 0
            }
            state.inventory[item]++
        },
        finishGoal(state) {
            state.currentGoalId++
        }
    },
    actions: {
    },
    modules: {
    }
})
