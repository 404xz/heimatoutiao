import Vue from "vue";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
import {
  Button,
  NavBar,
  Form,
  Field,
  Icon,
  Toast,
  CountDown,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Image,
  Grid,
  GridItem,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Popup,
} from "vant";
const elements = [
  Button,
  NavBar,
  Form,
  Field,
  Icon,
  Toast,
  CountDown,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Image,
  Grid,
  GridItem,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Popup,
];
export default function (Vue) {
  elements.forEach((item) => {
    Vue.use(item);
  });
}
