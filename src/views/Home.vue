<template>
  <div class="container h-100">
    <div class="d-flex align-items-center justify-content-center h-100 mt-5">
      <div class="text-center h-100 p-4">
        <img :src="tutorialImagePath" @click="gotoAr" class="h-75" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { DeviceSetting } from "@/components/functions/DeviceSetting";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    const router = useRouter();

    const tutorialImagePath = ref("./waiting/waiting-A.png");

    const gotoAr = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "ARCamera" });
    };

    onMounted(() => {
      const setting = new DeviceSetting();
      const area = setting.getArea() ?? "A";
      tutorialImagePath.value = `./waiting/waiting-${area}.png`;
    });

    return {
      gotoAr,
      tutorialImagePath,
    };
  },
});
</script>
<style scoped>
.snippet {
  border: 0.1rem solid grey;
  padding: 1rem;
}
</style>