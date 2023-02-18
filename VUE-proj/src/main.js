import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
//import express from "express"
//import data from "./databases/database.js";
//import db from "./databases/database.js";
//import store from "./store";
// Import our custom CSS
//import "../scss/styles.scss";

// Import all of Bootstrap's JS
//import * as bootstrap from "bootstrap";
//import "../assets/main.css";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
//import data from "./database.js"

const app = createApp(App);
//app.use("/static", express.static('./src/'));
app.use(createPinia());
app.use(router);

//app.use(store);
//app.listen(3000);

app.mount("#app");
