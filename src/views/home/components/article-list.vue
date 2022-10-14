<template>
  <div class="article-list">
    <van-pull-refresh
      :success-text="successText"
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :error.sync="error"
        error-text="出错了，点击重新加载"
      >
        <ArticleItem
          v-for="(item, index) in list"
          :key="index"
          :article="item"
        />
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getAllChannels } from "@/api";
import ArticleItem from "@/components/article-item/index.vue";
export default {
  name: "ArticleList",
  components: { ArticleItem },
  props: {
    channel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      error: false,
      isLoading: false,
      successText: "刷新成功",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      try {
        const res = await getAllChannels({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1,
        });
        this.list = [...this.list, ...res.data.data.results];
        // console.log(res.data.data.results);
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (res.data.data.results.length === 0) {
          this.finished = true;
        } else {
          this.timestamp = res.data.pre_timestamp;
        }
      } catch (e) {
        this.finished = false;
        this.error = true;
      }
    },
    async onRefresh() {
      const res = await getAllChannels({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1,
      });
      this.list = [...res.data.data.results, ...this.list];
      this.isLoading = false;
      this.successText = `更新了${res.data.data.results.length}条数据`;
    },
  },
};
</script>

<style scoped lang="less">
.article-list {
  height: 79vh;
  overflow: auto;
}
</style>
