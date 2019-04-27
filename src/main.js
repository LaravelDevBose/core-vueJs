import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const bus = new Vue();

Vue.filter('to-uppercase',function(value){
    return value.toUpperCase();
});

Vue.filter('snippet', function (value) {
    return value.slice(0,15)+'...';
});

new Vue({
    render: h => h(App),
}).$mount('#app');

