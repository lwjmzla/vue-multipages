// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import pay from './pay.vue'
import 'babel-polyfill'
import 'common/reset.css'
// import 'mock/mockServer.js' // 到时还要弄个DEV的时候才加载，生产模式 就不要。就真实数据  接口参数 也要看具体情况的处理

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(pay)
  // components: { pay },
  // template: '<pay/>'
})
