import Vue from "vue";
import App from "./App.vue";
import router from './router'

Vue.config.productionTip = false;

//creating new instance
//vue is used for creating SPA
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
