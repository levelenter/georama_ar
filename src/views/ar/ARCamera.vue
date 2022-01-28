<template>
  <img
    :src="`${publicPath}ui/camera_overlay.png`"
    style="
      position: fixed;
      top: 0rem;
      left: 0rem;
      width: 100%;
      height: 120rem;
      z-index: 1000;
    "
  />

  <iframe
    :src="`${publicPath}ar.html`"
    class="position-absolute top-0 w-100"
    style="height: 120rem;overflow-y: hidden;overflow-x: hidden;"
  >
  </iframe>
  <audio id="se" :src="`${publicPath}se/found.mp3`"></audio>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    // data
    const publicPath = process.env.BASE_URL;
    const arhtml = "ar.html";
    const router = useRouter();

    window.addEventListener("message", function (e) {
      console.log(e, e.data.action);
      if (e.data.action !== "markerFoundMessage") return;
      console.log(`${e.data.markerId}`);

      TimeOutLogic.instance.resetTimeout();

      const audio = document.getElementById("se") as HTMLAudioElement;
      audio.play();

      const id = setInterval(() => {
        router.push({ name: "MainPage", query: { id: e.data.markerId } });
        clearInterval(id);
      }, 800);
    });

    return {
      arhtml,
      publicPath,
    };
  },
});
</script>