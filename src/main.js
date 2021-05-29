import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/dist/tailwind.min.css"
import "./index.css"
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

