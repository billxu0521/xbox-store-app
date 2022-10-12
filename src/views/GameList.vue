<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-row>
              <ion-text class="card-title">特價遊戲</ion-text>
              <ion-button fill="outline" size="small" color="medium" href="gamelist/deals">更多</ion-button>
            </ion-row>
            <game-simple-list-card v-bind:url="gameLink('deals')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="card-xbox-game-pass-container ion-text-center">
            <ion-text class="card-title">Game Pass</ion-text>
            <ion-row class="card-xbox-container-row">
              <ion-col class="card-xbox-container-col link" @click="gamePassPageLink('new')">
                新加入
              </ion-col>
              <ion-col class="card-xbox-container-col link" @click="gamePassPageLink('coming')">
                即將加入
              </ion-col>
              <ion-col class="card-xbox-container-col link" @click="gamePassPageLink('leaving')">
                即將離開
              </ion-col>
              <ion-col class="card-xbox-container-col link" @click="gamePassPageLink('all')">
                瀏覽全部
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
          <ion-row>
            <ion-text class="card-title">最新遊戲</ion-text>
            <ion-button fill="outline" size="small" color="medium" href="gamelist/new">更多</ion-button>
          </ion-row>
          <game-simple-list-card v-bind:url="gameLink('new')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-row>
            <ion-text class="card-title">評價最高</ion-text>
            <ion-button fill="outline" size="small" color="medium" href="gamelist/best">更多</ion-button>
          </ion-row>
          <game-simple-list-card v-bind:url="gameLink('best')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-row>
              <ion-text class="card-title">準備登場</ion-text>
              <ion-button fill="outline" size="small" color="medium" href="gamelist/coming">更多</ion-button>
            </ion-row>
          <game-simple-list-card v-bind:url="gameLink('coming')"/>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonGrid,IonCol,IonRow,IonText,IonButton,IonPage, IonContent } from '@ionic/vue';
import { onMounted,defineComponent} from 'vue';
import GameSimpleListCard  from '@/components/GameSimpleListCard.vue';
import { pageview,event } from 'vue-gtag'

export default defineComponent({
  name: 'GameList',
  components: { IonGrid,IonCol,IonRow,IonText,IonButton,GameSimpleListCard, IonContent, IonPage },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  setup() {
    const logoimage = 'assets/imgs/xbox-logo.png';
    const skipitems = 0;
    const store = 'TW'; 
    const lang = 'zh-TW';
    const login = () => {
      event('pageview:gamelist', { method: 'Google' })
      pageview({ page_path: '/gamelist' })
      
      pageview('/gamelist')
      console.log('pageview:gamelist')
    }
    
    //let url = `http://localhost:3000/api/games?list=${list}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    let gameLink = function(apilistname) {
      this.url = "/api"
      
      return `/api/games?list=${apilistname}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    }
     //等基本DOM渲染後再讀資料
     onMounted(() => {
      login();
    });
    return {
      gameLink,
      logoimage,
      login
    };
  },
  
  methods: {
    gamePassPageLink(page) {
      console.log('1');
      window.location.href =  'gamepass/' + page;
    },
    track () {
      this.$gtag.pageview({ page_path: '/gamelist' })
      
      this.$gtag.pageview('/gamelist')
      
      this.$gtag.pageview(this.$route)
    }
  },
})
</script>
