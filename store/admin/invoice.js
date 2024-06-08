// state
export const state = () => ({
  // invoices
  invoices: [],
  // page
  page: 1,
})
// mutations
export const mutations = {
  // mutation "SET_INVOICES_DATA"
  SET_INVOICES_DATA(state, payload) {
    // set value state "invoices"
    state.invoices = payload
  },
  // mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    // set value state "page"
    state.page = payload
  },
}
// actions
export const actions = {
  // get invoices data
  getInvoicesData({ commit, state }, payload) {
    // search
    const search = payload || ''
    // set promise
    return new Promise((resolve, reject) => {
      // fetching Rest API "/api/admin/invoices" with method "GET"
      this.$axios
        .get(`/api/admin/invoices?q=${search}&page=${state.page}`)
        // success
        .then((response) => {
          // commit ti mutation "SET_INVOICES_DATA"
          commit('SET_INVOICES_DATA', response.data.data)
          // resolve promise
          resolve()
        })
    })
  },
}
