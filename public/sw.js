const CACHE_NAME = 'ws-cache';
const urlsToCache = [
    '/',
    '/mains.js'
]


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1')
        .then(function(cache) {
            //console.log('open cache');
            return cache.addAll(urlsToCache)
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
    event.repondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
})

