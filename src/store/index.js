import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tagList: [],
  breadcrumbList: []
}
const getters = {
  tagList (state) {
    return state.tagList
  },
  breadcrumbList (state) {
    return state.breadcrumbList
  }
}
const mutations = {
  updateTagList (state, payload) {
    state.tagList = payload
  },
  updateBreadcrumbList (state, payload) {
    state.breadcrumbList = payload
  }
}
const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
