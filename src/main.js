import Vue from 'vue'
import App from './App.vue'
import Photo from './Photo.vue'
import Desc from './DescriptPrice'

Vue.config.productionTip = false

new Vue({
    render: h => h(App, Photo, Desc),
}).$mount('#app')

