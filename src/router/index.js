import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [{
      // 设置为默认路由
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      //  使用ES中的import进行懒加载  (推荐使用，也是最常用的)
      component: () => import('../components/Login/login.vue'),
      //  使用VUE中的异步组件进行懒加载
      // component: resolve => { require(['../components/Login/login.vue'],resovle); }
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      component: () => import('../views/Home/home.vue')
    },
    {
      path: '/gwc',
      component: () => import('../views/Gwc/gwc.vue')
    }

  ]
})
// let norequireLogin = ['/login'];
// router.beforeEach((to, form, next) => {
//   if (norequireLogin.includes(to.path)) return next();
//   if (!token){
//     window.sessionStorage.setItem('currentPath',to.path)
//     setTimeout(()=>{
//       alert('请先登录')
//       return next('/login');
//     },500)
//   }
//   next();
// })
router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('tokens');
  if (to.matched.some(record => record.meta.requireAuth)) {
    //路由元信息requireAuth:true，或者homePages:true，则不做登录校验
    next()
  } else {
    if (token) { //判断用户是否登录
      // Object.keys返回值： 一个表示给定对象的所有可枚举属性的字符串数组
      // 二、 处理对象， 返回可枚举的属性数组

      // let person = {
      //   name: "张三",
      //   age: 25,
      //   address: "深圳",
      //   getName: function () {}
      // }

      // Object.keys(person) // ["name", "age", "address","getName"]
      if (Object.keys(from.query).length === 0) { //判断路由来源是否有query，处理不是目的跳转的情况
        next()
      } else {
        let redirect = from.query.redirect //如果来源路由有query
        if (to.path === redirect) { //这行是解决next无限循环的问题
          next()
        } else {
          next({
            path: redirect
          }) //跳转到目的路由
        }
      }
    } else {
      if (to.path === "/login") {
        next()
      } else {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath
          } //将目的路由地址存入login的query中
        })
      }
    }
  }
  return
})



export default router
