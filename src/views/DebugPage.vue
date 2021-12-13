<template>
  <div class="container">
    <div class="row gy-2 mt-5">
      <div v-for="(i, index) of new Array(19)" :key="i" class="col-3 px-1">
        <button class="btn btn-secondary fs4rem w-100" @click="move(index + 1)">
          {{ index + 1 }}を参照
        </button>
      </div>
    </div>

    <div class="d-flex mx-3 fs4rem" style="width: 25rem">
      <div style="width: 6 rem" class="text-end">{{ currentTime / 1000 }}</div>
      /
      <div>{{ timeOut / 1000 }}</div>
    </div>

    <div class="me-3">
      <button class="btn btn-secondary fs4rem w-25" @click="reset">
        reset
      </button>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { TimeOutLogic } from "../biz/TimeOutLogic";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    const timeOutLogic = TimeOutLogic.instance;
    const currentTime = ref(timeOutLogic.currentTime);
    const timeOut = TimeOutLogic.TIMEOUT;
    const id = ref(1);
    const reset = () => {
      timeOutLogic.resetTimeout();
    };

    const router = useRouter();
    const move = (id: number) => {
      router.push({ name: "MainPage", query: { id: `m${id}` } });
    };

    return {
      move,
      currentTime,
      timeOut,
      id,
      reset,
    };
  },
});
</script>
<style scoped>
.fs4rem {
  font-size: 4rem;
}
</style>