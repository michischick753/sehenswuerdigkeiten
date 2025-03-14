import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import CastlesPage from './views/CastlesPage.vue';
import ChurchesPage from './views/ChurchesPage.vue';
import NaturePage from './views/NaturePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/castles', component: CastlesPage },
  { path: '/churches', component: ChurchesPage },
  { path: '/nature', component: NaturePage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
