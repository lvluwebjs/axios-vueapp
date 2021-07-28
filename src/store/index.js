import Vue from 'vue'
import Vuex from 'vuex'
//引入自定义封装的数据请求方法
import {Login,GetData} from "../api/api.js";
import router from '../router/index.js'
//引入vuex插件
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 作用是页面刷新时，重新赋值token 
    token:sessionStorage.getItem('tokens')?sessionStorage.getItem('tokens'):'',
    dataList:[],
    usernames:''
  },
  getters: {

  },
  mutations: {
    TOKEN_LOGIN(state,dataArr){
      state.token = dataArr.token
      state.usernames = dataArr[0].username

    },
    TOKEN_DATA(state,result){
     console.log(result);
    }
  },
  actions: {
    //登录接口请求
    async AJAX_LOGIN({commit},data){
      const result = await Login(data);
      if(result.data.status == 602){
        alert(result.data.msg)
      }else{
        // console.log(result.data);
        let token = result.data.token
        sessionStorage.setItem("tokens", token);
        var dataArr=[]
        dataArr.push(data)
        dataArr.push(token)
        console.log(dataArr);
        commit('TOKEN_LOGIN',dataArr)
        // vue防止跳转到主页后返回到登陆页面,验证通过后用replace（）跳转
        router.push('./home')

      }
    },
    //携带token后来请求数据接口
    async Get_DATA({commit}){
      const result = await GetData();
      commit('TOKEN_DATA',result)
    }
  },
  modules: {}
});
       
     
    
      
