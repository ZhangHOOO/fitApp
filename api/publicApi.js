// 视频播放速度调整
// id video设置的id
// rate 设置为的倍速
export const videoRate = (id, rata=2) => {
  uni.createVideoContext(id).playbackRate(rata);
};
