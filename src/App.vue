<template>
  <ion-app>
    <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | XBOX Game Pass 遊戲資訊網 | Xbox Game Pass Games List` : `XBOX Game Pass 遊戲資訊網 | Xbox Game Pass Games List` }}</template>
    <template v-slot:description="{ content }">{{ content ? `${content} ` : `` }}</template>

  </metainfo>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
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
      htmlAttrs: { lang: 'zh-tw', amp: true }
    })
  }
});
</script>