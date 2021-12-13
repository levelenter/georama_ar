<template>
  <div class="container">
    <button class="btn btn-primary w-100 my-5 f4rem" @click="setArea('A')">
      このデバイスの待機画面をエリアAにセットする
    </button>
    <button class="btn btn-primary w-100 my-5 f4rem" @click="setArea('B')">
      このデバイスの待機画面をエリアBにセットする
    </button>
    <button class="btn btn-primary w-100 my-5 f4rem" @click="setArea('C')">
      このデバイスの待機画面をエリアCにセットする
    </button>
    <button class="btn btn-primary w-100 my-5 f4rem" @click="setArea('D')">
      このデバイスの待機画面をエリアDにセットする
    </button>
    <button class="btn btn-primary w-100 my-5 f4rem" @click="setArea('E')">
      このデバイスの待機画面をエリアEにセットする
    </button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import { DeviceSetting } from "@/components/functions/DeviceSetting";
import { MessageDialog } from "@/components/functions/MessageDialog";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    /**
     * 動的ラベル
     */
    const title = ref("Setting");
    /**
     * プロパティ
     */
    const setArea = (area: string) => {
      const ds = new DeviceSetting();
      ds.setArea(area);
      MessageDialog.alert(`このデバイスの待機画面を${area}にセットしました。`);
    };

    return {
      title,
      setArea,
    };
  },
});
</script>
<style scoped>
.f4rem {
  font-size: 4rem;
}
</style>