<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="ion-text-center">
              <h3>找不到網頁</h3>
              看來你走錯路囉！請點擊按鈕回到首頁。
              <br/>
              <ion-button href="/">首頁</ion-button>

            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonCol,IonButton,IonRow,IonGrid,IonPage, IonContent } from '@ionic/vue';
import { onMounted,defineComponent} from 'vue';

export default defineComponent({
  name: 'PageNotFound',
  components: {IonCol,IonButton,IonRow,IonGrid, IonPage, IonContent },
  props: {
    
  },
  setup() {
    

    
    return {
      
    };
  },
})
</script>
