import axios from 'axios'
const baseUrl = ''
const newList = []

const state = {
  listData: [],
  favoriteList: []
}

const getters = {
  getAllLists: (state) => state.listData,
  getFavoriteList: (state) => state.favoriteList,
  listStoreError: (state) => state.listStoreError
}

const actions = {
  getAllLists ({ commit }) {
    axios
      .get(baseUrl)
      .then((result) => {
        commit('getAllLists', {
          item: result.data
        })
      })
      .catch((e) => {
        commit('listStoreError', e)
      })
  },
  getFavoriteList ({ commit }) {
    commit('getFavoriteList')
  },

  addCurrencyToList ({ commit }, currency) {
    commit('addCurrencyToList', {
      currency
    })
  },
  removeCurrencyFromList ({ commit }, currency) {
    commit('removeCurrencyFromList', {
      currency
    })
  },
  deleteAllFavorites ({ commit }) {
    commit('deleteAllFavorites')
  }
}

const mutations = {
  getAllLists (state, items) {
    items.item.data.map((coin) => {
      state.listData = coin.rates
    })
  },
  addCurrencyToList (state, item) {
    newList.push(item.currency.currency)
    state.favoriteList = [...newList]
  },
  removeCurrencyFromList (state, item) {
    const currencyToRemove = newList.find(
      (data) => data.code === item.currency.currency.code
    )
    newList.splice(newList.indexOf(currencyToRemove), 1)
    state.favoriteList = [...newList]
  },
  deleteAllFavorites (state) {
    newList.length = 0
    state.favoriteList = [...newList]
  },
  listStoreError (state) {
    state.listStoreError = 'Server Error, failed!'
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
