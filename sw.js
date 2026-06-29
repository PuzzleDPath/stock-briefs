// Minimal service worker. Registered ONLY so the browser treats the site as an
// installable PWA (Add to Home Screen). It intentionally does NOT cache anything
// — this is an online-only app, so every request goes straight to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* no respondWith → default network fetch */ });
