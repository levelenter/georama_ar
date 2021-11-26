<template>
  <button @click="toPointPage">
    <img :src="base + '/ui/point.png'" />
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
    const base = process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const router = useRouter();
    const toPointPage = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "PointPage", query: { id: prop.id } });
    };

    return { toPointPage, base };
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