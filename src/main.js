window.$docsify = {
  name: 'Altertek Documentation',
  repo: 'https://github.com/altertek/docs.altertek.org',
  nameLink: '/',
  coverpage: false,
  loadSidebar: true,
  subMaxLevel: 2,
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
  themeColor: '#3566b9',
}

if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('sw.js')
}
