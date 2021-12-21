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
    style="height: 120rem"
  >
  </iframe>
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
      router.push({ name: "MainPage", query: { id: e.data.markerId } });
    });

    return {
      arhtml,
      publicPath,
    };
  },
});
</script>