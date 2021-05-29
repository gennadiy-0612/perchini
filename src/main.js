import Vue from 'vue'
import App from './App.vue'
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

