import shop from '../../api/shop'
const state = {
 all:[
   
 ]
}
const mutations = {
  setProducts(state,products){
    state.all = products
  },
  decreareQuantityInentory(state,{id}){
    const product = state.all.find(product => product.id == id)
    product.inventory--
  }
}
const actions = {
  getAllproducts({commit}){
    // console.log('get products')
    shop
        .getProducts(products =>{
          commit('setProducts',products)
        })
  }
}
const getters = {

}
export default{
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}