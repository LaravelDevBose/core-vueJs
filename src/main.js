import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var one = new Vue({
  render: h => h(App),
}).$mount('#app');


var Two = new Vue({
  render: h => h(App),
}).$mount('#app-tow');
