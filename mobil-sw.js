// KBD CC Mobil — service worker (v1.0, 06.10.2026).
// Registrert med scope "./mobil", så den styrer KUN mobil*-filene — aldri
// dashbordet (KBD_Inntektsoversikt.html) i samme mappe.
// Strategi: nettverk først for selve siden (nye versjoner kommer med en gang
// man er på nett), cache som reserve uten nett. Graph/SharePoint-data og
// innlogging caches ALDRI her.
const CACHE='kbd-cc-mobil-v2';
const SKALL=['mobil.html','mobil.webmanifest','mobil-ikon-192.png','mobil-ikon-180.png','mobil-logo-hvit.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SKALL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('kbd-cc-mobil-')&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin||!/\/mobil[^/]*$/.test(url.pathname))return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const k=r.clone();caches.open(CACHE).then(c=>c.put(e.request,k));}return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
