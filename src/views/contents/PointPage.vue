<template>
  <div>
    <div class="d-flex">
      <back-button :id="id" class="me-1" />
      <lean-trend-button :id="id" />
    </div>
    <close-button class="position-absolute top-0 end-0" />

    <header class="w-100">
      <div class="w-100 d-flex justify-content-center h1 mt-2">
        <div>
          <div>
            <div style="position: relative; font-size: 4rem; z-index: 1000">
              ポイントを知る
            </div>
            <div
              style="
                background-color: yellow;
                height: 1rem;
                position: relative;
                bottom: 1.3rem;
              "
            ></div>
          </div>
          <div
            style="
            position: absolute;
            top: 300px;
            left:200px
            border-bottom: 1rem yellow solid;
            padding-bottom: rem;
          "
          />
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-center h2 mt-4"
        style="font-size: 3rem"
      >
        {{ page.m1_2 }}
      </div>
    </header>

    <main class="mt-4 ps-5 pt-5 d-flex">
      <div class="ms-5 me-4">
        <media-section :src="page.p1" :type="page.p1_type" />
      </div>

      <div
        class="ms-5 ps-5 w-50 pe-5 me-5"
        style="font-size: 2rem; overflow-y: scroll; height: 30rem"
      >
        {{ page.p2 }}
      </div>
    </main>

    <footer
      class="fixed-bottom"
      style="
        background-color: rgb(229, 229, 229);
        min-height: 20rem;
        z-index: 0;
      "
    >
      <div><img :src="'/ui/check.png'" style="" /></div>
      <div
        style="font-size: 2.3rem; overflow-y: scroll; height: 10rem"
        class="mt-4 mx-5 px-5"
      >
        {{ page.p3 }}
      </div>
    </footer>
  </div>
</template>
<script lang='ts'>
import { DataContext } from "@/biz/DataContext";
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

    const page = ref(new PageRawData(""));
    onMounted(() => {
      const context = DataContext.instance;
      const _page = context?.getPage(id);
      if (!_page) throw Error(MessageDialog.systemError("page data Not Found"));
      page.value = _page;
    });

    return {
      id,
      page,
    };
  },
});
</script>