import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.less";
import vant from "@/plugins/vant.js";
import "vant/lib/index.less";
import "amfe-flexible";
import request from "@/utils/request";

request.get("v1_0/channels").then((res) => {
  console.log(res.data.data.channels);
});

import ToutiaoIcon from "@/components/ToutiaoIcon.vue";
Vue.component("ToutiaoIcon", ToutiaoIcon);
Vue.config.productionTip = false;
Vue.use(vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
