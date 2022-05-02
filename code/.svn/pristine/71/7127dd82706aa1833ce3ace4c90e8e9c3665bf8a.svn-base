<template>
	<view>
		<view class="Smallreservoir">
			<navBar :title="title">
				<template #left>
					<van-icon @click="back" name="arrow-left" color="#FFFFFF" />
				</template>
				<template #right v-if="!disabled">
					<view @click="quxiao">
						取消
					</view>
				</template>
				<template #right v-else>
					<view @click="bianji">
						编辑
					</view>
				</template>
			</navBar>
			<uni-collapse>
				<uni-collapse-item title="基础信息" :open="true">
					<view class="gaowaCellBox">
						<view v-for="(item,index) in cellList" :key="item.key">

							<view v-if="['key5'].includes(item.key)" class="cellItem">
								<label>{{item.label}}</label>
								<picker mode="date" :value="item.value" :start="startDate" :end="endDate"
									@change="handleChange($event,item,cellList)" :disabled="disabled">
									<view class="pickerBox">
										<view>{{item.value}}</view>
									</view>
								</picker>
							</view>
							<view class="cellItem" v-else-if="['key1'].includes(item.key)">
								<label>{{item.label}}</label>
								<input class="cellInput" type="text" v-model="item.value" placeholder="请输入"
									disabled>
							</view>
							<view class="cellItem" v-else-if="item.key=='key4'">
								<label>{{item.label}}</label>
								<input class="cellInput" type="text" v-model="item.value" placeholder="请输入" disabled>
							</view>
							<view class="cellItem" v-else>
								<label>{{item.label}}</label>
								<input class="cellInput" type="text" v-model="item.value" placeholder="请输入"
									:disabled="disabled">
							</view>
						</view>
						<view class="uploadBox">
							<view class="imgTitle">附件上传</view>
							<view class="shangchuan">
								<view class="sc2" v-for="(item, index) in imgList" :key="index">
									<image class="del" @click="del(index)" mode="" src="../../static/images/del.png">
									</image>
									<image class="Img3" :src="baseUrl+item.filepath" mode=""
										@click="fangda(item,index)">
									</image>
								</view>
								<view class="sc2" @click="upload">
									<image class="sc3" mode="" src="../../static/images/shangchuan.png"></image>
								</view>
							</view>
						</view>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="检查情况">
					<view class="gaowaCellBox">
						<view v-for="(item,index) in checkList" :key="item.key">

							<view class="cellItem" v-if="['check2','check3'].includes(item.key)">
								<label>{{item.label}}</label>
								<picker @change="handleChange($event,item,checkList)" :value="item.selectIndex"
									:range="item.list" :disabled="disabled">
									<view class="pickerBox">
										<view>{{item.value}}</view>
										<van-icon name="arrow" />
									</view>
								</picker>
							</view>

							<view class="cellItem" v-else>
								<view class="left">{{item.label}}</view>
								<view class="right"><input type="text" v-model="item.value" placeholder="请输入"
										class="cellInput" :disabled="disabled"></view>
							</view>
						</view>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="问题清单">
					<view v-for="(item,index) in csListArrl" :key="index">
						<view :data-index="index" class="order-item" @touchstart="drawStart" @touchmove="drawMove"
							@touchend="drawEnd" :style="'right:'+item.right+'px'">
							<view class="content">{{item.chk_type}}</view>
							<view style="display: flex;" @click="chakan(item)">
								<view class="chakan">查看</view>
								<view style="line-height: 116rpx;">
									<img src="../../static/images/jiantouright.png" alt="" class="img">
								</view>

							</view>

							<view class="remove" @click="delData(item,index)">删 除</view>
						</view>
					</view>
					<view @click="addQuestion(1)" class="bottom" style="margin-bottom: 28rpx;">
						<image class="bottomImg" src="@/static/images/add.png" mode=""></image>
						<text class="addText">新增</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="问题整改复查情况">
					<view v-for="(item,index) in csListArrl1" :key="index">
						<view :data-index="index" class="order-item" @touchstart="drawStart1" @touchmove="drawMove1"
							@touchend="drawEnd1" :style="'right:'+item.right+'px'">
							<view class="content">{{item.chk_type}}</view>
							<view style="display: flex;" @click="chakan(item)">
								<view class="chakan">查看</view>
								<view style="line-height: 116rpx;">
									<img src="../../static/images/jiantouright.png" alt="" class="img">
								</view>

							</view>
							<view class="remove" @click="delData(item,index)">删 除</view>
						</view>
					</view>
					<view class="bottom" @click="addQuestion(0)">
						<image class="bottomImg" src="@/static/images/add.png" mode=""></image>
						<text class="addText">新增</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
			<view class="bottomBtn" @click="preservation">保存</view>
		</view>
	</view>

</template>

<script>
	import navBar from '@/components/navBar';
	import util from "../../common/request.js"
	export default {
		components: {
			navBar,
		},
		data() {
			return {
				baseUrl: 'http://120.27.235.15:8087/ershi_api',
				disabled: true,
				title: "11",
				tianBaoList: {},
				cellList: [{
						label: '水毁项目名称',
						key: 'key1',
						value: ''
					},
					{
						label: '行政区划',
						key: 'key2',
						value: ''
					},
					{
						label: '所在地点',
						key: 'key3',
						value: ''
					},
					{
						label: '管理机构',
						key: 'key4',
						value: ''
					},
					{
						label: '建成时间',
						key: 'key5',
						value: new Date().toLocaleDateString()
					},
					{
						label: '工程类型',
						key: 'key6',
						value: ''
					},
					{
						label: '经度',
						key: 'key7',
						value: ''
					},
					{
						label: '纬度',
						key: 'key8',
						value: '',
					}

				],
				checkList: [{
						label: '水毁情况',
						key: 'check1',
						value: ''
					},
					{
						label: '监督检查方式',
						key: 'check2',
						value: '请选择',
						list: ['现场暗访', '电话问询', '影像核实', '遥感远程分析', '其他'],
						selectIndex: 0
					},
					{
						label: '修复进度',
						key: 'check3',
						value: '请选择',
						list: ['已修复', '正修复', '正修复（未复工）', '未开工', '其他'],
						selectIndex: 0
					}


				],
				information: [],
				imgList: [],
				//左滑默认宽度
				delBtnWidth: 100,
				csListArrl: [],
				csListArrl1: [],
				checkDate: []
			}
		},
		computed: {
			// 时间选择器的开始结束
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(option) {
			// 问题清单数据

			// 展开基本信息数据
			this.tianBaoList = JSON.parse(option.title)
			this.title = this.tianBaoList.nm
			let id = {
				obj_id: this.tianBaoList.obj_id,
				plan_id: this.tianBaoList.plan_id,
			};
			util.request("inspfillin/getBasicInfo_ws_dam", "Get", id, false, false, false, true).then(res => {
				console.log(res.data)
				this.information = res.data

				if (this.information.comp_date == '') {
					this.cellList[4].value = new Date().toLocaleDateString()
				} else {
					this.cellList[0].value = this.information.res_nm
					this.cellList[1].value = this.information.res_ad
					this.cellList[2].value = this.information.res_loc
					this.cellList[3].value = this.information.org_nm
					this.cellList[4].value = this.information.comp_date
					this.cellList[5].value = this.information.project_type
					this.cellList[6].value = this.information.cen_long
					this.cellList[7].value = this.information.cen_lat
					this.imgList = res.data.filelist
				}

			})
			let objId = {
				obj_id: this.tianBaoList.obj_id,
				plan_id: this.tianBaoList.plan_id,
			}
			util.request("inspfillin/getChkInfo_ws_dam", "Get", objId, false, false, false, true).then(res => {
				console.log(res.data)
				this.checkDate = res.data
				if (this.checkDate.jdjcfs == "") {
					this.checkList[1].value = '请选择'
				}
				if (this.checkDate.xfjd == "") {
					this.checkList[2].value = '请选择'
				} else {
					// console.log(444)
					this.checkList[0].value = this.checkDate.shqk
					this.checkList[1].value = this.checkDate.jdjcfs
					this.checkList[2].value = this.checkDate.xfjd

				}
			})
		},
		onShow() {
			this.search()
		},
		methods: {
			// 返回上一个页面
			back() {
				let pages = getCurrentPages(); //获取小程序页面栈
				let beforePage = pages[pages.length - 2]; //获取上个页面的实例对象
				beforePage.search(); //触发上个页面自定义的go_update方法
				uni.navigateBack({ //返回上一页  
					delta: 1
				})
			},
			// 保存数据
			preservation() {

				let formList = {
					uuid: this.tianBaoList.obj_id,
					plan_id: this.tianBaoList.plan_id,
					res_nm: this.cellList[0].value,
					res_ad: this.cellList[1].value,
					res_loc: this.cellList[2].value,
					org_nm: this.cellList[3].value,
					comp_date: this.cellList[4].value,
					project_type: this.cellList[5].value,
					cen_long: this.cellList[6].value,
					cen_lat: this.cellList[7].value,
					filelist: this.imgList
				}
				console.log(formList)
				util.request("inspfillin/saveBasicInfo_ws_dam", "POST", formList, false, false, false, true).then(res => {

					this.disabled = true
				})
				let data = {
					shqk: this.checkList[0].value,
					jdjcfs: this.checkList[1].value,
					xfjd: this.checkList[2].value,
					obj_id: this.tianBaoList.obj_id,
					plan_id: this.tianBaoList.plan_id,
				}
				util.request("inspfillin/saveChkInfo_ws_dam", "Get", data, false, false, false, true).then(res => {
					uni.showToast({
						duration: 1000,
					});
					this.disabled = true
				})
			},
			// 时间选择器
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 选择器
			handleChange(e, target, arr) {
				console.log(e, target, arr)
				arr.forEach((item) => {
					if (item.key === target.key) {
						if (target.key === 'key5') {
							item.value = e.detail.value.replace(/\-/g, '/')
						} else if (target.key === 'check2') {
							item.selectIndex = e.detail.value
							item.value = item.list[item.selectIndex]
							this.information.dam_type_str = item.list[item.selectIndex]
						} else if (target.key === 'check3') {
							item.selectIndex = e.detail.value
							item.value = item.list[item.selectIndex]
							this.information.dam_type_str = item.list[item.selectIndex]
						}



					}
				})

			},
			// 编辑按钮
			bianji() {
				console.log(111)
				this.disabled = false
			},
			// 取消按钮
			quxiao() {
				this.disabled = true
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
							// console.log(res);
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
			//开始触摸滑动
			drawStart(e) {
				// console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				// console.log(e);
				for (var index in this.csListArrl) {
					this.$set(this.csListArrl[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.csListArrl[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnd(e) {
				// console.log("滑动结束");
				var item = this.csListArrl[e.currentTarget.dataset.index];

				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//开始触摸滑动
			drawStart1(e) {
				// console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove1(e) {
				// console.log(e);
				for (var index in this.csListArrl1) {
					this.$set(this.csListArrl1[index], 'right', 0);
				}
				var touch = e.touches[0];
				var item = this.csListArrl1[e.currentTarget.dataset.index];
				var disX = this.startX - touch.clientX;
				if (disX >= 20) {
					if (disX > this.delBtnWidth) {
						disX = this.delBtnWidth;
					}
					this.$set(this.csListArrl1[e.currentTarget.dataset.index], 'right', disX);
				} else {
					this.$set(this.csListArrl1[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//触摸滑动结束
			drawEnd1(e) {

				// console.log(e.currentTarget.dataset.index)
				var item = this.csListArrl1[e.currentTarget.dataset.index];
				// console.log(item.right);
				// console.log( this.delBtnWidth / 2)
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl1[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.csListArrl1[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delData(item, index) {
				// console.log(index)
				let that = this
				uni.showModal({
					title: '提示',
					content: "确定删除此信息吗？",
					success: function(res) {
						if (res.confirm) {
							let id = {
								uuid: item.uuid
							}
							util.request("inspfillin/delProlist", "Get", id, false, false, false, true)
								.then(
									res => {

										that.$nextTick(() => {
											that.csListArrl1[index].right = '0'

											that.search(); //触发上个页面自定义的go_update方法
										})

										console.log(that.csListArrl1[index])
									})

						} else if (res.cancel) {
							// console.log('用户点击取消');
						}
					}
				});
			},

			search() {
				let data = {
					obj_id: this.tianBaoList.obj_id,
					plan_id: this.tianBaoList.plan_id,
					type: "水毁工程",
					pro_type: 1,
				};
				util.request("inspfillin/getProlist", "Get", data, false, false, false, true).then(res => {
					// console.log(res.data)
					this.csListArrl = res.data
				})
				let data1 = {
					obj_id: this.tianBaoList.obj_id,
					plan_id: this.tianBaoList.plan_id,
					type: "水毁工程",
					pro_type: 0,
				};
				util.request("inspfillin/getProlist", "Get", data1, false, false, false, true).then(res => {
					// console.log(res.data)
					this.csListArrl1 = res.data
				})
			},
			addQuestion(number) {
				if (number == 1) {
					uni.navigateTo({
						url: '/pages/question/question1?title=' + JSON.stringify(this.tianBaoList) + '&number=' +
							number
					})
				} else if (number == 0) {
					uni.navigateTo({
						url: '/pages/question/question1?title=' + JSON.stringify(this.tianBaoList) + '&number=' +
							number
					})
				}

			},
			chakan(item) {
				uni.navigateTo({
					url: '/pages/seeandxiu/seeandxiu1?title=' + JSON.stringify(this.tianBaoList) + '&shuju=' +
						JSON
						.stringify(item)
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.Smallreservoir {
		display: flex;
		flex-direction: column;
		height: 100vh;

		/deep/ .uni-collapse {
			flex: 1;
			overflow: auto;

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
					border-bottom: 1rpx solid #EBEBEB;
					height: 96rpx;
					line-height: 96rpx;

					.cellInput {
						height: 100%;
						text-align: right;
					}

					.pickerBox {
						display: flex;
					}
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

			}
		}

		.order-item {
			width: 100%;
			height: 96rpx;
			line-height: 96rpx;
			display: flex;
			position: relative;
			background-color: #FFFFFF;
			justify-content: space-between;
			border-bottom: 1px solid #ebebeb;
			border-top: 1px solid #ebebeb;

			.content {
				margin-left: 15px;
				font-family: HarmonyOS_Sans_SC;
				font-size: 32rpx;
				color: #333333;
				letter-spacing: 0;
				font-weight: 400;
			}

			.chakan {
				font-family: HarmonyOS_Sans_SC;
				font-size: 32rpx;
				color: #2863DB;
				letter-spacing: 0;
				font-weight: 400;
			}

			.img {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10px;
			}
		}

		.remove {
			width: 100px;
			height: 100%;
			background-color: #c23b3b;
			color: white;
			position: absolute;
			top: 0;
			right: -100px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
		}

		.bottomImg {
			width: 10px;
			height: 10px;
		}

		.bottom {
			height: 80rpx;
			background: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 44rpx;
		}

		.addText {
			font-family: HarmonyOS_Sans_SC;
			font-size: 15px;
			color: #2863DB;
			letter-spacing: 0;
			text-align: right;
			font-weight: 400;
			margin-left: 5px;
		}

		.bottomBtn {
			height: 90rpx;
			background: #2862DB;
			border: 1rpx solid #979797;
			font-family: HarmonyOS_Sans_SC;
			font-size: 32rpx;
			color: #FFFFFF;
			letter-spacing: 0;
			font-weight: 400;
			text-align: center;
			line-height: 90rpx;
		}
	}
</style>
