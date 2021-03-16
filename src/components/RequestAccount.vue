<template>
    <transition
        name="slide-in-right"
        enter-active-class="animated slideInRight"
    >
        <div
            v-show="show"
            class="request"
            :class="{
                'light-request': isDarkMode,
                'dark-request': !isDarkMode,
            }"
        >
            Don’t have a Design+Code HQ account?
            <router-link to="/request">Request an account</router-link>
        </div>
    </transition>
</template>

<script>
export default {
    name: "RequestAccount",
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        this.show = true;
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
};
</script>

<style lang="scss" scoped>
.request {
    position: absolute;
    top: 40px;
    right: 40px;

    @media only screen and (max-width: 768px) {
        top: 20px;
        max-width: 95%;
        right: 10px;
        margin: 0 auto;
    }
}

.light-request {
    color: rgba(255, 255, 255, 0.3);

    a {
        color: $white;

        &:hover {
            text-decoration: underline;
        }
    }
}

.dark-request {
    color: rgba(0, 0, 0, 0.3);

    a {
        color: rgba(0, 0, 0, 0.75);

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
