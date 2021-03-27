<template>
    <div class="team">
        <Header />
        <div class="container">
            <h2 :class="{
                    light: isDarkMode,
                    dark: !isDarkMode,
                }">Team</h2>
            <div class="cards">
                <transition appear appear-active-class="animated flipInX">
                    <a
                        href=""
                        class="card card-1"
                        :class="{
                            'light-card': !isDarkMode,
                            'dark-card': isDarkMode,
                        }"
                    >
                        <img
                            class="card-header"
                            :class="{
                                'light-header': !isDarkMode,
                                'dark-header': isDarkMode,
                            }"
                            src="@/assets/slack.png"
                            alt="Slack"
                        />
                        <h3
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Slack
                        </h3>
                        <p
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Messagin app for all team communication.
                        </p>
                    </a>
                </transition>
                <transition appear appear-active-class="animated flipInX">
                    <a
                        href=""
                        class="card card-2"
                        :class="{
                            'light-card': !isDarkMode,
                            'dark-card': isDarkMode,
                        }"
                    >
                        <img
                            class="card-header"
                            :class="{
                                'light-header': !isDarkMode,
                                'dark-header': isDarkMode,
                            }"
                            src="@/assets/notion.png"
                            alt="Notion"
                        />
                        <h3
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Notion
                        </h3>
                        <p
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            All-in-one workspace.
                        </p>
                    </a>
                </transition>
                <transition appear appear-active-class="animated flipInX">
                    <a
                        href=""
                        class="card card-3"
                        :class="{
                            'light-card': !isDarkMode,
                            'dark-card': isDarkMode,
                        }"
                    >
                        <img
                            class="card-header"
                            :class="{
                                'light-header': !isDarkMode,
                                'dark-header': isDarkMode,
                            }"
                            src="@/assets/figma.png"
                            alt="Figma"
                        />
                        <h3
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Figma
                        </h3>
                        <p
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Collaborate design tool.
                        </p>
                    </a>
                </transition>
                <transition appear appear-active-class="animated flipInX">
                    <a
                        href=""
                        class="card card-4"
                        :class="{
                            'light-card': !isDarkMode,
                            'dark-card': isDarkMode,
                        }"
                    >
                        <img
                            class="card-header"
                            :class="{
                                'light-header': !isDarkMode,
                                'dark-header': isDarkMode,
                            }"
                            src="@/assets/contentful.png"
                            alt="Contentful"
                        />
                        <h3
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Contentful
                        </h3>
                        <p
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Content management system.
                        </p>
                    </a>
                </transition>
                <transition appear appear-active-class="animated flipInX">
                    <a
                        href=""
                        class="card card-5"
                        :class="{
                            'light-card': !isDarkMode,
                            'dark-card': isDarkMode,
                        }"
                    >
                        <img
                            class="card-header"
                            :class="{
                                'light-header': !isDarkMode,
                                'dark-header': isDarkMode,
                            }"
                            src="@/assets/dropbox.png"
                            alt="Dropbox"
                        />
                        <h3
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Dropbox
                        </h3>
                        <p
                            :class="{
                                'light-text': isDarkMode,
                                'dark-text': !isDarkMode,
                            }"
                        >
                            Storage space in the cloud.
                        </p>
                    </a>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";

export default {
    name: "Team",
    components: {
        Header,
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    @include heading-2;
}

h3 {
    @include heading-3;
    margin-bottom: 16px;
    margin-top: 0;
}

p {
    font-size: 15px;
    line-height: 24px;
    text-align: left;
    margin-left: 16px;
}

.container {
    padding-left: 10%;
    padding-right: 10%;

    @media screen and (max-width: 767px) {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
    }
}

.dark {
    @include heading-2(rgba(0, 0, 0, 0.75));
}

.light {
    @include heading-2($white);
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.card {
    width: 100%;
    max-width: 275px;
    height: 375px;
    border-radius: 10px;
    margin-left: 40px;
    margin-bottom: 40px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

    &:hover {
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
    }

    @media screen and (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
    }
}

.card-1 {
    animation-delay: 0s;
}

.card-2 {
    animation-delay: 0.5s;
}

.card-3 {
    animation-delay: 1s;
}

.card-4 {
    animation-delay: 1.5s;
}

.card-5 {
    animation-delay: 2s;
}

.card-header {
    max-width: 100%;
    border-radius: 10px 10px 0 0;
}

.light-header {
    background: $light-gray;
}

.dark-header {
    background: #283049;
}

.light-card {
    background: $white;
}

.dark-card {
    background: $super-dark-blue;
}
</style>
