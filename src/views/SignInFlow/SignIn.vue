<template>
    <div
        class="container"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode,
        }"
    >
        <RequestAccount />
        <div class="login">
            <img src="@/assets/DCHQ.svg" v-show="isDarkMode" alt="Logo DCHQ" />
            <img
                src="@/assets/DCHQ-dark.svg"
                v-show="!isDarkMode"
                alt="Logo DCHQ"
            />
            <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
                Sign into Design+Code HQ
            </h4>
            <input
                :class="{
                    'light-field': isDarkMode,
                    'dark-field': !isDarkMode,
                }"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
            />
            <input
                :class="{
                    'light-field': isDarkMode,
                    'dark-field': !isDarkMode,
                }"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
            />
            <button>Sign In</button>
            <router-link
                to="/recover"
                :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
                >Forgotten your password?</router-link
            >
            <ThemeSwitch />
        </div>
    </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
    name: "SignIn",
    components: {
        RequestAccount,
        ThemeSwitch,
    },
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
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
}

.login {
    width: 400px;

    input {
        margin-top: 20px;
    }

    button {
        margin-top: 20px;
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 768px) {
            margin-top: 70px;

            img {
                width: 120px;
            }

            button {
                margin-bottom: 30px;
            }
    }
}
</style>
