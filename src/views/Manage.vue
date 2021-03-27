<template>
    <div class="manage">
        <Header />
        <div class="container">
            <h2
                :class="{
                    light: isDarkMode,
                    dark: !isDarkMode,
                }"
            >
                Manage Users
            </h2>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    name: "Manage",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    components: {
        Header,
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding-left: 15%;
    padding-right: 15%;

    @media screen and (max-width: 767px) {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
    }
}

.dark {
    @include heading-3(rgba(0, 0, 0, 0.75));
}

.light {
    @include heading-3($white);
}
</style>
