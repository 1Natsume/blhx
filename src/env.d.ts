// 用来处理识别不了vue后缀的问题
declare module "*.vue" { 
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}