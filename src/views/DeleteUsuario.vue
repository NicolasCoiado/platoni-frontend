<template>
    <Navbar />
    <body>
        <DeletePrimeiro v-if="send" @sent="onSend"/>
        <div v-show="!reset" v-else="!send">
          <Mensagem  msg="Enviamos um código de exclusão para o seu e-mail." classe="sucesso"/>
          <DeleteSegundo @reset="onReset"/>
        </div>
      <Mensagem  v-show="reset" msg="Sua conta foi excluída!" classe="sucesso"/>
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Mensagem from "../components/Mensagem.vue";
import DeletePrimeiro from "../components/DeletePrimeiro.vue";
import DeleteSegundo from "../components/DeleteSegundo.vue";

export default {
    name: 'DeleteUsuario.vue',
    data(){
      return {
        send: true,
        reset: false
      }
    },
    components:{
        Navbar,
        DeletePrimeiro,
        DeleteSegundo,
        Mensagem
    },
    methods:{
      onSend(){
        this.send = false
      },
      onReset(){
        this.reset = true
        setTimeout(() => {
            this.$router.push({ path: "/" });
        }, 3000);
      }
    }
}
</script>
<style>

</style>