import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import yuanxiList from '../pages/yuanxi/list'
import yuanxiDetail from '../pages/yuanxi/detail'
import yuanxiAdd from '../pages/yuanxi/add'
import zhuanyeList from '../pages/zhuanye/list'
import zhuanyeDetail from '../pages/zhuanye/detail'
import zhuanyeAdd from '../pages/zhuanye/add'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import ketifenleiList from '../pages/ketifenlei/list'
import ketifenleiDetail from '../pages/ketifenlei/detail'
import ketifenleiAdd from '../pages/ketifenlei/add'
import ketixinxiList from '../pages/ketixinxi/list'
import ketixinxiDetail from '../pages/ketixinxi/detail'
import ketixinxiAdd from '../pages/ketixinxi/add'
import xuantixinxiList from '../pages/xuantixinxi/list'
import xuantixinxiDetail from '../pages/xuantixinxi/detail'
import xuantixinxiAdd from '../pages/xuantixinxi/add'
import renwushuList from '../pages/renwushu/list'
import renwushuDetail from '../pages/renwushu/detail'
import renwushuAdd from '../pages/renwushu/add'
import kaitibaogaoList from '../pages/kaitibaogao/list'
import kaitibaogaoDetail from '../pages/kaitibaogao/detail'
import kaitibaogaoAdd from '../pages/kaitibaogao/add'
import kaitichengjiList from '../pages/kaitichengji/list'
import kaitichengjiDetail from '../pages/kaitichengji/detail'
import kaitichengjiAdd from '../pages/kaitichengji/add'
import lunwenxuantiList from '../pages/lunwenxuanti/list'
import lunwenxuantiDetail from '../pages/lunwenxuanti/detail'
import lunwenxuantiAdd from '../pages/lunwenxuanti/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'yuanxi',
					component: yuanxiList
				},
				{
					path: 'yuanxiDetail',
					component: yuanxiDetail
				},
				{
					path: 'yuanxiAdd',
					component: yuanxiAdd
				},
				{
					path: 'zhuanye',
					component: zhuanyeList
				},
				{
					path: 'zhuanyeDetail',
					component: zhuanyeDetail
				},
				{
					path: 'zhuanyeAdd',
					component: zhuanyeAdd
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'ketifenlei',
					component: ketifenleiList
				},
				{
					path: 'ketifenleiDetail',
					component: ketifenleiDetail
				},
				{
					path: 'ketifenleiAdd',
					component: ketifenleiAdd
				},
				{
					path: 'ketixinxi',
					component: ketixinxiList
				},
				{
					path: 'ketixinxiDetail',
					component: ketixinxiDetail
				},
				{
					path: 'ketixinxiAdd',
					component: ketixinxiAdd
				},
				{
					path: 'xuantixinxi',
					component: xuantixinxiList
				},
				{
					path: 'xuantixinxiDetail',
					component: xuantixinxiDetail
				},
				{
					path: 'xuantixinxiAdd',
					component: xuantixinxiAdd
				},
				{
					path: 'renwushu',
					component: renwushuList
				},
				{
					path: 'renwushuDetail',
					component: renwushuDetail
				},
				{
					path: 'renwushuAdd',
					component: renwushuAdd
				},
				{
					path: 'kaitibaogao',
					component: kaitibaogaoList
				},
				{
					path: 'kaitibaogaoDetail',
					component: kaitibaogaoDetail
				},
				{
					path: 'kaitibaogaoAdd',
					component: kaitibaogaoAdd
				},
				{
					path: 'kaitichengji',
					component: kaitichengjiList
				},
				{
					path: 'kaitichengjiDetail',
					component: kaitichengjiDetail
				},
				{
					path: 'kaitichengjiAdd',
					component: kaitichengjiAdd
				},
				{
					path: 'lunwenxuanti',
					component: lunwenxuantiList
				},
				{
					path: 'lunwenxuantiDetail',
					component: lunwenxuantiDetail
				},
				{
					path: 'lunwenxuantiAdd',
					component: lunwenxuantiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
