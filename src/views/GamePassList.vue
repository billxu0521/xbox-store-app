<template>
  <ion-page>
    <ion-content :fullscreen="true">
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
import { IonGrid,IonRow,IonText,IonCol,IonPage, IonContent } from '@ionic/vue';
import GamePassSimpleListCard  from '@/components/GamePassSimpleListCard.vue';
import { useMeta } from 'vue-meta'

export default  {
  name: 'GamePassList',
  components: { IonGrid,IonRow,IonText,IonCol,GamePassSimpleListCard, IonContent, IonPage },
  setup() {
    useMeta({ 
      title: 'XboxPass遊戲列表',
      description : '顯示XBOX GamePass遊戲列表', 
     
    })

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