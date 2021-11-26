<template>
  <button @click="onClose">
    <img :src="base + '/ui/batu.png'" style="width: 5rem; height: 5rem" />
  </button>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    const router = useRouter();
    const base = process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const onClose = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "ARCamera" });
    };
    return { onClose, base };
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