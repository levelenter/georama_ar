<template>
  <button @click="onClick">
    <img :src="base + 'ui/back_black.png'" style="height: 8rem" />
  </button>
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {
    id: { type: String, default: "" },
  },

  setup: (prop) => {
    const base = process.env.BASE_URL; //process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const router = useRouter();
    const onClick = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "MainPage", query: { id: prop.id } });
    };
    return {
      onClick,
      base,
    };
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