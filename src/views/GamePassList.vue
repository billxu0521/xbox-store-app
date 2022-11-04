<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" :pull-factor="0.5" :pull-min="100" :pull-max="200" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-grid>
        <ion-row>
          <ion-col>
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
            <ion-text class="card-title">新加入</ion-text>
            <game-pass-simple-list-card v-bind:url="gameLink('new')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
          <ion-text class="card-title">即將加入</ion-text>
          <game-pass-simple-list-card v-bind:url="gameLink('coming')"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text class="card-title">準備離開</ion-text>
          <game-pass-simple-list-card v-bind:url="gameLink('leaving')"/>
          </ion-col>
        </ion-row>
        
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonRefresher,IonRefresherContent,IonGrid,IonRow,IonText,IonCol,IonPage, IonContent } from '@ionic/vue';
import GamePassSimpleListCard  from '@/components/GamePassSimpleListCard.vue';
import { useMeta } from 'vue-meta'

export default  {
  name: 'GamePassList',
  components: { IonRefresher,IonRefresherContent,IonGrid,IonRow,IonText,IonCol,GamePassSimpleListCard, IonContent, IonPage },
  setup() {
    useMeta({ 
      title: 'XboxPass遊戲列表',
      description : 'XBOX Game Pass 遊戲資訊網可以快速查詢XBOX遊戲、XBOX Game Pass資訊：即將加入、遊戲總覽、即將離開。', 
     
    })

    const handleRefresh = (event) => {
      setTimeout(() => {
        location.reload();
        event.target.complete();
      }, 500);
    };

    const store = 'TW'; 
    const lang = 'zh-TW';
    //let url = `http://localhost:3000/api/games?list=${list}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    let gameLink = function(apilistname) {
      return `/api/gamepass?list=${apilistname}&store=${store}&lang=${lang}`;
    }
    return {
      gameLink,
      handleRefresh,
    };
  },
  methods: {
    gamePassPageLink(page) {
      window.location.href =  'gamepass/' + page;
    }
  },
}
</script>