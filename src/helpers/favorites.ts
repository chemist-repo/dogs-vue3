import store from '@/store'
import ls from '@/helpers/ls'

export function getFavorites () {
  let favorites = []
  if (store.state.favorites && store.state.favorites.length) {
    favorites = store.state.favorites
  } else {
    favorites = ls.get('favorites') || []

    if (favorites.length) {
      store.commit('SET_FAVORITES', favorites)
    }
  }

  return favorites
}

export function setFavorite (url: string) {
  const favorites = getFavorites()
  let __favorites__ = []

  if (favorites.includes(url)) {
    __favorites__ = favorites.filter((favorite: string) => favorite !== url)
  } else {
    __favorites__ = [...favorites, url]
  }

  store.commit('SET_FAVORITES', __favorites__)
  ls.set('favorites', __favorites__)
}

export default {
  getFavorites,
  setFavorite
}
