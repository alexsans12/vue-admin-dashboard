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
                Recover Account
            </h4>
            <form @submit.prevent="onSubmit">
                <input
                    :class="{
                        'light-field': isDarkMode,
                        'dark-field': !isDarkMode,
                    }"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    requierd
                />
                <button>Send Email</button>
            </form>
            <router-link
                to="/signin"
                :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
                >Already have an account? Sign in now</router-link
            >
            <ThemeSwitch />
        </div>
    </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";

export default {
    name: "Recover",
    components: {
        RequestAccount,
        ThemeSwitch,
    },
    data() {
        return {
            email: null,
        };
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    methods: {
        onSubmit() {
            const email = this.email;

            auth.requestPasswordRecovery(email)
                .then(() => {
                    this.$router.push({
                        name: "signin",
                        params: {
                            userRecoveredAccount: true,
                            email,
                        },
                    });
                }).catch(error => {
                    alert(`Error: ${error}`);
                });
        },
    },
    mounted() {
        const params = this.$route.params;

        if (params.userLoggedOut) {
            this.hasText = true;
            this.text = "You have logged out!";
        }
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
