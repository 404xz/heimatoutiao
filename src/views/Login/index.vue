<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar" />
    <van-form @submit="onSubmit" ref="from">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        left-icon="smile-o"
        :rules="rules.mobile"
        required
        maxlength="11"
        type="number"
      >
        <template #left-icon>
          <ToutiaoIcon icon="shouji" class="toutiao" />
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="rules.code"
        required
        maxlength="6"
        type="number"
      >
        <template #left-icon>
          <ToutiaoIcon icon="yanzhengma" class="toutiao" />
        </template>
        <template #button>
          <van-button
            v-if="isShowCountDown"
            native-type="button"
            class="send-sms-btn"
            size="small"
            @click="getVerification"
            :disabled="isDisabled"
            >获取验证码</van-button
          >
          <van-count-down
            v-else
            time="5000"
            @finish="isShowCountDown = true"
            format="ss s"
          />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { onSubmit, getVerification } from "@/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      isDisabled: false,
      isShowCountDown: true,
      user: {
        mobile: "13911111112",
        code: "246810",
      },
      rules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不对",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
          },
          {
            pattern: /^\d{6}$/,
            message: "验证码只能是6位",
          },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      // 只有promise成功了的情况下才会继续执行
      try {
        const res = await onSubmit(this.user);
        Toast.success("登录成功");
      } catch (e) {
        console.log(e);
        Toast.fail(e?.response?.data?.message || "服务器错误");
      }
    },
    async getVerification() {
      try {
        await this.$refs.from.validate("mobile");
      } catch (e) {
        return;
      }
      try {
        this.isDisabled = true;
        await getVerification(this.user.mobile);
        this.isShowCountDown = false;

        console.log("验证码发送中");
        this.$toast.success("发送验证码成功");
      } catch (e) {
        this.$toast.fail(e?.response?.data?.message || "出错了");
      } finally {
        this.isDisabled = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  /deep/.send-sms-btn {
    width: 172px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
