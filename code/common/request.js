const { log } = require("util");

const tui = {
	delayed: null,
	//接口地址
	interfaceUrl: function() {
		// return 'http://192.168.3.74:8087/ershi_api/'
		return 'http://120.27.235.15:8087/ershi_api/'
	},
	/**
	 * 请求数据处理
	 * @param string url 请求地址
	 * @param string method 请求方式: GET or POST
	 * @param {*} postData 请求参数
	 * @param bool isDelay 是否延迟显示loading
	 * @param bool isForm 数据格式-> true: 'application/x-www-form-urlencoded'; false:'application/json'
	 * @param bool hideLoading 是否隐藏loading-->true: 隐藏  false:显示 
	 */
	request: function(url, method, postData, isDelay, isForm, hideLoading, useToken) {
		//接口请求
		let loadding = false;
		let userToken = uni.getStorageSync('x-access-token')
		// console.log("请求==",tui.interfaceUrl() + url,userToken)		
		tui.delayed && uni.hideLoading();
		clearTimeout(tui.delayed);
		tui.delayed = null;
		if (!hideLoading) {
			tui.delayed = setTimeout(() => {
				uni.showLoading({
					mask: false,
					title: '请稍候...',
					success(res) {
						loadding = true
					}
				})
			}, isDelay ? 1000 : 0)
		}

		return new Promise((resolve, reject) => {
			uni.request({
				url: tui.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
					'Authorization': useToken ? userToken:''
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					// console.log("请求tool成功", res)
					clearTimeout(tui.delayed)
					tui.delayed = null;
					if (loadding && !hideLoading) {
						uni.hideLoading()
					}
					resolve(res.data)
				},
				fail: (res) => {
					clearTimeout(tui.delayed)
					tui.delayed = null;
				console.log('上传失败')
					reject(res)
				}
			})
		})
	},
}

//对外导出方法
module.exports = {
	request: tui.request,

}

// 使用代码（可以只写前面的三个参数) ：
// let postData = {}
// util.request("/Home/GetStatus", "GET", postData, true, null, false, false).then((res) => {
// 	console.log(res)
// 	if (res.code == 100) {
// 		console.log()
// 	} else {

// 	}
// }).catch((res) => {
// 	console.log("请求失败", res)
// })

