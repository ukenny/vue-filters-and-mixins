import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// Global Filter example
Vue.filter("toLowercase", function(value) {
  return value.toLowerCase();
});
new Vue({
  render: h => h(App)
}).$mount("#app");
