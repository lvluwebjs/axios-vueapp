import qs from 'qs'// 在登录时axios请求数据传参时无法正常的获取数据，原因是传递参数要将参数序列化。使用qs模块进行参数序列化
//引入封装后的axios实例  axios使用有函数用法，也有对象用法
import $ajax from '../request/request.js'

/* 此文件用来统一管理项目所有接口函数 */
//三种参数 params参数 query参数 请求体参数
//params参数一般是在url路径中携带
//query参数，可以在路径中携带，以？分割，后面就是query参数，也可以在配置对象中去配置
//请求体参数 在配置对象data里面配置，一般请求方式是put和post才有请求体参数
export const Login = (data) => {
  //登录接口，携带请求参数 data
  return $ajax({
      method:'post',//请求方式
      url:'/userlogin',//请求路径，会和axios实例中的 baseURL 进行拼接
      data:qs.stringify(data)//data:{}为请求体参数
      // params里面代表的是query参数
      // params:{}
     })
}

export const GetData = () => {
  //获取测试数据接口
  return $ajax({
      method:'post',
      url:'/checktoken',
     })
}

export const conData = () => {
  //测试
  console.log('哈哈哈哈');
  console.log('呵呵呵呵');
}
