
// import { LAppLive2DManager } from './lapplive2dmanager';
import { createApp } from 'vue';
import App from './App.vue';
import '../public/css/style.css'
import '../public/css/live2d.css'
import router from './router/index'
import axios from 'axios'
// import '../public/scss/deve.scss'
// import '../public/scss/global.scss'
// import '../public/scss/style.scss'
const app = createApp(App)
 
// 创建axios实例并配置
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')


// 浏览器装入后的处理（打开页面）
// window.onload = (): void => {
  
//   // create the application instance
  
  
//   // const live2DManager: LAppLive2DManager = LAppLive2DManager.getInstance();
// //   setInterval(function () { //每5秒刷新一次图表
// //     //需要执行的代码写在这里
// //     live2DManager.startRandomMotion(5000);
// // }, 5000); 
// };

//结束时的处理 (刷新或关闭页面)
// window.onbeforeunload = (): void => LAppDelegate.releaseInstance(); //lambda 匿名函数



