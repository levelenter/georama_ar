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
    /**
     * 動的ラベル
     */
    const title = ref("ARCamera");
    const publicPath = process.env.BASE_URL;
    /**
     * プロパティ
     */
    const router = useRouter();

    return {
      title,
      publicPath,
    };
  },
});
</script>