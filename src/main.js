import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
