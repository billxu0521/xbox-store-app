<template>
  <ion-page>
    <ion-header translucent>
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
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col class="full-game game-card" size="12" size-md v-for="(item) in data.gamelistdata"
            :key="item.title" @click="gameLink(item.id)">
            <ion-thumbnail class="game-card-box-imgs">
              <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-card-important-tag game-card-price-off">{{item.price.off}}% off</span>
              <span v-if="item.game_pass === true" class="game-card-important-tag game-card-gamepass">Game Pass</span>
              <img class="game-box-image" v-lazy="{ src: item.images.boxart.url, loading: defaultimage, error: defaultimage }">
            </ion-thumbnail>
            <ion-subtitle>開發商:{{item.developer}}</ion-subtitle>
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
  </ion-page>
</template>

<script>
import { 
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  IonBackButton,
  IonPage 
} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'GameFullListCard',
  components: { 
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonBackButton,
    IonPage
   },
  setup() {
    const route = useRoute();
    const { page } = route.params;
    
    let skipitems = 0;  
    const store = 'TW'; 
    const lang = 'zh-TW';
    let count = 12;
    
    const defaultimage = 'assets/imgs/default-image.png';
    let url = '';
    let data = reactive({
        gamelistdata:[],
    });
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    let pushData = () => {
      url = `http://52.191.89.252:3031/api/games?list=${page}&skipitems=${skipitems}&store=${store}&lang=${lang}&count=${count}`;  
      axios.get(url)
        .then((res)=>{
            console.log(res.data);
            (res.data).forEach(element => {
              console.log(element);
              data.gamelistdata.push(element)
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
      defaultimage,
      isDisabled,
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
</style>