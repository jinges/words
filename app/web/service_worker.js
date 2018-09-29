/*
 * @Author: 大明冯 
 * @Date: 2018-08-10 10:43:37 
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-08-17 14:38:26
 */

let CACHENAME = 'hello';
let filesToCaches = [
  'index.html',
  'manifest.json',
  'service_worker.js',
  'assets/js/app.min.js',
  'assets/css/app.min.css',
  'assets/img/01.jpg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHENAME).then(cache => {
      return cache.addAll(filesToCaches)
    })
  )
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return CACHENAME !== cacheName;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request).then(neResponse => {
          caches.open(CACHENAME).then(cache => {
            cache.put(event.request, neResponse)
          })
          return neResponse;
        })
        .catch(err => console.log(err))
    })
  )
});
