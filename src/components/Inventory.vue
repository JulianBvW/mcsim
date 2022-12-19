<template>
    <div style="margin: 15px;">
        <Item v-for="(count, item) of $store.state.inventory" :key="item" :item="item" :count="count"/>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
    name: 'Inventory',
    components: {
        Item
    }
}
</script>

<style scoped>

</style>
