<template>
  <div class="hello">
    <ul>
      <li v-for="(contact, i) in contacts" :key="i">
        <router-link :to="{ name: 'id', params: { id: contact.id } }">{{ contact.name }}</router-link>
      </li>
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
  computed: mapState(["contacts"])
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
  margin: 0 auto;
}
a {
  color: #42b983;
}
</style>
