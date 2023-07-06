//引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
//全局对象
const allGloabComponent: any = { SvgIcon, Pagination }
//对外暴露插件对象
export default {
  install(app: any) {
    //注册项目全部的全局组件
    Object.keys(allGloabComponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGloabComponent[key])
    })
  },
}
