import {createRouter,createWebHistory}  from 'vue-router'
// import blogRedirect from "../utils/BlogRedirect";
// import BlogPanel from "../components/BlogPanel";
import Ship from "../components/Ship.vue";
import App from "../App.vue";
// import CategoryBody from "../components/body/CategoryBody";
// import ArticleBody from "../components/body/article/ArticleBody";
// import SubjectBody from "../components/body/SubjectBody";
// import BlogAuthorBody from "../components/body/author/BlogAuthorBody";
const  routes = [
    {
      path: '/',
      redirect: '/Home'
    },
    // {
    //   path: '/c',
    //   name: 'BlogPanel',
    //   component: BlogPanel,
    //   children: [{
    //       path: 'subject/',
    //       name:"SubjectBody",
    //       component: SubjectBody,
    //       redirect: "/",
    //       children:[
    //         {path: 'category/:categoryId' + '.html', component: CategoryBody},
    //         {path: 'archive/:archiveYear/:archiveMonth' + '.html', component: CategoryBody},
    //         {path: 'tag/:tagId/', component: CategoryBody},
    //         {path: 'p/:articleId'+'.html',component: ArticleBody}
    //       ]
    //     },
    //     {
    //       path: 'author/',
    //       name:"AuthorBody",
    //       component: BlogAuthorBody
    //     }
    //     ]
    // },
    {
      path: '/ship',
      name: 'Ship',
      component: Ship,
    },
    {
      path: '/Home',
      name: 'Home',
      component: App,
    }
  ]
  const BASE_URL = '/'
  const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
  })

  export default router