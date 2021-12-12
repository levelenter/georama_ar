<template>
  <div class="d-flex">
    <back-button :id="id" class="me-1" />
    <lean-point-button :id="id" />
  </div>
  <close-button class="position-absolute top-0 end-0" />

  <header class="w-100">
    <div class="w-100 d-flex justify-content-center h1 mt-5">
      <div>
        <div>
          <div style="position: relative; z-index: 1" class="fs-80">
            トレンドを知る
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
    >
      {{ page.m1_2 }}
    </div>
  </header>

  <main class="w-100" style="margin-top: 10rem">
    <div class="d-flex mb-5 pb-4">
      <section-title-image :url="base + 'ui/01_movement.png'" />

      <text-contents :contents="page.t1" />

      <div style="min-height: 20rem">
        <media-section
          :src="page.t2"
          :type="page.t2_type"
          height="30rem"
          width="53rem"
        />
      </div>
    </div>
    <div class="d-flex mt-5">
      <section-title-image :url="base + 'ui/02_needs.png'" />

      <text-contents :contents="page.t3" />

      <div
        style="min-height: 18rem; width: 53rem; margin-left: 1rem"
        class="row gy-5"
      >
        <div class="col-4 px-1" v-for="i of [0, 1, 2, 3, 4]" :key="i">
          <div
            style="
              height: 12.7rem;
              width: 12.7rem;
              border: solid 0.2rem rgb(108, 108, 108);
              border-radius: 0.5rem;
            "
            class="fs-44"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang='ts'>
import { dataContext } from "@/biz/DataContext";
import { PageRawData } from "@/biz/PageRawData";
import { MessageDialog } from "@/components/functions/MessageDialog";
import BackButton from "@/components/ui/BackButton.vue";
import CloseButton from "@/components/ui/CloseButton.vue";
import LeanPointButton from "@/components/ui/LeanPointButton.vue";
import MediaSection from "@/components/ui/MediaSection.vue";
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import SectionTitleImage from "./section/SectionTitleImage.vue";
import TextContents from "./section/TextContents.vue";
export default defineComponent({
  components: {
    CloseButton,
    BackButton,
    LeanPointButton,
    MediaSection,
    TextContents,
    SectionTitleImage,
  },
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
<style scoped>
.border-right-gray {
  border-right: solid 1px rgb(108, 108, 108);
}
</style>