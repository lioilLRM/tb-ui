<template>
	<view>
		<h1>space-around布局/space-evenly布局</h1>
		<view class="flex-row">
			<view class="flex-item first">
				<view class="label ellipsis">诗词来源：很长的</view>
				<view class="ellipsis">A几处早莺争暖树，谁家新燕啄春泥白居易《钱塘湖春行》</view>
			</view>
			<view class="flex-item">B连天衰草，望断归来路——李清照《点绛唇·闺思》
			</view>
			<view class="flex-item">C罗幕轻寒，燕子双飞去——晏殊《蝶恋花·槛菊愁烟兰泣露》
			</view>
		</view>


		<view class="flex-row">
			<view class="flex-item ellipsis">A几处早莺争暖树，谁家新燕啄春泥——白居易《钱塘湖春行》
			</view>
			<view class="flex-item">B
			</view>
			<view class="flex-item">C
			</view>
		</view>
		
		<view class="flex-row">
			<view class="flex-item first">
				<view class="ellipsis">
					A几处早莺争暖树，谁家新燕啄春泥——白居易《钱塘湖春行》
					几处早莺争暖树，谁家新燕啄春泥——白居易《钱塘湖春行》几处早莺争暖树，谁家新燕啄春泥——白居易《钱塘湖春行》几处早莺争暖树，谁家新燕啄春泥——白居易《钱塘湖春行》
				</view>
			</view>
			<view class="flex-item">B
			</view>
			<view class="flex-item flex-item3">C
			</view>
		</view>
		
		<view class="flex-row">
			<view class="flex-item ellipsis">A
			</view>
			<view class="flex-item">B
			</view>
			<view class="flex-item flex-item3">C
			</view>
		</view>
		
		<view class="flew-row">
			<view class="label">用户需求：</view>
			<view class="text-limit2">握手西风泪不干，年来多在别离间——纳兰性德《于中好·送梁汾南还为题小影》
</view>
		</view>
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
	// 	justify-content:flex-start;
	// align-items: 
	.flex-row {
		display: flex;
		background-color: cadetblue;
		// padding: 20rpx;
		// justify-content: flex-start;
		align-items: baseline;
		margin-top: 20rpx;
		height: 100rpx;
	}

	.flex-item {
		flex: 1;
		// width: 100rpx;
		// flex-basis: 200rpx;
		background-color: bisque;
		padding: 20rpx 30rpx;
		// min-width: 210rpx;
		// overflow: hidden;
	}
	.first{
		display: flex;
		min-width: 0;
	}
	.label {
		width: 200rpx;
	}
	.flex-item3 {
		// align-self: flex-end;
		// margin-left: auto;
		flex-grow: 1;
	}

	.ellipsis {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
