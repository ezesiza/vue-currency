import Vue from 'vue'
import Vuex from 'vuex'

import listStore from './module/listStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    listStore
  }
})
