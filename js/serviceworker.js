if ('serviceWorker' in navigator) {
    // ServiceWorker を登録
    navigator.serviceWorker.register('serviceworker.js',
    {
      scope: '/'
    })
};