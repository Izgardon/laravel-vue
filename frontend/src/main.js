import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
import vuetify from "./plugins/vuetify";

import router from "./router";
import App from "./App.vue";
import store from "./store";

loadFonts();

const app = createApp(App);
app.use(vuetify).use(router).use(store);

app.mount("#app");
