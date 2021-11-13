<template>
  <debug-section />
  <router-view />
  <dialog-container />
</template>
<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import DialogContainer from "@/components/dialog/DialogContainer.vue";
import DebugSection from "@/components/DebugSection.vue";
export default defineComponent({
  components: { DialogContainer, DebugSection },
});
</script>
