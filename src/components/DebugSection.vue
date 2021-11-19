<template>
  <div class="w-25 position-absolute bottom-0 start-0 d-flex">
    <div class="d-flex mx-3" style="width: 25rem">
      <div style="width: 3rem" class="text-end">{{ currentTime / 1000 }}</div>
      /
      <div>{{ timeOut / 1000 }}</div>
    </div>

    <div class="me-3">
      <button class="btn btn-secondary" @click="reset">reset</button>
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

    return {
      currentTime,
      timeOut,
      id,
      reset,
    };
  },
});
</script>