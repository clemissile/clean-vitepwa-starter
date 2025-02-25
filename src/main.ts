import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/design/style.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
  });
}

const app = createApp(App);

app.use(router).mount("#app");
