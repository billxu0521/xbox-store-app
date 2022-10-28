<template>
    <ion-content >
      <ion-grid v-if="data.loaded">
        <ion-row class="ion-justify-content-between">
          <ion-col class="full-game game-card ion-text-center" size="12" size-xs="6" size-sm="6" size-md="4" size-lg="3" v-for="(item) in 12"
            :key="item">
            <ion-thumbnail class="game-box-thumbnail" >
              <ion-skeleton-text style="height: 40vh;" :animated="true"></ion-skeleton-text>
            </ion-thumbnail>
            <div>    
              <p>
                <ion-skeleton-text :animated="true" style="width: 100%; "></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text :animated="true" style="width: 30%;"></ion-skeleton-text>
              </p>        
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid v-if="!data.loaded">
        <ion-row>
          <ion-col class="full-game game-card ion-text-center" size="12" size-xs="6" size-sm="6" size-md="4" size-lg="3"  v-for="(item) in data.gamelistdata"
            :key="item.title" @click="gameLink(item.id)">
            <ion-thumbnail class="game-box-thumbnail">
              <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-card-important-tag game-card-price-off">{{item.price.off}}% off</span>
              <span v-if="item.game_pass === true" class="game-card-important-tag game-card-gamepass">GamePass</span>
              <span v-if="item.ea_play === true" class="game-card-important-tag game-card-eaplay">EaPlay</span>
              <img :alt="item.title" class="game-box-image" v-if="'boxart' in item.images" v-lazy="{ src: item.images.boxart?.url + imageQuality} ">
              <img :alt="item.title" class="game-box-image" v-else v-lazy="{ src: item.images.brandedkeyart.url + imageQuality}">    
            </ion-thumbnail>
            <div>開發商:{{item.developer}}</div>
            <div v-if="typeof(item.price.deal)!== 'undefined'">
              <ion-text class="game-card-sales-price">
                <s>NT${{item.price.amount}}</s>
              </ion-text >
              <ion-text class="game-card-deals">NT${{item.price.deal}}</ion-text>
            </div>
            <div v-else>
              <div v-if="item.price.amount == '0' && item.sold_separately == true">
                免費
              </div>
              <div v-if="item.price.amount == '0' && item.sold_separately == false">
                尚未發售
              </div>
              <div v-else>
                <ion-text class="game-card-price">NT${{item.price.amount}}</ion-text>
              </div>
            </div>
            <div>
              <ion-text class="game-card-title">{{item.title}}</ion-text>
            </div>    
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
</template>

<script>
import { 
  IonContent, 
  IonText,
  IonCol,
  IonSkeletonText,
  IonThumbnail,
  IonRow,
  IonGrid,
} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import { inject } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'GamePassFullListCard',
  components: { 
    IonContent, 
    IonText,
    IonCol,
    IonSkeletonText,
    IonThumbnail,
    IonRow,
    IonGrid,
   },
  setup() {
    const axios = inject('axios') ;
    const route = useRoute();
    const imageQuality = '?w=500&q=40'
    const { page } = route.params;
    const store = 'TW'; 
    const lang = 'zh-TW';
    const defaultimage = 'assets/imgs/default-image.png';
    let url = '';
    let data = reactive({
        gamelistdata:[],
        loaded:true,
    });
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    
    //等基本DOM渲染後再讀資料
    onMounted(() => {
      url = `/api/gamepass?list=${page}&store=${store}&lang=${lang}`; 
      axios.get(url)
          .then((res)=>{
              data.gamelistdata = res.data
              data.loaded = false
        })
        .catch(()=>{
          console.log('error')
        })
    });
    
    return {
      data,
      defaultimage,
      isDisabled,
      imageQuality,
      toggleInfiniteScroll,   
      };
    },
    methods: {
      gameLink(gameId) {
        window.location.href =  'game/' + gameId;
      },
      goBack(){
        this.$router.go(-1);
      }
    },
});
</script>


<style scoped>
  ion-thumbnail {
    --size: 70%;
    --border-radius: 14px;
  }

@media screen and (max-width:768px) {
  ion-thumbnail {
    --size: 50%;
    width: 70%;
  }
}

</style>