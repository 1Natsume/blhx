import {createRouter,createWebHistory}  from 'vue-router'
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
      component:()=> import("../components/Ship.vue")
    },
    {
      path: '/',
      name: 'Home',
      component:()=> import("../components/Home.vue")
    },
    {
      path: '/p',
      name: 'Detail',
      component:()=> import("../components/Detail.vue")
    }
    
  ]

  let base ='/'
  const router = createRouter({
    history:createWebHistory(base),
    routes
  })

  export default router