const staticCacheName = 'my-pwa-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/assets/index-BR2vkyMe.js',
  '/assets/index-lI9HEux2.css',
  '/favicon.ico',
  '/logo.png',
  '/manifest.json'
];

// Cache static assets on install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

// Serve cached content when offline or serve fallback for specific resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(cachedResponse => {
        return cachedResponse || fetch(event.request)
          .catch(() => {  // Network error handling
            if (event.request.url.endsWith('/manifest.json')) {
              // Optional: Serve a fallback manifest for development (comment out for production)
              // return caches.match('/fallback-manifest.json');
              return new Response('{"short_name": "Track Day"}'); // Minimal manifest for offline functionality
            } else {
              // Serve the offline page for other failed fetches
              // return caches.match('/offline.html');
            }
          });
      })
  );
});