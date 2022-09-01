<template>
	<view>
		TODO:
		<view class=""> 1. label+value：value 一行超出省略 </view>
		<view class=""> 2. label+value: value 指定行超出省略 </view>
		<view class=""> 3. cell </view>
		<view class=""> 4. form </view>
		<view class=""> 5. </view>
		<h2>默认</h2>
		<view class="flex-row">
			<view class="label">用户需求：</view>
			<view class="value">细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》
			</view>
		</view>
		
		<h2>一行超出省略：</h2>
		<view class="flex-row">
			<view class="label">凋零的叶：</view>
			<view class="value">
				<view class="text-ellipsis1">细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》</view>
			</view>
		</view>
		<h2>一行超出省略+靠右+箭头：</h2>
		<view class="flex-row">
			<view class="label">凋零的叶：</view>
			<view class="value">
				<view class="value-wrap">
						<!-- <img class="img" style="width: 24rpx; height: 20rpx" src="@/static/logo.png" alt=""> -->
						<view class="text-ellipsis1">细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》</view>
						
						<img class="img" style="width: 24rpx; height: 20rpx" src="@/static/arrowRight.png" alt="">
				</view>
				
			</view>
		</view>
		
		<h2>多行超出省略+靠右+箭头：</h2>
		<view class="flex-row">
			<view class="label">凋零的叶：</view>
			<view class="value">
				<view class="value-wrap">
						<img class="img" style="width: 24rpx; height: 20rpx" src="@/static/logo.png" alt="">
						<view class="text-limit2">
							细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》
							天生我材必有用，千金散尽还复来——李白《将进酒》
						</view>
						<view class="arrow">></view>
						<img class="img" style="width: 24rpx; height: 20rpx" src="@/static/logo.png" alt="">
				</view>
				
			</view>
		</view>
		
		<h2>指定行超出省略：</h2>
		<view class="flex-row">
			<view class="label">灰濛的天：</view>
			<view class="value">
				<view class="text-limit2">
					细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》
					天生我材必有用，千金散尽还复来——李白《将进酒》
					碧窗斜月蔼深晖，愁听寒螀泪湿衣——张仲素《秋闺思二首》
					两水夹明镜，双桥落彩虹——李白《秋登宣城谢脁北楼》

				</view>
			</view>
		</view>
		
		<view class="flex-row">
			<view class="label">用户需求：</view>
			<view class="value">细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》
			</view>
		</view>
		
		<cc-cell title="单元格" value="细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》细雨春芜上林苑，颓垣夜月洛阳宫——陆游《书愤五首·其二》"></cc-cell>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.flex-row{
	display: flex;
	background-color: antiquewhite;
	padding: 20rpx;
	font-size: 28rpx;
	margin-top: 20rpx;
}

.text-ellipsis1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
.label {
	min-width: 160rpx;
}
.value {
	display: flex;
	flex: 1;
	min-width: 0;
}

.value-wrap{
	display: flex;
	flex: 1;
	min-width: 0;
	justify-content: flex-end;
	align-items: center;
}
</style>
