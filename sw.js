self.addEventListener('install',e=>{
    e.waitUntill(caches.open('pwa-cache').then(c=>c.addAll(['/','/index.html'])))
})

self.addEventListener('fetch',e=>{
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)))
})