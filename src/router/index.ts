import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue')
    },
    {
      path: '/b/:breed',
      name: 'Breed',
      component: () => import(/* webpackChunkName: "Breed" */ '../views/Breed.vue')
    }
  ]
})
