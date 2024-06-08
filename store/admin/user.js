// state
export const state = () => ({
  // users
  users: [],
  // page
  page: 1,
})
// mutations
export const mutations = {
  // mutation "SET_USERS_DATA"
  SET_USERS_DATA(state, payload) {
    // set value state "users"
    state.users = payload
  },
  // mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    // set value state "page"
    state.page = payload
  },
}
// actions
export const actions = {
  // get users data
  getUsersData({ commit, state }, payload) {
    // search
    const search = payload || ''
    // set promise
    return new Promise((resolve, reject) => {
      // fetching Rest API "/api/admin/users" with method "GET"
      this.$axios
        .get(`/api/admin/users?q=${search}&page=${state.page}`)
        // success
        .then((response) => {
          // commit ti mutation "SET_USERS_DATA"
          commit('SET_USERS_DATA', response.data.data)
          // resolve promise
          resolve()
        })
    })
  },
}
