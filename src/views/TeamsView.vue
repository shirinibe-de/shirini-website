<script>
import TeamListItem from "@/components/TeamListItem.vue";
import api from "@/api/api"

export default {
  components: {TeamListItem},
  data() {
    return {
      teams: []
    }
  },
  async mounted() {
    this.teams = await api.getTeams();
  }
}
</script>

<template>
    <div class="row">
      <TeamListItem v-for="team in teams" v-bind:name="team.name" v-bind:id="team.id"></TeamListItem>
    </div>

</template>

<style scoped>

</style>