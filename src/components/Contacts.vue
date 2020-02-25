<template>
  <div class="hello">
    <ul>
      <li v-for="(contact, i) in contacts" :key="i">{{ contact.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Contacts",
  methods: {
    ...mapActions(["fetchContacts"])
  },
  computed: mapState(["contacts"]),
  created() {
    this.fetchContacts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
