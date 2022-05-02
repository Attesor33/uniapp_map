<template>
	<view class="uPImg">
		<view class="Img">上传照片 :</view>
		<!-- 上传图片 -->
		<view class="shangchuan">
			<view class="sc2" v-for="(item, index) in imgList" :key="index">
				<image class="del" @click="del(index)" mode=""></image>
				<image class="Img3" :src="item" mode=""></image>
			</view>
			<view class="sc2"  @click="upload">
				<image class="sc3" mode=""></image>
			</view>
		</view>
	</view>

</template>

<script>
	import Dialog from '../../wxcomponents/vant/dialog/dialog';
	export default {
		data() {
			return {
				imgList: [],
				checked2: true,
			};
		},
		methods: {

			// 点击上传图片
			upload() {
				uni.chooseImage({
					count: 3, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					loop: true,
					success: res => {
						console.log(res);
						if (res.tempFilePaths.length != 0) {
							this.imgList.push(res.tempFilePaths[0]);
						}
						console.log(JSON.stringify(res.tempFilePaths));
						var tempFilePaths = res.tempFilePaths;

						console.log(tempFilePaths);
						console.log(tempFilePaths[0]);
						
						uni.uploadFile({
							url: 'http://120.27.235.15:8087/ershi_api/common/upload',
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								'Authorization': uni.getStorageSync('x-access-token'),
								// 'Authorization': 'multipart/form-data'

								// 不需要手动指定 multipart/form-data ，本 API 默认 multipart/form-data 
								// 手动指定需要计算 boundary 并拼接上 
							},
							success: uploadFileRes => {
								console.log('上传图片', JSON.parse(uploadFileRes.data));
							},
							fail(err) {
								console.log(err);
							}
						});
					}
				});
			},

			// 删除图片
			del(index) {
				this.imgList.splice(index, 1);
				console.log(this.imgList);
			}
		}
	};
</script>

<style lang="less">
	.shangchuan {
		width: 90%;
		height: 200rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;

		.sc2 {
			width: 30%;
			height: 90%;
			border-radius: 10rpx;
			background-color: #dadfef;
			text-align: center;
			line-height: 240rpx;
			margin: 0 10rpx;
			position: relative;
			// background-color: #4CD964;
		}

		.Img3 {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}

		.del {
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			z-index: 1000;
			top: 0rpx;
			right: 0;
		}

		.sc3 {
			width: 96rpx;
			height: 96rpx;
			border-radius: 10rpx;
		}


	}
</style>
