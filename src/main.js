import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Navbar from "./components/Navbar.vue";

Vue.config.productionTip = false;
Vue.component("app-navBar", Navbar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
