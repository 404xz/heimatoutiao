<template>
  <div class="home-container">
    <van-nav-bar class="top-search">
      <template #title>
        <van-button
          icon="search"
          class="search-btn"
          block
          type="info"
          round
          size="small"
          >搜索</van-button
        >
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" animated swipeable class="channel-tabs">
      <van-tab
        :title="item.name"
        v-for="item in UserChannelsList"
        :key="item.id"
      >
        <ArticleList :channel="item" />
      </van-tab>

      <template #nav-right>
        <div class="placeholder"></div>
        <div slot="nav-right" class="hamburger-btn">
          <ToutiaoIcon
            class="toutiao"
            icon="gengduo"
            @click.native="isShowPopup = true"
          />
        </div>
      </template>
    </van-tabs>
    <!-- 弹出层 -->
    <van-popup
      v-model="isShowPopup"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '90%' }"
    >
      <ChannelEdit :UserChannelsList="UserChannelsList" :active="active">
      </ChannelEdit>
    </van-popup>
  </div>
</template>

<script>
import { getUserChannels } from "@/api";
import ChannelEdit from "./components/channel-edit.vue";
import ArticleList from "@/views/home/components/article-list.vue";
export default {
  name: "HomePage",
  components: { ArticleList, ChannelEdit },
  props: {},
  data() {
    return {
      UserChannelsList: [],
      isShowPopup: false,
      active: 0,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getUserChannels();
  },
  mounted() {},
  methods: {
    async getUserChannels() {
      const res = await getUserChannels();
      this.UserChannelsList = res.data.data.channels;
    },
  },
};
</script>

<style scoped lang="less">
.home-container {
  padding-top: 174px;
  padding-bottom: 100px;
  .top-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  /deep/ .van-nav-bar__title {
    width: 80%;
    max-width: unset;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
  // .van-button--small {
  //   width: 250px;
  // }
  .search-btn {
    background-color: #5babfb;
  }

  /deep/ .channel-tabs {
    .van-tabs__wrap {
      position: fixed;
      top: 92px;
      z-index: 1;
      left: 0;
      right: 0;
      height: 82px;
    }
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      height: 80px;
      .van-tab__text {
        font-size: 27px;
        color: #777777;
      }
    }
    .placeholder {
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.902;
      i.toutiao {
        font-size: 33px;
      }
    }
    .van-tab--active .van-tab__text {
      color: #333 !important;
    }
    .van-tabs__line {
      width: 31px !important;
      height: 6px;
      background: rgba(50, 150, 250, 1);
      border-radius: 3px;
      bottom: 8px;
    }
    .van-tabs__nav {
      padding: 0;
    }
  }
}
</style>
