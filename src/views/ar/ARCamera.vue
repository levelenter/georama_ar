<template>
  <iframe
    :src="`${publicPath}ar.html`"
    class="h-100 position-absolute top-0 w-100"
  >
  </iframe>
  <!-- <script
    type="text/javascript"
    src="https://aframe.io/releases/1.2.0/aframe.min.js"
  ></script>
  <script
    type="text/javascript"
    src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
  ></script> -->
  <!-- <img src="@/assets/marker/pattern-1.png" style="width: 100%; height: 100px" /> -->
  <!-- 
  <a-scene
    style="height: 1200px; width: 1920px"
    embedded=""
    device-orientation-permission-ui="enabled: false"
    vr-mode-ui="enabled: false"
    arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3;detectionMode:mono_and_matrix; debugUIEnabled: false;"
    artoolkit=""
  >
    <a-marker-camera rotation-reader="">
      <a-marker
        id="m1"
        emitevents="true"
        cursor="rayOrigin: mouse;fuse:false"
        type="pattern"
        url="./marker/pattern-1.patt"
      >
        <a-box
          wireframe="true"
          color="black"
          position="0 0 0"
          scale="1 0 1"
        ></a-box>
      </a-marker>
      <a-marker
        id="m2"
        emitevents="true"
        type="barcode"
        value="0"
        cursor="rayOrigin: mouse;fuse:false"
      >
        <a-box
          wireframe="true"
          color="red"
          position="0 0 0"
          scale="1 0 1"
        ></a-box>
      </a-marker>
    </a-marker-camera>
  </a-scene> -->
  <!-- <script>
    document.addEventListener("markerFound", (e) => {
      parent.console.log("marker found ", e.target);
      const markerdId = e.target.id;
      if (markerdId) {
        window.parent.postMessage(
          {
            action: "markerFoundMessage",
            markerId: markerdId,
          },
          "*"
        );
      }
    });
  </script> -->
</template>
<script lang='ts'>
import { TimeOutLogic } from "@/biz/TimeOutLogic";
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    // data
    const publicPath = process.env.BASE_URL;
    const arhtml = "ar.html";
    const router = useRouter();

    window.addEventListener("message", function (e) {
      if (e.data.action !== "markerFoundMessage") return;
      console.log(`${e.data.markerId}`);
      TimeOutLogic.instance.resetTimeout();
      router.push({ name: "MainPage", query: { id: e.data.markerId } });
    });

    return {
      arhtml,
      publicPath,
    };
  },
});
</script>