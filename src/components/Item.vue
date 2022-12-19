<template>
    <div class="itemShow">
        <b-img class="imgIcon" :src="getImgUrl(item)" :alt="item" />
        <p class="unselectable countFont">{{ countFormatted }}</p>
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
    },
    computed: {
        countFormatted() {
            if (this.count > 100_000) {
                return Intl.NumberFormat().format(Math.round(this.count/1000)) + 'k'
            }
            return Intl.NumberFormat().format(this.count)
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
    font-size: x-large;
    margin: 12px;
}
</style>
