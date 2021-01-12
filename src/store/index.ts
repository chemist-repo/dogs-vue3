import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import { createStore } from 'vuex'
import { IState } from '../vuex-shim'

export default createStore<IState>({
  state,
  mutations,
  actions,
  getters
})

