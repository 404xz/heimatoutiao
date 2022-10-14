import axios from "@/utils/request";
// 提交登录账号密码
export const onSubmit = (data) =>
  axios({
    url: "/v1_0/authorizations",
    method: "POST",
    data,
  });
// 获取验证码
export const getVerification = (mobile) =>
  axios({
    url: `/v1_0/sms/codes/${mobile}`,
    method: "GET",
  });
// 获取用户信息
export const getUserInfo = () =>
  axios({
    url: "/v1_0/user/",
    method: "GET",
  });

// 修改指定用户频道
export const getUserChannels = () => {
  return axios({
    method: "GET",
    url: "/v1_0/user/channels",
  });
};

// 获取新闻文章详情
export const getAllChannels = (params) => {
  return axios({
    method: "GET",
    url: "/v1_0/articles",
    params,
  });
};

// 获取所有频道
export const setAllChannels = () => {
  return axios({
    method: "GET",
    url: "/v1_0/channels",
  });
};
