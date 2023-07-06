//进行axios的二次封装,使用请求与响应拦截器
import axios from 'axios'
//第一步:利用axios对象的create方法去创建案凶手实例(其他配置:基础路径,超时的时间)
let request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带api
  timeout: 5000, //超时时间设置
})
//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //返回配置对象
  return config
})
//第三步:响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调:处理http网络错误
  },
)
