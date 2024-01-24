import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      token: null,
    };
  },
  getters: {
    verToken() {
      return this.token;
    },
  },
  actions: {
    setToken(value) {
      this.token = value;
    },
  },
});
