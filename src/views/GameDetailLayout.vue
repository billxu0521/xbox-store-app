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
    <game-detail-card @getGameitle="updateInfo" ></game-detail-card>
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
  IonBackButton
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

    //等基本DOM渲染後再讀資料
    onMounted(() => {
      
      });
    
    return {
      data,
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
