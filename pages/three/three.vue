<template>
  <view>
    <!--  class="flex_y flex-space-between flex-y-center" -->
    <view
     
	  class="flex_y flex-space-between flex-y-center"
      :style="{ height: autoHeight }"
    >
      <navigator :url="'/pages/benchPress/benchPress'">
        <image
          src="/static/images/chest/chest.gif "
          :style="{ height: imgAutoHeight }"
        ></image>
      </navigator>
      <navigator :url="'/pages/squat/squat'">
        <image
          src="/static/images/leg/leg.jpg"
          :style="{ height: imgAutoHeight }"
        ></image>
      </navigator>
      <navigator :url="'/pages/benchPress/benchPress'">
        <image
          src="/static/images/yingla/yingla.gif"
          :style="{ height: imgAutoHeight }"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      autoHeight: getApp().globalData.autoHeight,
      imgAutoHeight: parseInt(getApp().globalData.autoHeight) / 3 + "px",
    };
  },
  onShow() {
    console.log("this.autoHeight", this.autoHeight);
    console.log("this.imgAutoHeight", this.imgAutoHeight);
  },
};
</script>

<style lang="scss">
page{
	overflow: hidden;
}

</style>
