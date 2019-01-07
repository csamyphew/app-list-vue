import * as api from '../api'

export const getTopFreeApps = ({commit}) => {
  commit('clearTopFreeList')
  api.getTopFreeApps((apps) => {
    commit('setTopFreeList', apps)
  })
}

export const getTopGrossingApps = ({commit}) => {
  commit('clearTopGrossingList')
  api.getTopGrossingApps((apps) => {
    commit('setTopGrossingList', apps)
  })
}

export const getAppDetail = ({commit},id) => {
  commit('clearAppDetail')
  api.getAppDetail(id,(app) => {
    commit('setAppDetail', app)
  })
}
