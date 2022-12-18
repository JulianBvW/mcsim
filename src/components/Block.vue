<template>
    <div>
        <button @click="mineBlock()">{{ currentBlock }}</button>
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
        }
    }
}
</script>

<style scoped>

</style>
