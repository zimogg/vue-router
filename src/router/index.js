import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin';

import Index from '../client/index';

import Page1 from '../client/page/page1';
import Page2 from '../client/page/page2';
Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',//默认显示的内容页面路径
      name: 'admin',
      component: Admin,
      children:[
      	{
      		path:'index',
      		name:'index',
      		alias:'首页',
      		component:Index,
      		// 重定向，指向子集路由的默认路由
      		redirect:'index/page1',
      		children:[
      			{
      				path:'page1',
      				name:'page1',
      				alias:'page1页面',
      				component:Page1
      			},
      			{
      				path:'page2',
      				name:'page2',
      				alias:'page2页面',
      				component:Page2
      			}
      		]
      	}
      ]
    }
  ]
})
export default router;
