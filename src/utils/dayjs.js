import dayjs from "dayjs";
import Vue from "vue";
// 默认英文
// 注册中文包
import "dayjs/locale/zh-cn.js";

dayjs.locale("zh-cn");

// console.log(dayjs().format("YYYY-MM-DD"));
// 引人相对时间的包
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// console.log(dayjs().to(dayjs("2021-01-01")));

// 过滤器
Vue.filter("relativeTime", (value) => {
  return dayjs().to(dayjs(new Date(value)));
});
