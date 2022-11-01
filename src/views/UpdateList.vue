<template>
  <ion-page>
    <ion-content :fullscreen="true">
      更新紀錄：
      <ion-list>
        <ion-item>
          <ion-label>2022/11/01:遊戲詳細資訊頁面中加入「支援簡體」「支援繁體」文字，若遊戲支援中文就會顯示。</ion-label>
        </ion-item>
        
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';

export default  {
  name: 'UpdateList',
  components: {IonPage, IonContent, IonItem, IonLabel, IonList },
  setup() {
    
    return {

    };
    },
}
</script>
