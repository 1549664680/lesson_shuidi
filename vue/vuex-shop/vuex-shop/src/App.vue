<template>
  <div id="app">
    {{this.$store.state.userInfo}}
    <products/>
    <cart/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    'products':ProductList,
    'cart':ShoppingCart
  },
  mounted(){
    // this.dispatch
    // console.log(this.$store.state.products.all);
    // console.log(this.$store.state.cart);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
