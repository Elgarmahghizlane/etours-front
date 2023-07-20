import Vue from 'vue'
import { Modal, Ripple, initTE } from 'tw-elements'

initTE({ Modal, Ripple })

Vue.component('tw-modal', Modal)
Vue.directive('ripple', Ripple)
