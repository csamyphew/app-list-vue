import Vue from 'vue'

export function getTopFreeApps(cb) {
  Vue.axios.get('/app/free').then((response) => {
    cb(response.data.feed.results)
  })
}

export function getTopGrossingApps(cb) {
  Vue.axios.get('/app/gross').then((response) => {
    cb(response.data.feed.results)
  })
}

export function getAppDetail(id, cb) {
  Vue.axios.get('/app/detail/' + id).then((response) => {
    cb(response.data.results[0])
  })
}