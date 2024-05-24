<script setup>
import {RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";

</script>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <div class="container">
  <RouterView/>
  </div>

</template>

<style scoped>

</style>
