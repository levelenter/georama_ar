<template>
  <div
    id="contents-image"
    class="my-2"
    style="background-color: rgb(156, 156, 156); object-fit: contain"
    :style="{ height: height }"
  >
    <img
      @click="clickImage"
      v-if="type === 'png' || type === 'jpg'"
      :src="src"
      :style="{ height: height }"
    />

    <video
      v-if="type === 'mp4'"
      :src="src"
      :style="{ height: height }"
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
import { defineComponent, ref } from "@vue/runtime-core";

import { useRouter } from "vue-router";
export default defineComponent({
  // components: { ImageLightBox },
  props: {
    id: { type: String, default: "" },
    src: { type: String, default: "" },
    type: { type: String, default: "" },
    height: { type: String, default: "30rem" },
  },
  setup: (props) => {
    const full = ref(false);
    const clickImage = () => {
      full.value = !full.value;
    };
    const toggleFullScreen = () => {
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

    return { clickImage, toggleFullScreen, full };
  },
});
</script>