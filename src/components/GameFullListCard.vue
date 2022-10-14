<template>
    <ion-content >
      <ion-grid v-if="data.loaded">
        <ion-row class="ion-justify-content-between">
          <ion-col class="full-game game-card ion-text-center" size="12" size-xs="12" size-sm="6" size-md="4" size-lg="3" v-for="(item) in 12"
            :key="item">
            <ion-thumbnail class="game-box-thumbnail" >
              <ion-skeleton-text style="height: 30vh;" :animated="true"></ion-skeleton-text>
            </ion-thumbnail>
            <div>
              <br>
              <br>
            <ion-skeleton-text :animated="true" style="margin:0 20% 10% 20%; width: 60%;"></ion-skeleton-text>
          </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid v-if="!data.loaded">
        <ion-row>
          <ion-col class="full-game game-card ion-text-center" size="12" size-xs="6" size-sm="6" size-md="4" size-lg="3" v-for="(item) in data.gamelistdata"
            :key="item.title" @click="gameLink(item.id)">
            <ion-thumbnail class="game-box-thumbnail">
              <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-card-important-tag game-card-price-off">{{item.price.off}}% off</span>
              <span v-if="item.game_pass === true" class="game-card-important-tag game-card-gamepass">GamePass</span>
              <img class="game-box-image" v-if="'boxart' in item.images" v-lazy="{ src: item.images.boxart?.url + imageQuality} ">
              <img class="game-box-image" v-else v-lazy="{ src: item.images.brandedkeyart.url + imageQuality }">     
            </ion-thumbnail>
            <ion-subtitle >開發商:{{item.developer}}</ion-subtitle>
            <div v-if="typeof(item.price.deal)!== 'undefined'">
              <ion-text class="game-card-sales-price " >
                <s>NT${{item.price.amount}}</s>
              </ion-text >
              <br/>
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
            <div>
              <ion-text class="game-card-title">{{item.title}}</ion-text>
            </div>
          </ion-col>
          <ion-infinite-scroll
            @ionInfinite="loadData($event)" 
            threshold="100px" 
            id="infinite-scroll"
            :disabled="isDisabled"
          >
            <ion-infinite-scroll-content
              loading-spinner="bubbles"
              loading-text="Loading more data...">
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
  
        </ion-row>
      </ion-grid>
    </ion-content>
</template>

<script>
import { 
  IonSkeletonText,
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import { inject } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'GameFullListCard',
  components: { 
    IonSkeletonText,
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
   },
  setup() {
    const axios = inject('axios') ;
    const imageQuality = '?w=800&q=50'
    const route = useRoute();
    const { page } = route.params;
    console.log(page)
    
    let skipitems = 0;  
    const store = 'TW'; 
    const lang = 'zh-TW';
    let count = 12;
    
    let url = '';
    let data = reactive({
        gamelistdata:[],
        loaded:true,
    });
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    let pushData = () => {
      url = `/api/games?list=${page}&skipitems=${skipitems}&store=${store}&lang=${lang}&count=${count}`;  
      axios.get(url)
        .then((res)=>{
            (res.data).forEach(element => {
              data.gamelistdata.push(element)
              data.loaded = false
              console.log(element)
            });
      })
      skipitems = skipitems + 12;  
    }
    
    const loadData = (event) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        event.target.complete();

        if (skipitems === 2000) {
          event.target.disabled = true;
        }
      }, 500);
    }
    
    //等基本DOM渲染後再讀資料
    onMounted(() => {
      pushData();
    });
    
    return {
      data,
      isDisabled,
      imageQuality,
      toggleInfiniteScroll,
      loadData,
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