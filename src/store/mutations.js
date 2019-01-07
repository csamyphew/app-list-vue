export const setTopFreeList = (state, data) => {
  var items = data.map((app, index) => {
    return {
      'rank': index + 1,
      'id': app.id.attributes['im:id'],
      'name': app['im:name'].label,
      'icon': app['im:image'][2].label,
      'author': app['im:artist'].label,
      'summary': app.summary.label,
      'category': app.category.attributes.label,
      'category_term': app.category.attributes.term
    }
  })
  state.apps = items
}
export const clearTopFreeList = (state) => {
  state.apps = []
}

export const setTopGrossingList = (state, data) => {
  var items = data.map((app, index) => {
    return {
      'rank': index + 1,
      'id': app.id.attributes['im:id'],
      'name': app['im:name'].label,
      'icon': app['im:image'][2].label,
      'author': app['im:artist'].label,
      'summary': app.summary.label,
      'category': app.category.attributes.label,
      'category_term': app.category.attributes.term
    }
  })
  state.recommendations = items
}
export const clearTopGrossingList = (state) => {
  state.recommendations = []
}

export const setAppDetail = (state, item) => {
  state.app = {
    'id': item.trackId,
    'icon': item.artworkUrl512,
    'url': item.trackViewUrl,
    'name': item.trackName,
    'author': item.artistName,
    'price': item.formattedPrice,
    'rating': item.averageUserRating || 0,
    'rating_count': item.userRatingCount || 0,
    'advisory': item.contentAdvisoryRating,
    'images': item.screenshotUrls,
    'desc': item.description,
    'category': item.genres[0],
    'version': item.version,
    'release_date': item.currentVersionReleaseDate
  }
}
export const clearAppDetail = (state) => {
  state.app = {}
}
