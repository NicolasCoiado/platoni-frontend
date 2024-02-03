import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state() {
    return {
      token: null,
      email: null,
      idCert: null,
    };
  },
  getters: {
    verToken() {
      return this.token;
    },
    verEmail() {
      return this.email;
    },
    verId() {
      return this.idCert;
    },
  },
  actions: {
    setToken(value) {
      this.token = value;
    },
    setEmail(value) {
      this.email = value;
    },
    setId(value) {
      this.idCert = value;
    },
  },
});
