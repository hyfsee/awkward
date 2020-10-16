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

</div> 
</template>
<script>
import { Toast } from 'vant';
export default {
data() {
    return {value: '',
    };
},
methods: {
    onSearch(val) {
Toast(val);
    },
},
};
</script>>