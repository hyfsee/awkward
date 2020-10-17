import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import { Tabbar, TabbarItem } from 'vant'
import "lib-flexible/flexible"
import Fastclick from 'fastclick'
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Tabbar)
Vue.use(TabbarItem)
Fastclick.attach(document.body)
new Vue({
  el: '#app',
  router,
  components:{App},
  render: h => h(App),
}).$mount('#app')
