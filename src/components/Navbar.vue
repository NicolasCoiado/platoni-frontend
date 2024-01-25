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
    this.verificarToken();
  },
  methods: {
    async verificarToken() {
      const store = useStore();
      const token = store.verToken

      if (token) {
        this.logado = true;
      } else {
        this.logado = false;
      }
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