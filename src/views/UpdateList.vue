<template>
  <ion-page>
    <ion-content :fullscreen="true">
      更新紀錄：
      <ion-list>
        <ion-item>
          <ion-label>2022/11/25:新增PWA下載，Android、PC限定。</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2022/11/04:微調版面，新增朝下方拖拉頁面可以重載入頁面的功能。</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2022/11/03:遊戲列表、XGP遊戲列表加上「簡體中文」、「繁體中文」、「中文」標籤，方便快速查閱。「中文」標籤指該遊戲支援中文，但可能包含簡繁。</ion-label>
        </ion-item>
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
