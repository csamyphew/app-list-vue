import Vue from 'vue'

export function getTopFreeApps(cb) {
  Vue.axios.get('/rss/topfreeapplications/limit=100/json').then((response) => {
    cb(response.data.feed.entry)
  })
}

export function getTopGrossingApps(cb) {
  Vue.axios.get('/rss/topgrossingapplications/limit=10/json').then((response) => {
    cb(response.data.feed.entry)
  })
}

export function getAppDetail(id, cb) {
  Vue.axios.get('/lookup?id=' + id).then((response) => {
    cb(response.data.results[0])
  })
}