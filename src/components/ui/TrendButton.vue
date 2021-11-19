<template>
  <button @click="toTrandPage">
    <img :src="'/ui/trend.png'" />
  </button>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {
    id: { type: String, default: "" },
  },
  setup: (prop) => {
    const router = useRouter();
    const toTrandPage = () => {
      router.push({ name: "TrendPage", query: { id: prop.id } });
    };
    return { toTrandPage };
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