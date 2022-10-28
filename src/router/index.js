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
        component: () => import('@/views/GameDetailLayout.vue'),
      },
      {
        path: '/newslist',
        name: 'NewsList',
        component: () => import('@/views/NewsList.vue'),
      },
      {
        path: '/gamelist/:page',
        name: 'GameFullList',
        component: () => import('@/views/GameFullListLayout.vue'),
      },
      {
        path: '/gamepass/:page',
        name: 'GamePassFullList',
        component: () => import('@/views/GamePassFullListLayout.vue'),
      },
      {
        path: '/gamepass',
        name: 'GamePass',
        component: () => import('@/views/GamePassList.vue'),
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/views/PageNotFound.vue'),
      },
      { 
        path: '/404', 
        name: 'NotFound', 
        component: () => import('@/views/PageNotFound.vue'),
      },
      
    ],
    
  },    
  

 
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
