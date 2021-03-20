<template>
    <div class="team">
        <Header />
        <div class="container">
            <h2>Team</h2>
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
    width: 95%;
    margin: 0 auto;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: space-evenly;
}

.card {
    width: 100%;
    max-width: 300px;
    height: 400px;
    border-radius: 10px;
    margin: 20px;
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
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

    &:hover {
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
    }
}

.dark-card {
    background: $super-dark-blue;
    box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

    &:hover {
        box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
    }
}
</style>
