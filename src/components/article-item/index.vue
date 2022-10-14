<template>
  <div class="article-item">
    <van-cell :title="article.title">
      <template #default v-if="article.cover.type === 1">
        <div class="oneimg">
          <van-image class="img" :src="article.cover.images[0]" />
        </div>
      </template>
      <template #label>
        <div class="imgs" v-if="article.cover.type === 3">
          <van-image
            class="img"
            v-for="(item, index) in article.cover.images"
            :key="index"
            :src="item"
          />
        </div>
        <div class="txt">
          <span>{{ article.aut_name }}</span>
          <span>{{ article.comm_count }}评论</span>
          <span>{{ article.pubdate | relativeTime }}</span>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  components: {},
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.article-item {
  .oneimg {
    height: 100px;
  }
  .img {
    width: 200px;
    height: 200px;
  }
  .imgs {
    display: flex;
    justify-content: space-around;
  }
  .txt {
    span {
      margin-right: 10px;
    }
  }
  .van-cell__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
