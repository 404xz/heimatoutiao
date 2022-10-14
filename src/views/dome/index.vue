<template>
  <div>
    <h1>dome</h1>
    <h2>{{ count }}</h2>
    <h3>{{ userInfo.name }}</h3>
    <van-field v-model.number="num"></van-field>
    <van-button @click="changeNum">count++</van-button>
    <van-button @click="changeName">修改name</van-button>
    <van-button @click="addCount">修改name</van-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      num: "",
    };
  },
  computed: {
    ...mapState(["count", "userInfo"]),
  },
  methods: {
    changeNum() {
      this.$store.commit("changeCount");
    },
    changeName() {
      this.$store.commit("changeName");
    },
    addCount() {
      this.$store.commit("addCount", this.num);
    },
  },
};
</script>

<style></style>
