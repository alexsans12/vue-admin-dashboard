<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        const isDarkMode = this.$store.getters.isDarkMode;
        document.body.style.background = isDarkMode ? '#212C4F' : '#F0F3F5';
    } 
};
</script>

<style lang="scss">
* {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

h1 {
    @include heading-1;
}

p {
    @include large-text-bold($purple);
}

#app {
    font-family: $system-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $white;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: $white;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
