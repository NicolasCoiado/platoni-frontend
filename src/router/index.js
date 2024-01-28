import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import CadastroUsuario from "../views/CadastroUsuario.vue";
import Certificados from "../views/Certificados.vue";
import Recuperacao from "../views/Recuperacao.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
