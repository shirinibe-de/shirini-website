// import Vue from 'vue'
import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const store = createStore({
    state: {
        user: null,
        token: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
    },
    actions: {},
    getters: {
        getToken: (state, getters) => {
            console.log(localStorage.getItem('token'));
        },
        isLoggedIn(state) {
            let persistedToken = localStorage.getItem('token')

            if (!state.token && persistedToken != null) {
                state.token = persistedToken;
            } else if (!state.token && persistedToken == null) {
                return false
            }

            return true;
        },
        authHeader(state) {
            let persistedToken = localStorage.getItem('token')

            if (!state.token && persistedToken != null) {
                state.token = persistedToken;
            } else if (!state.token && persistedToken == null) {
                console.log('fucked up')
            }

            return `Bearer ${state.token}`
        },
    },
})

app.use(store)
app.use(router)

import 'materialize-css/dist/css/materialize.css'

app.mount('#app')

import 'materialize-css/dist/js/materialize.js'

