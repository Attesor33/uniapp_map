<template>
	<view class="Riversystem">
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
		<view class="gaowaBox">
			<view class="gaowabody">
				<view class="title">
					<view>基础信息</view>
					<van-icon name="arrow-down" />
				</view>
				<view class="gaowaCellBox">
					<view v-for="(item,index) in cellList" :key="item.key">
						<view class="cellItem">
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
					<view class="title">
						<view>问题清单</view>
						<van-icon name="arrow-down" />
					</view>
					<view @click="addQuestion" class="bottom" style="margin-bottom: 28rpx;">

						<view v-for="(item,index) in problemList" :key="item.id">
							<view>
								<p class="titleHeader">{{item.header}}</p>
								<view v-for="(item1, index1) in item.list" :key="index1" class="selectBox">

									<label class="problemPieces">{{ item1.desc }}</label>
									<view class="listAnswer">
										<picker @change="bindPickerChange(item1,item.list,$event)" :value="item1.suoyin"
											:range="item1.check">
											<view class="pickerBox">
												<view class="choice">{{ item1.check[item1.suoyin] }}
													<van-icon class='icon' name="arrow" />
												</view>
											</view>
										</picker>
										<!-- <select style='margin-top: 20px;' name="" id="" value='是'>
											<option value="是">是</option>
											<option value="否">否</option>
										</select> -->
										
				
									</view>
									<view 
									v-show="item1.hasBtn && item1.btnCondition === item1.showBtn "
					                style="margin-top: 20px;margin-right: 30px;">
										<van-button style='width: 20px;height: 20px;margin-top: 10px;' size="mini" type="primary" @click='addInfo(item1,totalBasic,choice,getproState)'>主要按钮</van-button>
									</view>
									
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="bottomBtn" @click="preservation">保存</view>
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
				title: "11",
				totalBasic:{},
				cellList: [{
						label: '河段名称',
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
						label: '水行政主管部门',
						key: 'key4',
						value: ''
					},
					{
						label: '经度',
						key: 'key5',
						value: ''
					},
					{
						label: '纬度',
						key: 'key6',
						value: ''
					},
					{
						label: '联系人',
						key: 'key7',
						value: ''
					},
					{
						label: '联系方式',
						key: 'key8',
						value: ''
					}
				],
				problemList: [],
				tableData: [],
				// val:0,
				plaeseSelect: 0,
				radioState:'',
				imgList: [],
				choice:'',
				getproState:[]
			}
		},
		onLoad(option) {
			console.log(JSON.parse(option.title));
			this.totalBasic = JSON.parse(option.title);
			this.search();
		    this.refreshBasicInfo();
			this.getProInfo()
		},
		methods: {
			// 返回上一个页面
			back() {
				uni.navigateBack({
					url: '/pages/shukuducha/shukuducha'
				})
			},
			bianji() {
				console.log(111)
				this.disabled = false
			},
			quxiao() {
				this.disabled = true
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
				
			preservation(){
				let basicInfo = {
					uuid:this.totalBasic.obj_id,
					plan_id:this.totalBasic.plan_id,
					res_nm:this.totalBasic.nm,
					org_nm:this.totalBasic.org,
					res_ad:this.cellList[1].value,
					res_loc:this.cellList[2].value,
					cen_long:this.cellList[4].value,
					cen_lat:this.cellList[5].value,
					con_person:this.cellList[6].value,
					con_tel:this.cellList[7].value,
					filelist:this.imgList
				};
				
				util.request("inspfillin/saveBasicInfo_reach", "POST", basicInfo, false, false, false, true).then(res => {
					console.log(res);
					})
				this.disabled = true
			},
			bindPickerChange(v, i, e) {
				console.log(v, i, e);
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.choice = e.target.value
                console.log(this.choice)
				// this.plaeseSelect = this.answerList[e.detail.value].label;
				// this.answerList[e.detail.value].index = e.target.value;
				// this.answerList[v].index = e.target.value
				// console.log(this.plaeseSelect)
                  console.log('12121',this.problemList)
				//没有按钮的情况
				if(v.hasBtn == false || (v.trg_flag != v.check[this.choice])){
					let username = uni.getStorageSync('username')
					let word = ''
					if(this.choice == 0){
						word = '是';
					}
					if(this.choice == 1){
						word = '否';
					}
					let uplist = {
						chk_pro: v.type,
						chk_type:  v.type,
						dx: "",
						filelist: [],
						group_nm: username,
						insp_type: "河湖长制",
						obj_id: this.totalBasic.obj_id,
						plan_id: this.totalBasic.plan_id,
						pro_des: v.desc,
						pro_lv: word,
						pro_type: 1,
						rev_des: ''
					}
					util.request("inspfillin/upProlist", "POST", uplist, false, false, false, true).then(res => {
						console.log(res);
						});
					
				}
				
				this.problemList.forEach(n => {
					n.list.forEach(k => {
						if (k.desc == v.desc) {
							k.suoyin = e.detail.value
						}
						// console.log(k.suoyin)
						if(e.detail.value == 0){
							v.showBtn = true
							
						}
						if(e.detail.value == 1){
							v.showBtn = false
						}
						this.$forceUpdate();
					})
				
				});
				
			},
			//问题清单跳转页面
			addInfo(e,v,c,g){
				console.log(c)
				console.log('v',v)
				console.log(e);
				uni.navigateTo({
					url: '/pages/prolist/prolist?proObj='+JSON.stringify(e)+'&basciInfo='+JSON.stringify(v)+'&num='+c+'&getProInfo='+JSON.stringify(g)
				})
			},
			openModel(){
			},
			addQuestion() {

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
				
			refreshBasicInfo(){
				let obj = {
					obj_id: this.totalBasic.obj_id,
					plan_id: this.totalBasic.plan_id
				}
				util.request("inspfillin/getBasicInfo_reach", "Get", obj, false, false, false, true).then(res => {
					console.log(res);
					  this.cellList[0].value = res.data.res_nm;
					  this.cellList[1].value = res.data.res_ad;
					  this.cellList[2].value = res.data.res_loc;
					  this.cellList[3].value = res.data.org_nm;
					  this.cellList[4].value = res.data.cen_long;
					  this.cellList[5].value = res.data.cen_lat;
					  this.cellList[6].value = res.data.con_person;
					  this.cellList[7].value = res.data.con_tel; 
					  this.imgList = res.data.filelist
					})
			},
				
			getProInfo(){
				let id ={
					obj_id: this.totalBasic.obj_id,
					plan_id: this.totalBasic.plan_id,
					pro_type: 1,
					type: '河湖长制',
				}
				util.request("inspfillin/getProlist", "Get", id, false, false, false, true).then(res=>{
					console.log('getProInfo',res.data);
					this.getproState = res.data
					    res.data.forEach((item, index) => {
					        this.tableData.forEach((item1) => {
					          // console.log('33333333',item1)
					          item1.list.forEach((item2) => {
					            if (item2.desc == item.pro_des) {
					              //trg_flag 后台判断根据哪个按钮实现
					              //pro_lv 点击了哪个按钮
					              if (item.pro_lv == item2.trg_flag) {
					                if (item.pro_lv == "否") {
					                  item2.showBtn = false;
					                  item2.btnCondition = false;
									  item2.suoyin = 1
					                }
					                if (item.pro_lv == "是") {
					                  item2.showBtn = true;
					                  item2.btnCondition = true;
									  item2.suoyin = 0
					                }
					                console.log(item2.btnCondition);
					              }
					              if (item.pro_lv != item2.trg_flag) {
					                if (item.pro_lv == "否") {
					                  item2.showBtn = false;
					                  item2.btnCondition = true;
									  item2.suoyin = 1
					                }
					                if (item.pro_lv == "是") {
					                  item2.showBtn = true;
					                  item2.btnCondition = false;
									  item2.suoyin = 0
					                }
					              }
					              if (item2.trg_flag == "" && item.pro_lv == "否") {
					                item2.showBtn = false;
					                item.hasBtn = "";
					                item2.btnCondition = false;
					                item2.suoyin = 1
					                // if(item.pro_lv == '是'){
					                //        item2.showBtn = true
					                //         item2.btnCondition = true
					                // }
					              }
					              if (item2.trg_flag == "" && item.pro_lv == "是") {
					                item2.showBtn = true;
					                item.hasBtn = "";
					                item2.btnCondition = true;
					                 item2.suoyin = 0
					                // if(item.pro_lv == '是'){
					                //        item2.showBtn = true
					                //         item2.btnCondition = true
					                // }
					              }
					            }
					          });
					        });
					      });
					   
				})
			},
			search() {
				let id = {
					ins_type: '河湖长制'
				};
				util.request("inspfillin/getPro_des2", "Get", id, false, false, false, true).then(res => {
					console.log(res.data);
					this.tableData = res.data;
					this.tableData.forEach((item) => {
						item.list = item.list.map((v) => {
							return {
								...v,
								showBtn: "", //单选按钮选择
								hasBtn: v.trg_flag != "", //是否显示按钮
								btnCondition: v.trg_flag == "是", //按钮触发条件
							};
						});
					});
					// console.log(this.tableData)
					this.problemList = this.tableData;
					let checkArr = ['是', '否']
					let index = 0

					this.problemList.forEach(i => {
						i.list.forEach(e => {
							e.check = checkArr,
							e.suoyin = index
						})
					});
				})
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

		}
	}
</style>
