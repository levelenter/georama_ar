<template>
  <button @click="toTrandPage">
    <img :src="base + 'ui/trend.png'" style="width: 14.3rem; height: 15.2rem" />
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
    const base = process.env.BASE_URL; //process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const router = useRouter();
    const toTrandPage = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "TrendPage", query: { id: prop.id } });
    };
    return { base, toTrandPage };
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