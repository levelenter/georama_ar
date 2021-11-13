// import AFRAME from "aframe";
const AFRAME = (window as any).AFRAME;
AFRAME.registerComponent("registerevents", {
  init: function () {
    const marker = this.el;

    // マーカーを検出したイベントの登録
    marker.addEventListener("markerFound", function () {
      const markerId = marker.id;
      console.log("markerFound", markerId);

      // アニメーションの開始
    });

    // マーカーを見失ったイベントの登録
    marker.addEventListener("markerLost", function () {
      const markerId = marker.id;
      console.log("markerLost", markerId);

      // アニメーションの停止
    });
  },
});
