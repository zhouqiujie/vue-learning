import About from '../views/About.vue'
// import Home from '../views/Home.vue'
import Page1 from '../views/pages/page1.vue'

export default [
  {
    path: '/about',
    component: About,
    children: [
      { path: 'page1', component: Page1 }
    ]
  }
]
