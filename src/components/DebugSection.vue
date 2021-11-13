<template>
  <div class="w-25 position-absolute top-0 end-0 d-flex">
    <div>{{ currentTime / 1000 }}</div>
    /
    <div>{{ timeOut / 1000 }}</div>
    <button class="btn btn-default" @click="reset">reset</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { TimeOutLogic } from "../biz/TimeOutLogic";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    const timeOutLogic = TimeOutLogic.instance;
    const currentTime = ref(timeOutLogic.currentTime);
    const timeOut = TimeOutLogic.TIMEOUT;
    const reset = () => {
      timeOutLogic.resetTimeout();
    };
    return {
      currentTime,
      timeOut,
      reset,
    };
  },
});
</script>