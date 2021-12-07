<template>
  <div
    id="contents-image"
    class="my-2 position-relative"
    style="background-color: rgb(156, 156, 156); object-fit: contain"
    :style="{ height: height, width: width }"
  >
    <img
      :src="base + '/ui/lens.png'"
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
      :style="{ height: height, width: width }"
    />

    <video
      v-if="type === 'mp4'"
      :src="src"
      :style="{ height: height, width: width }"
      autoplay
      @click="toggleFullScreen"
    ></video>
  </div>

  <!-- Full Screen Image -->
  <div
    v-if="(type === 'png' || type === 'jpg') && full"
    style="
      object-fit: contain;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1002;
    "
    class="
      position-absolute
      top-0
      start-0
      h-100
      w-100
      d-flex
      align-items-center
    "
  >
    <img :src="src" @click="clickImage" />
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
    "
  >
    <video
      v-if="type === 'mp4'"
      :src="src"
      class="w-100"
      @click="toggleFullScreen"
      autoplay
    ></video>
  </div>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref } from "@vue/runtime-core";

import { useRouter } from "vue-router";
export default defineComponent({
  // components: { ImageLightBox },
  props: {
    id: { type: String, default: "" },
    src: { type: String, default: "" },
    type: { type: String, default: "" },
    height: { type: String, default: "30rem" },
    width: { type: String, default: "60rem" },
  },
  setup: (props) => {
    const full = ref(false);
    const clickImage = () => {
      TimeOutLogic.instance.resetTimeout();
      full.value = !full.value;
    };
    const toggleFullScreen = () => {
      TimeOutLogic.instance.resetTimeout();
      full.value = !full.value;
      // if (!document.fullscreenElement) {
      //   document.documentElement.requestFullscreen();
      //   full.value = true;
      // } else {
      //   full.value = false;
      //   if (document.exitFullscreen) {
      //     document.exitFullscreen();
      //   }
      // }
    };
    const base = process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    return { clickImage, toggleFullScreen, full, base };
  },
});
</script>