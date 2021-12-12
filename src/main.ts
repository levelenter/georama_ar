import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Notifications from "@kyvg/vue3-notification";

// Bundleじゃないとpopperがはいっていないので、ドロップダウンなどが効かなくなる
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MessageDialog } from "./components/functions/MessageDialog";
import { TimeOutLogic } from "./biz/TimeOutLogic";
import { dataContext } from "./biz/DataContext";

import "vue-image-lightbox/dist/vue-image-lightbox.min";

const base = process.env.BASE_URL; //process.env.NODE_ENV === "production" ? "/georama_ar" : "/";
console.log("base", base);

window.onerror = (message, file, line) => {
  MessageDialog.systemError(
    "不明な箇所",
    `が発生しました line ${line} file ${file} message ${message}`
  );
};

TimeOutLogic.instance.timerStart().timeOutAction = () => {
  router.push({ name: "Home" });
};

dataContext?.loadData().then(() => {
  console.log("context loaded");
  // セッションキャッシュしない
  // dataContext?.saveInSession();
});

export const vue = createApp(App);
vue.use(router);
vue.use(Notifications);

export const mounted = vue.mount("#app");
