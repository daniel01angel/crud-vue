import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import OrderList from './components/OrderList.vue';
import OrderCreate from './components/OrderCreate.vue';
import OrderEdit from './components/OrderEdit.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'OrderList', component: OrderList },
  { path: '/create-order', name: 'OrderCreate', component: OrderCreate },
  { path: '/edit-order/:id', name: 'OrderEdit', component: OrderEdit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
