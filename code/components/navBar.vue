<template>
	<view class="navbar">
		<!-- 导航栏左侧插槽 -->
		<view class="navbarBox">
			<view class="both" >
				<slot name="left"></slot>
			</view>
			
			<view v-if="title" class="title">{{ title }}</view>
			<!-- 右侧插槽 -->
			<view class="both">
				<slot  name="right"></slot>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'navBar',
		props: {
			title: {
				default: '',
			},
		},
	};
</script>

<style lang="less" scoped>
	.navbar{
		padding-top:44rpx;
		height:88rpx;
		background: #2862DB;
		.navbarBox{
			font-family: HarmonyOS_Sans_SC_Medium;
			font-size: 36rpx;
			color: #FFFFFF;
			letter-spacing: 0;
			line-height: 88rpx;
			font-weight: 500;
			display: flex;
			padding-left:30rpx;
			padding-right:30rpx;
			.both{
				min-width: 60rpx;
			}
			.title{
				flex:1;
				text-align: center;
			}
		}
		
	}
</style>
