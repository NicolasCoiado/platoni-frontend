<template>
  <nav>
      <NavLogado v-if="logado"/>
      <NavDeslogado  v-else/>
  </nav>
</template>

<script>
import NavDeslogado from "./NavDeslogado.vue"
import NavLogado from "./NavLogado.vue"
import {useStore} from "../store/store.js";

export default {
  name: 'NavBar',
  data () {
    return{
      logado: false
    }
  },
  components: {
    NavDeslogado,
    NavLogado
  },
  mounted(){
    // this.verificarToken();
    const store = useStore();
    store.$subscribe((mutation) => {
      if (mutation.type === 'setToken') {
        console.log("Vamo")
        this.verificarToken();
      }
    });
    // this.verificarTokenInterval = setInterval(() => {
    //   this.verificarToken();
    // }, 1);
  },
  methods: {
    async verificarToken() {
      const store = useStore();
      const token = store.verToken
      console.log(token)

      // if (token) {
      //   this.logado = true;
      // } else {
      //   this.logado = false;
      // }
    }
  }
}
</script>

<style scoped>
  nav {
    width: 100%;
    background-color: #FFFF;
    box-shadow: 0em 0.5em 1em 0px #a8a8a8;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>