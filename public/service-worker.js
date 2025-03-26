self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
      ])
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})
