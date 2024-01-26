<template>
  <nav></nav>
    <NavLogado v-if="logado"/>
    <NavDeslogado  v-else/>
</template>

<script>
import NavDeslogado from "./NavDeslogado.vue";
import NavLogado from "./NavLogado.vue";
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
</style>