import Vue from 'vue'
import App from './App.vue'
import mpvueRichText from './lib/index.js'

Vue.use(mpvueRichText)

new Vue({
  el: '#app',
  render: h => h(App)
})
