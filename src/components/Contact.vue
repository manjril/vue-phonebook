<template>
  <div id="contact-card">
    <h1>{{ contact.name }}</h1>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapGetters(["allContacts"]),
    contact() {
      return this.$store.getters.contact(parseInt(this.$route.params.id));
    }
  }
};
</script>

<style>
</style>