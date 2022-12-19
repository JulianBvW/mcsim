<template>
    <div>
        <b-img v-if="goalLevel < 7" class="block" @click="mineBlock()" :src="getImgUrl(currentBlock)" :alt="currentBlock"></b-img>
        <div v-if="goalLevel >= 7" class="cluster" :class="{ 'cluster-clicked': clusterClicked }">
            <b-img v-for="i in [0, 1, 2, 3]" :key="i" class="cluster-block" :class="{ 'cluster-block-clicked': clusterClicked }" :src="getImgUrl(currentBlocks[i])" :alt="currentBlocks[i]"></b-img>
            <div class="cluster-button" @click="mineBlocks()"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Block',
    data() {
        return {
            currentBlock: 'stone',
            currentBlocks: ['stone', 'stone', 'diamond', 'stone'],
            clusterClicked: false
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
            this.collectBlock(this.currentBlock)
            this.currentBlock = this.getRandomBlock()
        },
        mineBlocks() {
            for (let i in [0, 1, 2, 3]) {
                this.collectBlock(this.currentBlocks[i])
                this.currentBlocks[i] = this.getRandomBlock()
            }
            this.clusterClicked = true
            setTimeout(() => { this.clusterClicked = false }, 50)
        },
        collectBlock(block) {
            let resource = this.resources.find(r => r.item == block)
            this.$store.commit('addToInventory', {
                item: block,
                count: resource.amount(this.goalLevel)
            })
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

.block:active {
    margin: 22px;
    width: 156px;
}

.cluster {
    margin: 25px;
    width: 150px;
    height: 150px;
    display: grid;
    grid-template-columns: 75px 75px;
    grid-template-rows: 75px 75px;
}

.cluster-clicked {
    margin: 22px;
    width: 156px;
    height: 156px;
    display: grid;
    grid-template-columns: 78px 78px;
    grid-template-rows: 78px 78px;
}

.cluster-block {
    box-shadow: 0 3px 8px 1px #969696;
    width: 75px;
}

.cluster-block-clicked {
    box-shadow: 0 3px 8px 1px #969696;
    width: 78px;
}

.cluster-button {
    width: 150px;
    height: 150px;
    margin-top: -150px;
}
</style>
