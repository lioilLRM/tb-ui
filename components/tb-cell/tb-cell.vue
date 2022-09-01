<template>
  <view class="tb-cell">
    <view>
      <view class="tb-cell-title">
        <view class="img-box">图标</view>
        <text class="tb-cell-label">标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签</text>
      </view>
    </view>

    <view class="tb-cell-rigth">
      <view class="tb-cell-rigth-wrap">
        <text class="tb-cell-value text-limit1">右边的文字右边的的文字右边的文字右边的的文字</text>
        <view class="tb-cell-right-icon">></view>
      </view>
      
    </view>
  </view>
</template>

<script>
export default {
  name: 'tb-cell',

}
</script>

<style lang="scss">
.tb-cell {
  position:relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 20rpx 30rpx;
  overflow: hidden;
  font-size: 14px;
  color: #232323;
	&-border::after {
		
	}

  &-title,&-rigth{
    flex: 1;
  }

  &-title {
    display: flex;
    align-items: center;
  }

  &-rigth {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    overflow: hidden;
    color: #909090;
    text-align: right;
    word-wrap: break-word;

    &-wrap{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: left;
      width: 100%;
    }
  }


  &-value {
    
  }
	
	
  
}

</style>