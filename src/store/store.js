import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      token: null,
      email: null,
    };
  },
  getters: {
    verToken() {
      return this.token;
    },
    verEmail() {
      return this.email;
    },
  },
  actions: {
    setToken(value) {
      this.token = value;
    },
    setEmail(value) {
      this.email = value;
    },
  },
});
