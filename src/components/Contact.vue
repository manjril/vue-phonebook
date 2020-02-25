<template>
  <div id="contact-card">{{ contactName }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  el: "#contact-card",
  computed: {
    ...mapGetters(["contactName"])
  }
};
</script>

<style>
</style>