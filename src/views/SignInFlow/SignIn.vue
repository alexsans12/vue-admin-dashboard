<template>
    <div
        class="container"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode,
        }"
    >
        <Notification v-if="hasText" :text="text"/>
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
                <input
                    :class="{
                        'light-field': isDarkMode,
                        'dark-field': !isDarkMode,
                    }"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    requierd
                />
                <button>Sign In</button>
            </form>
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
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
    name: "SignIn",
    components: {
        RequestAccount,
        ThemeSwitch,
        Notification,
    },
    data() {
        return {
            email: null,
            password: null,
            hasText: false,
            text: "",
        }
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    methods: {
        onSubmit() {
            const email = this.email;
            const password = this.password;

            auth.login(email, password, true).then( () => {
                this.$router.replace("/");
            }).catch( error => {
                alert("Error: " + error);
            });
        },
    },
    mounted() {
        const params = this.$route.params;

        if(params.userLoggedOut) {
            this.hasText = true;
            this.text = "You have logged out!";
        } else if(params.userRecoveredAccount) {
            this.hasText = true;
            this.text = `A recovery email has been sent to ${params.email}` ;
        } else if(params.userRequestedAccount) {
            this.hasText = true;
            this.text = `Your request has been sent to an administrator for ${params.email}`;
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
