<template>
  <div
    id="contents-image"
    class="my-2 position-relative"
    :style="{ height: height, width: width, 'object-fit': object_fit }"
  >
    <img
      v-if="lens"
      :src="base + 'ui/lens.png'"
      class="bottom-0 end-0"
      :style="{
        height: '5.1rem',
        width: '5.1rem',
        position: 'absolute',
        bottom: 0,
        right: 0,
      }"
      @click="clickImage"
    />

    <img
      @click="clickImage"
      v-if="type === 'png' || type === 'jpg'"
      :src="src"
      @error="errorImage"
      :style="{
        height: height,
        width: width,
        'border-radius': radius,
        'object-fit': object_fit, // 'contain' // もともとの表示をトリミングしない場合以下
      }"
    />

    <video
      v-if="type === 'mp4'"
      :src="src"
      :style="{ height: height, width: width }"
      autoplay
      muted
      controls
      @click="toggleFullScreen"
    ></video>
  </div>

  <!-- Full Screen Image -->
  <div
    v-if="(type === 'png' || type === 'jpg') && full"
    style="background-color: rgba(0, 0, 0, 0.6); z-index: 1002"
    class="
      position-absolute
      top-0
      start-0
      h-100
      w-100
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <img
      :src="src"
      @click="clickImage"
      class="h-100 w-100"
      style="object-fit: contain"
    />
  </div>

  <div
    v-if="type === 'mp4' && full"
    style="
      object-fit: contain;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1000;
    "
    class="
      position-absolute
      top-0
      start-0
      h-100
      w-100
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <video
      v-if="type === 'mp4'"
      :src="src"
      class="w-100"
      @click="toggleFullScreen"
      autoplay
      controls
    ></video>
  </div>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref, toRef } from "@vue/runtime-core";

import { useRouter } from "vue-router";
export default defineComponent({
  // components: { ImageLightBox },
  props: {
    id: { type: String, default: "" },
    src: { type: String, default: "" },
    type: { type: String, default: "" },
    height: { type: String, default: "30rem" },
    width: { type: String, default: "60rem" },
    radius: { type: String, default: "0rem" },
    lens: { type: Boolean, default: true },
    object_fit: { type: String, default: "contain" },
  },
  setup: (props) => {
    const full = ref(false); // コンテンツのフルスクリーン制御
    const clickImage = () => {
      TimeOutLogic.instance.resetTimeout();
      full.value = !full.value;
    };
    const toggleFullScreen = () => {
      console.log("toggle full ", props.src);
      TimeOutLogic.instance.resetTimeout();
      full.value = !full.value;
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        full.value = true;
      } else {
        full.value = false;
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    // const isFullScreen = ref(false); // Windowのフルスクリーン制御
    // window.addEventListener("fullscreenchange", (e) => {
    //   isFullScreen.value = !isFullScreen.value;
    //   full.value = isFullScreen.value;
    //   console.log(e);
    // });

    const base = process.env.BASE_URL; //process.env.NODE_ENV === "production" ? "/georama_ar" : "/";
    return { clickImage, toggleFullScreen, full, base };
  },
});
</script>