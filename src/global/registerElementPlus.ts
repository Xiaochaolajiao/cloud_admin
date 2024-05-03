import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
export default{
    install(app:App){
        // 全局注册组件
        app.use(ElementPlus)
    }
}