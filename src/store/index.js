import { createStore } from 'vuex'
import resources from '@/data/resources'
import goals from '@/data/goals'
import farms from '@/data/farms'

export default createStore({
    state: {
        resources: resources,
        goals: goals,
        goalLevel: 0,
        farms: farms,
        farmLevel: new Array(farms.length).fill(0),
        inventory: {'wood': 1000, 'xp': 1000}
    },
    getters: {
        currentGoal(state) {
            // TODO: Last Goal
            return state.goals[state.goalLevel]
        }
    },
    mutations: {
        addToInventory(state, b) {
            if (!(b.item in state.inventory)) {
                state.inventory[b.item] = 0
            }
            state.inventory[b.item] += b.count
        },
        finishGoal(state) {
            let reqs = state.goals[state.goalLevel].requires
            for (let item of Object.keys(reqs)) {
                state.inventory[item] -= reqs[item]
            }
            state.goalLevel++
        },
        upgradeFarm(state, id) {
            state.farmLevel[id]++
        }
    },
    actions: {
    },
    modules: {
    }
})
