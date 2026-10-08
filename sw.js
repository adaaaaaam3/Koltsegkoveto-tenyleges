// Költségkövető service worker – offline használat
// Frissítésnél növeld a verziószámot, hogy a régi gyorsítótár törlődjön.
var CACHE='koltsegkoveto-v2';
var SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
// hálózat először (mindig friss), offline esetén gyorsítótár
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  e.respondWith(
    fetch(req).then(function(res){
      if(res&&res.ok){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(req,copy)})}
      return res;
    }).catch(function(){
      return caches.match(req).then(function(hit){
        return hit||(req.mode==='navigate'?caches.match('./index.html'):Response.error());
      });
    })
  );
});
