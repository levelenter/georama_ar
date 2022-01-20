<template>
  <div
    style="min-height: 28.8rem; width: 100rem; position: relative"
    class="px-5"
  >
    <div
      style="overflow-y: scroll; height: 29.4rem"
      class="fs-39"
      v-html="contents"
    ></div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: { contents: { type: String, default: "" } },
  setup: () => {
    return {};
  },
});
</script>