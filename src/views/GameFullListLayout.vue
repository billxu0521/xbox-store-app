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

export default defineComponent({
  name: 'GameFullListLayout',
  components: {
    IonPage,
    IonBackButton,
    GameFullListCard
   },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
});
</script>
