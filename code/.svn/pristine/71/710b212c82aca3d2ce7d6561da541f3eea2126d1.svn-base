<template>
	<view>
		<view class="zhu">
			<navBar :title="title">
				<template #left>
					<van-icon @click="back" name="arrow-left" color="#FFFFFF" />
				</template>

			</navBar>
			<input v-model="searchValue" placeholder="输入关键字" class="searchInput" />
			<van-tabs :active="0" @change="onTabChange" title-active-color="#000;" color="#2862DB;">
				<van-tab title="全部">
					<view class="cardBox">
						<view class="card" @click="detail(item)" v-for="(item, index) in searchChange1">
							<view class="title">
								<view class="text">{{item.node_nm}}{{item.nm}}
									<text v-if="item.state==='已督查'" class="tipSuccess">{{item.state}}</text>
									<text v-if="item.state==='未督查'" class="tipError">{{item.state}}</text>
									<text v-if="item.state==='督查中'" class="tiping">{{item.state}}</text>
								</view>
								<van-icon name="arrow" class="arrow" color="#999" />
							</view>
							<view class="dateBox">
								<view v-if="item.address" class="dateText">{{item.address}}
								</view>
								<view v-if="item.uptm" class="date">{{item.uptm}}</view>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="已督查">
					<view class="cardBox">
						<view class="card" @click="detail(item)" v-for="(item, index) in searchChange2">
							<view class="title">
								<view class="text">{{item.node_nm}}{{item.nm}}
									<text v-if="item.state==='已督查'" class="tipSuccess">{{item.state}}</text>
									<text v-if="item.state==='未督查'" class="tipError">{{item.state}}</text>
									<text v-if="item.state==='督查中'" class="tiping">{{item.state}}</text>
								</view>
								<van-icon name="arrow" class="arrow" color="#999" />
							</view>
							<view class="dateBox">
								<view v-if="item.address" class="dateText">{{item.address}}
								</view>
								<view v-if="item.uptm" class="date">{{item.uptm}}</view>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="督查中">
					<view class="cardBox">
						<view class="card" @click="detail(item)" v-for="(item, index) in searchChange3">
							<view class="title">
								<view class="text">{{item.node_nm}}{{item.nm}}
									<text v-if="item.state==='已督查'" class="tipSuccess">{{item.state}}</text>
									<text v-if="item.state==='未督查'" class="tipError">{{item.state}}</text>
									<text v-if="item.state==='督查中'" class="tiping">{{item.state}}</text>
								</view>
								<van-icon name="arrow" class="arrow" color="#999" />
							</view>
							<view class="dateBox">
								<view v-if="item.address" class="dateText">{{item.address}}
								</view>
								<view v-if="item.uptm" class="date">{{item.uptm}}</view>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="未督查">
					<view class="cardBox">
						<view class="card" @click="detail(item)" v-for="(item, index) in searchChange4">
							<view class="title">
								<view class="text">{{item.node_nm}}{{item.nm}}
									<text v-if="item.state==='已督查'" class="tipSuccess">{{item.state}}</text>
									<text v-if="item.state==='未督查'" class="tipError">{{item.state}}</text>
									<text v-if="item.state==='督查中'" class="tiping">{{item.state}}</text>
								</view>
								<van-icon name="arrow" class="arrow" color="#999" />
							</view>
							<view class="dateBox">
								<view v-if="item.address" class="dateText">{{item.address}}
								</view>
								<view v-if="item.uptm" class="date">{{item.uptm}}</view>
							</view>
						</view>
					</view>
				</van-tab>
			</van-tabs>
		</view>
	</view>

</template>

<script>
	import navBar from '@/components/navBar';
	import util from "../../common/request.js"
	export default {
		components: {
			navBar
		},
		data() {
			return {
				typeList1: [],
				typeList2: [],
				typeList3: [],
				searchValue: '',
				typeListAll: [],
				title: '',
				planId: '',
				duChaList: [{
						title: '石家庄岗南水库石家庄岗南水库石家庄岗南水库',
						type: '小( Ⅰ )型',
						adress: '河北省平山县西岗南村',
						date: '2022/03/01  12:00:00',
						isCheck: '0'
					},
					{
						title: '石家庄岗南水库',
						type: '',
						adress: '河北省平山县西岗南村河北省平山县西岗南村河北省平山县西岗南村',
						date: '2022/03/01  12:00:00',
						isCheck: '1'
					},
					{
						title: '石家庄岗南水库',
						type: '',
						adress: '河北省平山县西岗南村',
						date: '',
						isCheck: '2'
					},
					{
						title: '石家庄岗南水库',
						type: '',
						adress: '河北省平山县西岗南村',
						date: '2022/03/01  12:00:00',
						isCheck: '0'
					},
					{
						title: '石家庄岗南水库',
						type: '',
						adress: '河北省平山县西岗南村',
						date: '2022/03/01  12:00:00',
						isCheck: '2'
					},
				]
			}
		},
		onLoad(option) {
			this.title = option.title
			this.planId = option.planId
		},

		onShow() {
			this.search()
		},
		computed: {
			searchChange1() {
				var arr = []
				this.typeListAll.forEach(e => arr.push(e))
				if (this.searchValue) {
					console.log(1)
					arr = this.typeListAll.filter(item =>item.nm.includes(this.searchValue))
				}
				return arr
			},
			searchChange2() {
				var arr = []
				this.typeList1.forEach(e => arr.push(e))
				if (this.searchValue) {
					console.log(1)
					arr = this.typeList1.filter(item => item.nm.includes(this.searchValue))
				}
				return arr
			},
			searchChange3() {
				var arr = []
				this.typeList2.forEach(e => arr.push(e))
				if (this.searchValue) {
					console.log(1)
					arr = this.typeList2.filter(item => item.nm.includes(this.searchValue))
				}
				return arr
			},
			searchChange4() {
				var arr = []
				this.typeList3.forEach(e => arr.push(e))
				if (this.searchValue) {
					console.log(1)
					arr = this.typeList3.filter(item => item.nm.includes(this.searchValue))
				}
				return arr
			},
		},
		methods: {


			back() {
				uni.switchTab({
					url: '/pages/ducha/ducha',

				})
			},
			detail(target) {
				// console.log(target)
				if (this.title == '小型水库') {
					uni.navigateTo({
						url: "/pages/Smallreservoir/Smallreservoir?title=" + JSON.stringify(target)
					})
				} else if (this.title == '水资源管理') {
					uni.navigateTo({
						url: "/pages/waterResource/waterResource?title=" + JSON.stringify(target)
					})

				} else if (this.title == '水毁工程') {
					uni.navigateTo({
						url: "/pages/waterDamage/waterDamage?title=" + JSON.stringify(target)
					})
				} else if (this.title == '河湖长制') {
					uni.navigateTo({
						url: "/pages/Riversystem/Riversystem?title=" + JSON.stringify(target)
					})
				} else if (this.title == '河湖管理') {
					uni.navigateTo({
						url: "/pages/Rivermanagement/Rivermanagement?title=" + JSON.stringify(target)
					})
				} else if (this.title == '地下水超采') {
					uni.navigateTo({
						url: "/pages/Groundwater/Groundwater?title=" + JSON.stringify(target)
					})
				} else if (this.title == '饮水安全') {
					uni.navigateTo({
						url: "/pages/drinkWater/drinkWater?title=" + JSON.stringify(target)
					})
				}

			},
			onChange() {
				console.log(this.value)
			},
			onTabChange(val) {
				console.log(val.detail.title)
				if (val.detail.title == '全部') {
					this.typeListAll = this.typeListAll
				} else if (val.detail.title == '已督查') {
					this.typeList1 = this.typeList.filter(e => {
						return e.state == '已督查'
					})
				} else if (val.detail.title == '督查中') {
					this.typeList2 = this.typeList.filter(e => {
						return e.state == '督查中'
					})
				} else if (val.detail.title == '未督查') {
					this.typeList3 = this.typeList.filter(e => {
						return e.state == '未督查'
					})
				}
			},

			search() {
				let form = {
					ins_type: this.title,
					plan_id: this.planId
				}
				util.request("inspfillin/getInspFillinList", "Get", form, false, false, false, true).then(res => {


					res.data.forEach((e) => {
						if (e.uptm == "" || e.uptm == null) {
							e.uptm = e.uptm;
						} else {
							let date = e.uptm;
							// .replace("T", " ").replace("+0800", "");
							var dates = new Date(date).toJSON();
							e.uptm = new Date(+new Date(dates) + 8 * 3600 * 1000)
								.toISOString()
								.replace(/T/g, " ")
								.replace(/\.[\d]{3}Z/, "");
							// e.intm = date;
						}
					});
					let typeList = JSON.stringify(res.data)
					this.typeList = res.data
					this.typeListAll = res.data

				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.zhu {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.searchInput {
		background: url('@/static/images/searchshuku.png')no-repeat;
		background-size: 20px;
		background-position: 5px;
		background-color: rgba(255, 255, 255, 0);
		border: 1px solid #2862DB;
		border-radius: 6rpx;
		margin: 5px 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 25px;
	}

	.cardBox {
		margin: 40rpx 40rpx 40rpx 40rpx;

		.card {
			padding: 20rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			margin-bottom: 20rpx;

			.title {
				font-family: HarmonyOS_Sans_SC_Medium;
				font-size: 32rpx;
				color: #333333;
				letter-spacing: 0;
				font-weight: 500;
				display: flex;

				.text {
					flex: 1;

					.tipSuccess {
						font-family: HarmonyOS_Sans_SC;
						font-size: 20rpx;
						color: #70CE74;
						letter-spacing: 0;
						text-align: center;
						font-weight: 400;
						border: 2rpx solid #70CE74;
						border-radius: 4rpx;
						padding: 6rpx;
						margin-left: 40rpx
					}

					.tipError {
						font-family: HarmonyOS_Sans_SC;
						font-size: 20rpx;
						color: #8DADF0;
						letter-spacing: 0;
						text-align: center;
						font-weight: 400;
						border: 2rpx solid #8DADF0;
						border-radius: 4rpx;
						padding: 6rpx;
						margin-left: 40rpx;
					}

					.tiping {
						font-family: HarmonyOS_Sans_SC;
						font-size: 20rpx;
						color: #DCB77C;
						letter-spacing: 0;
						text-align: center;
						font-weight: 400;
						border: 2rpx solid #DCB77C;
						border-radius: 4rpx;
						padding: 6rpx;
						margin-left: 40rpx;
					}
				}

			}

			.guanli {
				font-family: HarmonyOS_Sans_SC;
				font-size: 28rpx;
				color: #666666;
				letter-spacing: 0;
				font-weight: 400;
				padding-top: 20rpx;
			}

			.dateBox {
				display: flex;
				padding-top: 20rpx;
				justify-content: space-between;

				.dateText {
					font-family: HarmonyOS_Sans_SC;
					font-size: 24rpx;
					color: #999999;
					letter-spacing: 0;
					font-weight: 400;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.date {
					min-width: 240rpx;
					font-family: HarmonyOS_Sans_SC;
					font-size: 24rpx;
					color: rgba(40, 99, 219, 0.58);
					letter-spacing: 0;
					font-weight: 400;
				}
			}
		}
	}

	/deep/ .van-search__content {
		background: #fff;
	}

	/deep/ .van-tabs__scroll {
		background-color: rgba(255, 255, 255, 0);
	}

	/deep/ .van-hairline--top-bottom:after {
		border-width: 0rpx 0;
	}

	/deep/ .van-tabs__content {
		flex: 1;
		overflow: auto;
		height: 75vh;
	}
</style>
