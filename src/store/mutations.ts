import {
  SET_ALL_BREEDS_LIST,
  SET_RANDOM_DOGS_LIST,
  SET_MORE_RANDOM_DOGS_LIST,
  SET_FAVORITES,
  SET_IS_RANDOM_DOGS_ACTION,
  SET_BREED_DOGS_LIST,
  SET_MORE_BREED_DOGS_LIST,
  SET_IS_BREED_DOGS_ACTION
} from './mutation-types'
import { IState } from '../vuex-shim'

export default {
  [SET_ALL_BREEDS_LIST] (state: IState, allBreedsList: string[]) {
    state.allBreedsList = allBreedsList
  },
  [SET_RANDOM_DOGS_LIST] (state: IState, randomDogsList: string[]) {
    state.randomDogsList = randomDogsList
  },
  [SET_MORE_RANDOM_DOGS_LIST] (state: IState, randomDogsList: string[]) {
    state.randomDogsList = state.randomDogsList.concat(randomDogsList)
  },
  [SET_FAVORITES] (state: IState, favorites: string[]) {
    state.favorites = favorites
  },
  [SET_IS_RANDOM_DOGS_ACTION] (state: IState, isRandomDogsAction: boolean) {
    state.isRandomDogsAction = isRandomDogsAction
  },
  [SET_BREED_DOGS_LIST] (state: IState, breedDogsList: string[]) {
    state.breedDogsList = breedDogsList
  },
  [SET_MORE_BREED_DOGS_LIST] (state: IState, breedDogsList: string[]) {
    state.breedDogsList = state.breedDogsList.concat(breedDogsList)
  },
  [SET_IS_BREED_DOGS_ACTION] (state: IState, isBreedDogsAction: boolean) {
    state.isBreedDogsAction = isBreedDogsAction
  }
}
