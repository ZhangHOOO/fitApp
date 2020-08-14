<script>
export default {
  // 全局变量
  globalData: {
    autoHeight: 0, // 可用区域高度
  },

  onLaunch: function () {
    const res = uni.getSystemInfoSync();
    getApp().globalData.autoHeight =
      res.windowHeight - res.statusBarHeight - 50 + "px";
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
page {
  height: 100%;
  width: 100%;
  background-color: #fbf9fe;
  margin-top: var(--status-bar-height);
}
// flex系列方法
.flex_y {
  display: flex;
  flex-direction: column;
}

.flex_x {
  display: flex;
}

.flex-y-center {
  align-items: center;
}

.flex-space-between {
  justify-content: space-between;
}

.flex-x-center {
  justify-content: center;
}

@import "uview-ui/index.scss";
/*每个页面公共css */
</style>
