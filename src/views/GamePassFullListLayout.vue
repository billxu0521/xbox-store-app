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
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
});
</script>
