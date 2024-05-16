// import Vue from 'vue'
import {createApp} from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(store)
app.use(router)

import 'materialize-css/dist/css/materialize.css'

app.mount('#app')

import 'materialize-css/dist/js/materialize.js'

