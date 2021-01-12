import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

export interface IState {
  allBreedsList: string[],
  randomDogsList: string[],
  breedDogsList: string[],
  favorites: string[],
  isRandomDogsAction: boolean,
  isBreedDogsAction: boolean
}

export interface IActionsContext {
  state: IState,
  commit: Function,
  dispatch: Function
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IState>
  }
}
