<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Xbox 遊戲查詢網 Xbox Pass 遊戲列表</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">GameList</ion-title>
        </ion-toolbar>
      </ion-header>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import GamePassSimpleListCard  from '@/components/GamePassSimpleListCard.vue';

export default  {
  name: 'GamePassList',
  components: { GamePassSimpleListCard,IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const store = 'TW'; 
    const lang = 'zh-TW';
    //let url = `http://localhost:3000/api/games?list=${list}&skipitems=${skipitems}&store=${store}&lang=${lang}`;
    let gameLink = function(apilistname) {
      return `/api/gamepass?list=${apilistname}&store=${store}&lang=${lang}`;
    }
    return {
      gameLink,
    };
  },
  methods: {
    gamePassPageLink(page) {
      window.location.href =  'gamepass/' + page;
    }
  },
}
</script>