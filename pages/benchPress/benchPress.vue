<template>
  <view class="flex_y flex-y-center">
    <view v-for="item in mockData" :key="item.msg" class="video">
      <video id="myVideo" :src="item.url" enable-play-gesture></video>
      <view class="flex_x flex-x-center">{{ item.msg }}</view>
    </view>
  </view>
</template>

<script>
import { mockData } from "./benchPressData";
import { videoRate } from "api/publicApi";

export default {
  data() {
    return {
      mockData: mockData,
    };
  },
  onLoad() {},
  onReady: function (res) {
    videoRate("myVideo", 2);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.video {
  margin-bottom: 20px;
}
</style>
