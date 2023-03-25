import App from './App'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import sence from 'sence'


import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


Vue.use(sence, {
	// ajax路径前缀
	BASE_API: "http://localhost:8080",
	// 静态文件前缀(如阿里云CDN)
	STATIC_URL: "http://static.simbajs.com/",
	//提示信息驻留时间(毫秒)
	MSG_TIP_DURATION: 2000,
	//上传文件API(如七牛云)
	UPLOAD_URL: 'http://oss.qiniu.com/upload/',
	//tabbar页面路径数组，必填，防止go2时无法跳转
	TABBAR_PAGE_LIST: ["/pages/tabbar/mine/mine", "/pages/tabbar/index/index", "/pages/tabbar/history/history",
		"/pages/tabbar/report/report"
	],
	// 首页
	HOME_PAGE_PATH: "/pages/main/tabbar/index/index",
	// 普通登录页
	LOGIN_PAGE_PATH: "/pages/main/account/phone-login",
	// 微信授权登录页
	WEIXIN_LOGIN_PAGE_PATH: "/pages/main/account/wx-intro",
	// 一些storage存储的常量KEY，除了KEY_TOKEN用于放请求头鉴权按后台需要来改，其余不建议改
	KEY_TOKEN: 'TOKEN',
	KEY_LOGIN_USER_INFO: 'LOGIN_USER_INFO',
})
const app = new Vue({
	...App
})
app.$mount()
