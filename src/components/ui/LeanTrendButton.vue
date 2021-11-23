<template>
  <button @click="toTrendPage">
    <img :src="'/ui/lean_trend_black.png'" />
  </button>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {
    id: { type: String, default: "" },
  },
  setup: (prop) => {
    const router = useRouter();
    const toTrendPage = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "TrendPage", query: { id: prop.id } });
    };

    return { toTrendPage };
  },
});
</script>
<style scoped>
button {
  padding: 0;
  border: none;
  background: transparent;
}

button img {
  display: block;
}
</style>