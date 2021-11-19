<template>
  <iframe
    :src="`${publicPath}ar.html`"
    class="h-100 position-absolute top-0 w-100"
  >
  </iframe>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    // data
    const publicPath = process.env.BASE_URL;
    const router = useRouter();

    window.addEventListener("message", function (e) {
      if (e.data.action !== "markerFoundMessage") return;
      console.log(`${e.data.markerId}`);
      router.push({ name: "MainPage", query: { id: e.data.markerId } });
    });

    return {
      publicPath,
    };
  },
});
</script>