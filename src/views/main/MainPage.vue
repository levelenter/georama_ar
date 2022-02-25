<template>
  <div>
    <close-button class="position-absolute top-0 end-0" />

    <header class="d-flex ps-5 mt-5 w-100 mb-5 pb-4">
      <div class="me-1 mt-2">
        <img :src="page.m1_1" style="width: 16 rem; height: 22rem" />
      </div>
      <div class="ms-5 mt-5 w-100">
        <div class="yg-semi fs-80" v-html="page.m1_2"></div>
        <div
          style="background-color: yellow; height: 1.5rem; margin-top: -1.3rem"
        />
        <div class="fs-50" style="color: gray" v-html="page.m1_3"></div>
      </div>
    </header>

    <main class="w-100 d-flex mt-5" style="margin-top: 14rem; height: 60rem">
      <div
        style="background-color: rgb(222, 223, 222)"
        class="flex-grow-1 py-4 h-100 d-flex"
      >
        <div class="me-5" style="margin-top: 8rem">
          <media-section
            :src="page.m2_3"
            :type="page.m2_3_type"
            :width="'74.2rem'"
            :height="'42.3rem'"
          />
        </div>
        <div class="me-5">
          <div
            class="yg-semi fs-49"
            style="margin-top: 4.5rem"
            v-html="page.m2_1"
          ></div>
          <div
            class="yg fs-42"
            style="margin-top: 3.5rem; overflow-y: auto; height: 32rem"
            v-html="page.m2_2"
          ></div>
        </div>
      </div>

      <div class="text-end ms-5 mb-3 pe-5 pt-5">
        <trend-button :id="id" style="margin-top: 8rem" />
        <point-button :id="id" style="margin-top: 8rem" />
      </div>
    </main>

    <footer class="d-flex justify-content-end fixed-bottom" style="z-index: 0">
      <div style="margin-bottom: 4rem; margin-right: 3rem">
        <img :src="base + 'ui/didyouknow.png'" />
      </div>
      <div class="separater-border px-5">
        <div class="fs-42 yg-semi" v-html="page.m3_1_1"></div>
        <div
          class="fs-22 yg"
          style="height: 10rem; max-width: 40rem"
          v-html="page.m3_1_2"
        ></div>
      </div>
      <div class="w-25 separater-border px-5">
        <div class="fs-42 yg-semi" v-html="page.m3_2_1"></div>
        <div
          class="fs-22 yg"
          style="height: 10rem; max-width: 40rem"
          v-html="page.m3_2_2"
        ></div>
      </div>
      <div class="w-25 separater-border px-5">
        <div class="fs-42 yg-semi" v-html="page.m3_3_1"></div>
        <div
          class="fs-22 yg"
          style="height: 10rem; max-width: 40rem"
          v-html="page.m3_3_2"
        ></div>
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
    const base = process.env.BASE_URL;
    console.log("base", base);
    const page = ref(new PageRawData(""));
    const route = useRoute();

    const id = route.query.id as string;

    onMounted(() => {
      dataContext?.getPage(id).then((_page) => {
        if (!_page)
          throw Error(MessageDialog.systemError("page data Not Found"));
        page.value = _page;
      });
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