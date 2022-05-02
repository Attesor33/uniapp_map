<template>
	<view class="popup">
		<view class="popup-header">

			<view class="popup-portrait">
				<image src="" mode=""></image>
			</view>
			<view class="popup-name">
				<view class="font-Name">
					Admin
				</view>
				<view class="font-department">
					水利部门
				</view>

			</view>
			<view class="popup-Scan-code">
				<image src="" mode=""></image>
			</view>

		</view>
		<view class="popup-content">
			<view class="title">
				<image src="@/static/images/xxtz.png" class="images"></image>
				<view class="font">
					消息通知
				</view>
			</view>
			<view class="title">
				<image src="@/static/images/ljfx.png" class="images"></image>
				<view class="font">
					链接分享
				</view>
			</view>
			<view class="title">
				<image src="@/static/images/bbgx.png" class="images"></image>
				<view class="font">
					版本更新
				</view>
			</view>
			<view class="title">
				<image src="@/static/images/gywm.png" class="images"></image>
				<view class="font">
					关于我们
				</view>
			</view>

		</view>
		<button type="default" class="popup-button" @click="back">退出登录</button>
	</view>
</template>

<script>
	import util from "../../common/request.js"
	export default {
		methods: {
			//  退出登录
			
			back() {
				let data = {}
				util.request("system/logout", "POST", data, null, true, false, true).then((res) => {
					console.log(res)
					if(res.code==200){
						uni.redirectTo({
							url:"../Login/login"
						});
					}
				
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	.popup {
		width: 100%;
		height: 100vh;

		.popup-header {
			width: 100%;
			height: 240px;
			background: #2863db;
			display: flex;

			.popup-portrait {
				width: 80px;
				height: 80px;
				background: red;
				border-radius: 50%;
				margin-top: 100px;
				margin-left: 30px;

				image {
					width: 80px;
					height: 80px;
					border-radius: 50%
				}
			}

			.popup-name {
				margin-top: 90px;
				margin-left: 20px;
				height: 100px;

				.font-Name {
					color: #FFFFFF;
					font-size: 20px;
					font-weight: 500;
					margin-top: 15px;
				}

				.font-department {
					width: 70px;
					color: #FFFFFF;
					font-size: 14px;
					color: #d2dbed;
					background: #1e49a5;
					margin-top: 15px;
					padding: 5px 30px;
					border-radius: 30px;
					text-align: center;
				}
			}
		}

		.popup-content {
			.title {
				width: 100%;
				height: 28px;
				display: flex;
				padding: 15px;
				border-bottom: 1px solid #C8C9CC;

				.images {
					width: 28px;
					height: 28px;
				}

				.font {
					line-height: 28px;
					margin-left: 20px;

				}
			}
		}

		.popup-button {
			width: 80%;
			margin: 50px auto;
			background: #2863db;
			color: #FFFFFF;
			border-radius: 30px
		}
	}
</style>
