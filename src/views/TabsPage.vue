<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="gamelist" href="/gamelist">
            <svg width="2em" height="2em" viewBox="0 0 24 24"><path strokeWidth=".2" strokeLinejoin="round" stroke="currentColor" d="M12 6.059c1.726 0 6.686-4.314 9.274.863C23.863 12.098 23.216 19 21.49 19c-4.313 0-1.725-4.314-9.49-4.314C4.235 14.686 6.824 19 2.51 19c-1.726 0-2.373-6.902.215-12.078c2.589-5.177 7.55-.863 9.275-.863zM12 7.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z" fill="currentColor"></path></svg>
            <ion-label>遊戲</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="gamepass" href="/gamepass">
            <svg width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.43 3.72c.07-.06.14-.12.19-.16C8.18 2.55 10 2 12 2c1.88 0 3.64.5 5.14 1.42c.11.08.4.27.56.46C16.25 2.28 12 5.7 12 5.7c-1.5-1.13-2.83-1.9-3.84-2.2c-.85-.21-1.43 0-1.7.2m12.88 1.51c-.05-.05-.1-.1-.14-.15c-.36-.4-.82-.5-1.2-.47c-.39.12-2.1.73-4.2 2.72c0 0 2.37 2.3 3.82 4.65c1.45 2.35 2.31 4.2 1.78 6.77C21 16.95 22 14.59 22 12c0-2.62-1-5-2.66-6.79m-3.61 7.75c-.65-.72-1.6-1.75-2.87-3.01c-.27-.27-.56-.55-.86-.85c0 0-.47.46-1.07 1.07c-.77.77-1.76 1.78-2.32 2.37c-.98 1.05-3.8 4.35-3.96 6.2c0 0-.65-1.46.75-4.85c.9-2.21 3.6-5.53 4.75-6.61c0 0-1.03-1.14-2.33-1.93l-.05-.03c-.63-.37-1.31-.66-1.97-.7c-.67.05-1.09.54-1.09.54A9.954 9.954 0 0 0 2 12a10 10 0 0 0 10 10c2.93 0 5.57-1.26 7.4-3.27c0 0-.21-1.33-1.56-3.23c-.31-.43-1.47-1.81-2.11-2.54Z"></path></svg>
            <ion-label>GamePass</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="newslist" href="/newslist">
            <svg width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"></path></svg>
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