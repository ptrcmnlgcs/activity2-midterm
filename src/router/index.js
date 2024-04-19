import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "ProductListView" */ '../views/ProductListView.vue')
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "AddProductView" */ '../views/AddProductView.vue')
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: () => import(/* webpackChunkName: "EditProductView" */ '../views/EditProductView.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
