import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    allContacts: state => state.contacts,
    contact: state => id => {
      return state.contacts.find(contact => contact.id === id);
    }
  },
  mutations: {
    setContacts: (state, contacts) => (state.contacts = contacts)
  },
  actions: {
    async fetchContacts({ commit }) {
      const response = await axios.get(
        "http://www.json-generator.com/api/json/get/bVdxwMdHCa?indent=2"
      );
      commit("setContacts", response.data);
    }
  },
  modules: {}
});
