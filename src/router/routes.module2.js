// import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Page2 from '../views/pages/page2.vue'

export default [
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'page2', component: Page2 }
    ]
  }
]
