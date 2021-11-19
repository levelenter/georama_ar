<template>
  <button @click="toPointPage">
    <img :src="'/ui/lean_point_black.png'" />
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
    const toPointPage = () => {
      router.push({ name: "PointPage", query: { id: prop.id } });
    };

    return { toPointPage };
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