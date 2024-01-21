<template>
    <p :class="classe === 'erro' ? 'erro' : classe === 'normal' ? 'normal' : ''">{{msg}}</p>
</template>
<script>
    export default {
        name: "Message",
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
    .normal{
        
    }
</style>