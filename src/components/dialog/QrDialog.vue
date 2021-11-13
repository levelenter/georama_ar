<template>
  <core-dialog
    :id="dialogId"
    :dialog-class="{ 'modal-sm': true }"
    :title="title"
  >
    <div class="d-flex justify-content-center">
      <canvas id="canvas" width="300px" height="300px"></canvas>
    </div>
  </core-dialog>
</template>
<script lang='ts'>
import { defineComponent, onMounted } from "@vue/runtime-core";
import CoreDialog from "@/components/dialog/CoreDialog.vue";
import { DialogHandler } from "./DialogHandler";
import qrcode from "qrcode";
export default defineComponent({
  components: { CoreDialog },
  props: {},
  setup: () => {
    const dialogId = DialogHandler.qrDialogId;
    const title = "QR Code";
    onMounted(() => {
      DialogHandler.onOpenDialog(dialogId, (e: Event) => {
        const canvas = document.getElementById("canvas");

        let qrData = DialogHandler.qrData;
        if (DialogHandler.qrData === "") {
          qrData = location.href;
        }
        qrcode.toCanvas(canvas, qrData, function (error: any) {
          if (error) console.error(error);
          console.log("success!");
        });
      });
    });
    return {
      title,
      dialogId,
    };
  },
});
</script>