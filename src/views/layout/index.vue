<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar route class="layout-tabbar" v-model="active">
      <van-tabbar-item to="/home">
        <template #icon>
          <ToutiaoIcon icon="shouye"></ToutiaoIcon>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <template #icon>
          <ToutiaoIcon icon="wenda"></ToutiaoIcon>
        </template>
        问答
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <template #icon>
          <ToutiaoIcon icon="shipin"></ToutiaoIcon>
        </template>
        视频
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <template #icon>
          <ToutiaoIcon icon="wode"></ToutiaoIcon>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
