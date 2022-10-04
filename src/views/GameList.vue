<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-title size="large">Xbox 遊戲查詢網遊戲列表</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text class="card-title">特價遊戲</ion-text>
            <ion-chip><a href="gamelist/deals" >more</a></ion-chip>
            <game-simple-list-card v-bind:url="gameLink('deals')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="card-title">Game Pass</ion-text>
            <ion-row class="card-container-row">
              <ion-col class="card-container-col link" @click="gamePassPageLink('new')">
                新加入
              </ion-col>
              <ion-col class="card-container-col link" @click="gamePassPageLink('coming')">
                即將加入
              </ion-col>
              <ion-col class="card-container-col link" @click="gamePassPageLink('leaving')">
                即將離開
              </ion-col>
              <ion-col class="card-container-col link" @click="gamePassPageLink('all')">
                瀏覽全部
              </ion-col>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
          <ion-text class="card-title">最新遊戲</ion-text>
          <ion-chip><a href="gamelist/new" >more</a></ion-chip>
          <game-simple-list-card v-bind:url="gameLink('new')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="card-title">評價最高</ion-text>
          <ion-chip><a href="gamelist/best" >more</a></ion-chip>
          <game-simple-list-card v-bind:url="gameLink('best')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="card-title">準備登場</ion-text>
          <ion-chip><a href="gamelist/coming" >more</a></ion-chip>
          <game-simple-list-card v-bind:url="gameLink('coming')"/>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent} from 'vue';
import GameSimpleListCard  from '@/components/GameSimpleListCard.vue';

export default defineComponent({
  name: 'GameList',
  components: { GameSimpleListCard,IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  setup() {
    const skipitems = 0;
    const store = 'TW'; 
    const lang = 'zh-TW';
    
    //let url = `http://localhost:3000/api/games?list=${list}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    let gameLink = function(apilistname) {
      this.url = "/api"
      
      return `/api/games?list=${apilistname}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    }

    return {
      gameLink,
     
    };
  },
  
  methods: {
    gamePassPageLink(page) {
      console.log('1');
      window.location.href =  'gamepass/' + page;
    }
  },
})
</script>
