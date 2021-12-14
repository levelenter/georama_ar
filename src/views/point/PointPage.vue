<template>
  <div>
    <div class="d-flex">
      <back-button :id="id" class="me-1" />
      <lean-trend-button :id="id" />
    </div>
    <close-button class="position-absolute top-0 end-0" />

    <header class="w-100">
      <div class="w-100 d-flex justify-content-center h1 mt-5">
        <div>
          <div>
            <div style="position: relative; z-index: 1" class="fs-80">
              ポイントを知る
            </div>
            <div
              style="
                background-color: yellow;
                height: 2rem;
                position: relative;
                bottom: 3rem;
              "
            ></div>
          </div>
          <div
            style="
              position: absolute;
              top: 20rem;
              left: 20rem;
              border-bottom: 8rem yellow solid;
              padding-bottom: rem;
            "
          />
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-center h2 mt-4 fs-44"
        style="color: gray"
        v-html="page.m1_2"
      ></div>
    </header>

    <main class="mt-4 ps-5 pt-5 d-flex">
      <div class="ms-5 me-4">
        <media-section
          :src="page.p1"
          :type="page.p1_type"
          height="46rem"
          width="80rem"
        />
      </div>

      <div
        class="ms-3 ps-2 w-50 pe-5 me-5 fs-50"
        style="overflow-y: scroll; height: 46rem"
        v-html="page.p2"
      ></div>
    </main>

    <footer
      class="fixed-bottom"
      style="
        background-color: rgb(229, 229, 229);
        min-height: 35rem;
        z-index: 0;
      "
    >
      <div><img :src="base + 'ui/check.png'" style="" /></div>
      <div
        style="overflow-y: scroll; height: 20rem"
        class="mt-4 mx-5 px-5 fs-39"
        v-html="page.p3"
      ></div>
    </footer>
  </div>
</template>
<script lang='ts'>
import { dataContext } from "@/biz/DataContext";
import { PageRawData } from "@/biz/PageRawData";
import { MessageDialog } from "@/components/functions/MessageDialog";
import BackButton from "@/components/ui/BackButton.vue";
import CloseButton from "@/components/ui/CloseButton.vue";
import LeanTrendButton from "@/components/ui/LeanTrendButton.vue";
import MediaSection from "@/components/ui/MediaSection.vue";
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default defineComponent({
  components: { BackButton, LeanTrendButton, CloseButton, MediaSection },
  props: {},
  setup: () => {
    const route = useRoute();
    const id = route.query.id as string;
    const base = process.env.BASE_URL;

    const page = ref(new PageRawData(""));
    onMounted(() => {
      dataContext?.getPage(id).then((_page) => {
        if (!_page)
          throw Error(MessageDialog.systemError("page data Not Found"));
        page.value = _page;
      });
    });

    return {
      id,
      base,
      page,
    };
  },
});
</script>