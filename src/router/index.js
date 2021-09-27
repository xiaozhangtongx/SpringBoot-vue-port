import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Welcome from '@/components/Welcome'
import UserList from '@/components/admin/UserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/user', component: UserList },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const user = window.sessionStorage.getItem('user')
  if (to.path == '/login') return next()
  if (user == null) return '/login'
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
