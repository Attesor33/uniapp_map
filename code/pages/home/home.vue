<template>
	<view class="homePage">
		<view class="banner">
			<view class="text">
				<view class="bannerBox">
					<view class="date">2022年</view>
					<view class="job">水利信息督查填报工作</view>
				</view>
				<view class="btn">点击进入</view>
			</view>
			
			
		</view>
		<view class="cardList">
			<view class="cardItem ducha">
				<view class="title">
					<view class="top">督查对象</view>
					<view class="bottom">1352
						<text style="font-size: 12rpx;">个</text>
					</view>
				</view>
			</view>
			<view class="cardItem yiducha">
				<view class="title">
					<view class="top">已经督查数量</view>
					<view class="bottom">1046
						<text style="font-size: 12rpx;">个</text>
					</view>
				</view>
			</view>
			<view class="cardItem wenti">
				<view class="title">
					<view class="top">问题数量</view>
					<view class="bottom">768
						<text style="font-size: 12rpx;">个</text>
					</view>
				</view>
			</view>
		</view>
		<view class="charts">
			<view class="changeBox">
				<view class="left">督查批次</view>
				<view class="right">
					<picker @change="piciChange" :value="piciIndex" :range="piciColumns">
						<van-cell
							:title="piciColumns[piciIndex]" 
							is-link 
							arrow-direction="down"
							placeholder="请选择督查批次"
						  />
					</picker>
				</view>	
			</view>
			<view class="changeBox">
				<view class="left">督查组</view>
				<view class="right">
					<picker @change="zuChange" :value="zuIndex" :range="zuColumns">
						<van-cell
							:title="zuColumns[zuIndex]" 
							is-link 
							arrow-direction="down"
							placeholder="请选择督查组"
						  />
					</picker>
				</view>	
			</view>
			<van-tabs :active="0" @change="onTabChange" title-active-color="#34BCCB" color="#34BCCB">
				<van-tab title="01Month">
					<view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" id="echarts" class="echarts"></view>
				</van-tab>
				<van-tab title="03Month">内容 2</van-tab>
				<van-tab title="06Month">内容 3</van-tab>
				<van-tab title="01Years">内容 4</van-tab>
			</van-tabs>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				piciIndex: 0,
				piciColumns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				zuColumns:['杭州', '宁波', '温州', '嘉兴', '湖州'],
				zuIndex:0,
				tabs: [1, 2, 3, 4],
				option:{
				
				  tooltip: {
				    trigger: 'axis'
				  },
				  grid:{ // 让图表占满容器
				    top:"0rpx",
				    left:"0rpx",
				    right:"0rpx",
				    bottom:"40rpx"
				  },
				
				  // calculable: true,
				  xAxis: [
				    {
				      type: 'category',
					  axisTick:{
						  show:false
					  },
					  axisLine:{
						show:false
					  },
					  axisLabel: {
						  textStyle: {
							  color: '#4C4C4C',
							  fontSize:'10',
						  },
						},
					 data: ['饮水安全', '水库', '取用水', '地下水', '河湖长制', '农村饮水']
				    }
				  ],
				  yAxis: [
				    {
				      type: 'value',
					  show:false
				    }
				  ],
				  series: [
				    {
						name: 'Rainfall',
						type: 'bar',
						itemStyle: { 
							color: '#598FFF',
							barBorderRadius:[7, 7, 7, 7]
						},
						// barCategoryGap:'5%',
						data: [3,6,6,9,6,9]
				    },
				    {
						name: 'Rainfall',
						type: 'bar',
						barGap:'80%',
						barCategoryGap:'50%',
						itemStyle: { 
							color: '#6861FF' ,
							barBorderRadius:[7, 7, 7, 7]
						},
						data: [6,7,8,4,5,2]
				    },
				    {
						name: 'Evaporation',
						type: 'bar',
						itemStyle: {
							color: '#EC9738' ,
							barBorderRadius:[7, 7, 7, 7],
						},
						
				        data: [7,3,6,7,8,5]
				    },
					
				  ]
				}
			}
		},
		methods: {
			changeOption() {
				const data = this.option.series[0].data
				// 随机更新示例数据
				data.forEach((item, index) => {
					data.splice(index, 1, Math.random() * 40)
				})
			},
			onViewClick(options) {
				console.log(options)
			},
			piciChange(e){
				this.piciIndex = e.detail.value
			},
			zuChange(e){
				this.zuIndex = e.detail.value
			},
			onTabChange(e){
				
			}
			
		}
	}
</script>
<script module="echarts" lang="renderjs">
	let myChart
	export default {
		mounted() {
			if (typeof window.echarts === 'function') {
				this.initEcharts()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/echarts.js'
				script.onload = this.initEcharts.bind(this)
				document.head.appendChild(script)
			}
		},
		methods: {
			initEcharts() {
				myChart = echarts.init(document.getElementById('echarts'))
				// 观测更新的数据在 view 层可以直接访问到
				myChart.setOption(this.option)
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				myChart.setOption(newValue)
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.homePage{
		// height:100vh;
		.banner{
			
			width: 100%;
			height:420rpx;
			background: url('@/assets/b11083c6934a9dca93d410b13614f60f.png') no-repeat;
			background-size: 100%;
			.text{
				padding-left:20rpx;
				padding-right:40rpx;
				padding-bottom:40rpx ;
				height:100%;
				display: flex;
				align-items: center;
				.bannerBox{
					flex:1;
					.date{
						font-family: Helvetica;
						font-size: 60rpx;
						color: #FFFFFF;
						letter-spacing: 0;
						font-weight: 400;
					}
					.job{
						font-family: Helvetica;
						font-size: 48rpx;
						color: #FFFFFF;
						letter-spacing: 0;
						font-weight: 400;
					}
				}
				.btn{
					// align-self: self-end;
					// margin-bottom: 30rpx;
					background: rgba(255,255,255,0.17);
					border-radius: 150rpx;
					font-family: HarmonyOS_Sans_SC_Medium;
					font-size: 28rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					font-weight: 500;
					padding:6rpx 14rpx 6rpx 14rpx;
					margin-top: 165px;
				}
			}
			
		}
		.cardList{
			margin-top:10rpx;
			display:flex;
			justify-content: space-around;
			.ducha{
				background: url('@/static/images/dx.png') no-repeat;
			}
			.yiducha{
				background: url('@/static/images/ydc.png') no-repeat;
			}
			.wenti{
				background: url('@/static/images/wtsl.png') no-repeat;
			}
			.cardItem{
				width:270rpx;
				height:220rpx;
				background-size: 100%;
				.title{
					padding-top:30rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.top{
						padding-left:20rpx;
						font-family: Helvetica;
						font-size: 32rpx;
						color: #FFFFFF;
						letter-spacing: 0;
						font-weight: 600;
					}
					.bottom{
						padding-right:20rpx;
						padding-top:20rpx ;
						align-self: flex-end;
						font-family: DINCondensed-Bold;
						font-size: 70rpx;
						color: #FFFFFF;
						letter-spacing: 2rpx;
						font-weight: 700;
					}
				}
			}
		}
		.charts{
			background: #fff;
			margin: 20rpx;	
			.changeBox{
				padding-top:20rpx;
				display: flex;
				padding-left:20rpx;
				padding-right:20rpx;
				vertical-align: middle;
				height:60rpx;
				.left{
					font-size: 32rpx;
					width:25%;
				}
				.right{
					flex:1;
				}
				
			}
		}
		
	}
	
	.echarts {
		width: 100%;
		height: calc(100vh - 900rpx);
	}
	/deep/ .van-cell{
		background: #F5F7FA;
		padding:0;
		border-radius: 8rpx;
		padding-right:20rpx;
	}
	page{
		min-height: auto !important;
		padding:0;
	}
	/deep/ .van-hairline--top-bottom:after {
	    border-width: 0rpx 0;
	}
</style>
