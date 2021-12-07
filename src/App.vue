<template>
  <router-view />
  <dialog-container />
  <!-- <debug-section /> -->
</template>
<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import DialogContainer from "@/components/dialog/DialogContainer.vue";
// import DebugSection from "@/components/DebugSection.vue";
export default defineComponent({
  components: {
    DialogContainer,
    // , DebugSection
  },
});
</script>
<style src="@/assets/css/font.css"></style>