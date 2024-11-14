import {createRouter,createWebHistory}  from 'vue-router'
// import blogRedirect from "../utils/BlogRedirect";
// import BlogPanel from "../components/BlogPanel";
import Ship from "../components/Ship.vue";
import Home from "../components/Home.vue";
import App from "../App.vue";
// import CategoryBody from "../components/body/CategoryBody";
// import ArticleBody from "../components/body/article/ArticleBody";
// import SubjectBody from "../components/body/SubjectBody";
// import BlogAuthorBody from "../components/body/author/BlogAuthorBody";
const  routes = [
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
      path: '/',
      name: 'Home',
      component: Home,
    }
  ]

  let base ='/'
  const router = createRouter({
    history:createWebHistory(base),
    routes
  })

  export default router