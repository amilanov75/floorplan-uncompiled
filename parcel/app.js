`import Vue from 'vue'
import App from './components/Floorplan.vue'
import router from './router'

import uibuilder from './../../../node_modules/node-red-contrib-uibuilder/nodes/src/uibuilderfe.js'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVue } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/solid.css";

// Vue.use(uibuilder)
window.uibuilder = uibuilder;
 
var app = new Vue({
    el: '#app',
  // runtimerCompiler: true, 
    router,
  //  store,
    render: h => h(App)
})
`803
