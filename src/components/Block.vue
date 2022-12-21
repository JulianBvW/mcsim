<template>
    <div>
        <b-img v-if="goalLevel < goals.ACCESS_TUNNEL_BORE" class="block" @click="mineBlock()" :src="getImgUrl('face-'+currentBlock)" :alt="currentBlock"></b-img>
        <div v-if="goalLevel >= goals.ACCESS_TUNNEL_BORE" class="cluster" :class="{ 'cluster-clicked': clusterClicked }">
            <b-img v-for="i in [0, 1, 2, 3]" :key="i" class="cluster-block" :class="{ 'cluster-block-clicked': clusterClicked }" :src="getImgUrl('face-'+currentBlocks[i])" :alt="currentBlocks[i]"></b-img>
            <div class="cluster-button" @click="mineBlocks()"></div>
        </div>
    </div>
</template>

<script>
import * as goals from '@/data/goal_aliases'
import { Toaster, ToasterPosition, ToasterTimer, ToasterType } from "bs-toaster";

export default {
    name: 'Block',
    data() {
        return {
            currentBlock: 'stone',
            currentBlocks: ['stone', 'stone', 'diamond', 'stone'],
            clusterClicked: false,
            goals: goals,

            toaster: undefined
        }
    },
    mounted() {
        this.toaster = new Toaster({
            position: ToasterPosition.TOP_END,
            type: ToasterType.SUCCESS,
            delay: 7500
        })
    },
    computed: {
        goalLevel() {
            return this.$store.state.goalLevel
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
            let amount = resource.amount(this.goalLevel)
            this.$store.commit('addToInventory', {
                item: block,
                count: amount
            })
            this.$store.commit('addToInventory', {
                item: 'xp',
                count: resource.xp(this.goalLevel)
            })
            if (amount >= 100) {
                this.toaster.create('Hero of the Village', 'The '+block+' you found was so beautiful, the village gave you <b>'+amount+' '+block+' pieces</b> for that!');
            }
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
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
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
