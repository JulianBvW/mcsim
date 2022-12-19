<template>
  <div class="title">
    <h1 class="mcfont unselectable" style="margin-top: 30px;">MC Simulator</h1>
    <button @click="$store.state.goalLevel++">cheat</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
.title {
    text-align: center;
    background-color: #a5b1c2;
    padding: 1em;
    text-shadow: 2px 2px 2px #778ca3;
}
</style>
