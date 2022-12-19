<template>
    <router-view />
</template>

<style>
@font-face {
    font-family: Minecraftia;
    src: url('./assets/Minecraftia-Regular.ttf');
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    background-color: #d1d8e0;
}

* {
    padding: 0;
    margin: 0;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.windowIcon {
    height: 45px;
    margin: 0;
    margin-top: -27px;
    margin-left: -18px;
}

.pngShadow {
    -webkit-filter: drop-shadow(5px 5px 5px #969696);
    filter: drop-shadow(5px 5px 5px #969696);
}
</style>
