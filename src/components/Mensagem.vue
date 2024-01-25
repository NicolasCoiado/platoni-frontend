<template>
    <p :class="classe === 'erro' ? 'erro' : classe === 'normal' ? 'normal' : ''">{{msg}}</p>
</template>
<script>
    export default {
        name: "Mensagem",
        props: {
            msg: String,
            classe: String
        }
    }
</script>
<style scoped>
    .erro{
        font-style: italic;
        color:brown;
    }
</style>