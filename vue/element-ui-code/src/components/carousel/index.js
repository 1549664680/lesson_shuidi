import Carousel from './src/main.vue';
// install 概念 
Carousel.install = function(Vue) {
  Vue.component(Carousel.name, Carousel)
}

export default Carousel; // 