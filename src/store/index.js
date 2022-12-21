import { createStore } from 'vuex'
import resources from '@/data/resources'
import goals from '@/data/goals'
import farms from '@/data/farms'

export default createStore({
    state: {
        resources: resources,
        goals: goals,
        farms: farms,

        inventory: {'wood': 10},
        goalLevel: 0,
        farmLevel: new Array(farms.length).fill(0)
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
            let reqs = state.farms[id].requires[state.farmLevel[id]]
            for (let item of Object.keys(reqs)) {
                state.inventory[item] -= reqs[item]
            }
            state.farmLevel[id]++
        },
        loadSaveString(state, saveString) {
            let save = JSON.parse(saveString)
            state.inventory = save['inventory']
            state.goalLevel = save['goalLevel']
            state.farmLevel = save['farmLevel']
        }
    },
    actions: {
        createSaveString({ state }) {
            return JSON.stringify({
                'inventory': state.inventory,
                'goalLevel': state.goalLevel,
                'farmLevel': state.farmLevel
            })
        }
    },
    modules: {
    }
})
