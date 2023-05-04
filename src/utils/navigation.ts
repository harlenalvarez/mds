export const navigateTo = (path: string) => {
  history.pushState(null, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
