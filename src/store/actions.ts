import axios from 'axios'
import { get } from 'ts-object-path'

import {
  SET_ALL_BREEDS_LIST,
  SET_RANDOM_DOGS_LIST,
  SET_MORE_RANDOM_DOGS_LIST,
  SET_IS_RANDOM_DOGS_ACTION,
  SET_BREED_DOGS_LIST,
  SET_MORE_BREED_DOGS_LIST,
  SET_IS_BREED_DOGS_ACTION
} from './mutation-types'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL || ''
})

import { IActionsContext } from '../vuex-shim'

interface IDataAllBreedsList {
  data: {
    message: {}
  }
}

interface IDataList {
  data: {
    message: []
  }
}

export default {
  async getAllBreedsList ({ commit }: IActionsContext) {
    try {
      const { data }: IDataAllBreedsList = await $axios({
        url: '/breeds/list/all',
        method: 'GET'
      })
      const allBreedsList = Object.keys(get(data, ({ message }) => message, {}))
      commit(SET_ALL_BREEDS_LIST, allBreedsList)
      return Promise.resolve(allBreedsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getRandomDogsList ({ commit }: IActionsContext) {
    try {
      const { data }: IDataList = await $axios({
        url: '/breeds/image/random/20',
        method: 'GET'
      })
      const randomDogsList = get(data, ({ message }) => message, [])
      commit(SET_RANDOM_DOGS_LIST, randomDogsList)
      return Promise.resolve(randomDogsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getMoreRandomDogsList ({ commit }: IActionsContext) {
    commit(SET_IS_RANDOM_DOGS_ACTION, true)
    try {
      const { data }: IDataList = await $axios({
        url: '/breeds/image/random/20',
        method: 'GET'
      })
      const randomBreedsDogsList = get(data, ({ message }) => message, [])
      commit(SET_MORE_RANDOM_DOGS_LIST, randomBreedsDogsList)
      return Promise.resolve(randomBreedsDogsList)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      commit(SET_IS_RANDOM_DOGS_ACTION, false)
    }
  },
  async getBreedRandomDogsList ({ commit }: IActionsContext, breed: string) {
    try {
      const { data }: IDataList = await $axios({
        url: `/breed/${breed}/images/random/20`,
        method: 'GET'
      })
      const breedDogsList = get(data, ({ message }) => message, [])
      commit(SET_BREED_DOGS_LIST, breedDogsList)
      return Promise.resolve(breedDogsList)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async getMoreBreedRandomDogsList ({ commit }: IActionsContext, breed: string) {
    commit(SET_IS_BREED_DOGS_ACTION, true)
    try {
      const { data }: IDataList = await $axios({
        url: `/breed/${breed}/images/random/20`,
        method: 'GET'
      })
      const breedDogsList = get(data, ({ message }) => message, [])
      commit(SET_MORE_BREED_DOGS_LIST, breedDogsList)
      return Promise.resolve(breedDogsList)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      commit(SET_IS_BREED_DOGS_ACTION, false)
    }
  }
}
