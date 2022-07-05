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
