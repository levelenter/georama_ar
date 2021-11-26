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
          <div style="position: relative; font-size: 4rem; z-index: 1">
            トレンドを知る
          </div>
          <div
            style="
              background-color: yellow;
              height: 0.7rem;
              position: relative;
              bottom: 1.3rem;
            "
          ></div>
        </div>
        <div
          style="
            position: absolute;
            top: 20rem;
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

  <main class="w-100 mt-4 pt-5">
    <div class="d-flex mb-5 pb-4">
      <img
        :src="base + '/ui/01_movement.png'"
        class="border-right-gray"
        style="height: 18rem"
      />
      <div
        style="
          font-size: 1.5rem;
          overflow-y: scroll;
          height: 19rem;
          width: 55rem;
        "
        class="px-5"
      >
        {{ page.t1 }}
      </div>
      <div style="min-height: 20rem">
        <media-section :src="page.t2" :type="page.t2_type" height="18rem" />
      </div>
    </div>
    <div class="d-flex mt-5">
      <img
        :src="base + '/ui/02_needs.png'"
        class="border-right-gray"
        style="height: 18rem"
      />
      <div
        style="
          font-size: 1.5rem;
          min-height: 20rem;
          position: relative;
          width: 55rem;
        "
        class="px-5"
      >
        <div style="overflow-y: scroll; height: 12rem">
          {{ page.t3 }}
        </div>
        <div class="d-flex mt-4">
          <div
            v-for="i of [0, 1, 2, 3, 4, 5, 6]"
            :key="i"
            class="me-2"
            style="
              min-height: 4.5rem;
              width: 4.5rem;
              border: solid 0.2rem rgb(108, 108, 108);
              border-radius: 0.5rem;
            "
          >
            {{ i }}
          </div>
        </div>
      </div>
      <div style="min-height: 18rem">
        <media-section :src="page.t4" :type="page.t4_type" height="18rem" />
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
export default defineComponent({
  components: { CloseButton, BackButton, LeanPointButton, MediaSection },
  props: {},
  setup: () => {
    const route = useRoute();
    const id = route.query.id as string;
    const base = process.env.NODE_ENV === "production" ? "/georama_ar" : "/";

    const page = ref(new PageRawData(""));
    onMounted(() => {
      const _page = dataContext?.getPage(id);
      if (!_page) throw Error(MessageDialog.systemError("page data Not Found"));
      page.value = _page;
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