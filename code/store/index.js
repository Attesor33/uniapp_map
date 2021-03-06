import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
const store = new Vuex.Store({
	state: { //全局变量定义处
		hasLogin: false, //用户是否登录
		userInfo: {},
		//用于存放用户账号数据
	},
	mutations: { //全局方法定义处
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			//将请求中res.data.user对象存入userInfo
			uni.setStorage({
				//把用户信息保存到本地缓存
				key: 'userInfo',
				data: provider,
				
			})
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({ key: 'userInfo',
				//根据键值移除对应位置的缓存数据
			})
			
			{
	}
}
}
})
export default store
