<template>
	<view class="box">
		<navBar :title="title">
			<template #left>
				<van-icon @click="back" name="arrow-left" color="#FFFFFF" />
			</template>

		</navBar>
		<view class="gaowaBox">
			<view class="gaowabody">
				<view class="gaowaCellBox">
					<view v-for="(item,index) in cellList" :key="item.key">
						<view v-if="['key1'].includes(item.key)">
							<view class="cellItem">
								<label>{{item.label}}</label>
								<picker @change="firstChange($event,item,cellList)" :value="item.selectIndex"
									:range="item.list" :disabled="isEdit">
									<view class="pickerBox">
										<view>{{item.value}}</view>
										<van-icon name="arrow" />
									</view>
								</picker>
							</view>
						</view>
						<view v-else-if="['key2'].includes(item.key)">
							<view class="cellItem">
								<label>{{item.label}}</label>
								<picker @change="secondChange($event,item,cellList)" :value="item.selectIndex"
									:range="item.list" :disabled="isEdit">
									<view class="pickerBox">
										<view>{{item.value}}</view>
										<van-icon name="arrow" />
									</view>
								</picker>
							</view>
						</view>

						<view v-else-if="['key3'].includes(item.key)">
							<view class="cellItem">
								<label>{{item.label}}</label>
								<picker @change="thirdChange($event,item,cellList)" :value="item.selectIndex"
									:range="item.list" :disabled="isEdit">
									<view class="pickerBox">
										<view>
											请选择
										</view>
										<van-icon name="arrow" />
									</view>
								</picker>
							</view>
							<view class="otherCell" style="font-size: 28rpx;">
								<textarea maxlength="500" :value="item.value" placeholder="请输入" :disabled="isEdit" />
							</view>
						</view>
						<view class="cellItem" v-else-if="['key4'].includes(item.key)">
							<label>{{item.label}}</label>
							<input class="cellInput" type="text" v-model="item.value" disabled>
						</view>
						<view v-else-if="['key5'].includes(item.key)">
							<view class="otherCell">{{item.label}}</view>
							<view class="otherCell" style="font-size: 28rpx;">
								<textarea maxlength="500" v-model="item.value" :disabled="isEdit" placeholder="请输入" />
							</view>
						</view>
						<view class="cellItem" v-else-if="!['key7','key8'].includes(item.key)">
							<label>{{item.label}}</label>
							<input class="cellInput" type="text" v-model="item.value" placeholder="请输入"
								:disabled="isEdit">
						</view>


					</view>
					<view class="uploadBox">
						<view class="imgTitle">附件上传</view>
						<view class="shangchuan">
							<view class="sc2" v-for="(item, index) in imgList" :key="index">
								<image class="del" @click="del(index)" mode="" src="../../static/images/del.png">
								</image>
								<image class="Img3" :src="baseUrl+item.filepath" mode="" @click="fangda(item,index)">
								</image>
							</view>
							<view class="sc2" @click="upload">
								<image class="sc3" mode="" src="../../static/images/shangchuan.png"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottomBtn" @click="add">添加</view>
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
				baseUrl: 'http://120.27.235.15:8087/ershi_api',
				title: "问题清单",
				isEdit: false,
				imgList: [],
				cellList: [{
						label: '问题类别',
						key: 'key1',
						value: '请选择',
						list: [],
						selectIndex: 0
					},
					{
						label: '检查项目',
						key: 'key2',
						value: '请选择',
						list: [],
						selectIndex: 0
					},
					{
						label: '问题描述',
						key: 'key3',
						value: '',
						list: [],
						selectIndex: 0
					},
					{
						label: '严重等级',
						key: 'key4',
						value: ''
					},
					{
						label: '详情描述',
						key: 'key5',
						value: ''
					},
					{
						label: '上报人',
						key: 'key7',
						value: ''
					},
					{
						label: '上报时间',
						key: 'key8',
						value: ''
					},
				],
				proLv: [],
				weiyi: [],
				number: 0
			}
		},
		onLoad(option) {
			this.number = option.number
			this.weiyi = JSON.parse(option.title)
			this.search()
		},
		methods: {
			back() {
				let pages = getCurrentPages(); //获取小程序页面栈
				let beforePage = pages[pages.length - 2]; //获取上个页面的实例对象
				beforePage.search(); //触发上个页面自定义的go_update方法
				uni.navigateBack({ //返回上一页  
					delta: 1
				})
			},
			// 选择器
			handleChange(e, target, arr) {
				arr.forEach((item) => {
					if (item.key === target.key) {
						item.selectIndex = e.detail.value
					}
				})
			},

			// 问题类别下拉选项
			firstChange(e, target, arr) {
				arr.forEach((item) => {
					if (item.key === target.key) {
						item.selectIndex = e.detail.value
						item.value = item.list[item.selectIndex]
						// this.information.dam_type_str = item.list[item.selectIndex]
						let data = {
							type: "jcxm",
							pnm: item.value,
							ins_type: "小型水库",
						}
						util.request("inspfillin/getPro_des", "Get", data, false, false, false, true).then(res => {
							// console.log(res)
							this.cellList[1].list = []
							res.data.forEach(e => {
								this.cellList[1].list.push(e.nm)
							})
						})
					}
				})


			},
			// 问题类别下拉选项
			secondChange(e, target, arr) {
				arr.forEach((item) => {
					if (item.key === target.key) {
						item.selectIndex = e.detail.value
						item.value = item.list[item.selectIndex]
						// this.information.dam_type_str = item.list[item.selectIndex]
						let data = {
							type: "wtms",
							pnm: item.value,
							ins_type: "小型水库",
						}
						util.request("inspfillin/getPro_des", "Get", data, false, false, false, true).then(res => {
							console.log(res)
							this.proLv = res.data
							this.cellList[2].list = []
							res.data.forEach(e => {
								this.cellList[2].list.push(e.nm)
							})
						})
					}
				})
			},
			// 问题类别下拉选项
			thirdChange(e, target, arr) {
				arr.forEach((item) => {
					if (item.key === target.key) {
						item.selectIndex = e.detail.value
						item.value = item.list[item.selectIndex]
						// this.information.dam_type_str = item.list[item.selectIndex]
						this.proLv.forEach(e => {
							if (e.nm == item.value) {
								this.cellList[3].value = e.pro_lv
							}
						})
					}
				})
			},
			// 第一个下拉框数据
			search() {
				let data = {
					type: "wtlb",
					ins_type: "小型水库",
				}
				util.request("inspfillin/getPro_des", "Get", data, false, false, false, true).then(res => {
					// console.log(res)
					this.cellList[0].list = []
					res.data.forEach(e => {
						this.cellList[0].list.push(e.nm)
					})
				})
			},
			// 添加数据
			add() {
				let username = uni.getStorageSync('username')
				let prolistData = {
					plan_id: this.weiyi.plan_id,
					obj_id: this.weiyi.obj_id,
					insp_type: "小型水库",
					chk_type: this.cellList[0].value,
					chk_pro: this.cellList[1].value,
					pro_des: this.cellList[2].value,
					group_nm: username,
					pro_lv: this.cellList[3].value,
					rev_des: this.cellList[4].value,
					pro_type: this.number,
					filelist: this.imgList,
				};
				util.request("inspfillin/upProlist", "POST", prolistData, false, false, false, true).then(res => {
					uni.showToast({
						duration: 1000,
					});
					let pages = getCurrentPages().pop(); //获取小程序页面栈
					let beforePage = pages[pages.length - 2]; //获取上个页面的实例对象
					beforePage.search(); //触发上个页面自定义的go_update方法
					uni.navigateBack({ //返回上一页  
						delta: 1
					})
				})
				
			},
			// 点击上传图片
			upload() {
				if (this.disabled == true) {
					return
				} else {
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						loop: true,
						success: res => {
							console.log(res);
							var tempFilePaths = res.tempFilePaths;
							uni.uploadFile({
								url: this.baseUrl + '/common/upload',
								filePath: tempFilePaths[0],
								name: 'file',
								header: {
									'Authorization': uni.getStorageSync('x-access-token'),
								},
								success: uploadFileRes => {
									// console.log('上传图片', JSON.parse(uploadFileRes.data));
									if (res.tempFilePaths.length != 0) {
										this.imgList.push({
											filepath: JSON.parse(uploadFileRes.data)
												.fileName,
											filename: res.tempFiles[0].path,
											ext: res.tempFiles[0].path.substring(
												res.tempFiles[0].path.lastIndexOf(
													".") + 1
											),
											filesize: Math.round(res.tempFiles[0].size /
												1024)
										})
									}
									// console.log(this.imgList)
								},
								fail(err) {
									// console.log(err);
								}
							});
						}
					});
				}

			},

			// 删除图片
			del(index) {
				this.imgList.splice(index, 1);
			},
			// 图片放大
			fangda(item, index) {

				let arr = []
				this.imgList.forEach(i => {
					arr.push(this.baseUrl + i.filepath)
				})

				uni.previewImage({
					current: index, //预览图片的下标
					urls: arr, //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				})
			},

		}
	}
</script>

<style lang="less" scoped>
	.box {
		display: flex;
		flex-direction: column;
		height: 100vh;

		.gaowaBox {
			flex: 1;
			overflow: auto;

			.gaowabody {

				// flex:1;
				// overflow: auto;
				.gaowaCellBox {
					.cellItem {
						display: flex;
						justify-content: space-between;
						font-family: HarmonyOS_Sans_SC;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						font-weight: 400;
						background: #FFFFFF;
						padding: 0rpx 20rpx 0rpx 20rpx;
						border-bottom: 2rpx solid #EBEBEB;
						height: 96rpx;
						line-height: 96rpx;

						.cellInput {
							height: 100%;
							text-align: right;
						}

						.pickerBox {
							display: flex;
						}

						.left {}

						.right {}
					}

					.otherCell {
						font-family: HarmonyOS_Sans_SC;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						font-weight: 400;
						background: #FFFFFF;
						padding: 32rpx 20rpx 32rpx 20rpx;
						border-bottom: 2rpx solid #EBEBEB;
						line-height: 1;
					}

					.otherText {
						font-family: HarmonyOS_Sans_SC;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						font-weight: 400;
						background: #FFFFFF;
						padding: 32rpx 20rpx 32rpx 20rpx;
						border-bottom: 2rpx solid #EBEBEB;
					}

					.uploadBox {
						padding: 0rpx 20rpx 20rpx 20rpx;
						background: #FFFFFF;
						border-bottom: 2rpx solid #EBEBEB;

						.imgTitle {
							font-family: HarmonyOS_Sans_SC;
							font-size: 32rpx;
							color: #333333;
							letter-spacing: 0;
							font-weight: 400;
							padding: 26rpx 0rpx 26rpx 0rpx;
						}

						.imgBox {
							display: grid;
							grid-template-columns: repeat(5, 124rpx);
							grid-gap: 20rpx;

							.imgcell {
								height: 124rpx;

								.img {
									width: 100%;
									height: 100%;
								}
							}

						}
					}
				}

				.bottom {
					height: 80rpx;
					background: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 44rpx;

					.bottomImg {
						width: 60rpx;
						height: 9rpx;
					}

					.addText {
						font-family: HarmonyOS_Sans_SC;
						font-size: 28rpx;
						color: #2863DB;
						letter-spacing: 0;
						text-align: right;
						font-weight: 400;
					}
				}
			}
		}

		.bottomBtn {
			height: 90rpx;
			background: #2862DB;
			border: 2rpx solid #979797;
			font-family: HarmonyOS_Sans_SC;
			font-size: 32rpx;
			color: #FFFFFF;
			letter-spacing: 0;
			font-weight: 400;
			text-align: center;
			line-height: 90rpx;
		}
	}

	page {
		padding: 0;
	}

	/deep/ uni-textarea {
		width: 100%;
	}

	.van-swipe-cell__right {
		display: inline-block;
		width: 130rpx;
		height: 88rpx;
		font-size: 30rpx;
		line-height: 88rpx;
		color: #fff;
		text-align: center;
		background-color: #C23B3B;
	}

	.shangchuan {
		width: 90%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.sc2 {
			width: 180rpx;
			height: 180rpx;
			border-radius: 10rpx;
			background-color: #FFFFFF;
			text-align: center;
			line-height: 240rpx;
			margin: 10rpx;
			position: relative;
			border: 1px solid #ccc;
			// background-color: #4CD964;
		}

		.Img3 {
			// margin-top: 10px;
			width: 180rpx;
			height: 180rpx;
		}

		.del {
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			z-index: 1000;
			top: -6px;
			right: -6px;
		}

		.sc3 {
			width: 80rpx;
			height: 80rpx;
		}
	}
</style>
