import { createRouter, createWebHashHistory } from "vue-router";
import LoginHome from "../views/LoginHome.vue";
import CadastroUsuario from "../views/CadastroUsuario.vue";
const routes = [
  {
    path: "/",
    name: "LoginHome",
    component: LoginHome,
  },
  {
    path: "/registrar",
    name: "CadastroUsuario",
    component: CadastroUsuario,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
