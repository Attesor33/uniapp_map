<template>
	<view class="container">
		<view class="header">
			<view class="font1">
				你好，欢迎来到
			</view>
			<view class="font2">
				<image src="@/static/images/gfhygvbasdjfgbjsa.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="footer">
			<van-button type="primary" @click="login()">登录</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			// console.log(list);
		},
		methods: {
			login(){
				uni.navigateTo({
					url:"pages/home/home"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	// @font-face {
	// 	font-family: HarmonyOS_Sans_SC_Medium;
	// 	src: url('~@/assets/字体/HarmonyOS_Sans_SC_Medium.ttf'),

	// }

	@font-face {
		font-family: HarmonyOS_Sans_SC_Medium;
		src: url(data:application/font-ttf;charset=utf-8;base64,YOUR BASE64 STRING HERE) format('truetype');
	}

	.container {
		width: 100%;
		height: 100%;
		background: url('@/assets/b11083c6934a9dca93d410b13614f60f.png') no-repeat;
		background-size: 100%;

		.header {
			padding: 100px 20px 0;

			.font1 {
				width: 280px;
				height: 50px;
				font-family: HarmonyOS_Sans_SC_Medium;
				font-size: 20px;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 500;
			}

			.font2 {
				width: 600px;
				height: 80px;

				uni-image {
					height: 30px !important;
				}
			}

		}

		.footer {
			margin-top: -20px;
			width: 100%;
			height: 50vh;
			background-color: #FFFFFF;
			border-radius: 20px 20px 0 0;
		}
	}
</style>
