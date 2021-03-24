<template>
    <div class="home">
        <Header />
        <div class="container">
            <div class="spread">
                <h1
                    :class="{
                        light: isDarkMode,
                        dark: !isDarkMode,
                    }"
                >
                    Traffic Overview
                </h1>
                <div
                    class="toggle"
                    :class="{
                        'dark-box': !isDarkMode,
                        'light-box': isDarkMode,
                    }"
                >
                    <div ref="days" class="toggle-day" @click="toggleDays">
                        Days
                    </div>
                    <div ref="weeks" class="toggle-week" @click="toggleWeeks">
                        Weeks
                    </div>
                    <div
                        ref="months"
                        class="toggle-month"
                        @click="toggleMonths"
                    >
                        Months
                    </div>
                </div>
            </div>
            <apexchart
                width="100%"
                type="area"
                :options="chartOptions"
                :series="series"
            ></apexchart>
            <iframe
                v-if="isDarkMode"
                width="100%"
                height="382"
                src="https://datastudio.google.com/embed/reporting/2c0705df-5a08-43d1-950d-66deaed0768a/page/8X77B"
                frameborder="0"
                style="border:0"
                allowfullscreen
            ></iframe>
            <iframe
                v-if="!isDarkMode"
                width="100%"
                height="382"
                src="https://datastudio.google.com/embed/reporting/c35587e9-2bd3-4f98-b663-988ff09377ed/page/8X77B"
                frameborder="0"
                style="border:0"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
import VueApexChart from "vue-apexcharts";
import Header from "@/components/Header";
import { db } from "@/firebase/firebase";

export default {
    name: "Home",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        },
    },
    components: {
        Header,
        apexchart: VueApexChart,
    },
    firestore() {
        return {
            traffic: {
                // collection reference.
                ref: db.collection("traffic"),
                // Bind the collection as an object if you would like to.
                objects: true,
                resolve: (traffic) => {
                    const todaysDate = new Date();
                    const lastWeekDate = todaysDate.setDate(
                        todaysDate.getDate() - 7
                    );

                    const activeUsers = [];
                    Object.keys(traffic.activeUsers).map((key) => {
                        if (
                            new Date(traffic.activeUsers[key][0]) > lastWeekDate
                        ) {
                            activeUsers.push(traffic.activeUsers[key]);
                        }
                    });

                    const newUsers = [];
                    Object.keys(traffic.newUsers).map((key) => {
                        if (new Date(traffic.newUsers[key][0]) > lastWeekDate) {
                            newUsers.push(traffic.newUsers[key]);
                        }
                    });

                    this.series = [
                        {
                            name: "Active users",
                            data: activeUsers,
                        },
                        {
                            name: "New users",
                            data: newUsers,
                        },
                    ];
                },
                reject: () => {
                    // collection is rejected
                },
            },
        };
    },
    data() {
        return {
            chartOptions: {
                colors: ["#14f1d9", "#7b42f6"],
                legend: {
                    labels: {
                        colors: [
                            this.$store.getters.isDarkMode
                                ? "white"
                                : "#000000bf",
                        ],
                    },
                    position: "top",
                },
                tooltip: {
                    theme: "dark",
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                chart: {
                    id: "users",
                },
                xaxis: {
                    type: "datetime",
                },
            },
            series: [],
        };
    },
    methods: {
        toggleDays() {
            this.$refs.days.style.color = "white";
            this.$refs.days.style.background = "#56CCF2";
            this.$refs.days.style.borderRadius = "4px";

            this.$refs.weeks.style.color = "#5b6175";
            this.$refs.weeks.style.background = "none";
            this.$refs.weeks.style.borderRadius = "none";

            this.$refs.months.style.color = "#5b6175";
            this.$refs.months.style.background = "none";
            this.$refs.months.style.borderRadius = "none";

            const activeUsers = [];
            const newUsers = [];
            this.series = [];

            // Active Users
            this.$binding(
                "activeUsers",
                db.collection("traffic").doc("activeUsers")
            )
                .then((data) => {
                    const todaysDate = new Date();
                    const lastWeekDate = todaysDate.setDate(
                        todaysDate.getDate() - 7
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastWeekDate) {
                            activeUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "Active users",
                        data: activeUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });

            // New Users
            this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
                .then((data) => {
                    const todaysDate = new Date();
                    const lastWeekDate = todaysDate.setDate(
                        todaysDate.getDate() - 7
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastWeekDate) {
                            newUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "New users",
                        data: newUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        toggleWeeks() {
            this.$refs.weeks.style.color = "white";
            this.$refs.weeks.style.background = "#56CCF2";
            this.$refs.weeks.style.borderRadius = "4px";

            this.$refs.days.style.color = "#5b6175";
            this.$refs.days.style.background = "none";
            this.$refs.days.style.borderRadius = "none";

            this.$refs.months.style.color = "5b6175";
            this.$refs.months.style.background = "none";
            this.$refs.months.style.borderRadius = "none";

            const activeUsers = [];
            const newUsers = [];
            this.series = [];

            // Active Users
            this.$binding(
                "activeUsers",
                db.collection("traffic").doc("activeUsers")
            )
                .then((data) => {
                    const todaysDate = new Date();
                    const lastMonthDate = todaysDate.setDate(
                        todaysDate.getDate() - 30
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastMonthDate) {
                            activeUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "Active users",
                        data: activeUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });

            // New Users
            this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
                .then((data) => {
                    const todaysDate = new Date();
                    const lastMonthDate = todaysDate.setDate(
                        todaysDate.getDate() - 30
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastMonthDate) {
                            newUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "New users",
                        data: newUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        toggleMonths() {
            this.$refs.months.style.color = "white";
            this.$refs.months.style.background = "#56CCF2";
            this.$refs.months.style.borderRadius = "4px";

            this.$refs.days.style.color = "#5b6175";
            this.$refs.days.style.background = "none";
            this.$refs.days.style.borderRadius = "none";

            this.$refs.weeks.style.color = "#5b6175";
            this.$refs.weeks.style.background = "none";
            this.$refs.weeks.style.borderRadius = "none";

            const activeUsers = [];
            const newUsers = [];
            this.series = [];

            // Active Users
            this.$binding(
                "activeUsers",
                db.collection("traffic").doc("activeUsers")
            )
                .then((data) => {
                    const todaysDate = new Date("Febraury 11, 2021");
                    const lastYearDate = todaysDate.setDate(
                        todaysDate.getDate() - 365
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastYearDate) {
                            activeUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "Active users",
                        data: activeUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });

            // New Users
            this.$binding("newUsers", db.collection("traffic").doc("newUsers"))
                .then((data) => {
                    const todaysDate = new Date("Febraury 11, 2021");
                    const lastYearDate = todaysDate.setDate(
                        todaysDate.getDate() - 365
                    );

                    Object.keys(data).map((key) => {
                        if (new Date(data[key][0]) > lastYearDate) {
                            newUsers.push(data[key]);
                        }
                    });

                    this.series.push({
                        name: "New users",
                        data: newUsers,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style scoped lang="scss">
.container {
    padding-left: 15%;
    padding-right: 15%;
}

.spread {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: 100%;
}

h1.dark {
    @include heading-3(rgba(0, 0, 0, 0.75));
}

h1.light {
    @include heading-3($white);
}

.toggle {
    @include medium-text;
    color: $dark-gray;
    height: 50px;
    width: 240px;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    flex-wrap: nowrap;
}

@mixin toggle-settings {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
}

.toggle-day {
    @include toggle-settings;
    background-color: $teal;
    border-radius: 4px;
    color: $white;
}

.toggle-week {
    @include toggle-settings;
}

.toggle-month {
    @include toggle-settings;
}
</style>
