// state
export const state = () => ({
  // categories
  categories: [],
  // page
  page: 1,
})
// mutations
export const mutations = {
  // mutation "SET_CATEGORIES_DATA"
  SET_CATEGORIES_DATA(state, payload) {
    // set value state "categories"
    state.categories = payload
  },
  // mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    // set value state "page"
    state.page = payload
  },
}
// actions
export const actions = {
  // get categories data
  getCategoriesData({ commit, state }, payload) {
    // search
    let search = payload ? payload : ''
    // set promise
    return new Promise((resolve, reject) => {
      // fetching Rest API "/api/admin/categories" with method
      'GET'
      this.$axios
        .get(`/api/admin/categories?q=${search}&page=${state.page}`)
        // success
        .then((response) => {
          // commit ti mutation "SET_CATEGORIES_DATA"
          commit('SET_CATEGORIES_DATA', response.data.data)
          // resolve promise
          resolve()
        })
    })
  },
  // store category
  storeCategory({ dispatch, commit }, payload) {
    // set promise
    return new Promise((resolve, reject) => {
      // store to Rest API "/api/admin/categories" with method
      'POST'
      this.$axios
        .post('/api/admin/categories', payload)
        // success
        .then(() => {
          // dispatch action "getCategoriesData"
          dispatch('getCategoriesData')
          // resolve promise
          resolve()
        })
        // error
        .catch((error) => {
          reject(error)
        })
    })
  },
}
