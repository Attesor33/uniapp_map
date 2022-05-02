<template>
	<div class="app">
		<view v-for="(item,index) in csListArrl" :key="index">
			<view :data-index="index" class="order-item" @touchstart="drawStart" @touchmove="drawMove"
				@touchend="drawEnd" :style="'right:'+item.right+'px'">
				<view class="content">{{item.name}}</view>
				<view class="remove" @click="delData(item)">注 销</view>
			</view>
		</view>


	</div>
</template>

<script>
	import wrap from '@/components/wrap';
	import Toast from '../../wxcomponents/vant/toast/toast';
	export default {
		data() {
			return {
				//列表数据（根据自己的业务获取）
				csListArrl: [{
					name: '11111'
				}],
				//左滑默认宽度
				delBtnWidth: 100
			}
		},
		methods: {
			//开始触摸滑动
			drawStart(e) {
				console.log("开始触发");
				var touch = e.touches[0];
				this.startX = touch.clientX;
			},
			//触摸滑动
			drawMove(e) {
				console.log("滑动");
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
				console.log("滑动结束");
				var item = this.csListArrl[e.currentTarget.dataset.index];
				if (item.right >= this.delBtnWidth / 2) {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', this.delBtnWidth);
				} else {
					this.$set(this.csListArrl[e.currentTarget.dataset.index], 'right', 0);
				}
			},
			//删除方法
			delData(item) {
				console.log("删除")
				uni.showModal({
					title: '提示',
					content: "确认注销该人员？",
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}

		},
		components: {
			wrap,
		},
	};
</script>

<style>
	.order-item {
		width: 100%;
		height: 200px;
		display: flex;
		position: relative;
		background-color: blue;
	}

	.remove {
		width: 100px;
		height: 100%;
		background-color: red;
		color: white;
		position: absolute;
		top: 0;
		right: -100px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
	}
</style>
