<template>
    <div class="galeria">
        <router-link to="/" class="btn-add-cert">+</router-link>
        
    </div>
</template>
<script>
  export default {
    name: 'GaleriaCertificados'
  }
</script>
<style scoped>
.galeria{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
}
.btn-add-cert{
    background-color: #717af8;
    margin: 2vh 2vw;
    padding: 10vh 10vw;
    color: #FFFF;
    text-align: center;
    text-decoration: none;
    font-size: 800%;
    font-weight: bold;
}
</style>
    