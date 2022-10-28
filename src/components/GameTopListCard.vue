<template>
  <swiper v-if="data.loaded"
      :modules="modules"
      :centeredSlides="false"
      :spaceBetween="0"
      :virtual="true"
      :breakpoints="swiperOptions.breakpoints"
      class="cardswiper"
      @swiper="setSwiperRef">
    <swiper-slide v-for="(item) in 10"
        :key="item">
      <div class="game-card" >
          <ion-thumbnail class="game-box-thumbnail" slot="start">
            <ion-skeleton-text style="height: 30vh;" :animated="true"></ion-skeleton-text>
          </ion-thumbnail>
          <div>
            <ion-skeleton-text :animated="true" style="width: 100%;"></ion-skeleton-text>
          </div>
      </div>
    </swiper-slide>
  </swiper>

  <swiper v-if="!data.loaded"
       :modules="modules"
      :centeredSlides="false"
      :spaceBetween="0"
      :navigation="true"
      :virtual="true"
      :loopFillGroupWithBlank="true"
      :breakpoints="swiperOptions.breakpoints"
      class="cardswiper"
      @swiper="setSwiperRef">
    <swiper-slide v-for="(item) in data.gamelistdata"
        :key="item.title">
      <article class="game-top-card" @click="gameLink(item.id)">
        <div v-if="'boxart' in item.images && typeof(item.images.boxart.url) !== 'array'" class="game-top-card-backgroud"  :style="`background-image: linear-gradient(transparent,#FFFFFF),url(${item.images.boxart?.url + imageQuality} ); `"></div>
        <div v-else class="game-top-card-backgroud"  :style="`background-image: linear-gradient(transparent,#FFFFFF),url(${item.images.brandedkeyart?.url + imageQuality}); `"></div>
        
        <div class="game-top-section">
          
          <img  :alt="item.title" class="game-top-box-image" v-if="'featurepromotionalsquareart' in item.images" v-lazy="{ src: item.images.featurepromotionalsquareart?.url + imageQuality} ">
          <img  :alt="item.title" class="game-top-box-image" v-else-if ="'boxart' in item.images" v-lazy="{ src: item.images.boxart?.url + imageQuality} ">
          <img  :alt="item.title" class="game-top-box-image" v-else v-lazy="{ src: item.images.brandedkeyart.url }">    
        </div>
        <div class="game-top-card-info">
          <ion-text class="game-top-card-title">{{item.title}}</ion-text>
          <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-top-card-priceoff">{{item.price.off}}% off</span>

          <div  v-if="typeof(item.price.deal)!== 'undefined'">
            <ion-text class="game-top-card-deals">NT${{item.price.deal}}</ion-text>
            <br/>
            <ion-text class="game-top-card-sales-price">
              <s>NT${{item.price.amount}}</s>
            </ion-text > 
          </div>
          <div v-else>
            <div v-if="item.price.amount == '0' && item.sold_separately == true" class="game-card-free">
              免費
            </div>
            <div v-if="item.price.amount == '0' && item.sold_separately == false">
                尚未發售
              </div>
            <div v-else>
              <ion-text class="game-top-card-price">NT${{item.price.amount}}</ion-text>
            </div>
          </div>
          <div>
            <ion-text class="game-top-card-developer">開發商:{{item.developer}}</ion-text>
          </div>
        </div>
      </article>
    </swiper-slide>
  </swiper>
</template>

<script >
import { IonText,IonSkeletonText,IonThumbnail} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { inject } from 'vue'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import { Pagination, Navigation, Virtual } from 'swiper';
export default defineComponent({
  name: 'GameTopListCard',
  components: { IonText,IonSkeletonText,Swiper,SwiperSlide,IonThumbnail },
  props: {
    'url':{
      type: String,
    }
  },
  setup(props) {
    const axios = inject('axios') 
    const imageQuality = '?w=800&q=50'
    const data = reactive({
        gamelistdata:[],
        loaded:true,
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
          slidesPerView: 1,
          spaceBetween: 10     
        },          
        770: {       
          slidesPerView: 1,       
          spaceBetween: 50     
        },   
    
        771: {       
          slidesPerView: 1,       
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
   
    //等基本DOM渲染後再讀資料
    onMounted(() => {
        axios.get(props.url)
          .then((res)=>{
            data.gamelistdata = (res.data).sort(function (a, b) {
              return a.price.off < b.price.off ? 1 : -1;
            });
            data.gamelistdata.splice(3, 10); 
            //data.gamelistdata = res.data
            data.loaded = false
            //console.log(data.gamelistdata)
        })
      });
    
    return {
      data,
      slides,
      swiperRef: null,
      appendNumber,
      prependNumber,
      swiperOptions,
      imageQuality,
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
    --size: 30%;
    --border-radius: 14px;
  }
</style>