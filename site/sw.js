/* Сгенерировано tools/gen-sw.js. Офлайн-кэш веб-версии (iPhone, браузер). В APK не используется. */
const CACHE='kristallo-e361ed929d';
const FILES=["./","css/app.css","css/fonts.css","fonts/golos-text-cyrillic-400-normal.woff2","fonts/golos-text-cyrillic-500-normal.woff2","fonts/golos-text-cyrillic-600-normal.woff2","fonts/golos-text-latin-400-normal.woff2","fonts/golos-text-latin-500-normal.woff2","fonts/golos-text-latin-600-normal.woff2","fonts/golos-text-latin-ext-400-normal.woff2","fonts/golos-text-latin-ext-500-normal.woff2","fonts/golos-text-latin-ext-600-normal.woff2","fonts/jetbrains-mono-cyrillic-400-normal.woff2","fonts/jetbrains-mono-cyrillic-600-normal.woff2","fonts/jetbrains-mono-latin-400-normal.woff2","fonts/jetbrains-mono-latin-600-normal.woff2","fonts/jetbrains-mono-latin-ext-400-normal.woff2","fonts/jetbrains-mono-latin-ext-600-normal.woff2","fonts/literata-cyrillic-500-normal.woff2","fonts/literata-cyrillic-700-normal.woff2","fonts/literata-latin-500-normal.woff2","fonts/literata-latin-700-normal.woff2","fonts/literata-latin-ext-500-normal.woff2","fonts/literata-latin-ext-700-normal.woff2","icons/apple-touch-icon.png","icons/favicon-64.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","js/app.68e85bf1f8.js","manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  if(r.mode==='navigate'){ // страница: сначала сеть, без сети — из кэша
    e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put('./',c));return res;}).catch(()=>caches.match('./')));return;}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c));}return res;})));
});
