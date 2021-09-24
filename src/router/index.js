import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
  const user = window.sessionStorage.getItem("user");
  if(to.path=="/login")return next();
  console.log(user);
  if(user==null) return("/login")
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
