<template>
  <img :src="url" class="border-right-gray" style="height: 28.8rem" />
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: { url: { type: String, default: "" } },
  setup: () => {
    return {};
  },
});
</script>