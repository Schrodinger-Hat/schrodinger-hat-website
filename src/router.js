import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/video',
    name: 'RedirectVideo',
    component: () => import('./views/RedirectVideo.vue'),
  },
  {
    path: '/code-of-conduct',
    name: 'CodeOfConduct',
    component: () => import('./views/CodeConduct.vue'),
  },
  {
    path: '/events',
    name: 'EventList',
    component: () => import('./views/EventList.vue'),
  },
  {
    path: '/events/:event',
    name: 'Event',
    component: () => import('./views/Event.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('./views/Team.vue'),
  },
  {
    path: '/team/:member',
    name: 'TeamMember',
    component: () => import('./views/TeamMember.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
