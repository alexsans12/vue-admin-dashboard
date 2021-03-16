<template>
    <div class="toggle" :class="{'light-toggle' : !isDarkMode, 'dark-toggle' : isDarkMode}" @click="toggleDarkMode">
        <div class="toggle-switch" :class="{'toggle-left' : !isDarkMode, 'toggle-right' : isDarkMode}">
            <img src="@/assets/sun.svg" alt="Sun" v-show="!isDarkMode">
            <img src="@/assets/moon.svg" alt="Moon" v-show="isDarkMode">
        </div>
    </div>
</template>

<script>
export default {
    name: "ThemeSwitch",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    methods: {
        toggleDarkMode() {
            this.$store.commit("toggleDarkMode");
        },
    },
};
</script>

<style lang="scss" scoped>
    .toggle {
        width: 175px;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 50px auto 0 auto ;
        display: flex;

        @media only screen and (max-width: 768px) {
            margin: 30px auto;
        }
    }

    .light-toggle {
        background: linear-gradient(328.85deg, #F7FCFC 0%, #FAFCFA 100%);
        border: 1px solid rgba(0, 0, 0, 0.04);
        box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .dark-toggle {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
    }

    .toggle-switch {
        margin: 2px;
        padding: 15px 35px;
        border-radius: 8px;
    }

    .toggle-left {
        transform: translateX(0);
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .toggle-right {
        transform: translateX(90%);
        background: #1B233F;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        align-items: right;
    }
</style>
