<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <h1 class="web-title" @click="homePageBtn" size="medium"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417c-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0 0 24 12.004a11.95 11.95 0 0 0-3.57-8.536s-.027-.022-.082-.042a.824.824 0 0 0-.281-.045c-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042A11.956 11.956 0 0 0 0 12.004c0 2.854.998 5.473 2.661 7.533c-1.401-2.605 3.579-9.951 6.08-12.91c-2.82-2.813-4.216-3.245-4.806-3.245a.725.725 0 0 0-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085c-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z"></path></svg>Xbox 遊戲查詢網</h1>
      </ion-toolbar>
    </ion-header>
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
          <!-- <ion-tab-button tab="newslist" href="/newslist">
            <svg width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"></path></svg>
            <ion-label>新聞</ion-label>
          </ion-tab-button> -->
          <ion-tab-button tab="install" @click="pwaInstall">
            <svg width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3h-2z"></path><path fill="currentColor" d="m17 11.5-1.4-1.4-2.6 2.6V4h-2v8.7L8.4 10 7 11.5l5 5z"></path></svg>            
            <ion-label>安裝</ion-label>
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
    IonToolbar,
    IonHeader,
    IonRouterOutlet,
  } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from "vue";

  export default {
    name: 'TabsPage',
    components: {
      IonContent,
      IonLabel,
      IonTabs,
      IonTabBar,
      IonToolbar,
      IonHeader,
      IonTabButton,
      IonPage,
      IonRouterOutlet,
  
    },
    setup() {
      const router = useRouter();
      const states = reactive({
        deferredPrompt: null,
      });

      const pwaInstall = () => {
        if (states.deferredPrompt) {
            states.deferredPrompt.prompt();
            states.deferredPrompt = null;
          }
      }
     
      onMounted(() => {
        window.addEventListener("beforeinstallprompt", e => {
          e.preventDefault();
          states.deferredPrompt = e;
        });
        window.addEventListener("appinstalled", () => {
          states.deferredPrompt = null;
        });
        // document.querySelector("#app").addEventListener("click", () => { 
        //   if (states.deferredPrompt) {
        //     states.deferredPrompt.prompt();
        //     states.deferredPrompt = null;
        //   }
        // });
      });
      return {
        router,
        ellipse,
        square,
        triangle,
        pwaInstall,
      };
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      homePageBtn(){
        window.location.href =  '/';
      },
      
  
    },
 
  };
</script>