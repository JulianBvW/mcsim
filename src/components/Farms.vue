<template>
    <div style="margin: 20px;">
        <Farm v-for="farm in farms" :key="farm.name" :farm="farm" ref="farms" />
    </div>
</template>

<script>
import Farm from '@/components/Farm.vue'

export default {
    name: 'Farms',
    data() {
        return {
            interval: undefined
        }
    },
    mounted() {
        this.interval = setInterval(this.farmStep, 1000)
    },
    components: {
        Farm
    },
    computed: {
        farms() {
            return this.$store.state.farms
        }
    },
    methods: {
        farmStep() {
            for (let i = 0; i < this.$refs.farms.length; i++) {
                this.$refs.farms[i].productionStep()
            }
        }
    }
}
</script>

<style scoped>

</style>
