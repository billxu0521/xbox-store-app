<template>
  <ion-app>
    <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | XBOX Game Pass 遊戲資訊網 | Xbox Game Pass Games List` : `XBOX Game Pass 遊戲資訊網 | Xbox Game Pass Games List` }}</template>
    </metainfo>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent ,reactive, onMounted } from 'vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'zh-TW', amp: false }
    })

    const states = reactive({
      deferredPrompt: null,
    });
    onMounted(() => {
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        states.deferredPrompt = e;
      });
      window.addEventListener("appinstalled", () => {
        states.deferredPrompt = null;
      });
      document.querySelector("#app").addEventListener("click", () => { 
        if (states.deferredPrompt) {
          states.deferredPrompt.prompt();
          states.deferredPrompt = null;
        }
      });
    });
  }
});
</script>