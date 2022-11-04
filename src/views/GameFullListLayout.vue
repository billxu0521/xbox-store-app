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
    <ion-content >
      <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <game-full-list-card></game-full-list-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage ,
  IonBackButton,
  IonRefresher,IonRefresherContent,
} from '@ionic/vue';
import { defineComponent} from 'vue';
import GameFullListCard  from '@/components/GameFullListCard.vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'GameFullListLayout',
  components: {
    IonPage,
    IonBackButton,
    GameFullListCard,
    IonRefresher,IonRefresherContent,
   },
  setup() {
    const handleRefresh = (event) => {
      console.log('Begin async operation');
    
      setTimeout(() => {
        // Any calls to load data go here
        console.log('Async operation has ended');
        location.reload();
        event.target.complete();
      }, 500);
    };
    useMeta({ 
      title: 'Xbox遊戲列表',
      description : '顯示XBOX Game遊戲列表', 
     
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
