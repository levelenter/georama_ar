<template>
  <login-dialog />
  <table-dialog />
  <notifications position="top right" />
  <qr-dialog />
</template>
<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import QrDialog from "./QrDialog.vue";
export default defineComponent({
  components: { QrDialog },
});
</script>