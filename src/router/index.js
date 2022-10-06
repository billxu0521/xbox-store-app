import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';

import GameList from '../views/GameList.vue';

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
        component: () => import('@/components/GameDetailCard.vue'),
      },
      {
        path: '/newslist',
        name: 'NewsList',
        component: () => import('@/views/NewsList.vue'),
      },
      {
        path: '/gamelist/:page',
        name: 'GameFullList',
        component: () => import('@/components/GameFullListCard.vue'),
      },
      {
        path: '/gamepass/:page',
        name: 'GamePassFullList',
        component: () => import('@/components/GamePassFullListCard.vue'),
      },
      {
        path: '/gamepass',
        name: 'GamePass',
        component: () => import('@/views/GamePassList.vue'),
      },
    
      
    ],
    
  },
 
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
