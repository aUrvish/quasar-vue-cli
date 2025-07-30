import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

createApp(App).use(Quasar, quasarUserOptions).mount("#app");
