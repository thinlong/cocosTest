import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import CocosController from "./cocos/CocosController";
import "@/css/index.less";
import {
  Button,
  Select,
  Switch,
  Slider,
  Radio,
  Checkbox,
  Loading,
  Message,
  MessageBox
} from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Loading);

Vue.prototype.$cocos = CocosController.o();
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
