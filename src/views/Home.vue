<template>
  <div class="w-100 h-100">
    <loading v-if="loading" />
    <div
      v-if="!loading"
      class="d-flex align-items-center justify-content-center"
      style="height: 100%; width: 100%"
    >
      <div class="text-center h-100">
        <video
          :src="tutorialImagePath"
          @click="gotoAr"
          width="99%"
          autoplay="true"
          muted
          loop
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { DeviceSetting } from "@/components/functions/DeviceSetting";
import { dataContext } from "@/biz/DataContext";
import Loading from "@/components/Loading.vue";
export default defineComponent({
  components: { Loading },
  props: {},
  setup: () => {
    const router = useRouter();

    const tutorialImagePath = ref("./waiting/Hitati_taiki_A.mp4");

    const gotoAr = () => {
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "ARCamera" });
    };

    const loading = ref(false);

    onMounted(() => {
      const setting = new DeviceSetting();
      const area = setting.getArea() ?? "A";
      const base = process.env.BASE_URL;

      tutorialImagePath.value = `${base}waiting/Hitati_taiki_${area}.mp4`;
      loading.value = true;
      dataContext?.loadData().then(() => {
        console.log("context loaded");
        dataContext?.saveInSession().then();
        loading.value = false;
      });
      const video = document.querySelector("video") as HTMLVideoElement;
      video.play().then();
    });

    return {
      gotoAr,
      loading,
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