<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Game Pass全部遊戲列表</ion-title>
        <ion-buttons slot="start"  @click="goBack()">
          <ion-back-button >
            <ion-icon ></ion-icon>
        </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
    <game-pass-full-list-card></game-pass-full-list-card>
    </ion-content >
  </ion-page>
</template>

<script>
import { 
  IonPage ,
  IonBackButton,
  IonTitle,
  IonIcon,
  IonButtons,
  IonHeader,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent} from 'vue';
import GamePassFullListCard  from '@/components/GamePassFullListCard.vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'GamePassFullListLayout',
  components: {
    IonPage,
    IonBackButton,
    IonTitle,
    IonIcon,
    IonButtons,
    IonHeader,
    IonToolbar,
    GamePassFullListCard
   },
  setup() {
    const handleRefresh = (event) => {
      setTimeout(() => {
        location.reload();
        event.target.complete();
      }, 500);
    };
    useMeta({ 
      title: 'XboxPass遊戲列表',
      description : '顯示XBOX GamePass遊戲列表', 
      link : {
        rel : 'canonical',
        href : 'https://xboxstore.gameqb.net/',
      }
    })

    return {
      handleRefresh
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
});
</script>
