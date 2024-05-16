<script>
export default {
  name: "TeamMemberListItem",
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    blames: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <li class="collection-item avatar">
    <img
        v-bind:src="imageUrl"
        alt="" class="circle">
    <span class="title">{{ name }}</span>
    <p>
      {{ email }}
      <span v-if="blames !== 0" class="new badge red" data-badge-caption="blame to vote">{{ blames }}</span>
    </p>


  </li>
</template>

<style scoped>

</style>