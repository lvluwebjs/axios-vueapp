import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({ 
  mode:'history',
  routes : [
    {
   // 设置为默认路由
     path: '/',
     redirect: '/login'
    },
    {
     path:'/login',
    //  使用ES中的import进行懒加载  (推荐使用，也是最常用的)
     component:() => import('../components/Login/login.vue'),
    //  使用VUE中的异步组件进行懒加载
    // component: resolve => { require(['../components/Login/login.vue'],resovle); }
   },
    {
     path:'/home',
     component:() => import('../views/Home/home.vue')
    }
   
]
})

router.beforeEach((to, form, next) => {
  if (to.path === '/login') return next();
  const token = window.sessionStorage.getItem('tokens');
    if (!token) return next('/login');
    next();
})
 


export default router
