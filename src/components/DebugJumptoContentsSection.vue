<template>
  <div class="w-100 position-absolute bottom-0 start-0 d-flex">
    <div class="me-3 row w-100 gy-2 gx-2">
      <div v-for="(i, index) of new Array(19)" :key="i" class="col-3 px-1">
        {{ i }} {{ index }}
        <button class="btn btn-secondary" @click="move(index + 1)">
          {{ index + 1 }}を参照
        </button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    const router = useRouter();

    const move = (id: number) => {
      router.push({ name: "MainPage", query: { id: `m${id}` } });
    };
    return {
      move,
    };
  },
});
</script>