<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      url: `/teams/${this.id}`
    }
  },
}
</script>

<template>
  <div class="card col s4">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="/src/assets/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{ name }}<i class="material-icons right">more</i></span>
<!--      <p><a href="#">This is a link</a></p>-->
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{ name }}<i class="material-icons right">close</i></span>
      <RouterLink v-bind:to="url"><button class="waves-effect waves-light btn-small center">More</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>