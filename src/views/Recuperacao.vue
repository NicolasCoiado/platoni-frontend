<template>
    <Navbar />
    <body>
        <SenhaPrimeiro v-if="send" @sent="onSend" />
        <div v-show="!reset" v-else="!send">
            <Mensagem  msg="Enviamos um código de redefinição para o seu e-mail." classe="sucesso"/>
            <SenhaSegundo @reset="onReset"/>
        </div>
        <Mensagem  v-show="reset" msg="Sua senha foi redefinida!" classe="sucesso"/>
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import SenhaPrimeiro from "../components/SenhaPrimeiro.vue";
import SenhaSegundo from "../components/SenhaSegundo.vue";
import Mensagem from "../components/Mensagem.vue";

export default {
    name: 'Recuperacao',
    data(){
        return{
            send: true,
            reset: false
        }
    },
    components:{
        Navbar,
        SenhaPrimeiro,
        SenhaSegundo,
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
<style scoped>
*{
font-family: Arial, Helvetica, sans-serif;
}
</style>
    