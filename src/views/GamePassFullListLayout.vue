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
    <game-pass-full-list-card></game-pass-full-list-card>
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
    useMeta({ 
      title: 'XboxPass遊戲列表',
      description : '顯示XBOX GamePass遊戲列表', 
      og: {
        type: 'type',
        title: 'XboxPass遊戲列表',
        description : '顯示XBOX GamePass遊戲列表', 
        image : 'https://xboxstore.gameqb.net/assets/screenshot.png',
        url : 'https://xboxstore.gameqb.net/',
        site_name : 'XBOX Game Pass 遊戲資訊網 | Xbox Game Pass Games List'
      }
    })
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
});
</script>
