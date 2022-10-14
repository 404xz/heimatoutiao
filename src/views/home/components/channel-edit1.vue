<template>
  <div class="channel-edit">
    <van-cell title="标题频道" style="text-align: center"></van-cell>
    <van-cell title="我的频道">
      <template #default>
        <div>
          <van-button class="endi-btn" type="danger" size="mini" plain round
            >编辑</van-button
          >
        </div>
      </template>
    </van-cell>

    <van-grid :gutter="10" class="my-pannel">
      <van-grid-item v-for="(value, index) in UserChannelsList" :key="value.id">
        <template>
          <van-icon name="clear" />
          <span class="text" :class="{ active: active === index }">{{
            value.name
          }}</span>
        </template>
      </van-grid-item>
    </van-grid>

    <van-cell title="编辑频道">
      <template #default>
        <div>
          <van-button class="endi-btn" type="danger" size="mini" plain round
            >编辑</van-button
          >
        </div>
      </template>
    </van-cell>

    <van-grid :gutter="10">
      <van-grid-item v-for="value in recommendChannels" :key="value.id">
        <template #text>
          <span class="text"><van-icon name="plus" />{{ value.name }}</span>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { setAllChannels } from "@/api";
export default {
  name: "ChannelEdit",
  components: {},
  props: {
    UserChannelsList: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      AllChannels: [],
    };
  },
  computed: {
    recommendChannels() {
      return this.AllChannels.filter((item) => {
        return !this.UserChannelsList.some(
          (useritem) => useritem.id === item.id
        );
      });
    },
  },
  watch: {},
  created() {
    this.setAllChannels();
  },
  mounted() {},
  methods: {
    async setAllChannels() {
      const res = await setAllChannels();
      this.AllChannels = res.data.data.channels;
    },
  },
};
</script>

<style scoped lang="less">
.channel-edit {
  .endi-btn {
    width: 120px;
  }
  .text {
    color: #222;
    font-size: 24px;
    margin-top: 0;
    &.active {
      color: red;
    }
  }
  /deep/.van-grid-item__content {
    background-color: #f4f5f6;
  }
  .my-pannel {
    .van-icon-clear {
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 20px;
      color: #cacaca;
    }
  }
}
</style>
