import Vue from 'vue'

export function getTopFreeApps (cb) {
  Vue.axios.get('/rss/topfreeapplications/limit=100/json').then((response) => {
    console.log(response.data)
    cb(response.data.feed.entry)
  })
}
