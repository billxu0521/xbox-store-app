<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-row>            
            </ion-row>
            <game-top-list-card v-bind:url="gameLink('deals')"/>
          </ion-col>
        </ion-row>
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
          <ion-col class="ion-text-center">
            <ion-text >**遊戲實際售價請參閱官方網站或相關通路，本網站資訊僅供參考。**</ion-text>
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
import GameTopListCard  from '@/components/GameTopListCard.vue';
import { pageview,event } from 'vue-gtag'
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'GameList',
  components: { IonGrid,IonCol,IonRow,IonText,IonButton, IonContent, IonPage ,GameSimpleListCard,GameTopListCard},
  props: {
    timeout: { type: Number, default: 1000 },
  },
  setup() {
    const logoimage = 'assets/imgs/xbox-logo.png';
    const skipitems = 0;
    const store = 'TW'; 
    const lang = 'zh-TW';
    const login = () => {
      pageview('/gamelist')
    }
    useMeta({ 
      title: '遊戲列表',
      description : 'XBOX Game Pass 遊戲資訊網可以快速查詢XBOX遊戲、XBOX Game Pass資訊：即將加入、遊戲總覽、即將離開。', 
    })

    let gameLink = function(apilistname) {
      this.url = "/api"      
      return `/api/games?list=${apilistname}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    }
     //等基本DOM渲染後再讀資料
     onMounted(() => {
      login();
      event('login', { method: 'Google' })
    });
    return {
      gameLink,
      logoimage,
      login,
    };
  },
  
  methods: {
    gamePassPageLink(page) {
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
