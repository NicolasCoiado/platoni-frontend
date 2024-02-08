<template>
  <form class="area-form" @submit="editarCert">
    <h1>Editar certificado</h1>
    <label for="nome">Título:</label>
    <input class="input-txt" type="text" name="nome" v-model="nome_certificado" />
    <label for="nome">Emissor:</label>
    <input class="input-txt" type="text" name="emissor" v-model="emissor" />
    <label for="nome">Descrição:</label>
    <input class="input-txt" type="text" name="emissor" v-model="descricao" />
    <label class="input-file" for="imagem">{{msgFile}}</label>
    <input @change="inputFile" type="file" name="imagem" id="imagem" accept="image/png, image/jpeg" />
    <button class="btn-clean" v-show="file" @click="cleanFile">Retirar imagem</button>
    <input class="btn-submit" type="submit" value="Enviar edição"/>
    <button class="btn-copiar" @click.prevent="copiarLink">Copiar link do certificado</button>
    <button class="btn-excluir"  @click="excluirCert">Excluir certificado</button>
  </form>
</template>
<script>
import axios from "axios";
import {useStore} from "../store/store.js";

export default {
  name: 'CertificadoLogado',
  data(){
    return{
      id_certificado: this.infos.id_certificado,
      nome_certificado: this.infos.nome_certificado,
      emissor: this.infos.emissor, 
      descricao: this.infos.descricao,
      imagem: this.infos.url,
      file: false,
      msgFile: "Nova imagem",
    }
  },
  props: {
    infos: Object
  },
  methods:{
    copiarLink() {
      const el = document.createElement('textarea')
      el.value = "localhost:5173"+this.$route.fullPath
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    inputFile(e){
      this.file = true
      this.msgFile = "Imagem selecionada"
      this.imagem = e.target.files[0]
    },
    cleanFile(){
      this.file = false
      this.msgFile = "Imagem *"
    },
    editarCert(e){
      e.preventDefault()
      const api = import.meta.env.VITE_API;
      const store = useStore();
      const jwt = store.verToken;

      const form = new FormData();
      form.append('id_certificado', this.id_certificado);
      form.append('nome_certificado', this.nome_certificado);
      form.append('emissor', this.emissor);
      form.append('descricao', this.descricao);
      form.append('id_usuario', this.id);
      form.append('imagem', this.imagem);

      axios
      .put(api + "edit_cert", form, {headers: {Authorization: "Bearer " + jwt}})
      .then((res)=>{
        console.log(res.data.msg);
        this.$router.push({ path: "/certificados" });
      })
      .catch((error)=>{
        console.error(error);
      })
    },
    excluirCert(){
      const api = import.meta.env.VITE_API;
      const store = useStore();
      const jwt = store.verToken;

      const dado = { id_certificado: this.id_certificado}
    
      axios
      .put(api + "delete_cert", dado, {headers: {Authorization: "Bearer " + jwt}})
      .then((res)=>{
        console.log(res.data.msg);
        this.$router.push({ path: "/perfil" });
      })
      .catch((error)=>{
        console.error(error);
      })
    }
  }
}
</script>
<style scoped>
h1{
    margin-bottom: 0.8em;
    font-weight: bold;
    color: #4854ff;
    text-align: center;
}
input[type='file'] {
  display: none
}
.input-file{
  background-color: #4854ff;
  font-weight: bold;
  text-align: center;
  color: #FFFF;
  padding: 1%;
  border-radius: 0.5em;
  margin-top: 2%;
}
.input-file:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
.btn-clean{
  background-color: #ff2e2e;
  font-weight: bold;
  text-align: center;
  color: #FFFF;
  padding: 1%;
  border-radius: 0.5em;
  margin-top: 2%;
  border: none;
  margin-bottom: 3%;
}
.btn-clean:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
.btn-submit{
  font-size: 1.5em;
  font-weight: bold;
  color: #FFFF;
  background-color: #2D00B4;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em;
  margin-top: 1em;
}
.btn-submit:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
@media screen and (min-width: 1650px){
  .area-form{
    margin: 5em 30em;
    padding: 5em 5em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 3em;
  }
}
@media screen and (max-width: 1649px) and (min-width: 760px){
  .area-form{
    margin: 5em 5em;
    padding: 5em 3em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 3em;
  }
}

@media screen and (max-width: 759px){
  .area-form{
    margin: 3em 0em;
    padding: 2em 1em;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 2em;
  }
}

label{
  margin-bottom: 0.5em;
}
.input-txt{
  font-size: 0.9em;
  border-radius: 0.5em;
  margin-bottom: 1em;
  border-top: 2px #c7c7c7 solid;
  border-bottom: 2px #c7c7c7 solid;
  border-left: 2px #c7c7c7 solid;
  border-right: 2px #c7c7c7 solid;
}

.btn-excluir{
  font-size: 1.5em;
  font-weight: bold;
  color: #FFFF;
  background-color: #ff2e2e;
  border: none;
  border-radius: 1.4em;
  padding: 0.5em;
  margin-top: 1em;
}
.btn-excluir:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
.btn-copiar{
  font-size: 1em;
  font-weight: bold;
  color: #FFFF;
  background-color: #4854ff;
  border: none;
  border-radius: 1.4em;
  padding: 0.5em;
  margin-top: 1em;
}
.btn-copiar:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
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
.btn-submit:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
</style>
