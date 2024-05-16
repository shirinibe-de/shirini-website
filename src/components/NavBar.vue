<script>
import {RouterLink} from "vue-router";

import {mapGetters} from "vuex";

export default {
  name: "NavBar",
  components: {RouterLink},
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
}
</script>

<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">shirinibe.de</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-if="isLoggedIn">
          <RouterLink to="/teams">Teams</RouterLink>
        </li>
        <li v-if="isLoggedIn">
          <RouterLink to="/create-team">Create Team</RouterLink>
        </li>
        <li v-if="!isLoggedIn">
          <RouterLink to="/login">Login</RouterLink>
        </li>
        <li v-if="isLoggedIn">
          <RouterLink to="/login">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>