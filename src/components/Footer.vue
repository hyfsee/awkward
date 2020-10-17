<template>
<van-tabbar v-model="active" route replace safe-area-inset-bottom="true" active-color="#4fc08d">
<van-tabbar-item icon="wap-home-o" replace to="/">首页</van-tabbar-item>
<van-tabbar-item icon="chart-trending-o" replace to="/anchor">排行榜</van-tabbar-item>
<van-tabbar-item icon="bag-o" replace to="/store" badge="3">商品</van-tabbar-item>
<van-tabbar-item icon="cashier-o" replace to="/online">直播</van-tabbar-item>
<van-tabbar-item icon="contact" replace to="/user">我的</van-tabbar-item>
</van-tabbar>

</template>
<script>
import { Notify } from 'vant';

export default {
    methods: {
    onChange(index) {
    Notify({ type: 'primary', message: index });
    },
    },
};
</script>>