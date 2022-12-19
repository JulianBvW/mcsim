import { createStore } from 'vuex'
import resources from '@/data/resources'
import goals from '@/data/goals'

export default createStore({
    state: {
        resources: resources,
        goals: goals,
        currentGoalId: 0,
        inventory: {'wood': 10}
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
            let reqs = state.goals[state.currentGoalId].requires
            for (let item of Object.keys(reqs)) {
                state.inventory[item] -= reqs[item]
            }
            state.currentGoalId++
        }
    },
    actions: {
    },
    modules: {
    }
})
