import Vue from 'vue'
import Vuex from 'vuex'
import {Login,GetData} from "../api/api.js";
import router from '../router/index.js'
//引入vuex插件
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 作用是页面刷新时，重新赋值token 
    token:sessionStorage.getItem('tokens')?sessionStorage.getItem('tokens'):'',
    dataList:[]
  },
  getters: {

  },
  mutations: {
    TOKEN_LOGIN(state,token){
      state.token = token
    },
    TOKEN_DATA(state,result){
     console.log(result);
    }
  },
  actions: {
    async AJAX_LOGIN({commit},data){
      const result = await Login(data);
      // let num = Math.random() * 0.01;
      // let token = result.data.token + num.toString().substring(6);
      let token = result.data.token
      sessionStorage.setItem("tokens", token);
      commit('TOKEN_LOGIN',token)
      // vue防止跳转到主页后返回到登陆页面,验证通过后用replace（）跳转
      router.push('./home')
    },
    async Get_DATA({commit}){
      const result = await GetData();
      commit('TOKEN_DATA',result)
    }
  },
  modules: {}
});
    
      
