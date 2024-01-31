import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import CadastroUsuario from "../views/CadastroUsuario.vue";
import Certificados from "../views/Certificados.vue";
import Recuperacao from "../views/Recuperacao.vue";
import Perfil from "../views/Perfil.vue";
import EditEmail from "../views/EditEmail.vue";
import DeleteUsuario from "../views/DeleteUsuario.vue";
import CadastroCert from "../views/CadastroCert.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/registrar",
    name: "CadastroUsuario",
    component: CadastroUsuario,
  },
  {
    path: "/certificados",
    name: "Certificados",
    component: Certificados,
  },
  {
    path: "/recuperacao",
    name: "Recuperacao",
    component: Recuperacao,
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/editar/email",
    name: "EditEmail",
    component: EditEmail,
  },
  {
    path: "/delete/usuario",
    name: "DeleteUsuario",
    component: DeleteUsuario,
  },
  {
    path: "/cadastro/certificados",
    name: "CadastroCert",
    component: CadastroCert,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
