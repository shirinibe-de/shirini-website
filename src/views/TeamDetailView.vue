<script>
import TeamMemberListItem from "@/components/TeamMemberListItem.vue";
import api from "@/api/api";

export default {
  name: "TeamDetailView",
  components: {TeamMemberListItem},

  data() {
    return {
      name: 'TEAM NAME',
      joinLink: 'https://shirinibe.de/invites/teams/FC4IB5FMAA1R',
      members: [],
    }
  },
  created() {
    this.$watch(
        () => this.$route.params.id,
        (newId, oldId) => {
          console.log(`route changed from ${oldId} to ${newId}`)
        }
    )
  },
  async mounted() {
    const teamID = this.$route.params.id;
    const response = await api.teamDetail(teamID);

    this.name = response.name;
    this.members = response.members;
  },
  methods: {
    copyLink() {
      alert('text copied')
    }
  }
}
</script>

<template>

  <div style="margin-top: 10px;" class="row">
    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="#!" class="breadcrumb">{{ name }}</a>
          <a href="#!" class="breadcrumb">Second</a>
          <a href="#!" class="breadcrumb">Third</a>
        </div>
      </div>
    </nav>
  </div>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ name }}<span class="new badge" data-badge-caption="custom caption">4</span></span>
          <div class="divider"></div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s11 m11 l11">
                  <input disabled id="icon_prefix" type="text" class="validate" :value="joinLink">
                  <i class="material-icons prefix" @click="copyLink()">content_copy</i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col s12 m12 l12">
    <div class="card">
      <div class="card-content">
        <ul class="collection">

          <TeamMemberListItem v-for="member in members" v-bind:name="member.name"
                              v-bind:email="member.email"
                              v-bind:imageUrl="member.picture_url"
                              v-bind:blames="member.blames"></TeamMemberListItem>
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>