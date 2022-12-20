<template>
    <div class="farm-view">
        <p class="mcfont" :class="{ greyedOut: this.farmLevel == 0 }" style="font-size: large; margin-top: 5px;">{{ farm.name }}</p>
        <b-img class="upgrade-img" @click="$bvModal.show('modal-upgrade-farm')" :src="currentIcon" alt="upgrade" />
        <b-progress class="production-progress" :variant="farm.barColor" :value="Math.random() * 10" :max="10"
            height="10px"></b-progress>

        <b-modal centered :title="'Upgrade ' + farm.name" id="modal-upgrade-farm">
            <!-- <b-container>
                <b-row>
                    <b-col>
                        <label><b>Feedback</b></label>
                        <b-form-textarea v-model="finalCorrectionFeedback"
                            @keyup.enter="copyToClipboard(createCorrectionText(convertSpecialChars(finalCorrectionFeedback)))"
                            placeholder="Sehr schöne Abgabe." autofocus></b-form-textarea>
                    </b-col>
                </b-row>
            </b-container> -->
            <p>hi lol</p>
            <template v-slot:modal-footer>
                <!-- <div style="display: flex">
                    <div class="unselectable finishCorrection btn"
                        @click="copyToClipboard(createCorrectionText(convertSpecialChars(finalCorrectionFeedback)))">
                        <img src="../../res/clipboard.svg" alt="Copy" />
                    </div>
                </div> -->
                <p>wow ok</p>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'Farm',
    props: {
        farm: Object
    },
    computed: {
        farmLevel() {
            return this.$store.state.farmLevel[this.farm.id]
        },
        currentRequirements() {
            return this.farm.requires[this.farmLevel]
        },
        satisfiesRequirements() {
            let reqs = this.currentRequirements
            for (let item of Object.keys(reqs)) {
                if (!this.hasEnough(item, reqs[item])) {
                    return false
                }
            }
            return true
        },
        currentIcon() {
            let type = (this.farmLevel == 0) ? 'create' : 'upgrade'
            if (!this.satisfiesRequirements) { type += '-disabled' }
            return this.getImgUrl(type)
        }
    },
    methods: {
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        },
        attemptUpgrade() {
            this.$bvModal.show('modal-upgrade-farm');
            // TODO: Open Card
            //this.$store.commit('upgradeFarm', this.farm.id)
        },
        hasEnough(item, count) {
            return this.$store.state.inventory[item] >= count
        }
    }
}
</script>

<style scoped>
.farm-view {
    display: grid;
    grid-template-columns: 130px 30px;
    grid-template-rows: 40px 25px;
}

.upgrade-img {
    height: 25px;
    justify-self: flex-end;
}

.production-progress {
    grid-column: 1/3;
    grid-row: 2/3;
}

.greyedOut {
    color: gray;
}
</style>
