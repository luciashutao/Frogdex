const CACHE = 'frogdex-v1';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data.js',
  './audio.js',
  './manifest.json',
  './images/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Jersey+15&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
