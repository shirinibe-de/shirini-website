<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Create Team</span>
          <form class="">
            <div class="row">
              <div class="input-field col">
                <input v-model="name" id="team-name" type="text" class="validate">
                <label for="team-name">Team Name</label>
              </div>
            </div>
          </form>
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn" @click="submit()">Submit</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row">

  </div>
</template>

<script>
import api from "@/api/api";

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async submit() {
      await api.createTeam(this.name);
      this.$router.push("/teams");
    }
  }
}
</script>