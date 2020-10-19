<template>
<van-tabbar v-model="active" route replace  active-color="#4fc08d" safe-area-inset-bottom=true>
<van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
<van-tabbar-item icon="chart-trending-o" replace to="/anchor">排行榜</van-tabbar-item>
<van-tabbar-item icon="bag-o" replace to="/store" badge="3">商品</van-tabbar-item>
<van-tabbar-item icon="cashier-o" replace to="/online">直播</van-tabbar-item>
<van-tabbar-item icon="contact" replace to="/user">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
    
};
</script>>