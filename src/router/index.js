import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import GameDetailCard from '../components/GameDetailCard.vue';
import GameFullListCard from '../components/GameFullListCard.vue';
import GamePassFullListCard from '../components/GamePassFullListCard.vue';
import GameList from '../views/GameList.vue';
import GamePassList from '../views/GamePassList.vue';
import NewsList from '../views/NewsList.vue';


const routes = [
  {
    path: '/',
    redirect: '/gamelist',
    component: TabsPage,
    children: [
      {
        path: '/gamelist',
        name: 'GameList',
        component: GameList,
      },
      {
        path: '/game/:id',
        name: 'GameDetail',
        component: GameDetailCard,
      },
      {
        path: '/newslist',
        name: 'NewsList',
        component: NewsList,
      },
      {
        path: '/gamelist/:page',
        name: 'GameFullList',
        component: GameFullListCard,
      },
      {
        path: '/gamepass/',
        name: 'GamePass',
        component: GamePassList,
      },
      {
        path: '/gamepass/:page',
        name: 'GamePassFullList',
        component: GamePassFullListCard,
      },
      
    ],
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
