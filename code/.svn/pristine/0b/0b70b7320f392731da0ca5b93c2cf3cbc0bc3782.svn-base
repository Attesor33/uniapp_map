<template>
	<view class="Riversystem">
		<navBar :title="title">

		</navBar>
		<view class="gaowaBox">
			<view class="gaowabody">
				<view class="gaowaCellBox">
					<view>
						<view class="cellItem">
							<label>问题类别</label>
							<input class="cellInput" type="text" id="tt" v-model="value1" 
								disabled>
						</view>
						<view class="cellItem">
							<label>检查项目</label>
							<input class="cellInput" type="text" v-model="value2" 
								disabled>
						</view>
						<view class="cellItem">
							<label>问题描述</label>
							<input class="cellInput" type="text" v-model="value3" 
								>
						</view>
						<view class="cellItem">
							<label>详情描述</label>
							<input class="cellInput" type="text" v-model="value4" placeholder="请输入">
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
			</view>
		</view>
		<view class="bottomBtn" @click="submit()">保存</view>
	</view>

	</view>
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
				baseUrl: 'http://120.27.235.15:8087/ershi_api',
				disabled: true,
				title: "地下水监测井问题编辑",
				totalBasic: {},
				value1: '',
				value2: '',
				value3: '',
				value4: "",
				problemList: [],
				tableData: [],
				// val:0,
				plaeseSelect: 0,
				radioState: '',
				imgList: [],
				tt: [],
				basicInfo:{},
				choice:''
			}
		},
		onLoad(option) {
			// console.log('12121', JSON.parse(option.proObj),JSON.parse(option.basciInfo));
			this.tt = JSON.parse(option.proObj);
			this.basicInfo = JSON.parse(option.basciInfo);
			this.choice = option.num;
			this.getproInfo = JSON.parse(option.getProInfo);
			console.log('yy',this.choice)
			console.log('this.getproInfo',this.getproInfo)
            this.search();
			this.upState()
			this.value1 = this.tt.type;
			this.value2 = this.tt.type;
			this.value3 = this.tt.desc
		},
		methods: {
			// 返回上一个页面
			back() {
				uni.navigateBack({
					url: '/pages/shukuducha/shukuducha'
				})
			},
				
			upState(){
				console.log('this.getproInfo',this.getproInfo);
				this.getproInfo.forEach(i=>{
					if(i.pro_des == this.tt.desc){
						// this.value1 = this.getproInfo.chk_pro
						// this.value2 = this.getproInfo.chk_pro
						// this.value3 = this.getproInfo.pro_des
						console.log(i.rev_des)
						this.value4 = i.rev_des
						this.imgList = i.filelist
					}
				})
				
			},
			submit(){
				let username = uni.getStorageSync('username')
				let word = ''
				if(this.choice == 0){
					word = '是';
				}
				if(this.choice == 1){
					word = '否';
				}
				let uplist = {
					chk_pro: this.value1,
					chk_type:  this.value1,
					dx: "",
					filelist: this.imgList,
					group_nm: username,
					insp_type: "地下水超采",
					obj_id: this.basicInfo.obj_id,
					plan_id: this.basicInfo.plan_id,
					pro_des: this.value3,
					pro_lv: word,
					pro_type: 1,
					rev_des: this.value4
				}
				console.log('yok',uplist);
				uni.navigateTo({
					url: '/pages/groundJcadd/groundJcadd?jczproList=' + JSON.stringify(uplist)
				})
				// util.request("inspfillin/upProlist", "POST", uplist, false, false, false, true).then(res => {
				// 	console.log(res);
				// 	})
			},
			// 点击上传图片
			upload() {
				
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
			search(){
				// console.log(document.getElementById('tt'))
				
			}
		}
	}
</script>

<style lang="less" scope>
	.Riversystem {
		display: flex;
		flex-direction: column;
		height: 100vh;

		.gaowaBox {
			flex: 1;
			overflow: auto;

			.gaowabody {
				flex: 1;
				overflow: auto;

				.title {
					display: flex;
					justify-content: space-between;
					font-family: HarmonyOS_Sans_SC_Medium;
					font-size: 32rpx;
					color: #333333;
					letter-spacing: 0;
					font-weight: 500;
					padding: 20rpx;
				}

				.gaowaCellBox {
					.listAnswer {
						width: 60px;
						display: flex;
					}

					/deep/.van-icon-arrow:before {
						content: "\F00A";
						top: -14px;
						position: absolute;
					}

					.selectBox {
						display: flex;
						justify-content: space-between;
					}

					.titleHeader {
						font-size: 16px;
						font-weight: 800;
						color: black;
						margin-left: 8px
					}

					.choice {
						margin-top: 18px;
						margin-left: -10px;
					}

					.problemPieces {
						width: 270px;
						height: 19px;
						font-family: HarmonyOS_Sans_SC;
						font-size: 14px;
						color: #454545;
						font-weight: 400;
						margin-top: 20px;
						margin-left: 8px
					}

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
							width: 60px;
							display: flex;
							// position: relative;
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

				.bottom {
					// height: 800rpx;
					height: 100%;
					background: #FFFFFF;
					// display: flex;
					// align-items: center;
					// justify-content: center;
					margin-bottom: 44rpx;

					.bottomImg {
						width: 60rpx;
						height: 18rpx;
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

