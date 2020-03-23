import _ from 'lodash'

export const filterFreeApps = (state) => {
  return (keyword) => {
    var result = state.apps
    if (!(_.isEmpty(keyword))) {
      result = _.filter(state.apps, function (item) {
        var match = ((_.includes(item.name.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.author.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.summary.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.category.toLowerCase(), keyword.toLowerCase())))
        return match
      })
    }
    return result
  }
}

export const filterRecommendationApps = (state) => {
  return (keyword) => {
    var result = state.recommendations
    if (!(_.isEmpty(keyword))) {
      result = _.filter(state.recommendations, function (item) {
        var match = ((_.includes(item.name.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.author.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.summary.toLowerCase(), keyword.toLowerCase())) || (_.includes(item.category.toLowerCase(), keyword.toLowerCase())))
        return match
      })
    }
    return result
  }
}
