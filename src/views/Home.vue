<template>
  <div class="container h-100">
    <div class="d-flex align-items-center justify-content-center h-100 mt-5">
      <div class="text-center h-75">
        <h1 class="align-middle mb-4">
          社会を支える日立造船の事業をご紹介します
        </h1>

        <img :src="tutorialImagePath" />

        <h2>タブレットを手に持って、マーカーをかざしてください</h2>
        <button class="btn btn-primary w-50" @click="gotoAr">スタート</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    // Test
  },
  props: {},
  setup: () => {
    const router = useRouter();

    const tutorialImagePath = "";

    const gotoAr = () => {
      router.push({ name: "ARCamera" });
    };

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