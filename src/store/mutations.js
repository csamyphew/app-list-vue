export const setTopFreeList = (state, data) => {
  var items = data.map((app, index) => {
    return {
      'rank': index + 1,
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
