<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Game Pass全部遊戲列表</ion-title>
        <ion-buttons slot="start"  @click="goBack()">
          <ion-back-button >
            <ion-icon ></ion-icon>
        </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content >
      <ion-grid v-if="data.loaded">
        <ion-row class="ion-justify-content-between">
          <ion-col class="full-game game-card ion-text-center" size="12" size-md v-for="(item) in 12"
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
        <ion-row class="ion-justify-content-between">
          <ion-col class="full-game game-card ion-text-center" size="12" size-md v-for="(item) in data.gamelistdata"
            :key="item.title" @click="gameLink(item.id)">
            <ion-thumbnail class="game-box-thumbnail">
              <span v-if="typeof(item.price.deal)!== 'undefined'" class="game-card-important-tag game-card-price-off">{{item.price.off}}% off</span>
              <span v-if="item.game_pass === true" class="game-card-important-tag game-card-gamepass">Game Pass</span>
              <span v-if="item.ea_play === true" class="game-card-important-tag game-card-eaplay">Ea Play</span>
              <img class="game-box-image" v-if="typeof(item.images.boxart.url)!== 'undefined'" v-lazy="{ src: item.images.boxart.url, loading: defaultimage, error: defaultimage }">
              <img class="game-box-image" v-else v-lazy="{ src: item.images.boxart[1].url, loading: defaultimage, error: defaultimage }">       
            </ion-thumbnail>
            <ion-subtitle>開發商:{{item.developer}}</ion-subtitle>
            <div v-if="typeof(item.price.deal)!== 'undefined'">
              <ion-text class="game-card-sales-price">
                <s>NT${{item.price.amount}}</s>
              </ion-text >
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
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonContent, 
  IonBackButton,
  IonPage 
} from '@ionic/vue';
import { ref,reactive,onMounted,defineComponent } from 'vue';
import { inject } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'GamePassFullListCard',
  components: { 
    IonContent, 
    IonBackButton,
    IonPage
   },
  setup() {
    const axios = inject('axios') 
    const route = useRoute();
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
              console.log(res.data)
              data.gamelistdata = res.data
              data.loaded = false
        })
    });
    
    return {
      data,
      defaultimage,
      isDisabled,
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


</style>