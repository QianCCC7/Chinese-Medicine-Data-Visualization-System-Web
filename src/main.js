import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import store from '@/store'
// 修改分页器默认文字
zhCn.el.pagination.total = '共 {total} 条';
zhCn.el.pagination.goto = '跳至';
zhCn.el.pagination.pagesize = '条/页';
zhCn.el.pagination.pageClassifier = '页';

let app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
