<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>全部遊戲列表</ion-title>
        <ion-buttons slot="start" @click="goBack()">
          <ion-back-button >
            <ion-icon ></ion-icon>
        </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <game-full-list-card></game-full-list-card>
  </ion-page>
</template>

<script>
import { 
  IonPage ,
  IonBackButton
} from '@ionic/vue';
import { defineComponent} from 'vue';
import GameFullListCard  from '@/components/GameFullListCard.vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'GameFullListLayout',
  components: {
    IonPage,
    IonBackButton,
    GameFullListCard
   },
  setup() {
    useMeta({ 
      title: 'Xbox遊戲列表',
      description : '顯示XBOX Game遊戲列表', 
      og: {
        type: 'type',
        title: 'Xbox遊戲列表',
        description : '顯示XBOX Game遊戲列表', 
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
