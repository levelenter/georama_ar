<template>
  <div class="w-100 mt-5 pt-5 d-flex align-items-center justify-content-center">
    <img :src="url" />
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