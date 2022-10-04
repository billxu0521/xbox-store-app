<template>
  <ion-page v-for="(item) in data.gamedetaildata"
      :key="item.title">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>「{{item.title}}」遊戲資訊</ion-title>
        <ion-buttons slot="start" @click="goBack()">
          <ion-back-button >
            <ion-icon ></ion-icon>
        </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="game-detail-card-content">
      <ion-grid>
        <ion-row>
          <ion-col>
          <ion-thumbnail class="game-detail-card-thumbnail">
            <img v-if="typeof(item.images.boxart.url)!== 'undefined'" v-lazy="{ src: item.images.boxart.url, loading: defaultimage, error: defaultimage }"/>
            <img v-else-if="typeof(item.images.titledheroart.url)!== 'undefined'" v-lazy="{ src: item.images.titledheroart.url, loading: defaultimage, error: defaultimage }"/>
          </ion-thumbnail>
        </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center game-detail-card-title">
            <ion-text>{{item.title}}</ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center">
            <ion-text color="medium">
              <div>開發商：<span>{{item.developer}}</span></div>
              <div>發行商：<span>{{item.publisher}}</span></div>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center">
            <ion-chip v-if="item.game_pass === true" class="game-detail-card-important-tag game-detail-card-gamepass">Game Pass</ion-chip>
            <ion-chip v-if="item.ea_play === true" class="game-detail-card-important-tag game-detail-card-eaplay">Ea Play</ion-chip>
            <div v-if="typeof(item.price.deal)!== 'undefined'">
              <ion-chip class="game-card-important-tag game-detail-card-sale-off">{{item.price.off}}% off</ion-chip>
              <div>
                <ion-text class="game-detail-card-sale-price">
                  <s>NT${{item.price.amount}}</s>
                </ion-text>
              </div>
              <div>
                <ion-text class="game-detail-card-deals">NT${{item.price.deal}}</ion-text>
              </div>
              <div>
                <ion-text>
                只到{{item.price.ends}}
                </ion-text>
              </div>
            </div>
            <div v-else>
              <ion-text class="game-detail-card-price">NT${{item.price.amount}}</ion-text>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-align-items-center">
          <ion-col class="ion-text-center">
            <ion-button :href="`https://www.xbox.com/zh-TW/games/store/a/${item.id}`" target="_blank">前往購買</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :loop="true"
            :navigation="true"
            :modules="modules"
            class="game-detail-card-img"
          >
            <swiper-slide v-for="(image) in item.images.screenshot"
              :key="image">
                <img v-lazy="{ src: image.url, loading: defaultimage, error: defaultimage }"/>
            </swiper-slide>
          </swiper>              
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="game-detail-card-description">
            <ion-text >
              {{item.description}}
            </ion-text>   
          </ion-col>
        </ion-row>      
     </ion-grid>
  </ion-content>
</ion-page>
</template>

<script >
import { IonThumbnail,IonChip,IonToolbar,IonHeader,IonBackButton,IonButtons,IonContent,IonPage} from '@ionic/vue';
import { reactive,onMounted,defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';

 // Import Swiper styles
 import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

import axios from 'axios';

const store = 'TW'; 
const lang = 'zh-TW';

export default defineComponent({
  name: 'GameDetailCard',
  components: { IonThumbnail,Swiper,SwiperSlide,IonChip,IonToolbar,IonHeader,IonBackButton,IonButtons,IonContent,IonPage },
  setup() {
    const router = useRouter();
    console.log(router)
    const route = useRoute();
    const { id } = route.params;
    console.log(route);
    const defaultimage = 'assets/imgs/xbox-logo.png';
    const data = reactive({
        gamedetaildata:''
    });

    //等基本DOM渲染後再讀資料
    onMounted(() => {
        const url = `/api/games?id=${id}&store=${store}&lang=${lang}`;
        axios.get(url)
          .then((res)=>{
              console.log(res.data)
              data.gamedetaildata = res.data
        })
      });
    
    return {
      data,
      id,
      router,
      defaultimage,
      modules: [Pagination, Navigation],
      };
    },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
 
});
</script>


<style scoped>
ion-thumbnail {
  --size: 200px;
  --border-radius: 14px;
}


</style>