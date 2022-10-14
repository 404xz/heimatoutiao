import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.less";
import vant from "@/plugins/vant.js";
import "vant/lib/index.less";
import "amfe-flexible";
import "@/utils/dayjs.js";

import ToutiaoIcon from "@/components/ToutiaoIcon.vue";
Vue.component("ToutiaoIcon", ToutiaoIcon);
Vue.config.productionTip = false;
Vue.use(vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
