// service-worker.js

const CACHE_NAME = 'pwa-cache-v1' // 버전을 지정해 캐시 관리

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/faviconFiles/android-icon-36x36.png',
        '/faviconFiles/android-icon-48x48.png',
        '/bundle.js',
        '/manifest.json',
        '/faviconFiles/android-icon-192x192.png',
        '/faviconFiles/favicon.ico',
        '/assets/ChatLogo.svg',
        '/assets/CopyIcon.svg',
        '/assets/Copyright.svg',
        '/assets/DetailIcon.svg',
        '/assets/FooterLogo.svg',
        '/assets/idea.svg',
        '/assets/Landing1.svg',
        '/assets/Landing2.svg',
        '/assets/Landing3.svg',
        '/assets/Landing4.svg',
        '/assets/Landing5.svg',
        '/assets/Landing6.svg',
        '/assets/Landing7.svg',
        '/assets/LandingLastGra.svg',
        '/assets/LogoTitle.svg',
        '/assets/ReloadIcon.svg',
      ])
    })
  )
})

// Old caches를 제거하는 activate 이벤트 추가
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
