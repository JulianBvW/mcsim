<template>
    <div>
        <HeaderBar />
        <div class="grid-content">
            <div class="window inventory"><Inventory /></div>
            <div class="window goals"><Goals /></div>
            <div class="window block"><Block /></div>
            <div class="window farms"><Farms /></div>

            <b-img class="windowIcon inventory pngShadow" :src="getImgUrl('icon-inventory')" alt="Inventory" v-b-tooltip.hover title="Inventory" />
            <b-img class="windowIcon goals pngShadow" :src="getImgUrl('icon-goals')" alt="Goals" v-b-tooltip.hover title="Goals" />
            <b-img class="windowIcon block pngShadow" :src="getImgUrl(currentPickaxe)" alt="Block" v-b-tooltip.hover title="Block Mining Area" />
            <b-img class="windowIcon farms pngShadow" :src="getImgUrl('icon-farms')" alt="Farms" v-b-tooltip.hover title="Automatic Farms" />
        </div>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
import Inventory from '@/components/Inventory.vue'
import Goals from '@/components/Goals.vue'
import Block from '@/components/Block.vue'
import Farms from '@/components/Farms.vue'

export default {
    name: 'HomeView',
    components: {
        HeaderBar,
        Inventory,
        Goals,
        Block,
        Farms
    },
    methods: {
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        }
    },
    computed: {
        currentPickaxe() {
            switch (this.$store.getters.currentGoal.id) {
                case 0: return 'pickaxe-wood'
                case 1: return 'pickaxe-stone'
                case 2: return 'pickaxe-iron'
                default: return 'pickaxe-diamond'
            }
        }
    }
}
</script>

<style>
.grid-content {
    background-color: #d1d8e0;
    height: 800px;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px;
    gap: 20px;
    justify-content: center;
    align-content: center;
}

.window {
    background-color: white;
    box-shadow: 0 3px 8px 1px #969696;
}

.inventory {
    grid-column: 1/2;
    grid-row: 1/3;
}

.goals {
    grid-column: 2/3;
    grid-row: 1/2;
}

.block {
    grid-column: 2/3;
    grid-row: 2/3;
}

.farms {
    grid-column: 3/4;
    grid-row: 1/3;
}
</style>
