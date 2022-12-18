<template>
    <div>
        <Title />
        <div class="grid-content">
            <div class="window inventory">inventory</div>
            <div class="window achievements">achievements</div>
            <div class="window block"><Block /></div>
            <div class="window farms">farms</div>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Block from '@/components/Block.vue'

export default {
    name: 'HomeView',
    components: {
        Title
    }
}
</script>

<style>
.grid-content {
    background-color: #d1d8e0;
    height: 800px;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px;
    gap: 20px;
    justify-content: center;
    align-content: center;
}

.window {
    background-color: white;
    box-shadow: 0 3px 8px 1px #969696;
}

.inventory {
    grid-column: 1/2;
    grid-row: 1/3;
}

.achievements {
    grid-column: 2/3;
    grid-row: 1/2;
}

.block {
    grid-column: 2/3;
    grid-row: 2/3;
}

.farms {
    grid-column: 3/4;
    grid-row: 1/3;
}
</style>
