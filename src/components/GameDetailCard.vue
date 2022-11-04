<template>
  <div v-for="(item) in data.gamedetaildata"
    :key="item.title" :fullscreen="true" class="game-detail-card-content">
    <div v-if="'boxart' in item.images && typeof(item.images.boxart.url) !== 'array'" class="game-detail-card-backgroud"  :style="`background-image: linear-gradient(transparent,#FFFFFF),url(${item.images.boxart.url + imageQuality} ); `"></div>
    <div  v-else-if="'boxart' in item.images && typeof(item.images.boxart.url) === 'array'" class="game-detail-card-backgroud"  :style="`background-image: linear-gradient(transparent,#FFFFFF),url(${item.images.boxart[1].url + imageQuality}); `"></div>
    <div v-else class="game-detail-card-backgroud"  :style="`background-image: linear-gradient(transparent,#FFFFFF),url(${item.images.brandedkeyart.url + imageQuality}); `"></div>
    <ion-grid>
      <ion-row>
        <ion-col>
        <ion-thumbnail class="game-detail-card-thumbnail">
          <img :alt="item.title" class="game-box-image" v-if="'boxart' in item.images" v-lazy="{ src: item.images.boxart?.url + imageQuality} ">
          <img :alt="item.title" class="game-box-image" v-else v-lazy="{ src: item.images.brandedkeyart.url + imageQuality }">  
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
          <ion-text class="game-card-developer" >
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
              只到{{setTimeStamp(item.price.ends)}}
              </ion-text>
            </div>
          </div>
          <div v-else>
          <div v-if="item.price.amount == '0' && item.sold_separately == true" class="game-card-free">
            免費
          </div>
          <div v-if="item.price.amount == '0' && item.sold_separately == false">
              尚未發售
            </div>
          <div v-else>
            <ion-text class="game-card-price">NT${{item.price.amount}}</ion-text>
          </div>
        </div>
        </ion-col>
      </ion-row>
      <ion-row class="">
        <ion-col class="ion-text-center" >
          <ion-text v-if="checkTraditionalChinese(item.supportedlanguages)">支援繁體中文</ion-text>
          <br/>
          <ion-text v-if="checkSimpleChinese(item.supportedlanguages)">支援簡體中文</ion-text>
          <br/>
          <ion-text v-if="checkChinese(item.supportedlanguages)">支援中文</ion-text>
        </ion-col>
      </ion-row>
   
      <ion-row class="ion-align-items-center">
        <ion-col class="ion-text-center">
          <ion-button :href="`https://www.xbox.com/zh-TW/games/store/a/${item.id}`" target="_blank">前往購買</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="ion-text-center">
          <ion-text >**遊戲實際售價請參閱官方網站或相關通路，本網站資訊僅供參考。**</ion-text>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <swiper
          :breakpoints="swiperOptions.breakpoints"
          :loop="true"
          :navigation="true"
          :modules="modules"
          class="game-detail-card-img"
        >
          <swiper-slide v-for="(image) in item.images.screenshot"
            :key="image">
              <img :alt="item.title" class="game-slide-image" v-lazy="{ src: image.url + screenQuality}"/>
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
    </div>
</template>

<script >
import { IonGrid,IonButton,IonText,IonRow,IonCol,IonThumbnail,IonChip} from '@ionic/vue';
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
  components: { IonGrid,IonButton,IonText,IonRow,IonCol,IonThumbnail,Swiper,SwiperSlide,IonChip },
  emits: ["getGameitle"], // <--- add this line
  setup(_,{ emit }) {
    const router = useRouter();
    const imageQuality = '?w=800&q=50';
    const screenQuality = '?w=500&q=30';
    const route = useRoute();
    const { id } = route.params;
    const data = reactive({
        gamedetaildata:''
    });
    let swiperOptions = {
      breakpoints: {       
        320: {       
          slidesPerView: 1,
          spaceBetween: 10     
        },          
        770: {       
          slidesPerView: 3,       
          spaceBetween: 50     
        },   
    
        771: {       
          slidesPerView: 4,       
          spaceBetween: 30     
        } 
      }  
    };
    const handleChange = (value) => {
      emit("getGameitle",value)
    }
    
    //等基本DOM渲染後再讀資料
    onMounted(() => {
      const url = `/api/games?id=${id}&store=${store}&lang=${lang}`;
      axios.get(url)
        .then((res)=>{
            data.gamedetaildata = res.data
            console.log( data.gamedetaildata)
            handleChange(data.gamedetaildata[0].title)
          })
        .catch(()=>{
          console.log('error')
          window.location.href =  '../404';
        })
    });
    
    return {
      data,
      id,
      router,
      swiperOptions,
      imageQuality,
      screenQuality,
      modules: [Pagination, Navigation],
      };
    },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    setTimeStamp(time){
      let timecover = new Date(time);
      let year = timecover.getFullYear();
      let date = timecover.getDate();
      let month = timecover.getMonth();
      return `${year} / ${month+1} / ${date}`
    },
    checkSimpleChinese(data){
      if(Object.values(data).includes('zh-hans')){
        return true
      }
      else{
        return false
      }
    },
    checkTraditionalChinese(data){
      if(Object.values(data).includes('zh-hant')){
        return true
      }else{
        return false
      }
    },
    checkChinese(data){
      if(Object.values(data).includes('zh')){
        return true
      }else{
        return false
      }
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