import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD82Jlncz2N69XRc8AzOWxj-mwArnZ5LQY",
    authDomain: "vue-hq-dashboard-4f91b.firebaseapp.com",
    databaseURL: "https://vue-hq-dashboard-4f91b-default-rtdb.firebaseio.com",
    projectId: "vue-hq-dashboard-4f91b",
    storageBucket: "vue-hq-dashboard-4f91b.appspot.com",
    messagingSenderId: "475461578336",
    appId: "1:475461578336:web:637e3b7334c942fe8a1d05",
    measurementId: "G-MZD4PZX6CQ"
});

export const db = firebaseApp.firestore();