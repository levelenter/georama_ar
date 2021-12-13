<template>
  <div class="w-100 mt-5 pt-5 d-flex align-items-center justify-content-center">
    <div><h1 class="yg fs-42">初期データローディング...</h1></div>
  </div>
  <div class="w-100 mt-5 pt-5 d-flex align-items-center justify-content-center">
    <img :src="url" class="mt-5" />
  </div>
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
    const base = process.env.BASE_URL;
    const url = `${base}ui/loading.svg`;
    /**
     * プロパティ
     */
    const router = useRouter();

    return {
      url,
    };
  },
});
</script>