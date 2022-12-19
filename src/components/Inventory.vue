<template>
    <div style="margin: 25px;">
        <Item v-for="(count, item) of $store.state.inventory" :key="item" :item="item" :count="count"/>
        <p class="mcfont emptyMsg" v-if="Object.keys(this.$store.state.inventory).length <= 0">Empty!</p>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
    name: 'Inventory',
    components: {
        Item
    },
    methods: {
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        }
    }
}
</script>

<style scoped>
.emptyMsg {
    font-size: x-large;
    margin: 33px;
}
</style>
