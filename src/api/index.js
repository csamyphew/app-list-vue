import Vue from 'vue'

export function getTopFreeApps(cb) {
  Vue.axios.get('https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/10/explicit.json​').then((response) => {
    cb(response.data.feed.entry)
  })
}

export function getTopGrossingApps(cb) {
  Vue.axios.get('https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json', { crossdomain: true }).then((response) => {
    cb(response.data.feed.entry)
  })
}

export function getAppDetail(id, cb) {
  Vue.axios.get('https://itunes.apple.com/hk/lookup?id=' + id).then((response) => {
    cb(response.data.results[0])
  })
}