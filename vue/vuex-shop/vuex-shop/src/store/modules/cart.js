import shop from "../../api/shop"

const state = {
 items:[],
 checkoutStatus:null
 }
 const mutations= {
  pushProductToCart(state,{id}){
    state.items.push({
      id,
      quantity:1
    })
  },
  incrementItemQuantity(state,{id}){
    const cartItem = state.items.find(item => item.id ===id)
    cartItem.quantity++
  },
  setCheckoutStatus(state,status){
    state.checkoutStatus = status
  },
  setCartitems(state,{items}){
    state.items = items
  }
 }
 const actions = {
  addProductToCart({commit},product){
    console.log(state.items)
    if(product.inventory > 0){
      const cartItem = state.items.find(item => item.id === product.id)
      console.log(cartItem)
      if(!cartItem){
        commit('pushProductToCart',{id:product.id})
      }else{
        commit('incrementItemQuantity',cartItem)
      }
      commit('products/decreareQuantityInentory',{id:product.id},{root:true})
    }
    // return state.items.map(({id,quantity}) =>{
    //   const product = rootState.products.all.find(
    //     product => product.id === id
    //   )
    //   return {
    //     title:products.title,
    //     price:products.price
    //   }

    // })
  },
  checkout({commit},products){
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus',null)
    commit('setCartitems',{items:[]})
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus','successful'),
      () => {
        commit('setCheckoutStatus','failed'),
        commit('setCartitems',{items:savedCartItems})
      }
    )
  }
 }
 const getters = {
  cartTotalPrice(state,getters){
    return getters.cartProducts.reduce((total ,product) => {
      return total + product.price * product.quantity
    },0)
  },
  cartProducts (state,getters,rootState){
    return state.items.map(({id,quantity}) =>{
      const product = rootState.products.all.find(
        product => product.id === id
        )
      return {
        title:product.title,
        price:product.price,
        quantity:quantity
      }
    })
  }
}
 export default{
   namespaced:true,
   state,
   mutations,
   actions,
   getters
 }