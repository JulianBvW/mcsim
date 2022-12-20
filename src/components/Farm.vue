<template>
    <div class="farm-view">
        <p class="mcfont" :class="{ greyedOut: this.farmLevel == 0 }" style="font-size: large; margin-top: 5px;">{{ farm.name }}</p>
        <b-img class="upgrade-img-info" @click="attemptUpgrade()" :src="currentIcon" alt="upgrade" />
        <b-progress class="production-progress" :variant="farm.barColor" :value="Math.random() * 10" :max="10" height="10px"></b-progress>

        <div class="modal fade" tabindex="-1" :id="'modal-upgrade-farm' + farm.id">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content" style="width: 1100px;">

                    <div class="modal-header">
                        <h5 class="modal-title mcfont" style="margin-bottom: -10px; margin-top: 5px;">Upgrade {{ farm.name }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body" style="margin-top: 10px;">
                        <p class="mcfont">Production rate: {{ currentProductionRate }}s <span v-if="(!this.isLocked) && (!this.isMaxLevel)" style="color: darkmagenta;">(-2s)</span></p>
                        <p class="mcfont">Items produced:</p>
                        <div style="display: grid; width: 550px; grid-template-columns: 1fr 1fr 1fr;">
                            <Item v-for="(count, item) of currentProduction" :key="item" :item="item" :count="count" :size="'small'" :color="'black'" :difference="getDifference(item, count)" />
                        </div>
                    </div>
                    
                    <div class="modal-footer" style="padding-top: 20px;" v-if="!this.isMaxLevel">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; width: 100%;">
                            <p class="mcfont" style="align-self: flex-start;">{{ isLocked ? 'Unlock:' : 'Upgrade:' }}</p>
                            <b-img class="upgrade-img" @click="doUpgrade()" :src="currentIcon" alt="upgrade" />
                        </div>
                        <div style="display: grid; width: 550px; grid-template-columns: 1fr 1fr 1fr; margin-top: -20px;">
                            <Item v-for="(count, item) of currentRequirements" :key="item" :item="item" :count="count" :size="'small'" :color="hasEnough(item, count) ? 'green' : 'red'" ref="reqItems" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap'

export default {
    name: 'Farm',
    props: {
        farm: Object
    },
    components: {
        Item
    },
    computed: {
        farmLevel() {
            return this.$store.state.farmLevel[this.farm.id]
        },
        isLocked() {
            return this.farmLevel <= 0
        },
        isMaxLevel() {
            return this.farmLevel >= this.farm.produces.length-1
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
            if (this.isMaxLevel) { return this.getImgUrl('info') }
            let type = (this.farmLevel == 0) ? 'create' : 'upgrade'
            if (!this.satisfiesRequirements) { type += '-disabled' }
            return this.getImgUrl(type)
        },
        currentProductionRate() {
            if (this.isLocked) {
                return 10
            }
            return 12-this.farmLevel*2
        },
        currentProduction() {
            if (this.isLocked) {
                return this.farm.produces[1]
            }
            return this.farm.produces[this.farmLevel]
        }
    },
    methods: {
        getImgUrl(f) {
            let images = require.context('../assets/', false, /\.png$/)
            return images('./' + f + ".png")
        },
        attemptUpgrade() {
            new bootstrap.Modal(document.getElementById('modal-upgrade-farm' + this.farm.id)).show()
        },
        doUpgrade() {
            if (this.satisfiesRequirements) {
                this.$store.commit('upgradeFarm', this.farm.id)
            } else {
                for (let i = 0; i < this.$refs.reqItems.length; i++) {
                    this.$refs.reqItems[i].doShake()
                }
            }
        },
        hasEnough(item, count) {
            return this.$store.state.inventory[item] >= count
        },
        getDifference(item, count) {
            if (this.isLocked || this.isMaxLevel) {
                return 0
            }
            return this.farm.produces[this.farmLevel+1][item] - count
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

.upgrade-img-info {
    height: 25px;
    justify-self: flex-end;
}

.upgrade-img {
    height: 50px;
    margin-left: auto;
    margin-right: 10px;
}

.production-progress {
    grid-column: 1/3;
    grid-row: 2/3;
}

.greyedOut {
    color: gray;
}
</style>
