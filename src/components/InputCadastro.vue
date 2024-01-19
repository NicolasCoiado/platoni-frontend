<template>
    <form class="area-form">
        <h1>Cadastro de Usuários</h1>
        <label for="nome">Nome</label>
        <input class="input-txt" type="text" name="nome" v-model="nome">
        <label for="nome">E-mail</label>
        <input class="input-txt" type="email" name="email" v-model="email">
        <label for="senha">Senha</label>
        <input class="input-txt" type="password" name="senha" v-model="senha">
        <label>Confirme sua senha</label>
        <input class="input-txt" type="password" name="confsenha" v-model="confsenha">
        <input class="btn-submit" type="submit"/>
    </form>
</template>
<script>
export default {
  name: 'InputCadastro',
}
</script>
<style scoped>
.area-form{
    margin: 5em 30em;
    padding: 5em 5em;
    background-color: #f8f8fa;
    display:  flex;
    flex-direction: column;
    box-shadow: 0em 0em 1em 0em #686868;
}
h1{
    margin-bottom: 0.8em;
    font-weight: bold;
    font-size: 3em;
    color: #4854ff;
    text-align: center;
}
label{
    margin-bottom: 0.5em;
}
.input-txt{
    font-size: 0.9em;
    background-color: #ffffff;
    border-radius: 1.4em;
    margin-bottom: 1em;
    border-top: 2px #c7c7c7 solid;
    border-bottom: 2px #c7c7c7 solid;
    border-left: 2px #c7c7c7 solid;
    border-right: 2px #c7c7c7 solid;
}
.btn-submit{
    font-size: 1.5em;
    font-weight: bold;
    color: #FFFF;
    background-color: #4854ff;
    border: none;
    border-radius: 1.4em;
    padding: 0.5em;
    margin-top: 1em;
}
</style>
