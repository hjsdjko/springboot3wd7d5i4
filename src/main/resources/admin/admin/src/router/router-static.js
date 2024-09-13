import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yuanxi from '@/views/modules/yuanxi/list'
    import ketixinxi from '@/views/modules/ketixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import lunwenxuanti from '@/views/modules/lunwenxuanti/list'
    import ketifenlei from '@/views/modules/ketifenlei/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import zhuanye from '@/views/modules/zhuanye/list'
    import xuantixinxi from '@/views/modules/xuantixinxi/list'
    import renwushu from '@/views/modules/renwushu/list'
    import kaitibaogao from '@/views/modules/kaitibaogao/list'
    import kaitichengji from '@/views/modules/kaitichengji/list'
    import messages from '@/views/modules/messages/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/yuanxi',
        name: '院系',
        component: yuanxi
      }
      ,{
	path: '/ketixinxi',
        name: '课题信息',
        component: ketixinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/lunwenxuanti',
        name: '论文选题',
        component: lunwenxuanti
      }
      ,{
	path: '/ketifenlei',
        name: '课题分类',
        component: ketifenlei
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/zhuanye',
        name: '专业',
        component: zhuanye
      }
      ,{
	path: '/xuantixinxi',
        name: '选题信息',
        component: xuantixinxi
      }
      ,{
	path: '/renwushu',
        name: '任务书',
        component: renwushu
      }
      ,{
	path: '/kaitibaogao',
        name: '开题报告',
        component: kaitibaogao
      }
      ,{
	path: '/kaitichengji',
        name: '开题成绩',
        component: kaitichengji
      }
      ,{
	path: '/messages',
        name: '在线留言',
        component: messages
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
