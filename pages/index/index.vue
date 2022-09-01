<template>
	<view class="content">
    
	<button v-for="(page, index) in pages" @click="navTo(page.url)">{{page.name}}</button>
	

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				show1: false,
				pages: [
					{name: 'toTime-line', url: '/pages/flexTest/flexTest'},
					{name: 'toForm', url: '/pages/flex/flex'},
					{name: 'toUviewForm', url: '/pages/index/time-line/time-line'},
					{name: 'toflex', url: '/pages/index/form'},
					{name: 'toflexBox', url: '/pages/form/form'},
					{name: 'cell', url: '/pages/cell/cell'},
				]
			}
		},
		onLoad() {},
		methods: {
			open1() {
				this.show1 = true
			},
			navTo(url) {
				uni.navigateTo({
					url
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #ffffff;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.card {
		box-sizing: border-box;
		margin: 20rpx;
		background-color: #f8f8f8;
		.cc-cell{
			background-color: #f8f8f8;
		}
	}
	
	.row-box {
		margin: 20rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		background-color: #bcadf8;
		height: 100%;
		
		.label {
			display: flex;
			align-content: flex-start;
			
		}
		.text-box{
			display: flex;
			flex: 1;
		}
		.text{
			min-width: 0;
		}
		
	}

	
.flex-row{
    display:flex;
    // border: 1px solid red;
		background-color: #bcadf8;
		justify-content: space-between;
		padding: 20rpx;
    
}
.img{
	width: 30px;
	height: 30px;
	background-color: red;
}
.label-box{
	width: 120rpx;
}
.flex1 {
	flex: 1;
	display: flex;
	justify-content: flex-end;
	background-color: pink;
}
	

// .overhide{
// 	text-overflow: ellipsis;
// 	overflow: hidden;
// 	white-space: nowrap;
// }
</style>
