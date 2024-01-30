<template>
    <Navbar />
    <body>
      <EmailPrimeiro v-if="send" @sent="onSend"/>
      <div v-show="!reset" v-else="!send">
          <Mensagem  msg="Enviamos um código de redefinição para o seu e-mail." classe="sucesso"/>
          <EmailSegundo @reset="onReset"/>
        </div>
      <Mensagem  v-show="reset" msg="Seu e-mail foi redefinido!" classe="sucesso"/>
    </body>
  </template>
  <script>
  import Navbar from "../components/Navbar.vue";
  import Mensagem from "../components/Mensagem.vue";
  import EmailPrimeiro from "../components/EmailPrimeiro.vue";
  import EmailSegundo from "../components/EmailSegundo.vue";

  export default {
    name: 'EditEmail',
    data(){
      return {
        send: true,
        reset: false
      }
    },
    components:{
      Navbar,
      EmailPrimeiro,
      EmailSegundo,
      Mensagem
    },
    methods:{
      onSend(){
        this.send = false
      },
      onReset(){
        this.reset = true
        setTimeout(() => {
            this.$router.push({ path: "/perfil" });
        }, 3000);
      }
    }
  }
  </script>
  <style scoped>
  </style>
    