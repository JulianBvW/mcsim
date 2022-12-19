<template>
    <div class="itemShow">
        <b-img class="imgIcon" :src="getImgUrl(item)" :alt="item" />
        <p class="unselectable countFont">{{ count }}</p>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: String,
        count: Number
    },
    methods: {
        getImgUrl(resource) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./item-' + resource + ".png")
        }
    }
}
</script>

<style scoped>
.itemShow {
    display: flex;
}

.imgIcon {
    height: 40px;
}

.countFont {
    font-family: 'Minecraftia';
    margin: 12px;
    font-size: x-large;
}
</style>
