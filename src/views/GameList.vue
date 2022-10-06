<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-title size="large"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417c-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0 0 24 12.004a11.95 11.95 0 0 0-3.57-8.536s-.027-.022-.082-.042a.824.824 0 0 0-.281-.045c-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042A11.956 11.956 0 0 0 0 12.004c0 2.854.998 5.473 2.661 7.533c-1.401-2.605 3.579-9.951 6.08-12.91c-2.82-2.813-4.216-3.245-4.806-3.245a.725.725 0 0 0-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085c-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z"></path></svg>Xbox 遊戲查詢網 遊戲列表</ion-title>
      </ion-toolbar>
    </ion-header>
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
import {IonGrid,IonCol,IonRow,IonText,IonButton,IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent} from 'vue';
import GameSimpleListCard  from '@/components/GameSimpleListCard.vue';

export default defineComponent({
  name: 'GameList',
  components: { IonGrid,IonCol,IonRow,IonText,IonButton,GameSimpleListCard,IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  setup() {
    const logoimage = 'assets/imgs/xbox-logo.png';
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
      logoimage,
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
