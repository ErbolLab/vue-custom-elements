import Vue from 'vue'

// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)

// import and register your component(s)
import StarRating from 'vue-dynamic-star-rating'
Vue.customElement('star-rating', StarRating)
