/**
 * OSSim Mobile PWA — High-Performance Offline Service Worker
 * (C) Copyright Sivraj P. All rights reserved.
 */

const CACHE_NAME = 'ossim-pwa-v1.0.1';

const PRECACHE_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './js/ossim_bundle.js',
    './js/pwa-register.js',
    './css/theme.css',
    './css/desktop.css',
    './css/visualizers.css',
    './css/mobile.css',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-192.png',
    './icons/icon-maskable-512.png',
    './icons/apple-touch-icon.png',
    './icons/favicon.ico'
];

// Install: Cache all critical assets for full offline usage
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[OSSim SW] Pre-caching offline simulation assets...');
            return cache.addAll(PRECACHE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate: Purge old cache versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('[OSSim SW] Purging obsolete cache:', name);
                        return caches.delete(name);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch: Cache-First strategy with Stale-While-Revalidate fallback
self.addEventListener('fetch', (event) => {
    // Only handle GET requests for our app
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Fetch in background to update cache (Stale-While-Revalidate)
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse);
                        });
                    }
                }).catch(() => {
                    // Network unavailable, running purely offline
                });
                return cachedResponse;
            }

            // Not in cache: fetch from network and store
            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            }).catch(() => {
                // Offline fallback for HTML navigation
                if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
