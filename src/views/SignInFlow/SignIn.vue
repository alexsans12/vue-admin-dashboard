<template>
    <div class="container" :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">
        <div class="request" :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}">
            Don’t have a Design+Code HQ account?
            <router-link to="/request">Request an account</router-link>
        </div>
        <div class="login">
            <img src="@/assets/DCHQ.svg" v-show="isDarkMode" alt="Logo DCHQ">
            <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" alt="Logo DCHQ">
            <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Design+Code HQ</h4>
            <input :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}" type="email" placeholder="Email" name="email" id="email">
            <input :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}" type="password" placeholder="Password" name="password" id="password">
            <button>Sign In</button>
            <router-link to="/recover" :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}">Forgotten your password?</router-link> 
            <button @click="toggleDarkMode">Toggle</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode
            }
        },
        methods: {
            toggleDarkMode() {
                this.$store.commit('toggleDarkMode');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .light-background {
        background-color: $light-gray;
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
    }

    .dark-text {
        color: rgba(0, 0, 0, 0.75);
    }

    .dark-field {
        background-color: rgba(198, 208, 235, 0.1);
        border: 1px solid rgba(198, 208, 235, 0.1);
        color: rgba(0, 0, 0,0.75);

        &::placeholder {
            color: rgba(0, 0, 0, 0.3);
        }

        &:focus {
            background-color: rgba(198, 208, 235, 0.2);
            border: 1px solid rgba(198, 208, 235, 0.2);
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh ;
    }

    .request {
        position: absolute;
        top: 40px;
        right: 40px;
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

    .login {
        width: 400px;
    }

    h4 {
        margin: 0;
        font-size: 24px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }

    input {
        box-sizing: border-box;
        border-radius: 4px;

        height: 60px;
        width: 100%;
        
        font-size: 20px;
        line-height: 24px;
        padding-left: 20px;
        margin-top: 20px;
    }

    button {
        background: #56CCF2;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        
        height: 60px;
        width: 100%;

        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    a {
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        text-decoration: none;
    }

    .light-link {
        color: rgba(255, 255, 255, 0.3);
    }

    .dark-link {
        color: rgba(0, 0, 0, 0.3);
    }
</style>