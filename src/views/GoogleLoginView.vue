<template>
  <div class="row">
    <div class="col center-align s12 offset-m2 m8 offset-l3 l6">
      <div class="card-panel">
        <h1>Login</h1>
        <span class="white-text">

          <button class="waves-effect waves-light btn-large red" @click="login"> <i class="material-icons left">mail</i>Login Using Google</button>
        </span>
      </div>
    </div>
  </div>

</template>

<script>
import {googleSdkLoaded} from "vue3-google-login";
import axios from "axios";
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      userDetails: null
    };
  },
  // name: "YourComponent",
  methods: {
    ...mapMutations(["setUser", "setToken", "getToken"]),
    login() {
      googleSdkLoaded(google => {
        google.accounts.oauth2
            .initCodeClient({
              client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
              scope: import.meta.env.VITE_GOOGLE_OAUTH_SCOPE,
              redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URI,
              callback: response => {
                if (response.code) {
                  this.sendCodeToBackend(response.code);
                }
              }
            })
            .requestCode();
      });
    },
    async sendCodeToBackend(code) {
      const res = await axios.post('http://127.0.0.1:5000/v1/login/google', {
        code: code,
      })

      const {user, access_token} = res.data;

      this.$router.push("/");

      this.$store.commit('setUser', user)
      this.$store.commit('setToken', access_token)
    }
  }
};
</script>
