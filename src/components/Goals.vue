<template>
    <div class="goalGrid">
        <b-img class="goalImg pngShadow" @click="attemptUpgrade" :src="getImgUrl(currentGoal.image)" :alt="currentGoal.name" />
        <p class="goalName mcfont">{{ currentGoal.name }}</p>
        <Item v-for="(count, item) of currentGoal.requires" :key="item" class="goalRequired" :item="item" :count="count" :size="'small'" :color="hasEnough(item, count) ? 'green' : 'red'" />
    </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
    name: 'Goals',
    components: {
        Item
    },
    computed: {
        currentGoal() {
            return this.$store.getters.currentGoal
        },
        satisfiesRequirements() {
            let reqs = this.currentGoal.requires
            for (let item of Object.keys(reqs)) {
                if (!this.hasEnough(item, reqs[item])) {
                    return false
                }
            }
            return true
        }
    },
    methods: {
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        },
        hasEnough(item, count) {
            return this.$store.state.inventory[item] >= count
        },
        attemptUpgrade() {
            if (this.satisfiesRequirements) {
                this.$store.commit('finishGoal')
            }
        }
    }
}
</script>

<style scoped>
.goalGrid {
    display: grid;
    grid-template-rows: 80px 40px 40px 40px;
    grid-template-columns: 100px 100px;
    justify-content: center;
    align-content: center;
}

.goalImg {
    height: 70px;
    justify-self: center;
    align-self: center;
    grid-column: 1/3;
    grid-row: 1/2;
}

.goalName {
    justify-self: center;
    grid-column: 1/3;
    grid-row: 2/3;
    margin: 10px;
}

.goalRequired {
    justify-self: center;
}
</style>
