import * as api from '../api'

export const getTopFreeApps = ({commit}) => {
  commit('clearTopFreeList')
  api.getTopFreeApps((apps) => {
    commit('setTopFreeList', apps)
  })
}
