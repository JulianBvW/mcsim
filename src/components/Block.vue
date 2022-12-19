<template>
    <div>
        <b-img rounded class="block" @click="mineBlock()" :src="getImgUrl(currentBlock)" :alt="currentBlock"></b-img>
    </div>
</template>

<script>
export default {
    name: 'Block',
    data() {
        return {
            currentBlock: 'stone'
        }
    },
    methods: {
        mineBlock() {
            this.$store.commit('addToInventory', this.currentBlock)
            this.currentBlock = this.getRandomBlock()
        },
        getRandomBlock() {
            let resources = this.$store.state.resources

            let weightSum = 0
            for (const resource of resources) {
                weightSum += resource.weight
            }

            let randomChoice = Math.random() * weightSum

            let currentWeightSum = 0
            for (const resource of resources) {
                currentWeightSum += resource.weight
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
