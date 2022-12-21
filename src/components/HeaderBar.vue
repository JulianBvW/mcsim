<template>
    <div class="title">
        <b-img class="pngShadow icon" :src="getImgUrl('save')" alt="save" @click="openSaveModal()"></b-img>
        <h1 class="mcfont unselectable" style="margin-top: 30px;">MC Simulator</h1>
        <b-img class="pngShadow icon" style="justify-self: end;" :src="getImgUrl('cheat')" alt="cheat" @click="$store.state.goalLevel++"></b-img>

        <div class="modal fade" tabindex="-1" id="save-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title mcfont" style="margin-bottom: -10px; margin-top: 5px;">Save or Load Progress</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body" style="margin-top: 10px;">
                        <p class="mcfont">Save String</p>
                        <b-form-input v-model="saveString" placeholder="Paste Save String"></b-form-input>
                        <hr/>
                        <b-button @click="load()" variant="success" style="margin-right: 10px;">Load</b-button>
                        <b-button @click="save()" variant="success" style="margin-left: 10px;">Save</b-button>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap'

export default {
    name: 'HeaderBar',
    data() {
        return {
            saveString: ''
        }
    },
    methods: {
        openSaveModal() {
            new bootstrap.Modal(document.getElementById('save-modal')).show()
        },
        save() {
            this.$store.dispatch('createSaveString').then((s) => {
                this.saveString = s
            }, {})
        },
        load() {
            this.$store.commit('loadSaveString', this.saveString)
            this.saveString = ''
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
