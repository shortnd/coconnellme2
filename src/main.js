// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "../static/layout.css"

import { plugin } from "vue-function-api";


export default function (Vue, { router, head, isClient }) {
  Vue.use(plugin);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
