<template>
    <div class="farm-view" style="background-color: aqua;">
        <p class="mcfont" style="font-size: large;">{{ farm.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'Farms',
    props: {
        farm: Object
    }
}
</script>

<style scoped>
.farm-view {
    display: grid;
    grid-template-columns: 130px 40px;
    grid-template-rows: 40px 20px;
}
</style>
