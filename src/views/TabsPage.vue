<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="gamelist" href="/gamelist">
            <ion-icon :icon="ellipse"></ion-icon>
            <ion-label>遊戲</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="gamepass" href="/gamepass">
            <ion-icon :icon="ellipse" />
            <ion-label>GamePass</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="newslist" href="/newslist">
            <ion-icon :icon="ellipse"></ion-icon>
            <ion-label>新聞</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';
  import { useRouter } from 'vue-router';

  export default {
    name: 'TabsPage',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
      IonRouterOutlet,
    },
    setup() {
      const router = useRouter();
      return {
        router,
        ellipse,
        square,
        triangle,
      };
    },
  };
</script>