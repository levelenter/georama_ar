<template>
  <div class="w-25 position-absolute bottom-0 start-0 d-flex">
    <div class="me-3 d-flex">
      <span>ID:</span><input type="text" v-model="id" />
      <button class="btn btn-secondary" @click="moveToMain">moveToMain</button>
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
    const id = ref(1);
    const router = useRouter();

    const moveToMain = () => {
      router.push({ name: "MainPage", query: { id: `m${id.value}` } });
    };
    return {
      id,
      moveToMain,
    };
  },
});
</script>