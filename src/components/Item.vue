<template>
    <div class="itemShow" :class="{ animateShake: shaking }" :style="cssProps">
        <b-img class="imgIcon" :src="getImgUrl(item)" :alt="item" />
        <p class="unselectable mcfont countFont">{{ countFormatted }}</p>
        <p class="unselectable mcfont diffFont" v-if="difference">(+{{ differenceFormatted }})</p>
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
        color: String,
        difference: Number
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
            if (this.size == 'small' && this.count >= 1_000) {
                return Intl.NumberFormat().format(Math.round(this.count / 100)/10) + 'k'
            }
            if (this.count >= 100_000) {
                return Intl.NumberFormat().format(Math.round(this.count / 1000)) + 'k'
            }
            return Intl.NumberFormat().format(this.count)
        },
        differenceFormatted() {
            if (this.size == 'small' && this.difference >= 1_000) {
                return Intl.NumberFormat().format(Math.round(this.difference / 100)/10) + 'k'
            }
            if (this.difference >= 100_000) {
                return Intl.NumberFormat().format(Math.round(this.difference / 1000)) + 'k'
            }
            return Intl.NumberFormat().format(this.difference)
        },
        cssProps() {
            if (this.size == 'large') {
                return {
                    '--img-height': '40px',
                    '--font-size': 'x-large',
                    '--font-margin': '10px',
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
    margin-right: 5px;
}

.countFont {
    font-size: var(--font-size);
    margin: var(--font-margin);
    color: var(--font-color);
}

.diffFont {
    font-size: var(--font-size);
    margin: var(--font-margin);
    color: darkmagenta;
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
