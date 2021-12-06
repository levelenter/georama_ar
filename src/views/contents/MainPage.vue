<template>
  <div>
    <close-button class="position-absolute top-0 end-0" />

    <header class="d-flex ps-5 mt-5 w-100 mb-5 pb-4">
      <div class="mx-4">
        <img :src="page.m1_1" style="width: 8 rem; height: 10rem" />
      </div>
      <div class="ms-5 mt-5 w-100">
        <div class="h1 yg-semi">{{ page.m1_2 }}</div>
        <div style="background-color: yellow; height: 1rem" class="my-3" />
        <div class="h3">{{ page.m1_3 }}</div>
      </div>
    </header>

    <main class="w-100 d-flex mt-5 pt-3">
      <div
        style="background-color: rgb(222, 223, 222)"
        class="flex-grow-1 py-4 h-50 d-flex"
      >
        <div class="my-5 me-5">
          <media-section :src="page.m2_3" :type="page.m2_3_type" />
        </div>
        <div>
          <div class="h1 mb-5 mt-3 mb-5 pb-2">
            {{ page.m2_1 }}
          </div>
          <div class="mt-5" style="overflow-y: scroll; height: 20rem">
            {{ page.m2_2 }}
          </div>
        </div>
      </div>

      <div class="text-end ms-5 mb-5 pe-5">
        <div class="h-25" />
        <trend-button :id="id" />
        <div class="h-25" />
        <point-button :id="id" />
      </div>
    </main>

    <footer
      class="d-flex mt-5 pt-5 ms-5 ps-5 justify-content-end fixed-bottom"
      style="z-index: 0"
    >
      <img :src="base + '/ui/didyouknow.png'" class="me-4 mb-4 pt-4" />
      <div class="w-25 separater-border px-5">
        <div class="h1">{{ page.m3_1_1 }}</div>
        <div class="h-6" style="overflow-y: scroll; height: 6rem">
          {{ page.m3_1_2 }}
        </div>
      </div>
      <div class="w-25 separater-border px-5">
        <div class="h1">{{ page.m3_2_1 }}</div>
        <div class="h-6" style="overflow-y: scroll; height: 6rem">
          {{ page.m3_2_2 }}
        </div>
      </div>
      <div class="w-25 separater-border px-5">
        <div class="h1">{{ page.m3_3_1 }}</div>
        <div class="h-6" style="overflow-y: scroll; height: 6rem">
          {{ page.m3_3_2 }}
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang='ts'>
import { dataContext } from "@/biz/DataContext";
import { PageRawData } from "@/biz/PageRawData";
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { MessageDialog } from "@/components/functions/MessageDialog";
import CloseButton from "@/components/ui/CloseButton.vue";
import MediaSection from "@/components/ui/MediaSection.vue";
import PointButton from "@/components/ui/PointButton.vue";
import TrendButton from "@/components/ui/TrendButton.vue";
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {},
  components: { CloseButton, PointButton, TrendButton, MediaSection },
  setup: () => {
    /**
     * 動的ラベル
     */
    const base = process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const page = ref(new PageRawData(""));
    const route = useRoute();

    const id = route.query.id as string;

    onMounted(() => {
      const _page = dataContext?.getPage(id);
      if (!_page) throw Error(MessageDialog.systemError("page data Not Found"));
      page.value = _page;
    });

    /**
     * 遷移
     */
    const backTo = () => {
      TimeOutLogic.instance.resetTimeout();
      window.history.back();
    };

    return {
      id,
      base,
      backTo,
      page,
    };
  },
});
</script>
<style scoped>
.separater-border {
  border-left: 1px rgb(108, 108, 108) solid;
}
</style>