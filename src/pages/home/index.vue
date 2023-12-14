<template>
  <div>
    <div class="wrap">
      <div class="hd">
        <span>图片</span>
        <text>AI文字生成器</text>
      </div>
      <div class="bd flex flex-col">
        <div class="main_content">
          <div class="bhd">
            <text>工作学习</text>
          </div>
          <div class="content justify-center flex flex-wrap border-rd-20">
            <div class="item flex justify-center flex-wrap" v-for="(item, index) in workList" :key="index">
              <div class="img" @click="preview(item)">
                <image style="width: 70rpx; height: 70rpx" mode="scaleToFill" :src="item.icon" alt="" />
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 日常生活 -->
        <div class="main_content">
          <div class="bhd">
            <text>日常生活</text>
          </div>
          <div class="content justify-center flex flex-wrap border-rd-20">
            <div class="item flex justify-center flex-wrap" v-for="(item, index) in commonLifeList" :key="index">
              <div class="img" @click="preview(item)">
                <image style="width: 70rpx; height: 70rpx" mode="scaleToFill" :src="item.icon" alt="" />
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 搞笑娱乐 -->
        <div class="main_content">
          <div class="bhd">
            <text>搞笑娱乐</text>
          </div>
          <div class="content justify-center flex flex-wrap border-rd-20">
            <div class="item flex justify-center flex-wrap" v-for="(item, index) in jokerList" :key="index">
              <div class="img" @click="preview(item)">
                <image style="width: 70rpx; height: 70rpx" mode="scaleToFill" :src="item.icon" alt="" />
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ft pa-60 text-center" style="font-size: 25rpx; color: #333">
        <!-- <text>我也是有底线的</text> -->
        <u-divider text="我也是有底线的" :dashed="true"></u-divider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { forward } from '@/utils/router'
  const workList = [
    { id: 1, name: '小红书', icon: '../../static/logo.png' },
    { id: 2, name: '高考志愿', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
    { id: 4, name: '小红书4', icon: '../../static/logo.png' },
    { id: 5, name: '小红书5', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
    { id: 4, name: '小红书4', icon: '../../static/logo.png' },
    { id: 5, name: '小红书5', icon: '../../static/logo.png' },
    { id: 5, name: '小红书5', icon: '../../static/logo.png' },
  ]
  const commonLifeList = [
    { id: 1, name: '小红书', icon: '../../static/logo.png' },
    { id: 2, name: '小红书2', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
    { id: 4, name: '小红书4', icon: '../../static/logo.png' },
    { id: 5, name: '小红书5', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
  ]
  const jokerList = [
    { id: 1, name: '小红书', icon: '../../static/logo.png' },
    { id: 2, name: '小红书2', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
    { id: 4, name: '小红书4', icon: '../../static/logo.png' },
    { id: 5, name: '小红书5', icon: '../../static/logo.png' },
    { id: 3, name: '小红书3', icon: '../../static/logo.png' },
  ]
  const preview = (item: any) => {
    console.log('xx', item.name)
    forward('detail', {
      name: item.name,
    })
  }
</script>

<style scoped lang="scss">
  :root page {
    background-color: #760c0c !important;
  }
  .wrap {
    margin: 18rpx;
    .hd {
      margin: 30rpx;
      font-weight: 500;
      font-size: 45rpx;
    }
    .bd {
      .bhd {
        position: relative;
        margin: 20rpx 30rpx;
        font-weight: 600;
        font-size: 40rpx;
        text {
          position: relative;
          width: 80%;
          letter-spacing: 2px;
        }
        text::before {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 4px;
          background-color: #2e80ec;
          text-align: center;
          content: '';
          transform: scaleX(1);
          transform-origin: bottom left;
          transition: transform 0.3s ease-in-out;
        }
      }
      .content {
        margin: 5rpx 30rpx;
        background-color: #fff;
        .item {
          align-items: center;
          margin: 10rpx;
          width: 28%;
          height: 180rpx;
          text-align: center;
          .img {
            width: 100%;
            height: 70rpx;
          }
        }
      }
    }
  }
</style>
