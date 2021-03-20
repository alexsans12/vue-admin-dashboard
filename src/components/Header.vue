<template>
    <nav
        class="nav"
        :class="{
            'nav-dark': isDarkMode,
            'nav-light': !isDarkMode,
        }"
    >
        <div class="nav-links">
            <img src="@/assets/DCHQ-small.svg" alt="DCHQ small" />
            <router-link
                to="/"
                :class="{
                    'dark-nav': isDarkMode,
                    'light-nav': !isDarkMode,
                }"
                >Home</router-link
            >
            <router-link
                to="/manage"
                :class="{
                    'dark-nav': isDarkMode,
                    'light-nav': !isDarkMode,
                }"
                >Manage Users</router-link
            >
            <router-link
                to="/team"
                :class="{
                    'dark-nav': isDarkMode,
                    'light-nav': !isDarkMode,
                }"
                >Team</router-link
            >
        </div>
        <a class="nav-link" @click="onClick"
            >Logout <img src="@/assets/logout.svg" alt="logout icon"
        /></a>
    </nav>
</template>

<script>
import { auth } from "@/main";

export default {
    name: "Header",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    methods: {
        onClick() {
            const user = auth.currentUser();

            user.logout()
                .then(() => {
                    this.$router.push({
                        name: "signin",
                        params: {
                            userLoggedOut: true,
                        },
                    });
                })
                .catch((error) => {
                    alert("Error: " + error);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.nav {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 15%;

    a {
        font-weight: bold;
        color: $dark-gray;

        &.router-link-exact-active.dark-nav {
            color: $white;
        }

        &.router-link-exact-active.light-nav {
            color: $middle-blue;
        }
    }
}

.nav-light {
    background-color: $white;
}

.nav-dark {
    background-color: $super-dark-blue;
}

.nav-links {
    display: flex;
    align-items: center;

    a {
        margin-left: 20px;
        margin-right: 20px;
    }

    img {
        margin-right: 20px;
    }
}

.nav-link:hover {
    cursor: pointer;
}
</style>
