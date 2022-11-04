<template>
  <ion-page >
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>「{{data.title}}」遊戲資訊</ion-title>
        <ion-buttons slot="start" @click="goBack()">
          <ion-back-button >
            <ion-icon ></ion-icon>
        </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  <ion-content>
    <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
    <game-detail-card @getGameitle="updateInfo" ></game-detail-card>
  </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonIcon,
  IonTitle,
  IonPage ,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/vue';
import { reactive,onMounted,defineComponent} from 'vue';
import GameDetailCard  from '@/components/GameDetailCard.vue';
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'GameDetailLayout',
  components: {
    IonIcon,
    IonTitle,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonRefresher,
    IonRefresherContent,
    GameDetailCard
   },
   setup() {
    const data = reactive({
        titile:''
    });

    useMeta({ 
      title: '遊戲詳細資訊',
      description : '遊戲資訊', 
      link : {
        rel : 'canonical',
        href : 'https://xboxstore.gameqb.net/',
      }

    })

    const handleRefresh = (event) => {
      setTimeout(() => {
        location.reload();
        event.target.complete();
      }, 500);
    };

    //等基本DOM渲染後再讀資料
    onMounted(() => {
      
      });
    
    return {
      data,
      handleRefresh
      };
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    updateInfo(val) {
      this.data.title = val
    }
  }
});
</script>
