<template>
    <div class="itemShow" :class="{ animateShake: shaking }" :style="cssProps">
        <b-img class="imgIcon" :src="getImgUrl(item)" :alt="item" />
        <p class="unselectable mcfont countFont">{{ countFormatted }}</p>
    </div>
</template>

<script>
export default {
    name: 'Item',
    data() {
        return {
            shaking: false
        }
    },
    props: {
        item: String,
        count: Number,
        size: String,
        color: String
    },
    methods: {
        getImgUrl(resource) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./item-' + resource + ".png")
        },
        doShake() {
            if (this.color == 'red') {
                this.shaking = true
                setTimeout(() => { this.shaking = false }, 100)
            }
        }
    },
    computed: {
        countFormatted() {
            if (this.count > 100_000) {
                return Intl.NumberFormat().format(Math.round(this.count / 1000)) + 'k'
            }
            return Intl.NumberFormat().format(this.count)
        },
        cssProps() {
            if (this.size == 'large') {
                return {
                    '--img-height': '40px',
                    '--font-size': 'x-large',
                    '--font-margin': '12px',
                    '--font-color': this.color
                }
            } else if (this.size == 'small') {
                return {
                    '--img-height': '30px',
                    '--font-size': 'large',
                    '--font-margin': '8px',
                    '--font-color': this.color
                }
            }
        }
    }
}
</script>

<style scoped>
.itemShow {
    display: flex;
}

.imgIcon {
    height: var(--img-height);
}

.countFont {
    font-size: var(--font-size);
    margin: var(--font-margin);
    color: var(--font-color);
}

.animateShake {
    animation: shake 0.2s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(10px);
    }

    50% {
        transform: translateX(0px);
    }

    75% {
        transform: translateX(-10px);
    }

    1000% {
        transform: translateX(0);
    }
}
</style>
