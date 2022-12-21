<template>
    <div class="title">
        <b-img class="pngShadow icon" :src="getImgUrl('save')" alt="save" @click="save()"></b-img>
        <h1 class="mcfont unselectable" style="margin-top: 30px;">MC Simulator</h1>
        <b-img class="pngShadow icon" style="justify-self: end;" :src="getImgUrl('cheat')" alt="cheat" @click="$store.state.goalLevel++"></b-img>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    methods: {
        save() {
            console.log(JSON.stringify(this.$store.state.inventory))
        },
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        }
    }
}
</script>

<style scoped>
.title {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    text-align: center;
    background-color: #a5b1c2;
    padding: 1em;
    text-shadow: 2px 2px 2px #778ca3;
}

.icon {
    height: 60px;
    margin: 10px;
}

.icon:hover {
    height: 66px;
    margin: 7px;
}

.icon:active {
    height: 62px;
    margin: 9px;
}
</style>
