export const entryCount = (state) => {
  return (num) => {
    return state.apps.length + num
  }
}
