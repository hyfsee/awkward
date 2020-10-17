<template>
<div>
<form action="/">
<van-search
    v-model="value"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"/>
</form>
<!--swipe轮播图-->
<van-swipe :autoplay="2000" :height="187">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image.url"/>
  </van-swipe-item>
</van-swipe>
<van-grid clickable :column-num="2">
  <van-grid-item icon="home-o" text="路由跳转" to="/"><van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /></van-grid-item>
  <van-grid-item icon="search" text="URL 跳转" url="/vant/mobile.html"><van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /></van-grid-item>
</van-grid>
</div> 
</template>
<script>
import { Toast } from 'vant'
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)
export default {
data() {
    return {
        images:[
        { url: require("../assets/a1.jpg") },
        { url: require("../assets/a2.jpg") },
        { url: require("../assets/a3.jpg") },

        ],
        value: '',
    };
},
methods: {
    onSearch(val) {
Toast(val);
    },
},
};
</script>
<style scoped >
.banner{
height: 60px;


}
</style>>