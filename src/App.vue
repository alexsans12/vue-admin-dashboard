<template>
    <div
        id="app"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode,
        }"
    >
        <router-view />
    </div>
</template>

<script>
import "animate.css";

export default {
    name: "App",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    mounted() {
        const isDarkMode = this.$store.getters.isDarkMode;
        document.body.style.background = isDarkMode ? "#212C4F" : "#F0F3F5";
    },
};
</script>

<style lang="scss">
html {
    box-sizing: border-box;
}

* {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    background-color: $dark-blue;
}

h1 {
    @include heading-1;
}

p {
    @include large-text-bold($purple);
}

line,
text {
    opacity: 0.2;
}

#app {
    font-family: $system-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $white;
}

h4 {
    margin: 0;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
}

input {
    box-sizing: border-box;
    border-radius: 4px;

    height: 60px;
    width: 100%;

    font-size: 20px;
    line-height: 24px;
    padding-left: 20px;
}

button {
    background: #56ccf2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: none;

    height: 60px;
    width: 100%;

    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
}

a {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    text-decoration: none;
}

/* THEME */
.light-background {
    background-color: $light-gray;

    line,
    text {
        stroke: $black;
    }
}

.light-text {
    color: $white;
}

.light-field {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: $white;

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
        background-color: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
}

.dark-background {
    background-color: $dark-blue;

    line,
    text {
        stroke: $light-gray;
    }
}

.dark-text {
    color: rgba(0, 0, 0, 0.75);
}

.dark-field {
    background-color: rgba(198, 208, 235, 0.1);
    border: 1px solid rgba(198, 208, 235, 0.1);
    color: rgba(0, 0, 0, 0.75);

    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }

    &:focus {
        background-color: rgba(198, 208, 235, 0.2);
        border: 1px solid rgba(198, 208, 235, 0.2);
    }
}

.light-link {
    color: rgba(255, 255, 255, 0.3);
}

.dark-link {
    color: rgba(0, 0, 0, 0.3);
}

.light-box {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
