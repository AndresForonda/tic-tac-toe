import Vue from "vue";
import App from "./App.vue";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

const socket = io("http://192.168.1.116:3300");

import Toasted from "vue-toasted";

const toastedOptions = {
  duration: 3000,
};

Vue.use(Toasted, toastedOptions);

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
