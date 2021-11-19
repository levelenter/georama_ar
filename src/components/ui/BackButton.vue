<template>
  <button @click="onClick">
    <img :src="'/ui/back_black.png'" style="height: 5rem" />
  </button>
</template>
<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {
    id: { type: String, default: "" },
  },

  setup: (prop) => {
    const router = useRouter();
    const onClick = () => {
      router.push({ name: "MainPage", query: { id: prop.id } });
    };
    return {
      onClick,
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