import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCryptojs from "vue-cryptojs";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueCryptojs);
app.mount("#app");
