import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7dNGuTPmkQCEHH4nhV5PRJqNoceb4L08",
    authDomain: "vue-hq-dashboard.firebaseapp.com",
    databaseURL: "https://vue-hq-dashboard-default-rtdb.firebaseio.com",
    projectId: "vue-hq-dashboard",
    storageBucket: "vue-hq-dashboard.appspot.com",
    messagingSenderId: "686736424173",
    appId: "1:686736424173:web:0749bde8d48ff1266e60e4",
    measurementId: "G-FNV8Q5VHYP"
});

export const db = firebaseApp.firestore();