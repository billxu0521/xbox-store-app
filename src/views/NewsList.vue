<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">NewsList</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-card v-for="(item) in data.gamenewsdata"
        :key="item.title">
          <ion-thumbnail>
            <ion-img :src="item.image"></ion-img>
          </ion-thumbnail>
          <ion-card-header>
            <ion-card-title>{{item.title}}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <a :href="item.link" target="_blank">觀看來源</a>
            <ion-card-subtitle>{{item.description}}</ion-card-subtitle>            
          </ion-card-content>
        </ion-card>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonThumbnail,IonImg,IonCard,IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios';
import { reactive,onMounted } from 'vue';
import { useMeta } from 'vue-meta'


export default  {
  name: 'NewsList',
  components: {IonThumbnail, IonImg,IonCard,IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    useMeta({ 
      title: '新聞列表',
      description : '新聞列表', 
      link : {
        rel : 'canonical',
        href : 'https://xboxstore.gameqb.net/',
      }
     
    })
    const url = 'api/news' ;
    const data = reactive({
        gamenewsdata:'',
    })
    
    //等基本DOM渲染後再讀資料
    onMounted(() => {
        axios.get(url)
          .then((res)=>{
              data.gamenewsdata = res.data
        })
      });
    return {data};
    },
}
</script>

<style scoped>
ion-thumbnail {
  --size: 50%;
  --border-radius: 14px;
}
</style>