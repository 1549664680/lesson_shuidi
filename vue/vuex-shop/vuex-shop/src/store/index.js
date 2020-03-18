import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //未登录 ，全局共享状态
    userInfo:{
      uid:10001,
      username:'lan'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products
  }
})
