import { Button, NavBar, Form, Field, Icon, Toast, CountDown } from "vant";
const elements = [Button, NavBar, Form, Field, Icon, Toast, CountDown];
export default function (Vue) {
  elements.forEach((item) => {
    Vue.use(item);
  });
}
