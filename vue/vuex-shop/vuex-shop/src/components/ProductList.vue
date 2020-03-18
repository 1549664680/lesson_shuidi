<template>
  <div><ul>
      <li v-for="product in products" :key="product.id">
       {{product.title}} - {{product.price}}
       <button 
        @click="addProductToCart(product)">
        add to cart
        </button>
      </li>
    </ul>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  created(){ // 比mounted 更早
   this.$store.dispatch('products/getAllproducts')
  },
  computed: mapState({
    products:(state) =>{
      return state.products.all
    }
  }),
  methods:mapActions('cart',[
    'addProductToCart'
  ])
}
</script>

<style>

</style>