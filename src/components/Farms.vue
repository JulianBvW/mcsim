<template>
    <div style="margin: 15px;">
        <Farm v-for="farm in farms" :key="farm.name" :farm="farm"/>
    </div>
</template>

<script>
import Farm from '@/components/Farm.vue'

export default {
    name: 'Farms',
    components: {
        Farm
    },
    computed: {
        farms() {
            return this.$store.state.farms
        }
    }
}
</script>

<style scoped>

</style>
