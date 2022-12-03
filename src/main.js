import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue3-lazyload'
import VueGtag from "vue-gtag";
import { createMetaManager } from 'vue-meta'
import './registerServiceWorker';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';
import './registerServiceWorker'


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueGtag, {
    appName: 'Xbox',
    enabled: true,
    pageTrackerScreenviewEnabled: true,
    config: { 
      id: "GTM-KZT4HQF",
      params: {
        anonymize_ip: true
      }
    },
    onReady () {
    }
  })
  .use(VueLazyLoad,{
  })
  .use(createMetaManager());

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios) ; // provide 'axios'
app.config.devtools = true;
//axios.defaults.baseURL="http://localhost";
//axios.defaults.baseURL="https://xbox-games-api-1s4z.vercel.app/";
axios.defaults.baseURL = "https://xboxstoreapi.gameqb.net/"
router.isReady().then(() => {
  app.mount('#app');
});