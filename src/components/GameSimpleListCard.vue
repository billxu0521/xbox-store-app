<template>
  <swiper :modules="modules"
      :centeredSlides="false"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :virtual="true"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :breakpoints="swiperOptions.breakpoints"
      class="cardswiper"
      @swiper="setSwiperRef">
    <swiper-slide v-for="(item) in data.gamelistdata"
        :key="item.title">
      <div class="game-card" @click="gameLink(item.id)">
        <ion-thumbnail class="game-card-box-imgs">
          <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-card-important-tag game-card-price-off">{{item.price.off}}% off</span>
          <span v-if="item.game_pass === true" class="game-card-important-tag game-card-gamepass">Game Pass</span>
          <img v-lazy="{ src: item.images.boxart.url, loading: defaultimage, error: defaultimage }">
        </ion-thumbnail>
          <ion-subtitle>開發商:{{item.developer}}</ion-subtitle>
          <ion-title>{{item.title}}</ion-title>
          <div v-if="typeof(item.price.deal)!== 'undefined'">
            <ion-text class="game-card-sales-price">
              <s>NT${{item.price.amount}}</s>
            </ion-text >
            <br />
            <ion-text class="game-card-deals">NT${{item.price.deal}}</ion-text>
          </div>
          <div v-else>
            <div v-if="item.price.amount == '0'">
              免費
            </div>
            <div v-else>
              <ion-text class="game-card-price">NT${{item.price.amount}}</ion-text>
            </div>
          </div>

      </div>
    </swiper-slide>
  </swiper>
</template>

<script >
import { IonThumbnail} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import axios from 'axios';
 // Import Swiper styles
 import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import { Pagination, Navigation, Virtual } from 'swiper';


export default defineComponent({
  name: 'GameSimpleListCard',
  components: { Swiper,SwiperSlide,IonThumbnail },
  props: ['url'],
  setup(props) {
    const defaultimage = 'assets/imgs/default-image.png';
    const data = reactive({
        gamelistdata:[],
    });
    const slides = ref(
      Array.from({ length: 100 }).map((_, index) => `Slide ${index + 1}`)
    );
    let swiperRef = null;
    let appendNumber = 100;
    let prependNumber = 1;
    let swiperOptions = {
      breakpoints: {       
        320: {       
          slidesPerView: 2,
          spaceBetween: 10     
        },          
        770: {       
          slidesPerView: 3,       
          spaceBetween: 50     
        },   
    
        771: {       
          slidesPerView: 6,       
          spaceBetween: 30     
        } 
      }  
    };
    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0);
    };
    const append = () => {
      slides.value = [...slides.value, 'Slide ' + ++appendNumber];
    };
    const prepend = () => {
      slides.value = [
        `Slide ${prependNumber - 2}`,
        `Slide ${prependNumber - 1}`,
        ...slides.value,
      ];
      prependNumber -= 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };
    console.log(props.url)
    //等基本DOM渲染後再讀資料
    onMounted(() => {
        axios.get(props.url)
          .then((res)=>{
              console.log(res.data)
              data.gamelistdata = res.data
        })
      });
    
    return {
      data,
      defaultimage,
      slides,
      swiperRef: null,
      appendNumber,
      prependNumber,
      swiperOptions,
      setSwiperRef,
      slideTo,
      append,
      prepend,
      modules: [Pagination, Navigation, Virtual],
      };
    },
    methods: {
      gameLink(gameId) {
        window.location.href =  'game/' + gameId;
      }
    },
});
</script>

<style scoped>
  ion-thumbnail {
    --size: 100%;
    --border-radius: 14px;
  }
</style>