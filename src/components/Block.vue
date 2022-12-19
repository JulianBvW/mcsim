<template>
    <div>
        <b-img rounded class="block" @click="mineBlock()" :src="getImgUrl(currentBlock)" :alt="currentBlock"></b-img>
    </div>
</template>

<script>
import * as v from '../data/goal_aliases'

export default {
    name: 'Block',
    data() {
        return {
            currentBlock: 'stone'
        }
    },
    computed: {
        goalLevel() {
            return this.$store.state.currentGoalId
        },
        resources() {
            return this.$store.state.resources
        }
    },
    methods: {
        mineBlock() {
            let resource = this.resources.find(r => r.item == this.currentBlock)
            this.$store.commit('addToInventory', {
                item: this.currentBlock,
                count: resource.amount(this.goalLevel)
            })
            this.currentBlock = this.getRandomBlock()
        },
        getRandomBlock() {
            let weightSum = 0
            for (const resource of this.resources) {
                weightSum += resource.weight(this.goalLevel)
            }

            let randomChoice = Math.random() * weightSum

            let currentWeightSum = 0
            for (const resource of this.resources) {
                currentWeightSum += resource.weight(this.goalLevel)
                if (currentWeightSum > randomChoice) {
                    return resource.item
                }
            }

            return 'stone'
        },
        getImgUrl(resource) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./face-' + resource + ".png")
        }
    }
}
</script>

<style scoped>
.block {
    box-shadow: 0 3px 8px 1px #969696;
    margin: 25px;
    width: 150px;
}

.block:hover {
    margin: 20px;
    width: 160px;
}

.block:active {
    margin: 22px;
    width: 156px;
}
</style>
