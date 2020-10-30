/**
 * Pizz Tac Coe (a Tic Tac Toe Game)
 */

import Vue from "vue";
// Import the socket.io libraries and wrapper
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";
// Import he root component
import App from "./App.vue";

/**
 * Create a socket connection
 * Using process.env.VUE_APP_SOCKET_URL, means that the application is
 * storing the server url where the socket lives from an environment variable
 */
const socket = io(process.env.VUE_APP_SOCKET_URL);

// Register the $socket property in the Vue prototype
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

// Rendering the app
new Vue({
  render: h => h(App)
}).$mount("#app");
